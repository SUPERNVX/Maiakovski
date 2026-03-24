import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef, useState, useMemo } from 'react';
import { getAssetPath } from '../../lib/utils';

interface PosterItem {
  id: string; image: string; title: string; officialName: string; meaning: string; purpose: string; flag: 'ussr' | 'usa';
}

const posters: PosterItem[] = [
  { id: 'atraves', image: getAssetPath('/URSS/Atrav%C3%A9s%20dos%20Mundos%20e%20Eras.webp'), title: 'Atraves dos Mundos e Eras', officialName: 'Через миры и века', meaning: 'Celebra o triunfo tecnologico sovietico. O rastro branco para as estrelas sugere que o comunismo e o destino da humanidade.', purpose: 'Mostrar a URSS como vanguarda do progresso cientifico e exploracao espacial.', flag: 'ussr' },
  { id: 'kolkhoz', image: getAssetPath('/URSS/Venha%20se%20juntar%20a%20n%C3%B3s%20no%20Kolkhoz!.webp'), title: 'Venha se juntar no Kolkhoz!', officialName: 'Иди, товарищ, к нам в колхоз!', meaning: 'Coletivizacao Agricola. Camponeses sorridentes operando maquinario moderno.', purpose: 'Convencer que o trabalho coletivo era o caminho para abundancia.', flag: 'ussr' },
  { id: 'reptil', image: getAssetPath('/URSS/Esmague%20o%20R%C3%A9ptil%20Fascista!.webp'), title: 'Esmague o Reptil Fascista!', officialName: 'Бей фашистского гада!', meaning: 'Cartaz da Grande Guerra Patriotica. O reptil preto e a Alemanha Nazista esmagada pelo Exercito Sovietico.', purpose: 'Desumanizar o inimigo e mobilizar a defesa da patria.', flag: 'ussr' },
  { id: 'escravidoa', image: getAssetPath('/URSS/Abaixo%20a%20Escravid%C3%A3o%20Dom%C3%A9stica!.webp'), title: 'Abaixo a Escravidao Domestica!', officialName: 'Долой кухонное рабство!', meaning: 'Emancipacao feminina. Mulher sai da cozinha para um mundo moderno.', purpose: 'Libertar a mulher do trabalho domestico opressor.', flag: 'ussr' },
  { id: 'eletrificacao', image: getAssetPath('/URSS/Sovietes%20e%20Eletrifica%C3%A7%C3%A3o%20s%C3%A3o%20a%20Base%20do%20Novo%20Mundo.webp'), title: 'Sovietes e Eletrificacao', officialName: 'Советы и электрификация', meaning: 'Frase de Lenin: O Comunismo e o poder sovietico mais a eletrificacao.', purpose: 'A eletricidade como simbolo da modernidade industrial.', flag: 'ussr' },
  { id: 'vsya', image: getAssetPath('/URSS/Todo%20o%20Poder%20aos%20Sovietes!%20Paz%20aos%20Povos.webp'), title: 'Todo o Poder aos Sovietes!', officialName: 'Вся власть Советам!', meaning: 'Teses de Abril de Lenin. Paz aos povos, Terra aos camponeses, Fabricas aos operarios.', purpose: 'Consolidar apoio popular apos a Revolucao de 1917.', flag: 'ussr' },
  { id: 'cinema', image: getAssetPath('/URSS/Cinema%20%C3%A9%20a%20mais%20importante%20das%20artes.webp'), title: 'Cinema e a mais importante das artes', officialName: 'Кино — важнейшее из искусств', meaning: 'Cineasta, remetendo a vanguarda russa e Dziga Vertov.', purpose: 'Celebrar a educacao das massas pelo cinema.', flag: 'ussr' },
  { id: 'paz', image: getAssetPath('/EUA/Em%20paz,%20servimos%20para%20prevenir%20a%20guerra.webp'), title: 'Em paz, servimos para prevenir a guerra', officialName: 'In Peace, We Serve to Prevent War', meaning: 'Guerra Fria. Justifica presenca militar global dos EUA contra o perigo comunista.', purpose: 'Legitimar os EUA como policia do mundo e a contencao do comunismo.', flag: 'usa' },
  { id: 'fbi', image: getAssetPath('/EUA/Eu%20fui%20um%20Comunista%20para%20o%20FBI.webp'), title: 'Eu fui um Comunista para o FBI', officialName: 'I Was a Communist for the FBI', meaning: 'Macarthismo. Comunismo como algo infiltrado e sombrio.', purpose: 'Gerar medo e paranoia, pintando comunistas como traidores.', flag: 'usa' },
  { id: 'rosie', image: getAssetPath('/EUA/N%C3%B3s%20conseguimos!.webp'), title: 'Nos conseguimos! (Rosie)', officialName: 'We Can Do It!', meaning: 'Icone feminista WWII. Incentivar mulheres nas fabricas de armamentos.', purpose: 'Mobilizar forca de trabalho feminina para producao de guerra.', flag: 'usa' },
  { id: 'unclesam', image: getAssetPath('/EUA/Eu%20quero%20voc%C3%AA%20para%20o%20Ex%C3%A9rcito%20dos%20EUA.webp'), title: 'Eu quero voce para o Exercito', officialName: 'Uncle Sam: I Want You for U.S. Army', meaning: 'Cartaz mais iconico de recrutamento da historia.', purpose: 'Recrutamento direto como responsabilidade individual.', flag: 'usa' },
  { id: 'cocacola', image: getAssetPath('/EUA/O%20que%20eu%20quero%20%C3%A9%20uma%20Coca.webp'), title: 'O que eu quero e uma Coca', officialName: 'What I want is a Coke', meaning: 'Mistura propaganda de guerra com consumismo. Soldado luta pelo direito de consumir.', purpose: 'Associar marcas ao patriotismo e capitalismo como vitoria.', flag: 'usa' },
];
const symbolData = { image: getAssetPath('/URSS/Simbolo%20URSS.webp'),
  title: 'Foice e Martelo', officialName: 'Серп и Молот (Serp i Molot)',
  meaning: 'Alianca entre campesinato (foice) e proletariado industrial (martelo). A foice colhe o grao, o martelo forja o aco. Juntos constroem o novo mundo.',
  purpose: 'Simbolizar a uniao das duas classes trabalhadoras. Um dos icones mais reconheciveis do seculo XX.'
};

const StickyScroll = forwardRef<HTMLElement>((_, ref) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const ussrLeft = useMemo(() => posters.filter(p => p.flag === 'ussr' && !['atraves', 'reptil'].includes(p.id)), []);
  const usaRight = useMemo(() => posters.filter(p => p.flag === 'usa' && !['unclesam', 'rosie'].includes(p.id)), []);

  const overlayMap = useMemo(() => {
    const map = new Map<string, PosterItem | typeof symbolData>();
    posters.forEach(p => map.set(p.id, p));
    map.set('symbol', symbolData);
    return map;
  }, []);

  const overlay = expanded ? overlayMap.get(expanded) || null : null;

  return (
    <main ref={ref} className="relative">
      <AnimatePresence>
        {expanded && overlay && (
          <motion.div key="ov" className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setExpanded(null)}>
            <motion.div className="absolute inset-4 md:inset-8 lg:inset-16 flex flex-col md:flex-row gap-6 md:gap-12 items-center" onClick={e => e.stopPropagation()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="w-full md:w-1/2 h-1/2 md:h-full rounded-lg overflow-hidden">
                <img src={overlay.image} alt={overlay.title} loading="eager" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <motion.div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center overflow-y-auto pr-4" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.4 }}>
                <h3 className="text-display text-display-sm text-parchment mb-2">{overlay.title}</h3>
                <p className="text-label text-gold mb-6">{overlay.officialName}</p>
                <div className="space-y-4">
                  <div><p className="text-label text-parchment/40 mb-2">SIGNIFICADO</p><p className="text-body text-parchment/70">{overlay.meaning}</p></div>
                  <div><p className="text-label text-parchment/40 mb-2">INTUITO</p><p className="text-body text-parchment/70">{overlay.purpose}</p></div>
                </div>
                <button onClick={() => setExpanded(null)} className="mt-8 text-label text-umber hover:text-parchment transition-colors self-start cursor-pointer">FECHAR</button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="w-full px-4 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 grid gap-4">
            {ussrLeft.map((p) => (
              <figure key={p.id} className="group relative cursor-pointer" style={{ contentVisibility: "auto", containIntrinsicSize: "300px 424px" }} onClick={() => setExpanded(p.id)}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img src={p.image} alt={p.title} loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-label text-parchment/70 block">CLIQUE PARA EXPANDIR</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-soviet/90 text-parchment text-[0.6rem] px-2 py-0.5 rounded font-mono tracking-wider">URSS</div>
                </div>
                <figcaption className="mt-2 text-xs text-parchment/50">{p.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="col-span-12 md:col-span-4 md:sticky md:top-6 md:h-[calc(100vh-48px)] grid grid-cols-2 gap-4">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group" style={{ contentVisibility: "auto", containIntrinsicSize: "150px 200px" }} onClick={() => setExpanded('atraves')}>
              <img src={getAssetPath("/URSS/Atrav%C3%A9s%20dos%20Mundos%20e%20Eras.webp")} alt="Atraves dos Mundos" loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><span className="text-display text-xs text-parchment block">Atraves dos Mundos</span><span className="text-label text-parchment/40 mt-1 block">Era Espacial URSS</span></div>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group" style={{ contentVisibility: "auto", containIntrinsicSize: "150px 200px" }} onClick={() => setExpanded('unclesam')}>
              <img src={getAssetPath("/EUA/Eu%20quero%20voc%C3%AA%20para%20o%20Ex%C3%A9rcito%20dos%20EUA.webp")} alt="Uncle Sam" loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><span className="text-display text-xs text-parchment block">I Want You</span><span className="text-label text-parchment/40 mt-1 block">Recrutamento EUA</span></div>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group" style={{ contentVisibility: "auto", containIntrinsicSize: "150px 200px" }} onClick={() => setExpanded('reptil')}>
              <img src={getAssetPath("/URSS/Esmague%20o%20R%C3%A9ptil%20Fascista!.webp")} alt="Esmague o Reptil" loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><span className="text-display text-xs text-parchment block">Esmague o Reptil</span><span className="text-label text-parchment/40 mt-1 block">Grande Guerra Patriotica</span></div>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group" style={{ contentVisibility: "auto", containIntrinsicSize: "150px 200px" }} onClick={() => setExpanded('rosie')}>
              <img src={getAssetPath("/EUA/N%C3%B3s%20conseguimos!.webp")} alt="Rosie" loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><span className="text-display text-xs text-parchment block">We Can Do It!</span><span className="text-label text-parchment/40 mt-1 block">Rosie the Riveter</span></div>
            </figure>
          </div>

          <div className="col-span-12 md:col-span-4 grid gap-4">
            {usaRight.map((p) => (
              <figure key={p.id} className="group relative cursor-pointer" style={{ contentVisibility: "auto", containIntrinsicSize: "300px 424px" }} onClick={() => setExpanded(p.id)}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img src={p.image} alt={p.title} loading="lazy" decoding="async" width={300} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-label text-parchment/70 block">CLIQUE PARA EXPANDIR</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-usa/90 text-parchment text-[0.6rem] px-2 py-0.5 rounded font-mono tracking-wider">EUA</div>
                </div>
                <figcaption className="mt-2 text-xs text-parchment/50">{p.title}</figcaption>
              </figure>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
});
StickyScroll.displayName = 'StickyScroll';
export default StickyScroll;
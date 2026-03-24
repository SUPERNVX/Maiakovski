import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface RostaItem {
  id: string;
  image: string;
  title: string;
  officialName: string;
  meaning: string;
  purpose: string;
}

const rostaPosters: RostaItem[] = [
  {
    id: "frente-batalha",
    image: "/ROSTA/O%20que%20voc%C3%AA%20fez%20pela%20frente%20de%20batalha.webp",
    title: "O que você fez pela frente de batalha?",
    officialName: "А что ты сделал для фронта? — ROSTA nº 540",
    meaning: "Um cartaz de cobrança direta. Ele usa a técnica de repetição visual para mostrar diferentes ações (trabalho na fábrica, colheita, doação) que contribuem para o exército. Note o dedo apontado, uma técnica de engajamento que os EUA também usariam no Tio Sam.",
    purpose: "Gerar um senso de responsabilidade individual no cidadão comum, reforçando que o esforço de guerra dependia de quem ficou na retaguarda, não apenas dos soldados.",
  },
  {
    id: "historia-operario",
    image: "/ROSTA/Hist%C3%B3ria%20de%20um%20certo%20oper%C3%A1rio.webp",
    title: "História de um certo operário",
    officialName: "История про одного рабочего",
    meaning: "Este é um exemplo perfeito de narrativa visual. Ele conta a história de um operário que, ao se conscientizar politicamente, deixa de ser explorado e passa a ser o protagonista da construção do país.",
    purpose: "Educar e politizar a classe trabalhadora de forma didática e bem-humorada, usando a estrutura de \"antes e depois\" para mostrar as vantagens do regime soviético.",
  },
  {
    id: "nao-beba",
    image: "/ROSTA/N%C3%A3o%20beba.webp",
    title: "Não beba! (O álcool é o inimigo da produção)",
    officialName: "Не пей!",
    meaning: "Um dos temas recorrentes nas ROSTA era o combate ao alcoolismo, visto como um vício burguês que atrapalhava a produtividade e a saúde do novo homem soviético. O design é agressivo e direto.",
    purpose: "Higienismo e disciplina. O Estado precisava de trabalhadores sóbrios e eficientes para a reconstrução econômica após a guerra civil.",
  },
  {
    id: "campones-mestre",
    image: "/ROSTA/O%20campon%C3%AAs%20deve%20ser%20o%20mestre%20da%20terra.webp",
    title: "O camponês deve ser o mestre da terra",
    officialName: "Крестьянин должен быть хозяином земли",
    meaning: "Este cartaz foca na aliança entre o campo e a cidade. Ele mostra o camponês de forma heroica, segurando ferramentas, com o fundo industrial sugerindo que a terra e as máquinas agora pertencem ao povo.",
    purpose: "Consolidar o apoio da massa camponesa, prometendo autonomia e propriedade coletiva, um dos pilares principais da propaganda bolchevique inicial.",
  },
  {
    id: "entente",
    image: "/ROSTA/A%20Pequena%20e%20a%20Grande%20Entente.webp",
    title: "A Pequena e a Grande Entente",
    officialName: "Малая Антанта и Большая Антанта — ROSTA № 583",
    meaning: "Mayakovsky satiriza as alianças militares europeias. O capitalista tenta unir forças contra a Rússia Soviética, mas todos acabarão na mesma sepultura. O último quadro representa a Revolução Mundial.",
    purpose: "Ridicularizar os inimigos externos e fortalecer a confiança do povo na vitória final do comunismo sobre o capitalismo internacional.",
  },
  {
    id: "comuna",
    image: "/ROSTA/Os%20Mortos%20da%20Comuna%20de%20Paris.jpg",
    title: "Os Mortos da Comuna de Paris",
    officialName: "Мертвецы Парижской Комуны воскресли",
    meaning: "Ligação histórica direta entre a Comuna de Paris (1871) e a Revolução Russa. O soldado de chapéu alto representa o espírito revolucionário que \"ressuscitou\" na Rússia.",
    purpose: "Dar legitimidade histórica à Revolução Soviética, pintando-a como conclusão de uma luta iniciada pelos operários franceses.",
  },
  {
    id: "eletrificacao",
    image: "/ROSTA/Acendemos%20sobre%20o%20mundo%20esta%20verdade.jpg",
    title: "Acendemos sobre o mundo esta verdade",
    officialName: "Мы зажгли над миром истину эту — ROSTA № 742",
    meaning: "A \"verdade\" soviética se espalha como luz elétrica. O texto rima sobre como as lâmpadas devem iluminar toda a Rússia. Um dos temas favoritos de Mayakovsky: a modernização.",
    purpose: "Propaganda educacional para convencer a população sobre a importância do plano de eletrificação nacional (Plano GOELRO).",
  },
  {
    id: "frio",
    image: "/ROSTA/Quer%20vencer%20o%20frio%20,%20Quer%20vencer%20a%20fome.jpg",
    title: "Quer vencer o frio? Quer vencer a fome?",
    officialName: "Хочешь побороть холод? Хочешь побороть голод?",
    meaning: "Clássico de utilidade pública. Frio e fome são monstros e esqueletos. A solução: juntar-se ao grupo de choque de trabalho exemplar.",
    purpose: "Combater o desânimo durante a crise econômica pós-guerra e incentivar o trabalho árduo como única saída.",
  },
];

const RostaSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // Calculamos o deslocamento baseado no número de itens. 
  // Para 8 itens com largura considerável, -70% ou -75% geralmente funciona bem para mostrar o último card.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const getPoster = (id: string | null) => rostaPosters.find((p) => p.id === id) || null;
  const overlay = getPoster(expanded);

  return (
    <section id="rosta" ref={scrollRef} className="relative h-[400vh] bg-parchment">
      <AnimatePresence>
        {expanded && overlay && (
          <motion.div 
            key="rosta-ov" 
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setExpanded(null)}
          >
            <motion.div 
              className="relative w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center bg-ink p-6 rounded-2xl border border-parchment/10" 
              onClick={(e) => e.stopPropagation()} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[70vh] rounded-lg overflow-hidden flex items-center justify-center bg-black/20">
                <img src={overlay.image} alt={overlay.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-display text-display-sm text-parchment mb-2">{overlay.title}</h3>
                <p className="text-label text-soviet-light mb-8">{overlay.officialName}</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-label text-parchment/30 mb-2">SIGNIFICADO</p>
                    <p className="text-body text-parchment/80 text-sm leading-relaxed">{overlay.meaning}</p>
                  </div>
                  <div>
                    <p className="text-label text-parchment/30 mb-2">INTUITO</p>
                    <p className="text-body text-parchment/80 text-sm leading-relaxed">{overlay.purpose}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setExpanded(null)} 
                  className="mt-10 text-label text-parchment/50 hover:text-soviet-light transition-colors self-start border border-parchment/20 px-6 py-2 rounded-full hover:border-soviet-light/50"
                >
                  FECHAR
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-0 h-screen flex flex-col pt-16 md:pt-24 justify-start overflow-hidden">
        <div className="px-8 md:px-16 lg:px-24 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-soviet block mb-2 md:mb-4">JANELAS ROSTA</span>
            <h2 className="text-display text-2xl md:text-4xl text-ink max-w-2xl uppercase">Cartazes de Agitacao</h2>
            <div className="w-16 md:w-20 h-1 bg-soviet mt-4 mb-4 md:mt-6 md:mb-6" />
            <p className="text-body text-ink/70 max-w-xl text-base md:text-lg leading-relaxed">
              Legendados por Maiakovski com <strong>rimas simples</strong> para que ate analfabetos entendessem a mensagem de imediato. A arte se tornou acao.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-8 md:px-16 lg:px-24">
            {rostaPosters.map((poster) => (
              <motion.div
                key={poster.id}
                className="w-[260px] md:w-[380px] flex-none cursor-pointer group shrink-0"
                onClick={() => setExpanded(poster.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink/5 shadow-xl transition-all duration-500 group-hover:shadow-soviet/10">
                  <img src={poster.image} alt={poster.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-label text-parchment/50 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">CLIQUE PARA VER MAIS</p>
                    <h4 className="text-parchment uppercase leading-tight flex flex-wrap items-baseline">
                      {poster.title.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-2 last:mr-0">
                          <span className="text-display text-xl md:text-2xl">{word[0]}</span>
                          <span className="text-[0.65rem] md:text-xs font-sans tracking-[0.2em] opacity-80 align-baseline">{word.slice(1)}</span>
                        </span>
                      ))}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Espaçador final para garantir que o último card não cole na borda */}
            <div className="w-[100px] flex-none" />
          </motion.div>
        </div>
        
        {/* Barra de progresso visual */}
        <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-ink/10">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-soviet" 
            style={{ scaleX: scrollYProgress, originX: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default RostaSection;
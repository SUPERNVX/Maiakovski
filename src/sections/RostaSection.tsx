import { motion, AnimatePresence, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>(null);
  const getPoster = (id: string | null) => rostaPosters.find((p) => p.id === id) || null;
  const overlay = getPoster(expanded);

  return (
    <section id="rosta" className="section-light py-24 md:py-32">
      <AnimatePresence>
        {expanded && overlay && (
          <motion.div key="rosta-ov" className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setExpanded(null)}>
            <motion.div className="absolute inset-4 md:inset-8 lg:inset-16 flex flex-col md:flex-row gap-6 md:gap-12 items-center" onClick={(e) => e.stopPropagation()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="w-full md:w-1/2 h-1/2 md:h-full rounded-lg overflow-hidden bg-ink flex items-center justify-center">
                <img src={overlay.image} alt={overlay.title} className="max-w-full max-h-full object-contain" />
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

      <div className="px-8 md:px-16 lg:px-24 mb-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-soviet block mb-6">JANELAS ROSTA</span>
          <h2 className="text-display text-display-size text-ink max-w-5xl">Cartazes de<br />Agitacao</h2>
          <p className="text-body text-umber mt-6 max-w-xl">Os cartazes ROSTA foram produzidos pela Agencia Telegrafica Russa entre 1919-1921. Maiakovski escreveu as legendas para centenas deles, transformando arte em arma politica.</p>
        </motion.div>
      </div>

      <div className="w-full overflow-x-scroll px-8 md:px-16 lg:px-24 pb-8" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}><div className="flex flex-nowrap gap-6 snap-x snap-mandatory">
        {rostaPosters.map((poster, i) => (
          <motion.div
            key={poster.id}
            className="w-[280px] md:w-[360px] flex-none snap-start cursor-pointer group shrink-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            onClick={() => setExpanded(poster.id)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink/5">
              <img src={poster.image} alt={poster.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-label text-parchment/70 block">CLIQUE PARA EXPANDIR</span>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-sm text-ink/80 font-medium block">{poster.title}</span>
            </div>
          </motion.div>
        ))}
      </div></div>
    </section>
  );
};

export default RostaSection;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CityData { name: string; subtitle: string; color: string; bgClass: string; items: string[]; }

const moscow: CityData = {
  name: "Moscou", subtitle: "A Capital da Revolucao", color: "#B22222", bgClass: "bg-ink",
  items: ["Cidade reconstruindo-se apos Guerra Civil","Entusiasmo revolucionario esfriando","Controle estatal crescente","Arte de vanguarda sendo censurada","NEP criando burgueses vermelhos"],
};
const ny: CityData = {
  name: "Nova York", subtitle: "A Capital do Capital", color: "#1E5AA8", bgClass: "bg-ink",
  items: ["Arranha-ceus, tecnologia, progresso","Desigualdade brutal","Segregacao racial explicita","Consumismo desenfreado","Liberdade coexistindo com exploracao"],
};

const CityToggle = () => {
  const [city, setCity] = useState<"moscow" | "ny">("moscow");
  const [dir, setDir] = useState(1);
  const toggle = () => { setDir(city === "moscow" ? 1 : -1); setCity(city === "moscow" ? "ny" : "moscow"); };
  const d = city === "moscow" ? moscow : ny;
  return (
    <div className="mt-16">
      <div className="flex justify-center mb-12">
        <button onClick={toggle} className="relative flex items-center rounded-full overflow-hidden border border-ink/10 bg-ink/5 backdrop-blur-sm">
          <div className={"px-8 py-3 text-sm font-medium transition-colors duration-500 z-10 " + (city === "moscow" ? "text-parchment" : "text-umber")}>Moscou</div>
          <div className={"px-8 py-3 text-sm font-medium transition-colors duration-500 z-10 " + (city === "ny" ? "text-parchment" : "text-umber")}>Nova York</div>
          <motion.div className="absolute top-0 bottom-0 rounded-full" style={{ background: d.color }} animate={{ left: city === "moscow" ? 0 : "50%", width: "50%" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
        </button>
      </div>
      <div className="relative overflow-hidden min-h-[300px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={city} custom={dir} variants={{ enter: (d: number) => ({ y: d > 0 ? 60 : -60, opacity: 0 }), center: { y: 0, opacity: 1 }, exit: (d: number) => ({ y: d > 0 ? -60 : 60, opacity: 0 }) }} initial="enter" animate="center" exit="exit" transition={{ type: "spring", stiffness: 300, damping: 30 }} className="w-full">
            <div className="py-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                <div>
                  <h3 className="text-display text-display-sm text-ink">{d.name}</h3>
                  <p className="text-label text-umber mt-1">{d.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {d.items.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 + 0.2 }} className="flex gap-4 text-body text-ink/70">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.color }} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-12 pt-12 border-t border-ink/10">
        <p className="text-label text-soviet mb-3">A CONTRADIÇÃO CENTRAL</p>
        <p className="text-body text-umber max-w-2xl">Maiakovski percebe que ambas as cidades, apesar de ideologias opostas, compartilham hierarquias de poder rigidas, retorica emancipatoria versus pratica opressora, e imperialismo.</p>
      </div>
    </div>
  );
};
export default CityToggle;
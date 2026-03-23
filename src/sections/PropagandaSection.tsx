import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StickyScroll from "../components/ui/StickyScroll";

const PropagandaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="propaganda" className="section-dark relative overflow-visible">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-soviet-light block mb-6">PROPAGANDA</span>
          <h2 className="text-display text-display-size text-parchment max-w-5xl">Dois Impérios,<br />Duas Maquinas</h2>
          <p className="text-body text-parchment/50 mt-8 max-w-xl">A maquina de propaganda de ambos os lados. URSS e EUA usaram arte e cultura como armas de dominacao.</p>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 mb-16 mx-8 md:mx-16 lg:mx-24 gap-px bg-sienna/20">
        <div className="bg-ink p-8 md:p-12"><span className="text-label text-soviet-light block mb-4">URSS</span><p className="text-body text-parchment/60">Cartazes ROSTA, cinema de Eisenstein, arte construtivista. A vanguarda como ferramenta de educacao das massas.</p></div>
        <div className="bg-ink p-8 md:p-12"><span className="text-label text-usa-light block mb-4">EUA</span><p className="text-body text-parchment/60">Hollywood, jazz, Coca-Cola, publicidade. O american way of life como imperialismo cultural sedutor.</p></div>
      </div>
      <StickyScroll />
    </section>
  );
};
export default PropagandaSection;
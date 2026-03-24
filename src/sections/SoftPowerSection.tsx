import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SoftPowerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="soft-power" className="section-dark">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-gold block mb-6">SEÇÃO 03</span>
          <h2 className="text-display text-display-size text-parchment max-w-5xl">Soft Power e<br />Resistência</h2>
        </motion.div>
      </div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24">
        <div className="col-prose mb-16">
          <p className="text-body text-parchment/60 text-xl leading-relaxed">
            O conceito de <strong>Soft Power</strong>, cunhado por Joseph Nye, define a capacidade de uma nação de influenciar 
            através da cultura e de valores, em vez da força militar. Maiakovski entendeu isso décadas antes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <div>
            <span className="text-label text-soviet-light block mb-4">MÁQUINA SOVIÉTICA</span>
            <h3 className="text-display text-2xl md:text-3xl text-parchment mb-6">A Vanguarda como Exportação</h3>
            <p className="text-body text-parchment/50">A URSS tentou usar o construtivismo e o futurismo para mostrar ao mundo uma imagem de modernidade radical e igualdade técnica.</p>
          </div>
          <div>
            <span className="text-label text-usa-light block mb-4">MÁQUINA AMERICANA</span>
            <h3 className="text-display text-2xl md:text-3xl text-parchment mb-6">O Espetáculo como Dominação</h3>
            <p className="text-body text-parchment/50">Os EUA consolidaram sua hegemonia através do consumo e do entretenimento, transformando o "sonho americano" no produto mais exportado do mundo.</p>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 section-mid">
        <span className="text-label text-gold block mb-6">PARALELO MODERNO</span>
        <h3 className="text-display text-display-size text-parchment mb-12">Bad Bunny no<br />Super Bowl</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="col-prose">
            <p className="text-body text-parchment/70 mb-6 font-medium text-lg">A Resistência dentro do Império.</p>
            <p className="text-body text-parchment/50 mb-6">Assim como Maiakovski usava as plataformas do Estado Soviético para inserir críticas à burocracia, artistas contemporâneos usam as maiores vitrines do capitalismo para pautas de resistência.</p>
            <p className="text-body text-parchment/50">Quando Bad Bunny se apresenta no Super Bowl — o ápice do espetáculo americano — cantando em espanhol e celebrando a cultura latina, ele opera uma subversão do Soft Power de dentro para fora.</p>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-parchment/10 bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/v3ErJX_glEs" 
              title="Bad Bunny Super Bowl" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SoftPowerSection;
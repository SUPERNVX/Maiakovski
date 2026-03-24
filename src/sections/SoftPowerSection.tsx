import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SoftPowerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="softpower" className="section-mid">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-gold block mb-6">SECAO 03</span>
          <h2 className="text-display text-display-size text-parchment max-w-5xl">Soft Power<br />e Resistencia</h2>
        </motion.div>
      </div>
      
      <div className="px-8 md:px-16 lg:px-24 pb-24 col-prose">
        <div className="mb-20">
          <h3 className="text-display text-display-sm text-parchment mb-6 uppercase tracking-tighter">Hard Power</h3>
          <p className="text-label text-soviet-light mb-4">PODER DURO / COERCAO</p>
          <p className="text-body text-parchment/60 leading-relaxed">
            Forca militar direta. Coercao economica. Ameacas e pressao soberana. 
            Onde o imperio se impoe pelo medo e pela superioridade material.
          </p>
        </div>
        <div className="mb-20">
          <h3 className="text-display text-display-sm text-parchment mb-6 uppercase tracking-tighter">Soft Power</h3>
          <p className="text-label text-gold mb-4">PODER BRANDO / SEDUCAO</p>
          <p className="text-body text-parchment/60 leading-relaxed">
            Cultura, valores e ideologia. Conquista de coracoes e mentes atraves da admiracao. 
            Hollywood, a musica e a moda como ferramentas de hegemonia invisivel.
          </p>
        </div>
      </div>

      <div className="py-24 px-8 md:px-16 lg:px-24 section-dark">
        <span className="text-label text-gold block mb-6">REPRODUCAO CULTURAL</span>
        <h3 className="text-display text-display-size text-parchment mb-12">Bad Bunny<br />no Super Bowl</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-6">
            <p className="text-body text-parchment/70 text-lg leading-relaxed">
              <strong className="text-parchment font-medium">Manifesto Anticolonial:</strong> 
              Bad Bunny transformou o maior palco do imperio americano em um grito de resistencia. 
              Ao cantar em espanhol e elevar a bandeira de Porto Rico, ele subverte a logica do Soft Power tradicional.
            </p>
            <p className="text-body text-parchment/70 text-lg leading-relaxed">
              <strong className="text-parchment font-medium">Paralelo Historico:</strong> 
              Assim como Maiakovski usou as formas do futurismo para criticar a burocracia, 
              artistas contemporaneos usam a plataforma do colonizador para injetar mensagens de autonomia.
            </p>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-parchment/10">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/v3ErJX_glEs" 
              title="Bad Bunny Super Bowl" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <motion.div className="max-w-3xl mx-auto text-center border-t border-parchment/10 pt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-display text-display-sm text-parchment/60 leading-tight italic">
            &quot;O capitalismo contemporaneo consegue cooptar a critica que o stalinismo reprimiu?&quot;
          </p>
        </motion.div>
      </div>

      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-gold block mb-6">LICOES</span>
        <div className="space-y-16 mt-12">
          <div><span className="text-[4rem] font-bold leading-none text-parchment/10 block mb-2">01</span><h4 className="text-display text-display-sm text-parchment mb-4">Critica em<br />Duas Frentes</h4><p className="text-body text-parchment/60 max-w-lg">Nao basta atacar o imperio inimigo externo. E preciso vigiar o proprio campo. Maiakovski criticou capitalismo E stalinismo.</p></div>
          <div><span className="text-[4rem] font-bold leading-none text-parchment/10 block mb-2">02</span><h4 className="text-display text-display-sm text-parchment mb-4">Soft Power<br />e Insidioso</h4><p className="text-body text-parchment/60 max-w-lg">Imperialismo cultural e mais dificil de combater que imperialismo militar porque seduz. Brooklyn Bridge e linda — mas construida com sangue.</p></div>
          <div><span className="text-[4rem] font-bold leading-none text-parchment/10 block mb-2">03</span><h4 className="text-display text-display-sm text-parchment mb-4">Estruturas<br />Mudam de Nome</h4><p className="text-body text-parchment/60 max-w-lg">Opressao se adapta e sobrevive mudando de roupagem. Nomes mudam, hierarquias permanecem.</p></div>
        </div>
      </div>
    </section>
  );
};
export default SoftPowerSection;
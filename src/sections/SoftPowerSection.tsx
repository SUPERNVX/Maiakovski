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
        <div className="mb-20"><h3 className="text-display text-display-sm text-parchment mb-6">Hard Power</h3><p className="text-label text-parchment/40 mb-4">PODER DURO</p><p className="text-body text-parchment/60">Forca militar. Coercao economica. Ameacas e pressao direta. Exemplo: Invasao do Iraque (2003).</p></div>
        <div className="mb-20"><h3 className="text-display text-display-sm text-parchment mb-6">Soft Power</h3><p className="text-label text-parchment/40 mb-4">PODER BRANDO</p><p className="text-body text-parchment/60">Cultura. Valores. Políticas externas. Conquista de corações e mentes. Exemplo: Hollywood exportando american way of life.</p></div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <h3 className="text-display text-display-sm text-parchment mb-16">Maiakovski:<br />Instrumento e Critico</h3>
        <div className="space-y-16">
          <div><span className="text-[5rem] font-bold leading-none text-parchment/10 block mb-2">01</span><h4 className="text-label text-soviet-light mb-4">INSTRUMENTO (1917-1924)</h4><p className="text-body text-parchment/60 max-w-lg">Escreveu centenas de cartazes ROSTA. Criou slogans que mobilizavam massas. Pecas teatrais pro-revolucionarias. Maiakovski ACREDITAVA na revolucao.</p></div>
          <div><span className="text-[5rem] font-bold leading-none text-parchment/10 block mb-2">02</span><h4 className="text-label text-gold mb-4">DESPERTAR (1925)</h4><p className="text-body text-parchment/60 max-w-lg">A viagem muda tudo. Ve imperialismo americano de perto. Percebe que esta sendo USADO como propaganda. Arte revolucionaria virou ferramenta de elite burocratica.</p></div>
          <div><span className="text-[5rem] font-bold leading-none text-parchment/10 block mb-2">03</span><h4 className="text-label text-usa-light mb-4">CRITICO (1925-1930)</h4><p className="text-body text-parchment/60 max-w-lg">Desconstrói soft power americano (Ciclo da America) e sovietico (O Banho). Critica AMBOS. Posicao radical: artista verdadeiramente revolucionario nao pode servir a NENHUM Estado.</p></div>
        </div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24 section-dark">
        <span className="text-label text-gold block mb-6">SECAO 03.3</span>
        <h3 className="text-display text-display-size text-parchment mb-12">Bad Bunny<br />no Super Bowl</h3>
        <div className="col-prose space-y-6 mb-12">
          <p className="text-body text-parchment/70"><strong className="text-parchment font-medium">Super Bowl 2026:</strong> Bad Bunny transformou 15 minutos em manifesto anticolonial. Bandeira porto-riquenha proeminente. Performance em espanhol.</p>
          <p className="text-body text-parchment/70"><strong className="text-parchment font-medium">Paralelo:</strong> Ambos usaram a plataforma do dominador para subverte-la. Elevam simbolos de territorios subordinados no coracao do imperio.</p>
        </div>
        <div className="placeholder-image w-full h-[40vh] mb-12">BAD BUNNY NO SUPER BOWL 2026</div>
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-display text-display-sm text-parchment/60 leading-tight">O capitalismo contemporaneo consegue cooptar a critica que o stalinismo reprimiu?</p>
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
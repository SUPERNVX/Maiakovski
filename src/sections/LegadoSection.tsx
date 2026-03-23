import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LegadoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="legado" className="section-dark">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-gold block mb-6">SECAO 04</span>
          <h2 className="text-display text-display-size text-parchment max-w-5xl">Legado e<br />Conclusoes</h2>
        </motion.div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-soviet-light block mb-6">SECAO 04.1</span>
        <h3 className="text-display text-display-sm text-parchment mb-12">O Custo da<br />Verdade</h3>
        <motion.blockquote className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-display text-display-sm text-parchment/60 leading-tight">&quot;O barco do amor se quebrou contra a vida. Estamos quites.&quot;</p>
          <footer className="text-label text-umber mt-6">— Carta de suicidio, 30 de abril de 1930</footer>
        </motion.blockquote>
        <div className="col-prose space-y-6">
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">Pressao Politica:</strong> O Banho atacado violentamente. Teatros cancelam montagens. Artista que foi simbolo da revolucao agora e persona non grata.</p>
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">Desilusao Ideologica:</strong> A revolucao pela qual lutou virou autoritarismo. Os ideais de 1917 foram traídos pela burocracia.</p>
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">Colapso Pessoal:</strong> Isolamento artistico. Saude debilitada. Depressao profunda. Sensacao de ter 36 mas ja ter vivido tudo.</p>
        </div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-gold block mb-6">SECAO 04.2</span>
        <h3 className="text-display text-display-size text-parchment mb-16">Por que<br />Maiakovski<br />Importa Hoje</h3>
        <div className="space-y-12 col-prose">
          <div><h4 className="text-label text-parchment/80 mb-3">Como Criticar Sem Ser Cooptado?</h4><p className="text-body text-parchment/50">Artista critica capitalismo no Instagram. Banksy vende por milhoes, vira commodity. Musica de protesto vira trilha de comercial.</p></div>
          <div><h4 className="text-label text-parchment/80 mb-3">Como Resistir Sem Ser Silenciado?</h4><p className="text-body text-parchment/50">Censura direta, algoritmica e economica. Arte muito radical e marginalizada. Arte palatavel e cooptada.</p></div>
          <div><h4 className="text-label text-parchment/80 mb-3">Como Fazer Arte Revolucionaria?</h4><p className="text-body text-parchment/50">Capitalismo e maquina de absorcao. Qualquer critica pode virar mercadoria. Revolucao vira slogan de campanha publicitaria.</p></div>
        </div>
      </div>
      <div className="py-32 md:py-48 px-8 md:px-16 lg:px-24 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <p className="text-display text-display-size text-parchment max-w-5xl mx-auto leading-tight mb-12">A verdadeira arte revolucionaria nao serve a nenhum poder.</p>
          <div className="divider-gold mx-auto mb-12" />
          <p className="text-body text-parchment/40 max-w-lg mx-auto">95 anos apos sua morte, ainda falamos dele. Quantos confortaveis de 1930 voce conhece?</p>
        </motion.div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-gold block mb-6">SECAO 04.4</span>
        <h3 className="text-display text-display-sm text-parchment mb-12">Referencias</h3>
        <div className="col-prose space-y-4 text-body text-parchment/40 leading-relaxed">
          <p>MAIAKOVSKI, Vladimir. Poemas. Sao Paulo: Perspectiva, 2014.</p>
          <p>RIPELLINO, Angelo Maria. Maiakovski e o teatro de vanguarda. Sao Paulo: Perspectiva, 1986.</p>
          <p>SCHNAIDERMAN, Boris. A poetica de Maiakovski. Sao Paulo: Perspectiva, 1984.</p>
          <p>NYE, Joseph S. Soft Power: The Means to Success in World Politics. New York: PublicAffairs, 2004.</p>
        </div>
        <div className="mt-24 text-center"><p className="text-label text-parchment/20">Colegio Santa Ines — Sao Paulo — Marco 2026</p></div>
      </div>
    </section>
  );
};
export default LegadoSection;
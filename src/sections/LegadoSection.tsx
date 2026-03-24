import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LegadoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="legado" className="section-dark">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-gold block mb-6">SEÇÃO 04</span>
          <h2 className="text-display text-display-size text-parchment max-w-5xl">Legado e<br />Conclusões</h2>
        </motion.div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-soviet-light block mb-6">SEÇÃO 04.1</span>
        <h3 className="text-display text-display-sm text-parchment mb-12">O Custo da<br />Verdade</h3>
        <motion.blockquote className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-display text-display-sm text-parchment/60 leading-tight">&quot;O barco do amor se quebrou contra a vida. Estamos quites.&quot;</p>
          <footer className="text-label text-umber mt-6">— Carta de suicídio, 30 de abril de 1930</footer>
        </motion.blockquote>
        <div className="col-prose space-y-6">
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">Pressão Política:</strong> O Banho foi atacado violentamente pela crítica oficial. Teatros cancelaram montagens por medo de represálias. O artista que foi símbolo da revolução agora era persona non grata.</p>
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">Desilusão Ideológica:</strong> A revolução pela qual lutou transformou-se em uma estrutura autoritária. Os ideais de 1917 foram sufocados por uma burocracia que ele mesmo ajudou a denunciar.</p>
          <p className="text-body text-parchment/60"><strong className="text-parchment font-medium">O Grito Final:</strong> Seu suicídio não foi apenas um ato de desespero pessoal, mas o silenciamento de uma voz que não encontrava mais espaço entre a arte livre e o Estado totalitário.</p>
        </div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-gold block mb-6">SEÇÃO 04.2</span>
        <h3 className="text-display text-display-size text-parchment mb-16">Por que<br />Maiakovski<br />Importa Hoje</h3>
        <div className="space-y-12 col-prose">
          <div>
            <h4 className="text-label text-parchment/80 mb-3">A Independência do Intelectual</h4>
            <p className="text-body text-parchment/50 leading-relaxed">Maiakovski nos ensina que o papel do artista e do pensador é ser o crítico constante de seu tempo, mesmo quando o poder vigente diz falar em nome do povo. Sua coragem de denunciar a burocratização soviética continua sendo um exemplo de integridade intelectual.</p>
          </div>
          <div>
            <h4 className="text-label text-parchment/80 mb-3">A Subversão do Espetáculo</h4>
            <p className="text-body text-parchment/50 leading-relaxed">Em uma era dominada por algoritmos e cooptação comercial, a busca de Maiakovski por uma arte que fosse simultaneamente popular e vanguardista ressoa. Ele mostra que é possível usar as ferramentas de comunicação de massa para injetar mensagens de autonomia e reflexão crítica.</p>
          </div>
          <div>
            <h4 className="text-label text-parchment/80 mb-3">O Alerta contra o Dogmatismo</h4>
            <p className="text-body text-parchment/50 leading-relaxed">Sua trajetória serve como um alerta eterno contra o fechamento de ideias. Quando a arte se torna apenas um instrumento de Estado ou de mercado, ela perde sua essência revolucionária. Maiakovski importa porque sua desilusão é o espelho de nossas próprias crises de esperança.</p>
          </div>
        </div>
      </div>
      <div className="py-24 px-8 md:px-16 lg:px-24">
        <span className="text-label text-gold block mb-6">SEÇÃO 04.4</span>
        <h3 className="text-display text-display-sm text-parchment mb-12">Referências</h3>
        <div className="col-prose space-y-4 text-body text-parchment/40 leading-relaxed">
          <p>MAIAKOVSKI, Vladimir. Poemas. São Paulo: Perspectiva, 2014.</p>
          <p>RIPELLINO, Angelo Maria. Maiakovski e o teatro de vanguarda. São Paulo: Perspectiva, 1986.</p>
          <p>SCHNAIDERMAN, Boris. A poética de Maiakovski. São Paulo: Perspectiva, 1984.</p>
          <p>NYE, Joseph S. Soft Power: The Means to Success in World Politics. New York: PublicAffairs, 2004.</p>
        </div>
        <div className="mt-24 text-center"><p className="text-label text-parchment/20">Colégio Santa Inês — São Paulo — Março 2026</p></div>
      </div>
    </section>
  );
};
export default LegadoSection;
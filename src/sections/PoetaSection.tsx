import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Facet = ({ number, title, period, items, delay }: { number: string; title: string; period: string; items: string[]; delay: number }) => {
  return (
    <motion.div className="min-w-[320px] md:min-w-[400px] snap-start pr-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }}>
      <span className="text-[6rem] font-bold leading-none text-ink/5 block">{number}</span>
      <h3 className="text-display text-display-sm text-ink -mt-8 mb-1">{title}</h3>
      <span className="text-label text-soviet mb-4 block">{period}</span>
      <ul className="space-y-3">{items.map((item, i) => (<li key={i} className="text-body text-umber flex gap-3"><span className="mt-2.5 w-1 h-1 rounded-full bg-sienna shrink-0" />{item}</li>))}</ul>
    </motion.div>
  );
};

const PoetaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="poeta" className="section-light relative overflow-visible">
      <div className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
            <div className="flex-1">
              <span className="text-label text-soviet block mb-6">SECAO 01</span>
              <h2 className="text-display text-display-size text-ink max-w-3xl">O Poeta e<br />Seu Tempo</h2>
            </div>
            <motion.div className="w-48 md:w-56 lg:w-64 shrink-0 md:-mt-8 lg:-mt-16 shadow-2xl rounded-lg overflow-hidden" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
              <img src="/Majakovszkij.webp" alt="Vladimir Maiakovski" width="1200" height="1736" loading="eager" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="py-8 md:py-16 px-8 md:px-16 lg:px-24">
        <div className="col-prose">
          <p className="text-body text-ink/80 mb-6 text-xl leading-relaxed">
            Vladimir Maiakovski (1893-1930) foi um dos mais importantes poetas e dramaturgos da vanguarda russa, 
            figura central do movimento futurista sovietico. Nascido na Georgia, entao parte do Imperio Russo, 
            vivenciou desde jovem as contradicoes do imperialismo czarista e, posteriormente, as tensoes do projeto socialista sovietico.
          </p>
          <p className="text-body text-ink/60 leading-relaxed">
            Sua trajetoria nao foi apenas a de um artista, mas a de um revolucionario que viu na palavra uma arma de transformacao. 
            Sua vida se divide em tres fases que refletem, de forma visceral, a propria ascensao e as primeiras sombras da Revolucao Russa.
          </p>
        </div>
      </div>
      <div className="py-8 md:py-16"><div className="px-8 md:px-16 lg:px-24 mb-6"><span className="text-label text-sienna">TRES FACETAS</span></div>
        <div className="flex overflow-x-auto snap-x snap-mandatory px-8 md:px-16 lg:px-24 pb-8" style={{ scrollbarWidth: "none" }}>
          <Facet number="01" title="O Revolucionario" period="1908-1917" items={["Aderiu ao Partido Bolchevique aos 15 anos","Preso tres vezes pelo regime czarista","Viu na Revolucao de 1917 a promessa de um mundo novo","Arte deveria servir a transformacao social"]} delay={0} />
          <Facet number="02" title="O Poeta de Vanguarda" period="1912-1925" items={["Pioneiro do futurismo russo","Criou poesia visual e sonora revolucionaria","A rua e nosso pincel, as praças nossas paletas","Trabalhou em propagandas ROSTA"]} delay={0.1} />
          <Facet number="03" title="O Desiludido" period="1925-1930" items={["Viagem as Americas marca ponto de inflexao","Testemunhou a burocratizacao do Estado sovietico","Obras criticas ao proprio regime","Suicidio em 1930, aos 36 anos"]} delay={0.2} />
        </div>
      </div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24"><motion.blockquote className="max-w-3xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-ink/90 leading-tight">&quot;Eu quero ser compreendido por meu pais, mas se nao for — que seja.&quot;</p><div className="divider-gold mx-auto my-6" /><p className="text-display text-display-sm text-ink/40">Passarei por minha patria como chuva obliqua passa.</p><footer className="text-label text-sienna mt-6">— Maiakovski</footer></motion.blockquote></div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24"><span className="text-label text-soviet block mb-6">SECAO 01.2</span><h3 className="text-display text-display-sm text-ink mb-12 max-w-2xl">Contexto Historico</h3><div className="col-prose space-y-8"><div><h4 className="text-label text-ink mb-3">Imperio Russo</h4><p className="text-body text-umber">Potencia imperial em decadencia. Estrutura social de nobreza versus campesinato explorado.</p></div><div><h4 className="text-label text-ink mb-3">Promessa da Revolucao (1917)</h4><p className="text-body text-umber">Igualdade social, internacionalismo, arte a servico do povo.</p></div><div><h4 className="text-label text-ink mb-3">Realidade Sovietica</h4><p className="text-body text-umber">Nova elite burocratica, nacionalismo de Estado, censura crescente.</p></div></div></div>
      <div className="py-16 md:py-24 section-warm"><div className="px-8 md:px-16 lg:px-24"><span className="text-label text-soviet block mb-6">SECAO 01.3</span><h3 className="text-display text-display-sm text-ink mb-12">A Revolucao e a Desilusao</h3><div className="col-prose space-y-8 mb-12"><div><h4 className="text-label text-ink mb-3">Propagandista</h4><p className="text-body text-umber">Cartazes ROSTA, slogans, poemas pro-revolucionarios.</p></div><div><h4 className="text-label text-ink mb-3">Ponto de Virada (1925)</h4><p className="text-body text-umber">Viagem as Americas transformou sua perspectiva.</p></div><div><h4 className="text-label text-ink mb-3">Critica Aberta</h4><p className="text-body text-umber">O Percevejo e O Banho desafiam o regime.</p></div></div><div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-ink/10 aspect-square">
  <img src="/mapa%20da%20viagem.webp" alt="Mapa da Viagem 1925" className="w-full h-full object-cover" />
</div><motion.blockquote className="max-w-2xl mx-auto text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-ink/70">&quot;O barco do amor se quebrou contra a vida.&quot;</p><footer className="text-label text-umber mt-4">— 30 de abril de 1930</footer></motion.blockquote></div></div>
    </section>
  );
};
export default PoetaSection;
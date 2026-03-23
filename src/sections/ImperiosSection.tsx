import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CityToggle from "../components/CityToggle";
import { MaskContainer } from "../components/ui/SvgMaskEffect";

const ImperiosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="imperios">
      <div className="section-warm py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-soviet block mb-6">SECAO 02</span>
          <h2 className="text-display text-display-size text-ink max-w-5xl">Dois Imperios,<br />Duas Criticas</h2>
          <p className="text-body text-umber mt-8 max-w-xl">Analizar as duas obras centrais que demonstram a critica antiimperial de Maiakovski contra EUA e URSS.</p>
        </motion.div>
      </div>
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="placeholder-video w-full h-full flex flex-col gap-4 items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span className="text-sm">VIDEO: MOSCOW vs NEW YORK</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16"><h3 className="text-display text-display-sm text-parchment mb-2">Moscou contra Nova York</h3><p className="text-label text-parchment/50">1925</p></div>
      </div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 section-light"><div className="col-prose"><p className="text-body text-ink/80 mb-8">Em 1925, Maiakovski parte de Moscou rumo as Americas. Ele vai como poeta sovietico, mas retorna como observador critico de DOIS imperios.</p></div><CityToggle /></div>
      <div className="py-24 md:py-32 section-warm"><div className="px-8 md:px-16 lg:px-24"><span className="text-label text-soviet block mb-6">SECAO 02.2</span><h3 className="text-display text-display-size text-ink mb-12">Brooklyn<br />Bridge</h3><div className="col-prose space-y-6 mb-12"><p className="text-body text-ink/80"><strong className="text-ink font-medium">A Admiracao:</strong> Maiakovski fica genuinamente impressionado pela engenharia.</p><p className="text-body text-ink/80"><strong className="text-ink font-medium">A Denuncia:</strong> Mas o poeta questiona o preco desse progresso.</p></div><div className="placeholder-image w-full h-[40vh] mb-12">FOTO HISTORICA DA BROOKLYN BRIDGE (1925)</div><motion.blockquote className="max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-ink/60 text-center leading-tight">&quot;Ponte de Brooklyn — sim, e uma coisa!&quot;</p></motion.blockquote></div></div>
      <div className="py-24 md:py-32 section-dark"><div className="px-8 md:px-16 lg:px-24"><span className="text-label text-soviet-light block mb-6">SECAO 02.3</span><h3 className="text-display text-display-size text-parchment mb-12">Black and<br />White</h3><div className="col-prose space-y-6 mb-12"><p className="text-body text-parchment/70"><strong className="text-parchment font-medium">O Poema Mais Brutal:</strong> Escrito apos visita a Cuba em 1925.</p><p className="text-body text-parchment/70"><strong className="text-parchment font-medium">Racismo Estrutural:</strong> Preto trabalha. Branco lucra.</p></div><motion.blockquote className="max-w-3xl mx-auto my-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-parchment/50 text-center leading-tight">&quot;A noite, o negro nao pode sentar-se no banco do parque.&quot;</p></motion.blockquote></div></div>
      <div className="py-24 md:py-32 section-mid">
        <div className="px-8 md:px-16 lg:px-24">
          <span className="text-label text-soviet-light block mb-6">SECAO 02.4</span>
          <h3 className="text-display text-display-size text-parchment mb-12">O Banho</h3>
          <p className="text-body text-parchment/40 col-prose mb-8">Passe o mouse sobre o texto abaixo.</p>
          <MaskContainer
            className="min-h-[500px] max-w-5xl mx-auto rounded-2xl border border-parchment/10"
            size={40}
            revealSize={800}
            revealText={
              <div className="p-8 md:p-12 text-center">
                <h4 className="text-display text-lg md:text-xl text-parchment mb-4">A Uniao Sovietica: O Futuro da Humanidade</h4>
                <div className="space-y-4 text-body text-parchment/80 max-w-2xl mx-auto">
                  <p>A Uniao Sovietica representa o futuro brilhante da humanidade. Sob a lideranca savia do Partido, o povo constroi uma sociedade de igualdade e prosperidade para todos.</p>
                  <p>A burocracia sovietica e o pilar da ordem e do progresso. Cada camarada trabalha em harmonia, guiado pelos principios do socialismo cientifico.</p>
                  <p>O camarada Pobedonossikov, dedicado servidor do Estado, personifica o compromisso inabalavel com a causa revolucionaria.</p>
                  <p>O futuro comunista aguarda todos nos. A URSS lidera o caminho para a sociedade sem classes.</p>
                </div>
              </div>
            }
          >
            <div className="p-8 md:p-12 text-center">
              <p className="text-label text-soviet-light mb-4">A VERDADE POR TRAS DA PROPAGANDA</p>
              <h4 className="text-display text-display-sm text-parchment mb-6">O Banho — Maiakovski</h4>
              <div className="space-y-3 text-body text-parchment/80 max-w-2xl mx-auto text-left">
                  <p><strong className="text-parchment">Nova Aristocracia:</strong> A burocracia recriou a hierarquia czarista com novos nomes. Camarada virou titulo de elite, nao igualdade. Privilégios consolidados — carros, apartamentos, acesso.</p>
                  <p><strong className="text-parchment">Nacionalismo Vazio:</strong> O internacionalismo da revolucao foi abandonado pelo socialismo em um so pais. Discursos sobre gloria sovietica — performance sem substancia.</p>
                  <p><strong className="text-parchment">Censura:</strong> Artistas criticos sao perseguidos, mesmo sendo revolucionarios. O Banho foi chamado de difamacao do Estado. Teatros cancelaram apresentacoes.</p>
                  <p><strong className="text-parchment">Traicao dos Ideais:</strong> Os que prometeram destruir a opressao reproduziram a mesma opressao. O futuro comunista REJEITA o presente sovietico.</p>
                  <p><strong className="text-parchment">O Colapso (1991):</strong> A URSS cai exatamente pelas contradicoes que Maiakovski denunciou: burocracia corrupta, nacionalismo vazio, traicao aos ideais fundadores.</p>
                  <p className="text-soviet-light italic border-l-2 border-soviet/40 pl-4 mt-6">Nacionalismo burocratizado = imperialismo com bandeira diferente. A opressao muda de discurso, mas permanece opressao.</p>
                </div>
            </div>
          </MaskContainer>
        </div>
      </div>
    </section>
  );
};
export default ImperiosSection;
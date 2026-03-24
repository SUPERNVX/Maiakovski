import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CityToggle from "../components/CityToggle";
import { MaskContainer } from "../components/ui/SvgMaskEffect";
import { getAssetPath } from "../lib/utils";

const ImperiosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="imperios">
      <div className="section-warm py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <span className="text-label text-soviet block mb-6">SEÇÃO 02</span>
          <h2 className="text-display text-display-size text-ink max-w-5xl">Dois Impérios,<br />Duas Críticas</h2>
          <p className="text-body text-umber mt-8 max-w-xl">Análise das duas obras centrais que demonstram a crítica anti-imperialista de Maiakovski contra os EUA e a URSS.</p>
        </motion.div>
      </div>
      <div className="relative w-full bg-black overflow-hidden py-12 md:py-24 flex justify-center">
        <div className="relative w-full max-w-[600px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-parchment/10">
          <video 
            src={getAssetPath("/cidades.mp4")} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-display text-display-sm text-parchment mb-1">Moscou contra Nova York</h3>
            <p className="text-label text-parchment/50">1925</p>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 section-light"><div className="col-prose"><p className="text-body text-ink/80 mb-8">Em 1925, Maiakovski parte de Moscou rumo às Américas. Ele vai como poeta soviético, mas retorna como observador crítico de DOIS impérios.</p></div><CityToggle /></div>
      <div className="py-24 md:py-32 section-warm"><div className="px-8 md:px-16 lg:px-24"><span className="text-label text-soviet block mb-6">SEÇÃO 02.2</span><h3 className="text-display text-display-size text-ink mb-12">Brooklyn<br />Bridge</h3><div className="col-prose space-y-6 mb-12"><p className="text-body text-ink/80"><strong className="text-ink font-medium">A Admiração:</strong> Maiakovski fica genuinamente impressionado pela engenharia moderna.</p><p className="text-body text-ink/80"><strong className="text-ink font-medium">A Denúncia:</strong> Mas o poeta questiona o preço humano desse progresso.</p></div>        <div className="w-full h-[40vh] md:h-[60vh] mb-12 rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <img src={getAssetPath("/Brooklyn%20Bridge.webp")} alt="Brooklyn Bridge 1925" className="w-full h-full object-cover" />
        </div><motion.blockquote className="max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-ink/60 text-center leading-tight">&quot;Ponte de Brooklyn — sim, é uma coisa!&quot;</p></motion.blockquote></div></div>
      <div className="py-24 md:py-32 section-dark"><div className="px-8 md:px-16 lg:px-24"><span className="text-label text-soviet-light block mb-6">SEÇÃO 02.3</span><h3 className="text-display text-display-size text-parchment mb-12">Black and<br />White</h3><div className="col-prose space-y-6 mb-12"><p className="text-body text-parchment/70"><strong className="text-parchment font-medium">O Poema Mais Brutal:</strong> Escrito após visita a Cuba em 1925.</p><p className="text-body text-parchment/70"><strong className="text-parchment font-medium">Racismo Estrutural:</strong> O negro trabalha. O branco lucra.</p></div><motion.blockquote className="max-w-3xl mx-auto my-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><p className="text-display text-display-sm text-parchment/50 text-center leading-tight">&quot;À noite, o negro não pode sentar-se no banco do parque.&quot;</p></motion.blockquote></div></div>
      <div className="py-24 md:py-32 section-mid">
        <div className="px-8 md:px-16 lg:px-24">
          <span className="text-label text-soviet-light block mb-6">SEÇÃO 02.4</span>
          <h3 className="text-display text-display-size text-parchment mb-12">O Banho</h3>
          <p className="text-body text-parchment/40 col-prose mb-8">Passe o mouse sobre o texto abaixo.</p>
          <MaskContainer
            className="min-h-[600px] max-w-5xl mx-auto rounded-2xl border border-parchment/10"
            size={40}
            revealSize={800}
            revealText={
              <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center h-full">
                <h4 className="text-display text-2xl md:text-4xl text-soviet-light mb-8 uppercase tracking-widest">A União Soviética: O Futuro Radiante</h4>
                <div className="space-y-6 text-xl md:text-2xl font-sans font-bold text-parchment max-w-3xl mx-auto leading-tight italic">
                  <p>A União Soviética representa o futuro brilhante da humanidade! Sob a liderança sábia do Partido, o povo constrói uma sociedade de absoluta igualdade e prosperidade!</p>
                  <p>A burocracia soviética é o inabalável pilar da ordem e do progresso humano! Cada camarada trabalha em perfeita harmonia!</p>
                  <p>O futuro comunista aguarda todos nós! A URSS lidera o caminho para a glória eterna da classe operária!</p>
                </div>
              </div>
            }
          >
            <div className="p-8 md:p-12 text-center h-full flex flex-col justify-center">
              <p className="text-label text-soviet-light mb-8 tracking-[0.3em]">A VERDADE POR TRÁS DA PROPAGANDA</p>
              <div className="space-y-4 text-body text-parchment/80 max-w-3xl mx-auto text-left">
                  <p><strong className="text-parchment">Nova Aristocracia:</strong> A burocracia recriou a hierarquia czarista com novos nomes. Camarada virou título de elite, não igualdade. Privilégios consolidados — carros, apartamentos, acesso.</p>
                  <p><strong className="text-parchment">Nacionalismo Vazio:</strong> O internacionalismo da revolução foi abandonado pelo socialismo em um só país. Discursos sobre a glória soviética — performance sem substância.</p>
                  <p><strong className="text-parchment">Censura:</strong> Artistas críticos são perseguidos, mesmo sendo revolucionários. O Banho foi chamado de difamação do Estado. Teatros cancelaram apresentações.</p>
                  <p><strong className="text-parchment">Traição dos Ideais:</strong> Os que prometeram destruir a opressão reproduziram a mesma opressão. O futuro comunista REJEITA o presente soviético.</p>
                  <p><strong className="text-parchment">O Colapso (1991):</strong> A URSS cai exatamente pelas contradições que Maiakovski denunciou: burocracia corrupta, nacionalismo vazio, traição aos ideais fundadores.</p>
                  <p className="text-soviet-light italic border-l-2 border-soviet/40 pl-4 mt-8 text-lg">Nacionalismo burocratizado = imperialismo com bandeira diferente. A opressão muda de discurso, mas permanece opressão.</p>
                </div>
            </div>
          </MaskContainer>
        </div>
      </div>
    </section>
  );
};
export default ImperiosSection;
import ScrollExpandHero from "../components/ui/ScrollExpandHero";

const HeroSection = () => {
  return (
    <div id="hero">
      <ScrollExpandHero
        mediaType="video"
        mediaSrc=""
        bgImageSrc=""
        title="Maiakovski Dois Imperios"
        date="1893 — 1930"
        scrollToExpand="Role para expandir"
        textBlend={false}
      >
        <div className="col-prose text-center">
          <p className="text-body text-umber mb-8">
            Vladimir Maiakovski (1893-1930) foi um dos mais importantes poetas e dramaturgos da vanguarda russa,
            figura central do movimento futurista sovietico. Nascido na Georgia, entao parte do Imperio Russo,
            vivenciou desde jovem as contradicoes do imperialismo czarista e, posteriormente, as tensoes do projeto socialista sovietico.
          </p>
          <div className="divider-gold mx-auto mb-6" />
          <div className="flex justify-center gap-8 text-label text-sienna">
            <span>Poeta</span>
            <span className="text-umber">·</span>
            <span>Dramaturgo</span>
            <span className="text-umber">·</span>
            <span>Revolucionario</span>
          </div>
        </div>
      </ScrollExpandHero>
    </div>
  );
};
export default HeroSection;
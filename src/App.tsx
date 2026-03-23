import VerticalNav from "./components/VerticalNav";
import HeroSection from "./sections/HeroSection";
import PoetaSection from "./sections/PoetaSection";
import ImperiosSection from "./sections/ImperiosSection";
import PropagandaSection from "./sections/PropagandaSection";
import RostaSection from "./sections/RostaSection";
import SoftPowerSection from "./sections/SoftPowerSection";
import LegadoSection from "./sections/LegadoSection";

function App() {
  return (
    <>
      <div className="grain-overlay" />
      <VerticalNav />
      <main className="ml-16">
        <HeroSection />
        <PoetaSection />
        <ImperiosSection />
        <PropagandaSection />
        <RostaSection />
        <SoftPowerSection />
        <LegadoSection />
        <footer className="section-dark py-12 text-center border-t border-parchment/5">
          <p className="text-label text-parchment/15">Maiakovski — Dois Imperios, Uma Voz</p>
        </footer>
      </main>
    </>
  );
}

export default App;
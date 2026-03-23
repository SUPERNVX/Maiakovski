import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "poeta", label: "O Poeta" },
  { id: "imperios", label: "Imperios" },
  { id: "propaganda", label: "Propaganda" },
  { id: "softpower", label: "Soft Power" },
  { id: "legado", label: "Legado" },
];

const VerticalNav = () => {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(dh > 0 ? st / dh : 0);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActive(sections[i].id);
            const bg = getComputedStyle(el).backgroundColor;
            setIsDark(bg !== "rgb(245, 239, 231)" && bg !== "rgb(243, 230, 208)");
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const dotColor = isDark ? "bg-parchment/30" : "bg-ink/20";
  const dotActive = isDark ? "bg-gold" : "bg-soviet";
  const lineColor = isDark ? "bg-parchment/10" : "bg-ink/10";
  const progressColor = isDark ? "bg-gold/60" : "bg-soviet/60";
  const labelColor = isDark ? "text-gold" : "text-soviet";

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1">
      <div className={"absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px " + lineColor} />
      <motion.div className={"absolute left-1/2 -translate-x-1/2 top-0 w-px " + progressColor} style={{ height: progress * 100 + "%" }} />
      {sections.map((s) => (
        <button key={s.id} onClick={() => goTo(s.id)} className="relative group flex items-center gap-3 py-2" title={s.label}>
          <motion.div className={"w-1.5 h-1.5 rounded-full transition-all duration-500 " + (active === s.id ? dotActive + " scale-150" : dotColor + " hover:bg-umber")} layout />
          <span className={"absolute left-6 whitespace-nowrap text-[0.6rem] tracking-[0.25em] uppercase font-medium transition-all duration-500 pointer-events-none " + (active === s.id ? "opacity-100 translate-x-0 " + labelColor : "opacity-0 -translate-x-3 " + (isDark ? "text-umber" : "text-sienna"))}>{s.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default VerticalNav;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative h-[150vh] bg-ink overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-soviet)_0%,_transparent_70%)] blur-3xl" />
        </div>
        
        <motion.div style={{ opacity }} className="relative z-10 text-center w-full max-w-7xl flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-parchment/40 tracking-[0.4em] uppercase mb-12"
          >
            1893 — 1930
          </motion.p>
          
          <div className="flex flex-col gap-4 mb-16 w-full items-center">
            <motion.h1 
              style={{ x: xLeft }}
              className="text-display text-[clamp(4rem,12vw,15rem)] text-parchment leading-[0.8] uppercase whitespace-nowrap"
            >
              Maiakovski
            </motion.h1>
            <motion.h2 
              style={{ x: xRight }}
              className="text-display text-[clamp(2.5rem,8vw,10rem)] text-soviet-light leading-[0.8] uppercase whitespace-nowrap"
            >
              Dois Impérios
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <span className="text-label text-parchment/60 tracking-[0.3em]">Poeta</span>
            <span className="w-1.5 h-1.5 bg-soviet rotate-45" />
            <span className="text-label text-parchment/60 tracking-[0.3em]">Dramaturgo</span>
            <span className="w-1.5 h-1.5 bg-soviet rotate-45" />
            <span className="text-label text-parchment/60 tracking-[0.3em]">Revolucionário</span>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-24 bg-gradient-to-b from-soviet to-transparent mx-auto" />
          <p className="text-[0.6rem] text-parchment/20 tracking-[0.5em] uppercase mt-4">Role para baixo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
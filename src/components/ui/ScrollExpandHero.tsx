import { useEffect, useRef, useState, type ReactNode, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Refs para valores atualizados sem recriar handlers
  const scrollProgressRef = useRef(scrollProgress);
  const mediaFullyExpandedRef = useRef(mediaFullyExpanded);
  const animationFrameRef = useRef<number | null>(null);
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    mediaFullyExpandedRef.current = mediaFullyExpanded;
  }, [mediaFullyExpanded]);

  // Reset state quando mediaType mudar - necessario para sincronizar com estado externo
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
    });
    return () => cancelAnimationFrame(timer);
  }, [mediaType]);

  // Handler de wheel com throttle manual via requestAnimationFrame
  const handleWheel = useCallback((e: WheelEvent) => {
    const now = Date.now();
    const throttleLimit = 16; // ~60fps
    
    if (now - lastWheelTimeRef.current < throttleLimit) {
      return;
    }
    lastWheelTimeRef.current = now;

    const currentExpanded = mediaFullyExpandedRef.current;
    const currentProgress = scrollProgressRef.current;

    if (currentExpanded && e.deltaY < 0 && window.scrollY <= 5) {
      setMediaFullyExpanded(false);
    } else if (!currentExpanded) {
      e.preventDefault();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(currentProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        animationFrameRef.current = null;
      });
    }
  }, []);

  // Handler de touch
  const touchStartYRef = useRef<number | null>(null);
  const lastTouchTimeRef = useRef(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const now = Date.now();
    const throttleLimit = 16;
    
    if (now - lastTouchTimeRef.current < throttleLimit) {
      return;
    }
    lastTouchTimeRef.current = now;

    if (touchStartYRef.current === null) return;
    
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartYRef.current - touchY;
    const currentExpanded = mediaFullyExpandedRef.current;
    const currentProgress = scrollProgressRef.current;

    if (currentExpanded && deltaY < -20 && window.scrollY <= 5) {
      setMediaFullyExpanded(false);
      e.preventDefault();
    } else if (!currentExpanded) {
      e.preventDefault();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollDelta = deltaY * (deltaY < 0 ? 0.008 : 0.005);
        const newProgress = Math.min(Math.max(currentProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        touchStartYRef.current = touchY;
        animationFrameRef.current = null;
      });
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchStartYRef.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { w, h, tx } = useMemo(() => {
    const w = 300 + scrollProgress * (isMobile ? 650 : 1250);
    const h = 400 + scrollProgress * (isMobile ? 200 : 400);
    const tx = scrollProgress * (isMobile ? 180 : 150);
    return { w, h, tx };
  }, [scrollProgress, isMobile]);

  const firstWord = title ? title.split(" ")[0] : "";
  const rest = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center min-h-[100dvh]">
        <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 - scrollProgress }}>
          {bgImageSrc ? <img src={bgImageSrc} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-ink" />}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden" style={{ width: w + "px", height: h + "px", maxWidth: "95vw", maxHeight: "85vh", boxShadow: "0 0 80px rgba(178,34,34,0.1)" }}>
              {mediaType === "video" ? (
                mediaSrc ? (
                  <div className="relative w-full h-full">
                    <video src={mediaSrc} poster={posterSrc} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" />
                    <motion.div className="absolute inset-0 bg-black/30 rounded-xl" animate={{ opacity: 0.5 - scrollProgress * 0.3 }} />
                  </div>
                ) : (
                  <div className="placeholder-video w-full h-full rounded-xl flex flex-col gap-3 items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    <span className="text-sm">VIDEO PLACEHOLDER</span>
                  </div>
                )
              ) : (
                mediaSrc ? <img src={mediaSrc} alt={title || ""} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-xl" /> : <div className="placeholder-image w-full h-full rounded-xl">IMAGE PLACEHOLDER</div>
              )}
            </div>
            <div className={"flex items-center justify-center text-center relative z-10 flex-col" + (textBlend ? " mix-blend-difference" : "")}>
              {date && <p className="text-lg text-parchment/60 tracking-widest uppercase mb-2" style={{ transform: "translateX(-" + tx + "vw)" }}>{date}</p>}
              <motion.h2 className="text-display text-display-size font-bold text-parchment tracking-tight" style={{ fontFamily: "Dirtyline36Daysoftype2022, sans-serif", transform: "translateX(-" + tx + "vw)" }}>{firstWord}</motion.h2>
              <motion.h2 className="text-display text-display-size font-bold text-parchment tracking-tight" style={{ fontFamily: "Dirtyline36Daysoftype2022, sans-serif", transform: "translateX(" + tx + "vw)" }}>{rest}</motion.h2>
              {scrollToExpand && <p className="text-parchment/40 text-sm tracking-wider mt-4" style={{ transform: "translateX(" + tx + "vw)" }}>{scrollToExpand}</p>}
            </div>
          </div>
          <motion.section className="w-full px-8 py-10 md:px-16 lg:py-20" initial={{ opacity: 0 }} animate={{ opacity: showContent ? 1 : 0 }} transition={{ duration: 0.7 }}>
            {children}
          </motion.section>
        </div>
      </section>
    </div>
  );
};
export default ScrollExpandHero;

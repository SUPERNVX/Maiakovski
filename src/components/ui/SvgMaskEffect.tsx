"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateMousePosition = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", updateMousePosition);
    return () => { el.removeEventListener("mousemove", updateMousePosition); };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundColor: "#3B2417" }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 [mask-image:url(/Maiakovski/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        style={{ backgroundColor: "#1A1410" }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 w-full"
        >
          {children}
        </div>
      </motion.div>
      <div className="relative z-0 flex min-h-[400px] w-full items-center justify-center">
        {revealText}
      </div>
    </div>
  );
};
export default MaskContainer;
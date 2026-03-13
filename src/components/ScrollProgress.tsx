"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="scroll-progress" 
      style={{ 
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "var(--accent-teal)",
        transformOrigin: "0%",
        zIndex: 10001
      }} 
    />
  );
}

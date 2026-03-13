"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const line1 = "A Heritage of";
  const line2 = "Legal Excellence";

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.heroGrid}>
          {/* Main Content Area */}
          <div className={styles.mainContent}>
            <div className={styles.taglineWrapper}>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.8 }}
                className={styles.line} 
              />
              <span className={styles.tagline}>MATAKA LEGAL PRACTICE</span>
            </div>
            
            <h1 className={styles.title}>
              <div className={styles.titleLine}>
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    className={styles.char}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              <div className={styles.titleLine}>
                {line2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    className={`${styles.char} ${styles.accent}`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={styles.description}
            >
              Providing outstanding, competitive, and timely legal services in Zimbabwe across all practice areas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={styles.actions}
            >
              <button className={styles.primaryBtn}>
                SCHEDULE A CONSULTATION <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Asymmetrical Visual Area */}
          <div className={styles.visualArea}>
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className={styles.imageMain}
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                alt="Justice" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={styles.floatingCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.pulse} />
                <span>ACTIVE COUNSEL</span>
              </div>
              <p className={styles.cardText}>Innovative, client-focused advocacy navigating complex legal landscapes.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

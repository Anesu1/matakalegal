"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./FounderQuote.module.css";

const quote = "Our vision is to set the benchmark for excellence in the legal industry through innovative, client-focused advocacy that creates enduring value for all stakeholders.";

export default function FounderQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = quote.split(" ");

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.layout}>
          <div className={styles.imageArea}>
            <motion.div 
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
                opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
              }}
              className={styles.imageInner}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Reuben Mataka" 
              />
            </motion.div>
            <div className={styles.portraitLabel}>FOUNDER</div>
          </div>

          <div className={styles.textArea}>
            <div className={styles.quoteWrapper}>
              {words.map((word, i) => {
                const start = (i / words.length) * 0.4;
                const end = ((i + 1) / words.length) * 0.4 + 0.1;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                
                return (
                  <motion.span key={i} style={{ opacity }} className={styles.word}>
                    {word}&nbsp;
                  </motion.span>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.authorDetail}
            >
                          <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className={styles.name}
                >
                  Reuben Mataka
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className={styles.role}
                >
                  Founder, Principal Partner
                </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

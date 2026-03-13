"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import styles from "./Stats.module.css";

const stats = [
  { value: 20, suffix: "+", label: "YEARS OF EXCELLENCE", desc: "A storied history of legal brilliance." },
  { value: 1000, suffix: "+", label: "CASES RESOLVED", desc: "Navigating complexity with surgical precision." },
  { value: 500, suffix: "+", label: "PROPERTY TRANSFERS", desc: "Ensuring secure and timely conveyancing." }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const MathCountThreshold = duration / 16;
      const increment = end / MathCountThreshold;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className={styles.stats}>
      <div className={`${styles.container} container`}>
        <div className={styles.stickyLayout}>
          <div className={styles.sidebar}>
            <div className={styles.stickyBox}>
              <div className={styles.progressLine}>
                <motion.div 
                  className={styles.progressFill} 
                  style={{ height: progressHeight }}
                />
              </div>

              <div className={styles.sidebarContent}>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={styles.label}
                >
                  OUR IMPACT
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={styles.title}
                >
                  Transforming Legal <br /> Challenges into Success
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={styles.desc}
                >
                  With over a decade of dedication, we've built a legacy of trust and excellence in the Zimbabwean legal landscape.
                </motion.p>
              </div>
            </div>
          </div>

          <div className={styles.scrollingList}>
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const StatItem = ({ stat, index }: { stat: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={styles.statItem}
    >
      <div className={styles.numberWrapper}>
        <Counter value={stat.value} suffix={stat.suffix} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.statLabel}>{stat.label}</h3>
        <p className={styles.statDesc}>{stat.desc}</p>
      </div>
    </motion.div>
  );
};

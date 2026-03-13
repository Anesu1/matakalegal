"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";

const missionText = "To create and unlock value for our stakeholders by delivering tailored, enduring legal solutions. We are committed to exceeding expectations through excellence, integrity, and a client-focused approach.";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScroll = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main ref={containerRef} className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div style={{ y: heroScroll, opacity: heroOpacity }} className={styles.heroContent}>
          <span className={styles.label}>OUR HERITAGE</span>
          <h1 className={styles.title}>Legal Excellence <br /> Since 2018</h1>
        </motion.div>
        <div className={styles.heroImageWrapper}>
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            src="/images/team-1024x845.webp" 
            alt="Mataka Legal Practice Team" 
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Philosophy Section - Sticky Reveal */}
      <section className={styles.philosophy}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyLeft}>
                <h2 className={styles.secTitle}>Our Core <br /> Philosophy</h2>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>15+</span>
                    <span className={styles.statLabel}>Years of Impact</span>
                  </div>
                </div>
              </div>
              <div className={styles.philosophyRight}>
                <p className={styles.secDesc}>
                  Mataka Legal Practice (MLP) is a registered law firm founded in Zimbabwe by Reuben Mataka in January 2018 under the Legal Practitioners Act (Chapter 27:07). We specialize in providing comprehensive legal services across a wide range of disciplines, maintaining the highest standards of professional integrity.
                </p>
                <div className={styles.values}>
                  {["Speed", "Quality", "Accuracy", "Efficiency", "Flexibility"].map((val, idx) => (
                    <motion.div 
                      key={val}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={styles.valueItem}
                    >
                      <span className={styles.valueIdx}>0{idx + 1}</span>
                      <span className={styles.valueName}>{val}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Text Reveal */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionWrapper}>
            <p className={styles.revealText}>
              {missionText.split(" ").map((word, i) => (
                <span key={i} className={styles.wordWrapper}>
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                    className={styles.word}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

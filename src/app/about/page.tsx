"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";

const missionText = "To create and unlock value for our stakeholders by delivering tailored, enduring legal solutions. We are committed to exceeding expectations through excellence, integrity, and a client-focused approach.";

const disciplines = [
  "Litigation", "Conveyancing", "Family Law", "Labor Law", 
  "Real Estate", "Administration", "Estate Planning", 
  "Intellectual Property", "Notarial Services", "Commercial Practice"
];

const pillars = [
  {
    title: "Specialized Integrity",
    text: "We provide our legal services with the highest level of specialized integrity, ensuring that every interaction is marked by professionalism, ethical practice, and a deep commitment to excellence."
  },
  {
    title: "Client-Centric Service",
    text: "We are dedicated to ensuring our clients experience complete satisfaction. Our team offers impartial, courteous, and expert advice designed to meet each client’s unique needs. We strive to enhance the speed, accuracy, and efficiency of our services while maintaining the flexibility required to adapt to individual circumstances."
  },
  {
    title: "Results-Driven Solutions",
    text: "As a dynamic, solution-oriented law firm, we focus on delivering measurable and lasting outcomes. Our approach combines innovative legal strategies with pragmatic execution to achieve optimal results and provide true peace of mind for our clients."
  }
];

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
          <span className={styles.label}>ESTABLISHED 2018</span>
          <h1 className={styles.title}>Mataka Legal <br /> Practice</h1>
        </motion.div>
        <div className={styles.heroImageWrapper} style={{height:500}}>
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

      {/* About Us Section */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyLeft}>
              <h2 className={styles.secTitle}>Excellence & <br /> Innovation</h2>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>MLP</span>
                  <span className={styles.statLabel}>Registered Law Firm</span>
                </div>
              </div>
            </div>
            <div className={styles.philosophyRight}>
              <p className={styles.secDesc}>
                Mataka Legal Practice [MLP] is a registered law firm and was established by Reuben Mataka in January 2018, in terms of the Legal Practitioners Act (Chapter 27:07).
              </p>
              <p className={styles.secDesc} style={{ marginTop: '-40px' }}>
                At Mataka Legal Practice, we specialize in providing comprehensive legal services across a wide range of disciplines. By leveraging a rich heritage of excellence and a commitment to innovation, we have built a dynamic firm dedicated to delivering effective legal solutions and maintaining the highest standards of professional integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className={styles.philosophy} style={{ borderTop: 'none', paddingTop: 0 }}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyLeft}>
              <h2 className={styles.secTitle}>Our <br /> Expertise</h2>
            </div>
            <div className={styles.philosophyRight}>
              <div className={styles.values}>
                {disciplines.map((val, idx) => (
                  <motion.div 
                    key={val}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
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
      </section>

      {/* Client Service Section */}
      <section className={styles.philosophy} style={{ borderTop: 'none', background: 'white' }}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyLeft}>
              <h2 className={styles.secTitle}>Bespoke <br /> Service</h2>
            </div>
            <div className={styles.philosophyRight}>
              <p className={styles.secDesc}>
                We believe that exceptional legal practice is not just about knowledge but also about understanding our clients’ unique needs. That’s why we place client service at the center of everything we do.
              </p>
              <p className={styles.secDesc} style={{ marginTop: '-40px' }}>
                Our approach is both proactive and personalized. We take the time to listen, assess, and develop strategies that address your specific legal challenges, ensuring that every decision is informed by a thorough understanding of your circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionWrapper}>
            <span className={styles.label} style={{ textAlign: 'center' }}>OUR VISION</span>
            <p className={styles.revealText} style={{ marginBottom: '80px', textAlign: 'center', justifyContent: 'center' }}>
              To set the benchmark for excellence in the legal industry through innovative, client-focused advocacy, delivering tailored solutions with unwavering integrity and professionalism
            </p>
            
            <span className={styles.label} style={{ textAlign: 'center' }}>OUR MISSION</span>
            <p className={styles.revealText}>
              {missionText.split(" ").map((word, i) => (
                <span key={i} className={styles.wordWrapper}>
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    className={styles.word}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </p>

            <div className={styles.missionPillars}>
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={styles.pillar}
                >
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarText}>{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

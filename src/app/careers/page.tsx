"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, GraduationCap, Layout, Users } from "lucide-react";
import styles from "./Careers.module.css";

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>CAREERS</span>
            <h1 className={styles.title}>Grow With Us</h1>
            <p className={styles.heroDesc}>
              Success at Mataka Legal Practice starts with an outstanding team. We foster a culture of innovation, collaboration, and professional advancement.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.culture}>
        <div className="container">
          <div className={styles.cultureGrid}>
            <div className={styles.cultureItem}>
              <GraduationCap size={40} className={styles.icon} />
              <h3 className={styles.cultureTitle}>Mentorship</h3>
              <p className={styles.cultureDesc}>We prioritize the professional growth of our associates through direct mentorship from our founding partners.</p>
            </div>
            <div className={styles.cultureItem}>
              <Layout size={40} className={styles.icon} />
              <h3 className={styles.cultureTitle}>Innovation</h3>
              <p className={styles.cultureDesc}>We leverage modern legal-tech to streamline our processes and deliver efficient solutions for our clients.</p>
            </div>
            <div className={styles.cultureItem}>
              <Users size={40} className={styles.icon} />
              <h3 className={styles.cultureTitle}>Collaboration</h3>
              <p className={styles.cultureDesc}>Our multidisciplinary approach means you'll work across various practice areas with a supportive team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaBox}
          >
            <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
            <p className={styles.ctaDesc}>We are always looking for talented legal practitioners to join our growing firm.</p>
            <a href="mailto:careers@matakalegal.co.zw" className={styles.ctaBtn}>
              SEND YOUR CV <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

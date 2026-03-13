"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Gavel, ShieldCheck, Users2, FileText, Pickaxe, Handshake, Scale, Building2 } from "lucide-react";
import styles from "./ServicesPage.module.css";

const services = [
  {
    icon: <Landmark size={40} />,
    title: "Property Law & Conveyancing",
    desc: "Comprehensive handling of real estate transactions, transfers, and mortgage bonds.",
    details: "Expertise in residential and commercial transfers, mortgage bond registration, and sectional title processing."
  },
  {
    icon: <Gavel size={40} />,
    title: "Civil Litigation & ADR",
    desc: "Expert representation in court and alternative dispute resolution methods.",
    details: "Strategy-focused litigation and mediation for commercial, civil, and corporate disputes."
  },
  {
    icon: <Scale size={40} />,
    title: "Criminal Law",
    desc: "Robust defense services for a wide range of criminal matters.",
    details: "Defending rights across the judicial spectrum with thorough investigation and expert advocacy."
  },
  {
    icon: <Users2 size={40} />,
    title: "Family Law & Divorce",
    desc: "Sensitive handling of matrimonial, maintenance, and inheritance issues.",
    details: "Compassionate legal support for divorce, custody, and matrimonial property division."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Intellectual Property",
    desc: "Protecting innovation through trademark, patent, and copyright law.",
    details: "Securing your intangible assets and navigating IPO regulations in Zimbabwe."
  },
  {
    icon: <FileText size={40} />,
    title: "Estate Administration",
    desc: "Management of wills, trusts, and deceased estates.",
    details: "Preserving family legacies through meticulous estate planning and administration."
  },
  {
    icon: <Handshake size={40} />,
    title: "Employment & Labour",
    desc: "Legal counsel for both employers and employees on workplace regulations.",
    details: "Navigating the Labour Act, retrenchments, and collective bargaining agreements."
  },
  {
    icon: <Building2 size={40} />,
    title: "Corporate Law",
    desc: "Empowering businesses with sound legal structures and compliance.",
    details: "M&A, company secretarial services, and corporate governance solutions."
  },
  {
    icon: <Pickaxe size={40} />,
    title: "Mining Law",
    desc: "Specialized legal support for the Zimbabwean mining sector.",
    details: "Advising on mining rights, joint ventures, and regulatory compliance in Zimbabwe's extractive industry."
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>OUR EXPERTISE</span>
            <h1 className={styles.title}>Practice Areas</h1>
            <p className={styles.heroDesc}>
              Tailored legal solutions designed to create and unlock value across a wide spectrum of legal disciplines in Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.listGrid}>
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={styles.serviceItem}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <div className={styles.serviceDetail}>{service.details}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

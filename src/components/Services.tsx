"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShieldCheck, Gavel, Building2, Landmark, Users2, FileText, Scale, Pickaxe } from "lucide-react";
import styles from "./Services.module.css";

const practiceAreas = [
  {
    icon: <Landmark size={32} />,
    title: "Property Law & Conveyancing",
    desc: "Our Conveyancing Department handles all aspects relating to property law in Zimbabwe, including notarial work.",
    details: ["Property Transfers", "Notarial Bonds", "Agreements of Sale"]
  },
  {
    icon: <Gavel size={32} />,
    title: "Civil Litigation & ADR",
    desc: "Focusing on disputes that either reach the High Court or are resolved by arbitration.",
    details: ["Commercial Disputes", "Arbitration", "High Court Matters"]
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Criminal Law",
    desc: "Expert legal representation involving rights of the accused and the criminal process.",
    details: ["Bail Applications", "Trials", "Pre-trial Hearings"]
  },
  {
    icon: <Users2 size={32} />,
    title: "Family Law & Divorce",
    desc: "Practical solutions to complex problems, protecting interests in difficult personal challenges.",
    details: ["Divorce Matters", "Child Custody", "Maintenance"]
  },
  {
    icon: <Pickaxe size={32} />,
    title: "Mining Law",
    desc: "Assisting investors in developing Zimbabwe's rich mineral wealth through expert legal counsel.",
    details: ["Investor Support", "Development", "Compliance"]
  },
  {
    icon: <FileText size={32} />,
    title: "Intellectual Property",
    desc: "Registration, protection, and litigation of trade marks, patents, and copyrights.",
    details: ["Trade Marks", "Patents", "Copyright"]
  },
  {
    icon: <Scale size={32} />,
    title: "Estate Planning",
    desc: "Dedicated department for estate planning, inheritance, trusts, and succession.",
    details: ["Wills", "Trusts", "Inheritance"]
  },
  {
    icon: <Building2 size={32} />,
    title: "Corporate Services",
    desc: "Expertise in company registrations, secretarial services, and statutory compliance.",
    details: ["Company Registration", "Statutory Returns", "Secretarial"]
  },
  {
    icon: <Landmark size={32} />,
    title: "Debt Recovery",
    desc: "Proven and effective approach to debt recovery using efficient practices.",
    details: ["Debt Collection", "Legal Action", "Recovery Strategy"]
  },
  {
    icon: <Users2 size={32} />,
    title: "Employment & Labour",
    desc: "Comprehensive and innovative advice on all aspects of employment-related issues.",
    details: ["Labour Disputes", "Contracts", "Retrenchments"]
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className={styles.services}>
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
                <span className={styles.label}>PRACTICE AREAS</span>
                <h2 className={styles.title}>Innovative Advocacy <br /> for a Modern World</h2>
                <p className={styles.headerDesc}>
                  Our expertise spans multiple disciplines, providing tailored legal solutions that create and unlock value for our clients.
                </p>
                
                <div className={styles.specialties}>
                  {["PRIVATE LAW", "COMMERCIAL", "LITIGATION"].map((cat) => (
                    <div key={cat} className={styles.catItem}>
                      <div className={styles.dot} />
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.scrollingContent}>
            <div className={styles.grid}>
              {practiceAreas.map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <span className={styles.cardNumber}>0{index + 1}</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  
                  <div className={styles.featureGrid}>
                    {item.details.map((detail, idx) => (
                      <div key={idx} className={styles.featureTag}>{detail}</div>
                    ))}
                  </div>

                  <button className={styles.cardLink}>
                    CASE DETAILS <ArrowUpRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


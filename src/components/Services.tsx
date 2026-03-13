"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShieldCheck, Gavel, Building2, Landmark, Users2, FileText, Scale, Pickaxe } from "lucide-react";
import styles from "./Services.module.css";

const practiceAreas = [
  {
    icon: <Landmark size={32} />,
    title: "Conveyancing & Securities",
    desc: "Seamless property transfers and robust security documentation.",
    details: ["Property Sales", "Mortgage Bonds", "Sectional Titles"]
  },
  {
    icon: <Gavel size={32} />,
    title: "Civil & Criminal Litigation",
    desc: "Strategic advocacy across all Zimbabwean court levels.",
    details: ["Commercial Disputes", "Criminal Defense", "Appeals"]
  },
  {
    icon: <Building2 size={32} />,
    title: "Corporate & Commercial",
    desc: "Empowering businesses with sound legal structures and compliance.",
    details: ["Company Secretarial", "M&A", "Governance"]
  },
  {
    icon: <Scale size={32} />,
    title: "Mining & Energy Law",
    desc: "Specialized legal support for the extractive industry sector.",
    details: ["Mining Rights", "Joint Ventures", "Compliance"]
  },
  {
    icon: <Users2 size={32} />,
    title: "Labour & Employment",
    desc: "Navigating workplace relations with precision and fairness.",
    details: ["Retrenchments", "Dispute Resolution", "Contracts"]
  },
  {
    icon: <FileText size={32} />,
    title: "Estate Administration",
    desc: "Preserving family legacies through meticulous planning.",
    details: ["Wills", "Trusts", "Deceased Estates"]
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


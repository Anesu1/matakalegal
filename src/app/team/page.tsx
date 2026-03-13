"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./TeamPage.module.css";

const team = [
  {
    name: "Reuben Mataka",
    role: "Senior Partner",
    image: "/images/Reuben-Mataka-Senior-Mataka-Legal-Practice-Partner.webp",
    desc: "A hardworking and dedicated Legal Practitioner (LLB Hons, LLM Cand), Reuben established Mataka Legal Practice in January 2018. Formerly Head Conveyancer at J. Mambara and Partners (2008-2017), he brings extensive expertise to the firm's strategic leadership."
  },
  {
    name: "Gregory Nyamupanedengu",
    role: "Partner",
    image: "/images/Gregory-Nyamupanedengu-Mataka-Legal-Practice-Partner.webp",
    desc: "A registered Legal Practitioner with the LSZ, Gregory heads the Litigation Department. With over 7 years of experience, he specializes in civil and criminal matters, arbitration, and labor law. He previously served as a legal advisor to various Parliamentary Portfolio Committees."
  },
  {
    name: "Nonhlanhla Ndlovu-Mataka",
    role: "Administrator",
    image: "/images/Nonhlanhla-Ndlovu-Mataka-Mataka-Legal-Practice-Administrator.webp",
    desc: "A courageous Legal Practitioner (LLB Hons, LLM Cand) responsible for firm management and the conveyancing department. Her extensive experience across Zimbabwe, Botswana, and South Africa ensures meticulous administration and high-quality legal support."
  }
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>OUR LEADERSHIP</span>
            <h1 className={styles.title}>The Minds Behind <br /> Mataka Legal</h1>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={styles.memberCard}
              >
                <div className={styles.imageWrapper}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />
                </div>
                <div className={styles.memberInfo}>
                  <h2 className={styles.memberName}>{member.name}</h2>
                  <span className={styles.memberRole}>{member.role}</span>
                  <p className={styles.memberDesc}>{member.desc}</p>
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

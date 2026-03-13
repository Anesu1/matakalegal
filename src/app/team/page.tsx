"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./TeamPage.module.css";

const team = [
  {
    name: "Reuben Mataka",
    role: "Founder & Principal Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    desc: "Over 15 years of experience in conveyancing, corporate law, and high-stakes litigation. Reuben leads the firm's strategic vision."
  },
  {
    name: "Gregory Nyamupanedengu",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    desc: "Renowned for litigation expertise and providing strategic legal counsel across all court levels in Zimbabwe."
  },
  {
    name: "Nonhlanla Ndlovu-Mataka",
    role: "Partner & Administrator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    desc: "Oversees firm management and the conveyancing department, specializing in transfers, bonds, and estates."
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

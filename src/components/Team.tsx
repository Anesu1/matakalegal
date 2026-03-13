"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import styles from "./Team.module.css";

const team = [
  {
    name: "Reuben Mataka",
    role: "Founder & Principal Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary legal strategist with 20+ years of excellence."
  },
  {
    name: "Gregory Nyamupanedengu",
    role: "Partner & Head of Litigation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "Veteran litigator defending stakes across all court levels."
  },
  {
    name: "Nonhlanla Ndlovu-Mataka",
    role: "Legal Practitioner | Conveyancer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Precision-focused expert in property law and securities."
  }
];

export default function Team() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <span className={styles.label}>OUR LEADERSHIP</span>
            <h2 className={styles.title}>The Minds Behind <br /> the Excellence</h2>
          </div>
          <p className={styles.headerDesc}>
            Our team brings together decades of specialized experience to provide you with the most comprehensive legal support in Zimbabwe.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.image} />
                <div className={styles.overlay}>
                  <p className={styles.bio}>{member.bio}</p>
                  <div className={styles.socials}>
                    <Linkedin size={20} className={styles.icon} />
                    <Mail size={20} className={styles.icon} />
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

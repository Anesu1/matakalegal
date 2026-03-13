"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import styles from "./Team.module.css";

const team = [
  {
    name: "Reuben Mataka",
    role: "Senior Partner",
    image: "/images/Reuben-Mataka-Senior-Mataka-Legal-Practice-Partner.webp",
    bio: "Hardworking and dedicated Legal Practitioner with extensive conveyancing expertise."
  },
  {
    name: "Gregory Nyamupanedengu",
    role: "Partner",
    image: "/images/Gregory-Nyamupanedengu-Mataka-Legal-Practice-Partner.webp",
    bio: "Litigation specialist focusing on civil, criminal, and labor law matters."
  },
  {
    name: "Nonhlanhla Ndlovu-Mataka",
    role: "Administrator",
    image: "/images/Nonhlanhla-Ndlovu-Mataka-Mataka-Legal-Practice-Administrator.webp",
    bio: "Lead administrator and legal practitioner managing global legal operations."
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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.content}>
            <span className={styles.label}>LET'S CONNECT</span>
            <h2 className={styles.title}>Secure Your <br /> Legal Future Today</h2>
            <p className={styles.description}>
              Join the hundreds of clients who trust Mataka Legal Practice for their most critical legal needs in Zimbabwe.
            </p>
            <Link href="/contact" className={styles.button}>
              GET STARTED <ArrowUpRight size={20} />
            </Link>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.circle} />
            <div className={styles.circleSmall} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

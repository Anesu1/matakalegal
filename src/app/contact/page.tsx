"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>GET IN TOUCH</span>
            <h1 className={styles.title}>Let's discuss <br /> your legal needs</h1>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.infoCol}>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} />
                <div>
                  <h3 className={styles.infoTitle}>Office</h3>
                  <p className={styles.infoText}>28 Northampton Crescent, <br /> Eastlea, Harare, Zimbabwe</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} />
                <div>
                  <h3 className={styles.infoTitle}>Phone</h3>
                  <p className={styles.infoText}>+263 242 746169 <br /> +263 242 749431</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Mail className={styles.icon} />
                <div>
                  <h3 className={styles.infoTitle}>Email</h3>
                  <p className={styles.infoText}>info@matakalegal.co.zw</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Clock className={styles.icon} />
                <div>
                  <h3 className={styles.infoTitle}>Opening Hours</h3>
                  <p className={styles.infoText}>Mon – Fri: 08:00 – 17:00</p>
                </div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.formCol}
            >
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Subject</label>
                <select>
                  <option>Conveyancing</option>
                  <option>Litigation</option>
                  <option>Corporate Law</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="How can we help you?" rows={6}></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

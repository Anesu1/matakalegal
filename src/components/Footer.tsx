"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

const MatakaLogo = () => (
  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 35L15 5L25 35" stroke="#204A67" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 25L18 25" stroke="#73B8B8" strokeWidth="4" strokeLinecap="round"/>
    <text x="35" y="25" fill="#204A67" style={{ font: "bold 22px Geist, sans-serif" }}>Mataka</text>
    <text x="35" y="38" fill="#73B8B8" style={{ font: "300 11px Geist, sans-serif", letterSpacing: "0.1em" }}>LEGAL PRACTICE</text>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brandArea}>
            <MatakaLogo />
            <p className={styles.brandDesc}>
              A dedicated firm providing outstanding, competitive, and timely legal services across a wide range of practice areas in Zimbabwe.
            </p>
            <div className={styles.socials}>
              <Link href="#"><Linkedin size={20} /></Link>
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Twitter size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>NAVIGATION</h4>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/team">Our Team</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>PRACTICE</h4>
              <Link href="#">Litigation</Link>
              <Link href="#">Conveyancing</Link>
              <Link href="#">Corporate Law</Link>
              <Link href="#">Intellectual Property</Link>
            </div>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>OFFICE</h4>
              <p>28 Northampton Crescent</p>
              <p>Eastlea, Harare, ZW</p>
              <p>+263 242 746169</p>
              <p>info@matakalegal.co.zw</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p>© 2026 MATAKA LEGAL PRACTICE. ALL RIGHTS RESERVED.</p>
          </div>
          <div className={styles.bottomRight}>
            <button onClick={scrollToTop} className={styles.scrollTop}>
              BACK TO TOP <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

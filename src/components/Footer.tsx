"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

const MatakaLogo = () => (
  <img 
    src="/images/logo.webp" 
    alt="Mataka Legal Practice" 
    style={{ height: "45px", width: "auto", objectFit: "contain" }} 
  />
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
              <Link href="/services">Property Law</Link>
              <Link href="/services">Civil Litigation</Link>
              <Link href="/services">Mining Law</Link>
              <Link href="/services">Estate Planning</Link>
            </div>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>OFFICE</h4>
              <p>28 Northampton Crescent</p>
              <p>Eastlea, Harare, Zimbabwe</p>
              <p>+263 242 746169 | 749431</p>
              <p>info@matakalegal.co.zw</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p>© 2026 MATAKA LEGAL PRACTICE. ALL RIGHTS RESERVED. WEBSITE BY KHUYAMEDIA</p>
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

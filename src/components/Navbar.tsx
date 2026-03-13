"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const MatakaLogo = () => (
  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 35L15 5L25 35" stroke="#204A67" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 25L18 25" stroke="#73B8B8" strokeWidth="4" strokeLinecap="round"/>
    <text x="35" y="25" fill="#204A67" style={{ font: "bold 22px Geist, sans-serif" }}>Mataka</text>
    <text x="35" y="38" fill="#73B8B8" style={{ font: "300 11px Geist, sans-serif", letterSpacing: "0.1em" }}>LEGAL PRACTICE</text>
  </svg>
);

const navLinks = [
  { name: "ABOUT US", href: "/about" },
  { name: "PRACTICE AREAS", href: "/services" },
  { name: "OUR TEAM", href: "/team" },
  { name: "CAREERS", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Harare",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${mobileMenuOpen ? styles.menuOpen : ""}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
          <MatakaLogo />
        </Link>

        {/* Desktop Links */}
        <div className={styles.desktopNav}>
          <div className={styles.timeLocation}>
            <span>HARARE – {time}</span>
          </div>
          <div className={styles.navLinks}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="/contact" className={styles.talkButton}>
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileOverlay}
          >
            <div className={styles.mobileLinks}>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>PRACTICE AREAS</Link>
              <Link href="/team" onClick={() => setMobileMenuOpen(false)}>OUR TEAM</Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>CAREERS</Link>
              <Link href="/contact" className={styles.mobileButton} onClick={() => setMobileMenuOpen(false)}>
                GET IN TOUCH
              </Link>
              <div className={styles.mobileTime}>HARARE – {time}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

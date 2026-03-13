"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Mataka Legal Practice provided exceptional counsel during our corporate restructuring. Their attention to detail and professional integrity are unmatched.",
    name: "Tinashe Mudau",
    role: "CEO, TechHarare"
  },
  {
    quote: "The conveyancing team handled our property portfolio with incredible speed and accuracy. They truly live up to their heritage of legal excellence.",
    name: "Farai Choga",
    role: "Real Estate Developer"
  },
  {
    quote: "Strategic, innovative, and client-focused. Reuben and his team navigated our complex litigation matter with precision and care.",
    name: "Nyasha Marere",
    role: "Director, Green Zimbabwe"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <div className={styles.introBox}>
            <p className={styles.introText}>
              Supporting our clients through a heritage of legal excellence. Every partnership is built on trust, professionalism and integrity.
            </p>
          </div>

          <div className={styles.sliderCol}>
            <div className={styles.sliderContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={styles.testimonial}
                >
                  <blockquote className={styles.quote}>
                    “{testimonials[current].quote}”
                  </blockquote>
                  <div className={styles.author}>
                    <h4 className={styles.name}>{testimonials[current].name}</h4>
                    <p className={styles.role}>{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.controls}>
              <button onClick={prev} className={styles.controlBtn} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className={styles.controlBtn} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Heart, Sparkles, Target } from "lucide-react";
import styles from "./Careers.module.css";

const cultureBenefits = [
  {
    icon: <Sparkles size={32} />,
    title: "Career Growth",
    desc: "We offer continuous learning opportunities, mentorship programs, and tailored career paths to help you reach your fullest potential."
  },
  {
    icon: <Target size={32} />,
    title: "Our Culture",
    desc: "Join a supportive team where your ideas matter and collaboration drives success. We foster a culture where innovative ideas are valued."
  },
  {
    icon: <Heart size={32} />,
    title: "Employee Benefits",
    desc: "Enjoy a comprehensive benefits package, flexible working arrangements, and significant investment in your ongoing professional development."
  }
];

const applicationSteps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Send your resume and cover letter to careers@matakalegal.co.zw or use our online application form. Tell us about your aspirations."
  },
  {
    num: "02",
    title: "Screening",
    desc: "Our HR team will review applications and contact candidates who meet our qualifications for an initial interview."
  },
  {
    num: "03",
    title: "Interview Process",
    desc: "Participate in a series of interviews including skills assessments, panel interviews, and discussions with key team members."
  },
  {
    num: "04",
    title: "Offer",
    desc: "Successful candidates will receive a formal offer outlining compensation, benefits, and the next steps in onboarding."
  }
];

const faqs = [
  {
    q: "What qualifications do you require?",
    a: "We seek candidates with a relevant legal background (LLB Hons) or equivalent experience. Specific requirements vary by position and role."
  },
  {
    q: "What benefits can I expect?",
    a: "We offer competitive compensation, a robust benefits package, flexible working arrangements, and structured professional development."
  },
  {
    q: "How can I apply for an open position?",
    a: "Applications can be submitted via our online form or by emailing your resume and cover letter to careers@matakalegal.co.zw."
  }
];

export default function CareersPage() {
  const whyRef = useRef(null);
  const howRef = useRef(null);
  
  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ["start center", "end end"]
  });

  const { scrollYProgress: howProgress } = useScroll({
    target: howRef,
    offset: ["start center", "end end"]
  });

  const whyHeight = useTransform(whyProgress, [0, 1], ["0%", "100%"]);
  const howHeight = useTransform(howProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.label}
            >
              CAREERS AT MATAKA LEGAL
            </motion.span>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  style={{ display: "block" }}
                >
                  Shape the Future
                </motion.span>
              </span>
              <span className={styles.titleLine}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                  style={{ display: "block", color: "var(--accent-teal)" }}
                >
                  of Legal Excellence
                </motion.span>
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={styles.heroDesc}
            >
              At Mataka Legal Practice, we believe that our success starts with an outstanding team. Join us in setting new benchmarks in the legal industry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Sticky Layout */}
      <section ref={whyRef} className={styles.section}>
        <div className="container">
          <div className={styles.stickyLayout}>
            <div className={styles.sidebar}>
              <div className={styles.stickyBox}>
                <div className={styles.progressLine}>
                  <motion.div 
                    className={styles.progressFill} 
                    style={{ height: whyHeight }}
                  />
                </div>
                <div className={styles.sidebarContent}>
                  <span className={styles.label}>WHY JOIN US</span>
                  <h2 className={styles.secTitle}>A Culture of <br /> Innovation</h2>
                  <p className={styles.secDesc}>
                    We foster a collaborative work environment where professional advancement and innovative advocacy go hand in hand.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.scrollingContent}>
              <div className={styles.cultureGrid}>
                {cultureBenefits.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={styles.cultureItem}
                  >
                    <div className={styles.icon}>{item.icon}</div>
                    <div className={styles.cultureContent}>
                      <h3 className={styles.cultureTitle}>{item.title}</h3>
                      <p className={styles.cultureDesc}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process - Sticky Layout */}
      <section ref={howRef} className={`${styles.section} ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.stickyLayout}>
            <div className={styles.sidebar}>
              <div className={styles.stickyBox}>
                <div className={styles.progressLine}>
                  <motion.div 
                    className={styles.progressFill} 
                    style={{ height: howHeight }}
                  />
                </div>
                <div className={styles.sidebarContent}>
                  <span className={styles.label}>HOW TO JOIN</span>
                  <h2 className={styles.secTitle}>Application <br /> Process</h2>
                  <p className={styles.secDesc}>
                    We aim to complete the recruitment process within a relatively short period, keeping you informed at every stage.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.scrollingContent}>
              <div className={styles.steps}>
                {applicationSteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={styles.step}
                  >
                    <span className={styles.stepNum}>{step.num}</span>
                    <div className={styles.stepContent}>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.stickyLayout}>
            <div className={styles.sidebar}>
              <div className={styles.stickyBox}>
                <div className={styles.progressLine} style={{ opacity: 0.3 }} />
                <div className={styles.sidebarContent}>
                  <span className={styles.label}>QUESTIONS</span>
                  <h2 className={styles.secTitle}>Frequently <br /> Asked</h2>
                  <p className={styles.secDesc}>
                    Common inquiries about careers and life at Mataka Legal Practice.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.scrollingContent}>
              <div className={styles.faqGrid}>
                {faqs.map((faq, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={styles.faqItem}
                  >
                    <span className={styles.question}>Q: {faq.q}</span>
                    <p className={styles.answer}>A: {faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.ctaBox}
          >
            <h2>Ready to start <br /> your journey?</h2>
            <a href="mailto:careers@matakalegal.co.zw" className={styles.ctaBtn}>
              APPLY FOR A POSITION <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

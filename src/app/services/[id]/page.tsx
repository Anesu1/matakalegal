"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import styles from "./ServiceDetail.module.css";
import Link from "next/link";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-blue-600 font-bold"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#5FB9C4] mb-12 hover:text-[#1B4F72] transition-colors">
            <ArrowLeft size={16} /> BACK TO PRACTICE AREAS
          </Link>
          <div className={styles.heroContent}>
            <div>
              <span className={styles.label}>PRACTICE AREA 0{servicesData.indexOf(service) + 1}</span>
              <h1 className={styles.title}>{service.title}</h1>
              <p className={styles.heroDesc}>{service.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <div className={styles.longDesc}>
                <p>{service.longDesc}</p>
                <p className="mt-6 text-slate-600 italic border-l-4 border-[#5FB9C4] pl-6 py-2">
                  {service.expertise}
                </p>
              </div>

              <div className={styles.benefitsSection}>
                <span className={styles.sectionTitle}>Key Advantages</span>
                <div className={styles.benefitsList}>
                  {service.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={styles.benefitItem}
                    >
                      <CheckCircle2 className={styles.benefitIcon} size={20} />
                      <p className={styles.benefitText}>{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Expertise Areas</h3>
                <div className={styles.tags}>
                  {service.details.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.cta}>
                  <p className={styles.ctaTitle}>Need legal advice?</p>
                  <Link href="/contact" className={styles.ctaButton}>
                    CONSULT WITH US <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

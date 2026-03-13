"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Gavel, ShieldCheck, Users2, FileText, Pickaxe, Handshake, Scale, Building2 } from "lucide-react";
import styles from "./ServicesPage.module.css";

import Link from "next/link";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>OUR EXPERTISE</span>
            <h1 className={styles.title}>Practice Areas</h1>
            <p className={styles.heroDesc}>
              Tailored legal solutions designed to create and unlock value across a wide spectrum of legal disciplines in Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.listGrid}>
            {servicesData.map((service, index) => {
              const IconComponent = (Icons as any)[service.iconName];
              return (
                <Link 
                  href={`/services/${service.id}`}
                  key={service.id}
                  className="group"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={styles.serviceItem}
                  >
                    <div className={styles.serviceIcon}>
                      <IconComponent size={40} />
                    </div>
                    <div className={styles.serviceContent}>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceDesc}>{service.desc}</p>
                      <div className={styles.serviceDetail}>
                        {service.details.slice(0, 4).join(" • ")}
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#5FB9C4] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        LEARN MORE <Icons.ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

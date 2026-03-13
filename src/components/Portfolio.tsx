"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./Portfolio.module.css";

const projects = [
  {
    title: "COMPLEX CORPORATE RESTRUCTURING",
    challenge: "A major manufacturing firm required immediate legal restructuring to navigate new indigenization regulations.",
    solution: "We drafted a comprehensive legal framework that ensured compliance while protecting stakeholder value and operational continuity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    category: "CORPORATE LAW",
    year: "2024"
  },
  {
    title: "LANDMARK CONVEYANCING PROJECT",
    challenge: "A large-scale urban development project needed high-speed title processing for over 500 residential stands.",
    solution: "Our dedicated team implemented a streamlined verification and registration process, reducing lead times by 60%.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    category: "CONVEYANCING",
    year: "2023"
  }
];

const ProjectItem = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div 
      ref={ref}
      className={`${styles.project} ${index % 2 === 1 ? styles.reverse : ""}`}
    >
      <div className={styles.imageCol}>
        <motion.div 
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className={styles.imageWrapper}
          style={{ willChange: "clip-path" }}
        >
          <motion.img 
            style={{ y: imageY, scale: 1.2 }}
            src={project.image} 
            alt={project.title} 
            className={styles.image} 
          />
          <div className={styles.categoryBadge}>{project.category}</div>
        </motion.div>
      </div>

      <motion.div style={{ y: contentY }} className={styles.contentCol}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <div className={styles.dot} />
          <span className={styles.cat}>{project.category}</span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>CHALLENGE</span>
            <p className={styles.detailText}>{project.challenge}</p>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>SOLUTION</span>
            <p className={styles.detailText}>{project.solution}</p>
          </div>
        </div>

        <Link href="/contact" className={styles.viewLink}>
          CASE DETAILS <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>MAJOR MATTERS</span>
            <h2 className={styles.title}>Delivering Results Through Excellence</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


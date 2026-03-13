"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { 
  Map, 
  MapMarker, 
  MarkerContent, 
  MarkerPopup, 
  MapControls 
} from "@/components/ui/map";
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

      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <Map 
              center={[31.0672, -17.8181]}
              zoom={15}
              theme="light"
            >
              <MapMarker longitude={31.0672} latitude={-17.8181}>
                <MarkerContent>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#5FB9C4]/20 rounded-full animate-ping" />
                    <div className="relative flex items-center justify-center">
                      <div className="size-10 bg-[#1B4F72] rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="size-5 text-white" />
                      </div>
                      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#1B4F72]" />
                    </div>
                  </div>
                </MarkerContent>
                <MarkerPopup>
                  <div className="p-4 min-w-[280px]">
                    <h4 className="font-bold text-lg mb-2 text-[#1B4F72]">Mataka Legal Practice</h4>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                      28 Northampton Crescent, <br /> Eastlea, Harare
                    </p>
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone className="size-3 text-[#5FB9C4]" />
                        <span>+263 242 746169</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="size-3 text-[#5FB9C4]" />
                        <span>Mon – Fri: 08:00 – 17:00</span>
                      </div>
                    </div>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=-17.8181,31.0672" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#5FB9C4] hover:text-[#1B4F72] transition-colors"
                    >
                      <span>GET DIRECTIONS</span>
                      <motion.span 
                        animate={{ x: [0, 5, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </MarkerPopup>
              </MapMarker>
              <MapControls position="bottom-right" />
            </Map>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

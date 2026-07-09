"use client";

import Reveal from "@/components/Reveal/Reveal";
import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <Reveal>
    <section className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Got a project ? Want to collaborate ?
        </p>

        <h2 className={styles.title}>
          LET&apos;S WORK <span>TOGETHER</span>
        </h2>

        <div className={styles.socials}>
          <a href="#" className={styles.button}>
            Instagram
          </a>

          <a href="#" className={styles.button}>
            LinkedIn
          </a>

          <a href="#" className={styles.button}>
            Facebook
          </a>

          <a href="#contact" className={styles.button}>
            Contact Us
          </a>
        </div>

        <div className={styles.line}></div>

        <p className={styles.copy}>
          © 2026 All rights reserved. | Designed & Developed By Manvian
        </p>
      </div>
    </section>
    </Reveal>
  );
}
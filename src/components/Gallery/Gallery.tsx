"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./Gallery.module.css";

export default function Gallery() {
  useScrollReveal();

  return (
    <section
      id="awards"
      className={`${styles.gallery} reveal`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>GALLERY</h2>

        <p className={styles.subtitle}>
          A PLACE TO DISPLAY OUR MASTER PIECE
        </p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.galleryGrid}>
        <img
          src="/images/gallery-1.png"
          alt="Gallery 1"
          className={styles.imageOne}
        />

        <img
          src="/images/gallery-2.png"
          alt="Gallery 2"
          className={styles.imageTwo}
        />

        <img
          src="/images/gallery-3.png"
          alt="Gallery 3"
          className={styles.imageThree}
        />
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrowBtn}>←</button>
        <button className={styles.arrowBtn}>→</button>
      </div>
    </section>
  );
}
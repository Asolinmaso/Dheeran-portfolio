"use client";

import styles from "./About.module.css";
import Reveal from "@/components/Reveal/Reveal";

export default function About() {

  return (
    <Reveal>
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.left}>
        <h2 className={styles.title}>
          ABOUT <span>ME</span>
        </h2>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className={styles.bottomContent}>
          <img
            src="/images/about-small.png"
            alt="about"
            className={styles.smallImage}
          />

          <p className={styles.bottomText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src="/images/about-main.png"
          alt="about"
          className={styles.mainImage}
        />
      </div>
    </section>
    </Reveal>
  );
}
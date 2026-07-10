"use client";

import styles from "./About.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { motion } from "framer-motion";

export default function About() {

  return (
    <Reveal>
      <section
        id="about"
        className={styles.about}
      >
        <div className={styles.left}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ABOUT <span>ME</span>
          </motion.h2>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <div className={styles.bottomContent}>
            <motion.img
              src="/images/about-small.png"
              alt="about"
              className={styles.smallImage}
              initial={{
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
              }}
              whileInView={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            />

            <p className={styles.bottomText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <motion.img
            src="/images/about-main.png"
            alt="about"
            className={styles.mainImage}
            initial={{
              clipPath: "inset(0 100% 0 0)",
              opacity: 0,
            }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          />
        </div>
      </section>
    </Reveal>
  );
}
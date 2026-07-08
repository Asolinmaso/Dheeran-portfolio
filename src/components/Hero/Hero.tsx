"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        <div className={styles.glow}></div>

        <h1 className={styles.name}>
          <span>D</span>
          <span>H</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
          <span>A</span>
          <span>N</span>
        </h1>

        <div className={styles.leftContent}>
          <h2 className={styles.heroTitle}>HERO</h2>

          <p className={styles.leftText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className={styles.rightContent}>
          <h2 className={styles.actorTitle}>ACTOR</h2>

          <p className={styles.rightText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <motion.div
          className={styles.imageWrapper}
          style={{ x: "-50%", y: "-50%" }}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 1.8,
            ease: "easeOut",
          }}
        >
          <Image
            src="/images/dheeran.png"
            alt="Dheeran"
            width={500}
            height={760}
            priority
            className={styles.image}
          />
        </motion.div>
      </div>
    </section >
  );
}
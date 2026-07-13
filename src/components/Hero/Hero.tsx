"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
// import { useState } from "react";
// import CinematicIntro from "@/components/CinematicIntro/CinematicIntro";


export default function Hero() {
  // const [introComplete, setIntroComplete] = useState(false);

  // if (!introComplete) {
  //   return (
  // <CinematicIntro
  //       onComplete={() => setIntroComplete(true)}
  //     />
  //   );
  // }
  return (
    <section className={styles.hero}>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        <div className={styles.glow}></div>

        <motion.h1
          className={styles.name}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {"DHEERAN".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 4,
                  rotateX: 90,
                  filter: "blur(40px)",
                },
                show: {
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 140,
                damping: 12,
              }}
              style={{
                display: "inline-block",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <div className={styles.leftContent}>
          <h2 className={styles.heroTitle}>HERO</h2>

          <p className={styles.leftText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>


        <h2 className={styles.actorTitle}>ACTOR</h2>
        <div className={styles.rightContent}>
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
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 2.5,
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
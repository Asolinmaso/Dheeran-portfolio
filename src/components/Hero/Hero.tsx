import Image from "next/image";
import styles from "./Hero.module.css";
import Reveal from "@/components/Reveal/Reveal";


export default function Hero() {
  return (
    <Reveal>
    <section className={styles.hero}>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        <div className={styles.glow}></div>

        <h1 className={styles.name}>DHEERAN</h1>

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

        <div className={styles.imageWrapper}>
          <Image
            src="/images/dheeran.png"
            alt="Dheeran"
            width={500}
            height={760}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
    </Reveal>
  );
}
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        <div className={styles.glow}></div>

        <h2 className={styles.actor}>ACTOR</h2>

        <h1 className={styles.name}>DHEERAN</h1>

        <div className={styles.leftText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className={styles.rightText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/dheeran.png"
            alt="Dheeran"
            width={560}
            height={760}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
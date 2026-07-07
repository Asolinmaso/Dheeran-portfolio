"use client";

import styles from "./Contact.module.css";
import Reveal from "@/components/Reveal/Reveal";


export default function Contact() {

  return (
    <Reveal>
    <section
  id="contact"
  className={styles.contactSection}
>
      <div className={styles.contactContent}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            Let&apos;s get
            <br />
            in <span>touch</span>
          </h2>

          <p className={styles.subTitle}>
            Don&apos;t be afraid to say hello with us!
          </p>

          <div className={styles.contactInfo}>
            <div>
              <h4>Manager</h4>
              <p>+91 987654321</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>actordheeran.com</p>
            </div>

            <div>
              <h4>Address</h4>
              <p>
                No.18, Velan Avenue,
                <br />
                Rice Mill Road,
                Kandigai,
                Chennai – 600127
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <p className={styles.description}>
            Great! We&apos;re excited to hear from you and let&apos;s start
            something special together. Call us for any inquiry.
          </p>

          <div className={styles.arrow}>→</div>

          <form className={styles.form}>
            <div className={styles.row}>
              <input placeholder="Name" />
              <input placeholder="Email" />
            </div>

            <div className={styles.row}>
              <input placeholder="Phone" />
              <input placeholder="Location" />
            </div>

            <textarea
              placeholder="Reason for reaching out"
              rows={5}
            />

            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
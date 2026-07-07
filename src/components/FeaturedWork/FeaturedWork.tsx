"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./FeaturedWork.module.css";

const projects = [
  {
    image: "/images/projects/project1.png",
    category: "FEATURE FILMS",
    title: "THE RISING FLAME",
    subtitle: "Lead Actor | Action Drama",
  },
  {
    image: "/images/projects/project2.png",
    category: "TELEVISION SERIALS",
    title: "HEARTLINES",
    subtitle: "Main Role | Family Drama",
  },
  {
    image: "/images/projects/project3.png",
    category: "FILM PRODUCTION",
    title: "SHADOWS OF TRUTH",
    subtitle: "Producer | Independent Film",
  },
];

export default function FeaturedWork() {
  useScrollReveal();

  return (
    <section
      id="projects"
      className={`${styles.featured} reveal`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          FEATURED <span>WORK</span>
        </h2>

        <button className={styles.portfolioBtn}>
          PORTFOLIO
          <span>→</span>
        </button>
      </div>

      <div className={styles.line}></div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <p className={styles.category}>{project.category}</p>

              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>

              <p className={styles.subtitle}>
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
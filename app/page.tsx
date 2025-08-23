"use client";

import styles from './homepage.module.css';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const section = document.querySelector(`.${styles.topSection}`);
    if (section) section.classList.add(styles.fadeIn);
  }, []);

  return (
    <main>
      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Pastor Chris Oyakhilome<br />Skill Acquisition</h1>
          <p className={styles.subtitle}>Empowering Nigeria’s Future with Practical Skills</p>
          <p className={styles.tagline}>Join the Movement – Transform Your Life Today!</p>
          <div className={styles.buttonContainer}>
            <Link href="/contact-us" passHref>
              <button className={styles.registerButton}>Register Now</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Featured Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <span className={styles.skillIcon}>🎨</span>
            <h3>Graphic Design</h3>
            <p>Master digital art and branding.</p>
          </div>
          <div className={styles.skillCard}>
            <span className={styles.skillIcon}>💻</span>
            <h3>Web Development</h3>
            <p>Build modern websites with ease.</p>
          </div>
          <div className={styles.skillCard}>
            <span className={styles.skillIcon}>🎵</span>
            <h3>Music Production</h3>
            <p>Create beats and tracks like a pro.</p>
          </div>
        </div>
      </section>
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>What They Say</h2>
        <div className={styles.testimonialCarousel}>
          <div className={styles.testimonialCard}>
            <p>“This program changed my life—now I’m a web dev guru!”</p>
            <span>- Tunde, Lagos</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>“Amazing skills training, highly recommend!”</p>
            <span>- Chioma, Warri</span>
          </div>
        </div>
      </section>
    </main>
  );
}
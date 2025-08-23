"use client";

import styles from './homepage.module.css';
import { useEffect } from 'react';

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
          <div className={styles.buttonContainer}>
            <button className={styles.registerButton}>Register Now</button>
            <button className={styles.exploreButton}>Explore Campuses</button>
          </div>
        </div>
      </section>
    </main>
  );
}
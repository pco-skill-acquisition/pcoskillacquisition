import styles from './homepage.module.css';

export default function Home() {
  return (
    <main>
      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <div className={styles.buttonContainer}>
            <button className={styles.registerButton}>Register Now</button>
            <button className={styles.exploreButton}>Explore Campuses</button>
          </div>
        </div>
      </section>
    </main>
  );
}
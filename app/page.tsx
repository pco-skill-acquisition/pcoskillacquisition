import Navbar from './components/Navbar';
import styles from './homepage.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.topSection}>
          <div className={styles.overlay}>
            <button className={styles.registerButton}>Register Now</button>
            <button className={styles.exploreButton}>Explore Campuses</button>
          </div>
        </section>
      </main>
    </>
  );
}
import styles from './style.module.css';

export default function ApapaCampus() {
  return (
    <main>
      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Apapa Campus</h1>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>About Apapa Campus</h2>
          <p className={styles.aboutText}>This is a temporary description of the Apapa Campus. Located in the bustling heart of Lagos, this campus is dedicated to providing top-tier skill acquisition programs. Stay tuned for more details about our facilities, courses, and community impact!</p>
        </div>
      </section>
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Courses Available</h2>
          <ul className={styles.coursesList}>
            <li>Digital Marketing Mastery</li>
            <li>Coding Bootcamp (Python & JavaScript)</li>
            <li>Graphic Design Fundamentals</li>
            <li>Entrepreneurship 101</li>
            <li>Public Speaking Skills</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
import styles from './style.module.css';

export default function SecondaryCampus() {
  return (
    <main>
      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Secondary School Campuses</h1>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>About Secondary School Campuses</h2>
          <p className={styles.aboutText}>This is a temporary description of the Secondary School Campuses. Spread across the vibrant secondary schools of Nigeria, these campuses are committed to delivering top-notch skill acquisition programs to young learners. Stay tuned for more details about our initiatives, courses, and community impact!</p>
        </div>
      </section>
      <section className={styles.coursesSection}>
        <div className={styles.coursesContainer}>
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
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Upcoming Events</h2>
          <ul className={styles.eventsList}>
            <li>Skill Expo 2025 - Aug 15, 2025</li>
            <li>Coding Workshop - Aug 20, 2025</li>
            <li>Entrepreneurship Talk - Aug 25, 2025</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
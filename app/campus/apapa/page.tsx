import styles from './style.module.css';

export default function ApapaCampus() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Apapa Campus</h1>
      <p className={styles.description}>Welcome to the Apapa Campus of Pastor Chris Oyakhilome Skill Acquisition. Located in the heart of Apapa, Lagos, this campus offers top-notch training in various skills to empower the Naija community!</p>
      <section className={styles.detailsSection}>
        <h2 className={styles.subtitle}>Campus Highlights</h2>
        <ul className={styles.highlights}>
          <li>State-of-the-art facilities</li>
          <li>Expert instructors</li>
          <li>Hands-on skill development</li>
        </ul>
      </section>
    </main>
  );
}
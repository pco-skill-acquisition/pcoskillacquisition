import Image from 'next/image';
import styles from './style.module.css';

export default function KanoCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image4.jpg"
        alt="Kano Campus"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Kano Campus</h1>
      <p className={styles.text}>
        Our Kano Campus is your hub for skill acquisition in the North. From coding to design, level up your hustle!
      </p>
    </div>
  );
}
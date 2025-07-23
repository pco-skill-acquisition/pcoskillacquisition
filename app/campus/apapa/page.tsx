import Image from 'next/image';
import styles from './style.module.css';

export default function ApapaCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image2.jpg"
        alt="Apapa Campus"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Apapa Campus</h1>
      <p className={styles.text}>
        Welcome to our Apapa Campus, the heart of skill acquisition in Lagos! Learn tech, creative arts, and more with top-notch facilities.
      </p>
    </div>
  );
}
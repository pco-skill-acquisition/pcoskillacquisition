import Image from 'next/image';
import styles from './style.module.css';

export default function OyoCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image6.jpg"
        alt="Oyo Campus"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Oyo Campus</h1>
      <p className={styles.text}>
        Our Oyo Campus is where dreams meet skills. Learn coding, design, and more in a vibrant community!
      </p>
    </div>
  );
}
import Image from 'next/image';
import styles from './style.module.css';

export default function WarriCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image5.jpg"
        alt="Warri Campus"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Warri Campus</h1>
      <p className={styles.text}>
        Warri Campus brings the heat with skills that pay. Join us to master tech and creative arts, Naija style!
      </p>
    </div>
  );
}
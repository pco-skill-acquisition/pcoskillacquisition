import Image from 'next/image';
import styles from './style.module.css';

export default function IlasaCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image3.jpg"
        alt="Ilasa Campus"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Ilasa Campus</h1>
      <p className={styles.text}>
        Yo, Naija! Our Ilasa Campus is where creativity meets opportunity. Join us to master skills that shine!
      </p>
    </div>
  );
}
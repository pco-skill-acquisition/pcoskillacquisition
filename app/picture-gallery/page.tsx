import Image from 'next/image';
import styles from './style.module.css';

export default function PictureGallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/image${i + 2}.jpg`);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Picture Gallery</h1>
      <p className={styles.text}>
        Check out the vibes at PCO Skill Acquisition! From campus life to skill-up sessions, our Naija hustle is real.
      </p>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery Image ${index + 2}`}
            width={300}
            height={200}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
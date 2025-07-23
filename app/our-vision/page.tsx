import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css';

export default function OurVision() {
  return (
    <div className={styles.container}>
      <Image
        src="/image1.jpg"
        alt="Our Vision Hero"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Our Vision</h1>
      <p className={styles.text}>
        Yo, Naija! At PCO Skill Acquisition, we’re all about empowering every youth to master skills that transform lives. From tech to creative arts, we’re building a future where your hustle shines!
      </p>
      <Link
        href="/courses"
        className={styles.cta}
      >
        Explore Courses
      </Link>
    </div>
  );
}
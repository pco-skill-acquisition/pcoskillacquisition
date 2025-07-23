import Image from 'next/image';
import styles from './style.module.css';

export default function SecondarySchoolCampus() {
  return (
    <div className={styles.container}>
      <Image
        src="/image7.jpg"
        alt="Secondary School Campuses"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Secondary School Campuses</h1>
      <p className={styles.text}>
        Our Secondary School Campuses empower young Naija stars with skills for the future. From tech to arts, we’ve got you!
      </p>
    </div>
  );
}
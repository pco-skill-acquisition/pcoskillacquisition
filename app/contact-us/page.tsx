import Image from 'next/image';
import styles from './style.module.css';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Image
        src="/image1.jpg"
        alt="Contact Us Hero"
        width={800}
        height={400}
        className={styles.hero}
      />
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.text}>
        Yo, Naija! Got questions or ready to join the hustle? Reach out and let’s make it happen!
      </p>
      <div className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.cta}>Send Message</button>
      </div>
    </div>
  );
}
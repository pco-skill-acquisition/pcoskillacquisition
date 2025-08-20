import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoSection}>
        <Image src="/logo.png" alt="PCO Skill Acquisition Logo" width={100} height={100} className={styles.logo} />
        <p className={styles.programText}>PCO Skill Acquisition Program</p>
      </div>
      <div className={styles.socialSection}>
        <a href="https://kingschat.online/user/ce_bigchurch" target="_blank" rel="noopener noreferrer">
          <Image src="/kingschat-logo.png" alt="KingsChat" width={40} height={40} className={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com/pco_skill_acquisition_program/" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram-logo.png" alt="Instagram" width={40} height={40} className={styles.socialIcon} />
        </a>
      </div>
      <div className={styles.visitSection}>
        <h3 className={styles.visitTitle}>Visit</h3>
        <ul className={styles.campusList}>
          <li>Lagos</li>
          <li>Abuja</li>
        </ul>
      </div>
    </footer>
  );
}
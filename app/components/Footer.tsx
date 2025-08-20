import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoSection}>
        <Image src="/logo.png" alt="PCO Skill Acquisition Logo" width={50} height={50} className={styles.logo} />
        <p className={styles.programText}>PCO Skill Acquisition Program</p>
        <div className={styles.socialSection}>
          <a href="https://kingschat.online/user/ce_bigchurch" target="_blank" rel="noopener noreferrer">
            <Image src="/kingschat-logo.png" alt="KingsChat" width={40} height={40} className={styles.socialIcon} />
          </a>
          <a href="https://www.instagram.com/pco_skill_acquisition_program/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-logo.png" alt="Instagram" width={40} height={40} className={styles.socialIcon} />
          </a>
        </div>
      </div>
      <div className={styles.visitSection}>
        <h3 className={styles.visitTitle}>Visit</h3>
        <ul className={styles.campusList}>
          <li><Link href="/campus/apapa">Apapa Campus</Link></li>
          <li><Link href="/campus/ilasa">Ilasa Campus</Link></li>
          <li><Link href="/campus/kano">Kano Campus</Link></li>
          <li><Link href="/campus/warri">Warri Campus</Link></li>
          <li><Link href="/campus/oyo">Oyo Campus</Link></li>
          <li><Link href="/campus/secondary-school">Secondary School Campuses</Link></li>
        </ul>
      </div>
      <div className={styles.copyrightSection}>
        <p>© 2025 PCO Skill Acquisition. Naija’s finest skill hub!</p>
      </div>
    </footer>
  );
}
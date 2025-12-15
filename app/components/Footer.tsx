'use client';

import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      // Already on homepage, just scroll to section
      const element = document.querySelector('#about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage with hash
      router.push('/#about');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo.png"
                alt="PCO Skill Acquisition Logo"
                width={40}
                height={40}
                className={styles.logo}
              />
              <span className={styles.brandName}>PCO Skill Acquisition</span>
            </Link>
            <p className={styles.tagline}>
              Empowering individuals with practical skills for a better future.
            </p>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <nav className={styles.linkList}>
                <Link href="/#about" className={styles.link} onClick={handleAboutClick}>About Us</Link>
                <Link href="/picture-gallery" className={styles.link}>Gallery</Link>
                <Link href="/contact-us" className={styles.link}>Contact</Link>
              </nav>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Campuses</h4>
              <nav className={styles.linkList}>
                <Link href="/campus/apapa" className={styles.link}>Apapa</Link>
                <Link href="/campus/ilasa" className={styles.link}>Ilasa</Link>
                <Link href="/campus/kano" className={styles.link}>Kano</Link>
                <Link href="/campus/warri" className={styles.link}>Warri</Link>
                <Link href="/campus/oyo" className={styles.link}>Oyo</Link>
              </nav>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://kingschat.online/user/ce_bigchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="KingsChat"
                >
                  <Image src="/kingschat-logo.png" alt="" width={20} height={20} />
                  <span>KingsChat</span>
                </a>
                <a
                  href="https://www.instagram.com/pco_skill_acquisition_program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Image src="/instagram-logo.png" alt="" width={20} height={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} PCO Skill Acquisition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
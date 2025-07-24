'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="PCO Skills Logo"
            width={64}
            height={20}
            className={styles.logo}
          />
        </Link>
        <button
          className={styles.toggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link href="/our-vision" className={styles.link}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="/picture-gallery" className={styles.link}>
              Picture Gallery
            </Link>
          </li>
          <li className={styles.dropdown}>
            <span className={styles.link}>Campus ▼</span>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/campus/apapa" className={styles.dropdownLink}>
                  Apapa Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/ilasa" className={styles.dropdownLink}>
                  Ilasa Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/kano" className={styles.dropdownLink}>
                  Kano Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/warri" className={styles.dropdownLink}>
                  Warri Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/oyo" className={styles.dropdownLink}>
                  Oyo Campus
                </Link>
              </li>
              <li>
                <Link href="/campus/secondary-school" className={styles.dropdownLink}>
                  Secondary School Campuses
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact-us" className={styles.link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
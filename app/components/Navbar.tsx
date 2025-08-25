'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="PCO Skills Logo"
            width={100}
            height={30}
            className={styles.logo}
          />
        </Link>
        <button
          className={styles.toggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link href="/" className={styles.link} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/our-vision" className={styles.link} onClick={handleLinkClick}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="/picture-gallery" className={styles.link} onClick={handleLinkClick}>
              Picture Gallery
            </Link>
          </li>
          <li className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              Campus
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/campus/apapa" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Apapa Campus
                  </Link>
                </li>
                <li>
                  <Link href="/campus/ilasa" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Ilasa Campus
                  </Link>
                </li>
                <li>
                  <Link href="/campus/kano" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Kano Campus
                  </Link>
                </li>
                <li>
                  <Link href="/campus/warri" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Warri Campus
                  </Link>
                </li>
                <li>
                  <Link href="/campus/oyo" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Oyo Campus
                  </Link>
                </li>
                <li>
                  <Link href="/campus/secondary-school" className={styles.dropdownLink} onClick={handleLinkClick}>
                    Secondary School Campuses
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact-us" className={styles.link} onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
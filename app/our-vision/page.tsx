'use client';

import Image from 'next/image';
import styles from './style.module.css';

export default function OurVision() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src="/logo.png" alt="PCO Skill Acquisition Logo" fill className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Our Vision</h1>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={styles.contentText}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className={styles.accentCircle}></div>
      </section>
    </main>
  );
}
'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import styles from './style.module.css';

export default function PictureGallery() {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
    '/image9.jpg',
    '/image10.jpg',
    '/image11.jpg',
    '/image12.jpg',
    '/image13.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src="/image7.jpg" alt="Hero Background of Skill Acquisition" fill className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Picture Gallery</h1>
        </div>
      </section>
      <section className={styles.carouselSection}>
        <h2 className={styles.sectionTitle}>Explore Our Visual Journey</h2>
        <div className={styles.carouselWrapper} ref={carouselRef}>
          <div className={styles.carousel}>
            {images.map((src, index) => (
              <div key={index} className={styles.carouselItem} onClick={() => openLightbox(src)}>
                <Image src={src} alt={`Skill Acquisition Moment ${index + 1}`} width={300} height={200} className={styles.carouselImage} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <Image src={selectedImage} alt="Full view of Skill Moment" width={800} height={600} className={styles.fullImage} />
          <button className={styles.closeButton} onClick={closeLightbox}>×</button>
        </div>
      )}
    </main>
  );
}
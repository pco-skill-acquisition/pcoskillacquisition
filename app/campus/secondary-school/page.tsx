import React from 'react';
import styles from './style.module.css';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';

const SecondaryCampus: React.FC = () => {
  const featuredSkills = [
    {
      id: 'tailoring',
      name: 'Tailoring & Fashion Design',
      description: 'Learn garment construction and clothing production for income or employment.',
      icon: '✂️',
      badge: 'Beginner-friendly'
    },
    {
      id: 'welding',
      name: 'Welding & Metalwork',
      description: 'Master welding techniques for construction and manufacturing careers.',
      icon: '🔧',
      badge: 'Hands-on training'
    },
    {
      id: 'cosmetology',
      name: 'Cosmetology & Beauty',
      description: 'Professional training in hair, makeup, and skincare services.',
      icon: '💄',
      badge: 'Offline program'
    },
    {
      id: 'electrical',
      name: 'Electrical Installation',
      description: 'Build expertise in residential and commercial electrical systems.',
      icon: '⚡',
      badge: 'Hands-on training'
    },
    {
      id: 'carpentry',
      name: 'Carpentry & Joinery',
      description: 'Develop woodworking skills for furniture making and construction.',
      icon: '🪚',
      badge: 'Beginner-friendly'
    },
    {
      id: 'catering',
      name: 'Catering & Food Service',
      description: 'Learn professional cooking and food preparation for events and business.',
      icon: '🍳',
      badge: 'Offline program'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Secondary School Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Secondary School Campus</h2>
            <p className={styles.description}>
              Located in the bustling heart of Lagos, this campus is dedicated to providing top-tier skill acquisition programs. Stay tuned for more details about our facilities, courses, and community impact.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default SecondaryCampus;
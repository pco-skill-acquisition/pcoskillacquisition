import React from 'react';
import styles from './style.module.css';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';

const ApapaCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Apapa Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Apapa Campus</h2>
            <p className={styles.description}>
              Apapa is a well-known community in Lagos with a diverse population, where many residents, particularly youths and women, face economic limitations, underemployment, and limited access to practical skill training despite living within a commercial hub.
              Pastor Chris Skill Acquisition established its Apapa campus as a strategic response to these realities, bringing structured empowerment and opportunity directly into the community. Since our launch in 2023, the campus has served as a center of transformation, providing free, hands-on training that equips individuals with market-relevant and income-generating skills.
              From inception to date, the Apapa campus has empowered over 3,200 individuals, training participants in skills such as Graphic Design, Hair Dressing, Bakery, Tailoring, and other vocational and digital programs designed to promote self-reliance and economic stability.
              In addition to skills training, we are committed to holistic development. Participants are taught the Word of God, introduced to the gospel, and invited into church fellowship. A number of those trained have remained connected, becoming active members of the church and undergoing intentional discipleship that supports both their spiritual and personal growth.
              The Apapa campus continues to stand as a powerful expression of practical love, equipping individuals with skills, restoring hope, and raising purpose-driven men and women who are empowered to impact their families and communities.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default ApapaCampus;
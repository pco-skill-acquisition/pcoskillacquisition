import React from 'react';
import styles from './style.module.css';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';

const IlasaCampus: React.FC = () => {
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
            <h1 className={styles.heroTitle}>Ilasa Campus</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>About Ilasa Campus</h2>
            <p className={styles.description}>
              Ilasa is a community in Lagos characterized by a high population of residents living below average living conditions, with limited access to sustainable employment opportunities and skill-based education. Many individuals in the area possess great potential but lack the resources and exposure needed to build independent and productive lives.
              Pastor Chris Skill Acquisition emerged in Ilasa as a timely response to these challenges, bringing hope, opportunity, and practical empowerment to the community. Since establishing our Ilasa campus in 2023, we have consistently delivered free, hands-on training programs designed to equip individuals with relevant, income-generating skills.
              To date, we have reached over 3,237 individuals, training them in practical skills such as Graphic Design, Hairdressing, Baking, Tailoring, and other vocational and digital disciplines that enable self-reliance and financial independence.
              Beyond skill acquisition, we believe in holistic transformation. Participants are taught the Word of God, introduced to the message of salvation, and warmly invited to church. A significant number have remained connected, becoming active members of the church community where they are nurtured, discipled, and guided in their spiritual growth.
              The Ilasa campus stands as a testament to what practical love can achieve, transforming lives, restoring dignity, and raising individuals who are skilled, purpose-driven, and spiritually grounded.
            </p>
          </div>
        </div>
      </section>

      <FeaturedSkills skills={featuredSkills} />

      <UpcomingEvents />
    </main>
  );
};

export default IlasaCampus;
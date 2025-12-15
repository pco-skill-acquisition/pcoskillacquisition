"use client";

import styles from './homepage.module.css';
import { useEffect } from 'react';
import Hero from '@/sections/hero/hero';
import FeaturedSkills from '@/sections/featured/FeaturedSkills';
import HowItWorksSection from '@/sections/howItWorks/HowItWorksSection';
import AboutFoundation from '@/sections/about/AboutFoundation';
import Testimonials from '@/sections/testimonials/Testimonials';
import UpcomingEvents from '@/sections/upcoming/UpcomingEvents';

export default function Home() {
  useEffect(() => {
    const section = document.querySelector(`.${styles.topSection}`);
    if (section) section.classList.add(styles.fadeIn);

    const hash = window.location.hash;
    if (hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });

      const scrollToSection = () => {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      };

      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 100);
      });
    }
  }, []);

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
    <main>
      <Hero />
      <FeaturedSkills skills={featuredSkills} />
      <HowItWorksSection />
      <AboutFoundation />
      <Testimonials />
      <UpcomingEvents />
    </main>
  );
}
'use client';

import Link from 'next/link';
import { useApplyModal } from '@/app/context/ApplyModalContext';
import styles from './FeaturedSkills.module.css';

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
}

interface FeaturedSkillsProps {
  skills: Skill[];
}

export default function FeaturedSkills({ skills }: FeaturedSkillsProps) {
  const { openModal } = useApplyModal();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Available Skill Training Programs</h2>
          <p className={styles.subtext}>
            Select a skill to begin your application for training.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.id} className={styles.card}>
              <div>
                <div className={styles.iconWrapper}>
                </div>
                
                <h3 className={styles.skillName}>{skill.name}</h3>
                
                <p className={styles.description}>{skill.description}</p>
                
              </div>

              <button
                onClick={() => openModal(skill.name)}
                className={styles.cta}
              >
                Apply
              </button>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/skills" className={styles.viewAll}>
            View all skills →
          </Link>
        </div>
      </div>
    </section>
  );
}
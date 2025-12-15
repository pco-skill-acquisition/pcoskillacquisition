import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  quote: string;
  name: string;
  skill: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "The training helped me gain practical skills and confidence to start earning on my own.",
      name: "Deborah A.",
      skill: "Fashion Design",
      image: "/images/testimonials/deborah.jpg"
    },
    {
      quote: "I learned digital marketing from scratch and now manage social media for local businesses.",
      name: "Michael O.",
      skill: "Digital Marketing",
      image: "/images/testimonials/michael.jpg"
    },
    {
      quote: "The hands-on approach made it easy to understand. I'm now working as a freelance web developer.",
      name: "Grace E.",
      skill: "Web Development",
      image: "/images/testimonials/grace.jpg"
    },
    {
      quote: "This program gave me the skills I needed to open my own welding workshop.",
      name: "Emmanuel T.",
      skill: "Welding & Fabrication",
      image: "/images/testimonials/emmanuel.jpg"
    },
    {
      quote: "The instructors were patient and thorough. I now run my own hair salon.",
      name: "Sarah K.",
      skill: "Hairdressing",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "I gained the technical knowledge to start my own phone repair business.",
      name: "David I.",
      skill: "Phone Repairs",
      image: "/images/testimonials/david.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = document.getElementById('testimonials-scroll');
        if (!container) return prev;
        
        const maxScroll = container.scrollHeight - container.clientHeight;
        const newPosition = prev + 1;
        
        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = document.getElementById('testimonials-scroll');
    if (container) {
      container.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Participants Are Saying</h2>
          <p className={styles.subheading}>
            Experiences shared by individuals who participated in our programs.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.fadeTop}></div>
          
          <div id="testimonials-scroll" className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className={styles.testimonialItem}>
                  <div className={styles.testimonialContent}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.quote}>{testimonial.quote}</p>
                  </div>
                  
                  <div className={styles.authorSection}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.skill}>{testimonial.skill}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.fadeBottom}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) setStatus('Message sent successfully!');
      else setStatus('Failed to send message.');
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
        </div>
      </section>
      <section className={styles.contactSection}>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textareaField}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
        <div className={styles.socialSection}>
          <div className={styles.iconRow}>
            <a href="https://kingschat.online/user/ce_bigchurch" target="_blank" rel="noopener noreferrer">
              <Image src="/kingschat-logo.png" alt="KingsChat" width={35} height={35} className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/pco_skill_acquisition_program/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-logo.png" alt="Instagram" width={35} height={35} className={styles.socialIcon} />
            </a>
            <a href="tel:+1234567890">
              <Image src="/phone-icon.png" alt="Phone" width={30} height={30} className={styles.phoneIcon} />
            </a>
          </div>
          <div className={styles.contactText}>
            <span className={styles.enquiryMessage}>For more information, please call or text on this number </span>
            <a href="tel:+1234567890" className={styles.phoneNumber}>+1 (234) 567-890</a>
          </div>
        </div>
      </section>
    </main>
  );
}
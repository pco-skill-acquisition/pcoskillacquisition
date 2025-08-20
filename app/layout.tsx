import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'PCO Skill Acquisition',
  description: 'Naija’s dopest hub for mastering skills that shine!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer style={{ backgroundColor: '#FFFFFF', color: '#002366', padding: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>© 2025 PCO Skill Acquisition. Naija’s finest skill hub!</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="/our-vision" style={{ color: '#002366', textDecoration: 'none', transition: 'color 0.2s ease' }}>Our Vision</a>
            <a href="/contact-us" style={{ color: '#002366', textDecoration: 'none', transition: 'color 0.2s ease' }}>Get in Touch</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
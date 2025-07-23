import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

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
      <head>
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
      </head>
      <body className="font-gilroy">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-deep-navy text-secondary-white p-6 text-center text-sm sm:text-base shadow-inner">
          <p className="mb-2">© 2025 PCO Skill Acquisition. Naija’s finest skill hub!</p>
          <div className="flex justify-center space-x-4">
            <a href="/our-vision" className="hover:text-accent transition-colors duration-200">Our Vision</a>
            <a href="/contact-us" className="hover:text-accent transition-colors duration-200">Get in Touch</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
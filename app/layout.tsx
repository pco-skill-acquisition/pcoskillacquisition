import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'PCO Skill Acquisition',
  description: 'Naija’s dopest hub for mastering skills that shine!',
  icons: {
    icon: '/logo.png', // Set logo.png as the favicon
  },
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
        <Footer />
      </body>
    </html>
  );
}
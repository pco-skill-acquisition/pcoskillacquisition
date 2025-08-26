import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'PCO Skill Acquisition',
  description: 'Pastor Chris Oyakhilome Skill Acquisition Program Website',
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
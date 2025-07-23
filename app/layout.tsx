import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PCO Skill Acquisition',
  description: 'Naija’s top hub for mastering skills that shine!',
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
        <header className="bg-deep-navy text-secondary-white p-4 sticky top-0 z-10 shadow-md">
          <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-0">PCO Skills</h1>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-deep-navy text-secondary-white p-4 text-center text-sm sm:text-base">
          <p>© 2025 PCO Skill Acquisition. Naija’s finest skill hub!</p>
        </footer>
      </body>
    </html>
  );
}
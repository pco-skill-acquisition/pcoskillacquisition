'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
      </head>
      <body className="font-gilroy">
        <header className="bg-deep-navy text-secondary-white p-4 sticky top-0 z-10 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="PCO Skills Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <button
              className="sm:hidden text-accent focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
            <ul
              className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm sm:text-base absolute sm:static top-16 left-0 w-full sm:w-auto bg-deep-navy sm:bg-transparent p-4 sm:p-0 ${isMenuOpen ? 'block' : 'hidden sm:flex'}`}
            >
              <li>
                <Link href="/our-vision" className="hover:text-accent transition-colors duration-200">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/picture-gallery" className="hover:text-accent transition-colors duration-200">
                  Picture Gallery
                </Link>
              </li>
              <li className="relative group">
                <span className="hover:text-accent transition-colors duration-200 cursor-pointer sm:cursor-default">
                  Campus
                </span>
                <ul className="absolute left-0 mt-2 w-48 bg-deep-navy text-secondary-white rounded-md shadow-lg hidden group-hover:block sm:group-hover:block">
                  <li>
                    <Link
                      href="/campus/apapa"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Apapa Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campus/ilasa"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Ilasa Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campus/kano"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Kano Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campus/warri"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Warri Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campus/oyo"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Oyo Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campus/secondary-school"
                      className="block px-4 py-2 hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      Secondary School Campuses
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-accent transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-deep-navy text-secondary-white p-6 text-center text-sm sm:text-base shadow-inner">
          <p className="mb-2">© 2025 PCO Skill Acquisition. Naija’s finest skill hub!</p>
          <div className="flex justify-center space-x-4">
            <Link href="/our-vision" className="hover:text-accent transition-colors duration-200">Our Vision</Link>
            <Link href="/contact-us" className="hover:text-accent transition-colors duration-200">Get in Touch</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
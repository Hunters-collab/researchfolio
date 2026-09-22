'use client';

import React, { useState, useEffect } from 'react';

import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Focus', href: '#focus' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border' :'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="ResearchFolio home"
          >
            <AppLogo size={28} />
            <span className="font-semibold text-sm tracking-tight text-foreground hidden sm:block">
              ResearchFolio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={handleNavClick}
                className="text-lg font-medium text-foreground py-3 border-b border-border last:border-b-0 hover:text-primary transition-colors"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 inline-flex items-center justify-center text-sm font-semibold text-primary-foreground bg-primary px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
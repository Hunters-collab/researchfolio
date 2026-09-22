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
            href="data:image/png;base64,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"
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
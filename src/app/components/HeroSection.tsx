'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-16"
      aria-label="Hero"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent geometric shape — top right */}
      <div className="absolute top-24 right-8 lg:right-16 opacity-[0.06] pointer-events-none select-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden="true">
          <circle cx="90" cy="90" r="89" stroke="var(--primary)" strokeWidth="1" />
          <circle cx="90" cy="90" r="60" stroke="var(--primary)" strokeWidth="1" />
          <circle cx="90" cy="90" r="30" stroke="var(--primary)" strokeWidth="1" />
          <line x1="90" y1="1" x2="90" y2="179" stroke="var(--primary)" strokeWidth="0.75" />
          <line x1="1" y1="90" x2="179" y2="90" stroke="var(--primary)" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          {/* Role badge */}
          <div className="clip-in mb-8 flex items-center gap-3">
            <span className="hero-accent-line" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Security Researcher
            </span>
          </div>

          {/* Main headline */}
          <h1 className="clip-in-delay-1 text-hero font-extrabold text-foreground leading-none tracking-tight mb-6">
            hunters
          </h1>

          {/* Sub-title */}
          <p className="clip-in-delay-2 text-display font-medium text-muted-foreground mb-8">
            Bug Hunters &amp; Security Researchers
          </p>

          {/* Description */}
          <p className="clip-in-delay-3 text-lg text-muted-foreground leading-relaxed max-w-xl mb-12 font-normal">
            I&apos;m a bug hunter interested in web security, vulnerability research,
            and penetration testing. I find, document, and responsibly disclose
            security issues in real-world applications.
          </p>

          {/* CTA */}
          <div className="clip-in-delay-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              View Research
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
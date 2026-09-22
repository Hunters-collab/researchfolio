'use client';

import React, { useEffect, useRef } from 'react';

interface Researcher {
  name: string;
  role: string;
  email: string;
  linkedin: string;
}

const researchers: Researcher[] = [
  {
    name: 'Hunter Mejahed',
    role: 'Bug Hunter & Penetration Tester',
    email: 'hhxh50701@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohamed-mejahed-599969340?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    name: 'Hunter Zyad',
    role: 'Bug Hunter & Penetration Tester',
    email: 'zyadt8055@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zyad-tarek?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal-up, .reveal-fade');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-16" />

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="reveal-up text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="reveal-up delay-100 text-display font-bold text-foreground leading-tight mb-4"
          >
            Let&apos;s connect.
          </h2>
          <p className="reveal-up delay-150 text-base text-muted-foreground leading-relaxed">
            Open to security research collaborations, bug bounty partnerships,
            and full-time opportunities. Reach out to either researcher directly.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {researchers.map((hunter, index) => (
            <article
              key={hunter.name}
              className="reveal-up group flex flex-col justify-between rounded-2xl bg-card border border-border p-7 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`Contact information for ${hunter.name}`}
            >
              <div>
                {/* Header: Name, Role & Icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {hunter.name}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {hunter.role}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors duration-200 shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>

                {/* Email details row */}
                <div className="mb-6 p-3.5 rounded-xl bg-muted/60 border border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${hunter.email}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 break-all"
                  >
                    {hunter.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons: Email & LinkedIn */}
              <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row gap-3">
                {/* Direct Clickable Email Button */}
                <a
                  href={`mailto:${hunter.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
                  aria-label={`Send email to ${hunter.name}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Send Email</span>
                </a>

                {/* Dedicated LinkedIn Button */}
                <a
                  href={hunter.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-foreground hover:text-primary hover:border-primary/40 border border-border text-sm font-semibold transition-all duration-200"
                  aria-label={`Visit ${hunter.name}'s LinkedIn profile`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useEffect, useRef } from 'react';

const focusAreas = [
  'Web Security',
  'Vulnerability Research',
  'Penetration Testing',
  'API Security',
  'Authentication & Authorization',
];

const stats = [
  { value: '06', label: 'Vulnerabilities Documented' },
  { value: 'XX', label: 'Research Projects' },
  { value: '06', label: 'Write-ups Published' },
];

export default function FocusSection() {
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
      id="focus"
      ref={sectionRef}
      className="py-24 bg-muted"
      aria-labelledby="focus-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Focus areas */}
          <div className="lg:col-span-7">
            <p className="reveal-up text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Interested In
            </p>
            <h2
              id="focus-heading"
              className="reveal-up delay-100 text-section font-bold text-foreground mb-10"
            >
              Areas of focus
            </h2>

            <ul className="flex flex-col gap-0" role="list">
              {focusAreas?.map((area, index) => (
                <li
                  key={area}
                  className="reveal-up border-b border-border py-5 flex items-center justify-between group"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="accent-dot opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {area}
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats panel */}
          <div className="lg:col-span-5 flex flex-col gap-0">
            <p className="reveal-up text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              By the Numbers
            </p>

            <div className="reveal-up delay-100 bg-card border border-border rounded-2xl overflow-hidden">
              {stats?.map((stat, index) => (
                <div
                  key={stat?.label}
                  className={`px-8 py-7 ${
                    index < stats?.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <p className="stat-number text-4xl font-extrabold text-foreground tracking-tight mb-1">
                    {stat?.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="reveal-up delay-150 mt-6 flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <p className="text-sm font-medium text-foreground">
                Open to opportunities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
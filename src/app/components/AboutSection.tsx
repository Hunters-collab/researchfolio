'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Label column */}
          <div className="lg:col-span-3">
            <p className="reveal-up text-xs font-bold uppercase tracking-widest text-muted-foreground">
              About
            </p>
          </div>

          {/* Content column */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            <h2
              id="about-heading"
              className="reveal-up delay-100 text-section font-bold text-foreground"
            >
              Building a deeper understanding of how systems break.
            </h2>

            <p className="reveal-up delay-150 text-lg text-muted-foreground leading-relaxed font-normal max-w-2xl">
              I&apos;m a bug hunter focused on discovering and understanding vulnerabilities
              in web applications. I enjoy breaking things, understanding how they work,
              and documenting what I find.
            </p>

            <p className="reveal-up delay-200 text-base text-muted-foreground leading-relaxed max-w-2xl">
              My work spans manual security testing, responsible disclosure, and
              detailed write-ups that explain vulnerabilities clearly for both
              technical and non-technical audiences. I believe that well-documented
              research is as valuable as the finding itself.
            </p>

            {/* Inline stats row */}
            <div className="reveal-up delay-250 flex flex-wrap gap-8 pt-4 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground tracking-tight">06</p>
                <p className="text-sm text-muted-foreground mt-1">Vulnerabilities Documented</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground tracking-tight">XX</p>
                <p className="text-sm text-muted-foreground mt-1">Research Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground tracking-tight">06</p>
                <p className="text-sm text-muted-foreground mt-1">Write-ups Published</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
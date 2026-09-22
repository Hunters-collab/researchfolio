'use client';

import { useEffect, useRef } from 'react';

interface RevealObserverProps {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function RevealObserver({
  selector = '.reveal-up, .reveal-fade',
  threshold = 0.08,
  rootMargin = '0px 0px -32px 0px',
}: RevealObserverProps) {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parent = markerRef.current?.closest('section') || markerRef.current?.parentElement;
    if (!parent) return;

    const elements = parent.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, rootMargin]);

  return <span ref={markerRef} className="hidden" aria-hidden="true" />;
}

import React from 'react';
import { getAllWriteups, type Writeup, type Severity } from '@/lib/writeups';
import RevealObserver from '@/components/ui/RevealObserver';

interface ResearchSectionProps {
  writeups?: Writeup[];
}

const severityStyles: Record<
  Severity,
  { badge: string; dot: string }
> = {
  Critical: {
    badge: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    dot: 'bg-red-500',
  },
  High: {
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    dot: 'bg-orange-500',
  },
  Medium: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    dot: 'bg-amber-500',
  },
  Low: {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500',
  },
};

function formatDate(dateStr?: string): string | null {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    if (!isNaN(monthIndex) && months[monthIndex]) {
      return `${months[monthIndex]} ${day}, ${year}`;
    }
  }
  return dateStr;
}

export default function ResearchSection({
  writeups: initialWriteups,
}: ResearchSectionProps = {}) {
  const writeups = initialWriteups || getAllWriteups();

  return (
    <section
      id="research"
      className="py-24 bg-background"
      aria-labelledby="research-heading"
    >
      <RevealObserver />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="section-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="reveal-up text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Selected Research
              </p>
              <h2
                id="research-heading"
                className="reveal-up delay-100 text-section font-bold text-foreground leading-tight"
              >
                Documented vulnerabilities &amp; write-ups
              </h2>
              <p className="reveal-up delay-150 text-sm text-muted-foreground mt-4 leading-relaxed">
                Each entry links to a detailed write-up published on Medium.
              </p>
              <div className="reveal-up delay-200 mt-8">
                <a
                  href="[Medium Profile URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm font-semibold text-primary"
                >
                  All write-ups on Medium
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7h9M7.5 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Research list */}
          <div className="lg:col-span-9">
            <div className="flex flex-col">
              {writeups.map((entry, index) => {
                const number = String(index + 1).padStart(2, '0');
                const severity =
                  severityStyles[entry.severity] || severityStyles.Medium;
                const formattedDate = formatDate(entry.date);

                return (
                  <article
                    key={entry.slug}
                    className="reveal-up research-entry group border-t border-border py-8 pl-6 last:border-b last:border-border"
                    style={{ transitionDelay: `${index * 80}ms` }}
                    aria-label={`Research entry ${number}: ${entry.title}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                      {/* Number */}
                      <span className="text-xs font-bold text-muted-foreground tracking-widest pt-1 shrink-0 w-8">
                        {number}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Severity Badge & Date */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${severity.badge}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${severity.dot}`}
                              aria-hidden="true"
                            />
                            {entry.severity}
                          </span>
                          {formattedDate && (
                            <span className="text-xs text-muted-foreground font-medium">
                              {formattedDate}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                          {entry.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">
                          {entry.shortDescription}
                        </p>

                        {/* Read on Medium link button */}
                        <a
                          href={entry.mediumLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                          aria-label={`Read write-up for ${entry.title} on Medium`}
                        >
                          Read on Medium
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 7h9M7.5 3l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
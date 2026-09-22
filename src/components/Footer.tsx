import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-2">
            <AppLogo size={22} />
            <span className="text-sm text-muted-foreground">
              © 2026 Hunters
            </span>
          </div>

          {/* Minimal links */}
          <div className="flex items-center gap-6">
            <a
              href="[LinkedIn URL]"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="[GitHub URL]"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="[Medium URL]"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="[Privacy Policy]"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/90 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-bold text-secondary">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-secondary font-mono border border-primary/20">
                QA Automation & Front-End
              </span>
            </div>
            <p className="text-xs text-muted max-w-sm">
              The Test Lab — turning code complexities into verified, zero-defect experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl border border-border bg-card text-muted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="Email Mahadeer"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border bg-card text-muted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border bg-card text-muted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-xl border border-border bg-card text-muted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="Call Mahadeer"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & QA badges */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-1.5 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
            <span>All test suites passed. 0 unhandled exceptions.</span>
          </div>
          <div>
            © {currentYear} {PERSONAL_INFO.name}. Built with Next.js, Three.js & Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
}

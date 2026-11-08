"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ShieldCheck } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <span className="font-mono text-sm font-bold text-secondary">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-secondary transition-colors">
              Mahadeer Mohamed
            </span>
            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
              Software Tester & Developer
            </span>
          </div>
        </a>

        {/* Live Test Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-card/80 border border-border text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-secondary font-semibold">TEST LAB</span>
          <span className="text-muted/50">|</span>
          <span className="text-text/90">0 DEFECTS</span>
          <ShieldCheck className="w-3.5 h-3.5 text-success ml-0.5" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted hover:text-white transition-colors font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button: Indigo -> Cyan Gradient */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton
            href="/resume.pdf"
            download="Mahadeer_Mohamed_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 transition-all shadow-md shadow-primary/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-border text-muted hover:text-white hover:bg-card"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-bg/95 backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-secondary font-medium">TEST LAB STATUS:</span>
                <span className="text-white">SUITE PASS (100%)</span>
              </div>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-muted hover:text-secondary transition-colors font-medium text-base border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="/resume.pdf"
                  download="Mahadeer_Mohamed_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

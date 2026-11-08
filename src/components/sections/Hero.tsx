"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import TiltCard from "../ui/TiltCard";
import MagneticButton from "../ui/MagneticButton";
import { ArrowRight, Download, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content with legibility vignette */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 relative">
            {/* Soft dark vignette behind text block to guarantee legibility */}
            <div className="absolute -inset-6 -z-10 rounded-3xl hero-vignette pointer-events-none" />

            {/* QA Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-surface/90 border border-border mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-secondary font-medium tracking-wide">TEST LAB</span>
              <span className="text-muted/60">|</span>
              <span className="text-text/90">Seeking QA Automation & Front-End Roles</span>
            </motion.div>

            {/* Name & Headline with Indigo -> Cyan gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-text to-secondary">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-xl sm:text-2xl font-mono text-secondary font-semibold">
                {PERSONAL_INFO.title}
              </span>
            </motion.div>

            {/* One-Line Pitch from Resume Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-text/80 max-w-xl leading-relaxed mb-8"
            >
              {PERSONAL_INFO.heroPitch}
            </motion.p>

            {/* Test Lab Stats preview pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg mb-8 text-left"
            >
              <div className="p-3 rounded-xl bg-card/75 border border-border backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>QA FOCUS</span>
                </div>
                <div className="text-sm font-semibold text-text">Manual & Auto</div>
              </div>
              <div className="p-3 rounded-xl bg-card/75 border border-border backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  <span>SUITE PASS</span>
                </div>
                <div className="text-sm font-semibold text-text">100% Target</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-card/75 border border-border backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-1">
                  <span className="w-2 h-2 rounded-full bg-danger" />
                  <span>DEFECT LOG</span>
                </div>
                <div className="text-sm font-semibold text-text">0 To Production</div>
              </div>
            </motion.div>

            {/* CTA Buttons - Main CTA = Indigo -> Cyan Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <MagneticButton
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 transition-all shadow-lg shadow-primary/20 hover:shadow-secondary/30 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download="Mahadeer_Mohamed_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-surface/90 border border-border text-text hover:border-primary/50 hover:text-white transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-secondary" />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-muted hover:text-text transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: 3D Tilt QA Test Lab Automation Console */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 aspect-square shrink-0 flex items-center justify-center"
            >
              {/* Outer Glowing Orbital Rings with Indigo & Cyan Accents */}
              <div className="absolute -inset-3 rounded-full border border-primary/25 animate-pulse-slow pointer-events-none" />
              <div className="absolute -inset-7 rounded-full border border-secondary/15 pointer-events-none" />

              {/* Floating Orbiting Label: QA_AUTOMATION */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 z-20 px-3 py-1.5 rounded-xl bg-card/95 border border-secondary/40 text-xs font-mono text-secondary shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span>QA_AUTOMATION</span>
              </motion.div>

              {/* Floating Orbiting Label: PASS: SDLC / STLC */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-2 z-20 px-3 py-1.5 rounded-xl bg-card/95 border border-success/40 text-xs font-mono text-success shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                <span>PASS: SDLC / STLC</span>
              </motion.div>

              {/* 3D Tilt Test Lab Console Container - Exact 1:1 Aspect Ratio */}
              <TiltCard
                className="w-full h-full aspect-square rounded-full p-2.5 bg-gradient-to-br from-card via-surface to-card border-2 border-primary/30 hover:border-secondary/50 shadow-2xl flex items-center justify-center overflow-hidden group transition-all"
                glowColor="rgba(34, 211, 238, 0.25)"
                maxTilt={8}
              >
                <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border border-border/80 bg-surface/95 flex flex-col items-center justify-center p-6 text-center ring-2 ring-primary/20 group-hover:ring-secondary/40 transition-all select-none">
                  {/* Subtle Radar/Concentric Grid Circles */}
                  <div className="absolute inset-8 rounded-full border border-primary/15 pointer-events-none" />
                  <div className="absolute inset-16 rounded-full border border-secondary/10 pointer-events-none" />

                  {/* Top Status Header */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/90 border border-secondary/30 mb-3 z-10">
                    <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                    <span className="text-[10px] font-mono font-bold text-secondary tracking-wider">
                      TEST_LAB_LIVE
                    </span>
                    <span className="text-[9px] font-mono text-muted/70">v2.4</span>
                  </div>

                  {/* Central Digital Pass Rate Metric */}
                  <div className="my-1 z-10 flex flex-col items-center">
                    <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-success">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-muted tracking-wider uppercase font-semibold mt-0.5">
                      Suite Pass Rate
                    </div>
                  </div>

                  {/* Live Validation Scenarios Feed */}
                  <div className="w-full max-w-[210px] sm:max-w-[240px] space-y-1.5 mt-2 z-10 text-left">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-text/85 bg-card/70 px-2.5 py-1 rounded-lg border border-border/60">
                      <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                      <span className="truncate">SDLC / STLC Pipeline: PASS</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-text/85 bg-card/70 px-2.5 py-1 rounded-lg border border-border/60">
                      <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                      <span className="truncate">Regression Assertions: 0 Bugs</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-text/85 bg-card/70 px-2.5 py-1 rounded-lg border border-border/60">
                      <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                      <span className="truncate">Client DOM Hydration: 200 OK</span>
                    </div>
                  </div>

                  {/* Ambient Studio Shadow & Sweep Scanner */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(7,11,20,0.7)] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

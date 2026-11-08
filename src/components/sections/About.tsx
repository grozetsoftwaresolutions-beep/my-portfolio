"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import { BookOpen, CheckCircle2, Code2, Search, Terminal, Network } from "lucide-react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      icon: Search,
      title: "Manual & Systematic QA",
      description:
        "Comprehensive mastery of SDLC and STLC, covering Functional, Regression, Smoke, Sanity, System, and GUI testing with meticulous test case design.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description:
        "Building responsive, high-performance web applications using React.js, Next.js, TypeScript, Node.js REST APIs, and Java OOP architectures.",
    },
    {
      icon: Network,
      title: "Networking & Automation",
      description:
        "Deep protocol fluency across OSI 7-layer models, TCP/IP, and HTTP/HTTPS, paired with test tracking via Jira/Zephyr and Selenium automation.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          module="ABOUT"
          title="The Mindset: Quality by Design"
          subtitle="Where rigorous manual testing discipline meets modern front-end web engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar & Learning Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 aspect-square shrink-0 mb-6 flex items-center justify-center">
              <TiltCard
                className="w-full h-full aspect-square rounded-full p-2 bg-gradient-to-br from-card via-surface to-card border border-border shadow-xl flex items-center justify-center overflow-hidden"
                glowColor="rgba(99, 102, 241, 0.2)"
                maxTilt={8}
              >
                <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border border-primary/30 bg-surface flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/profile.png"
                      alt={PERSONAL_INFO.name}
                      fill
                      sizes="(max-width: 768px) 256px, 288px"
                      onError={() => setImageError(true)}
                      className="object-cover object-[center_35%]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-card text-primary font-mono text-4xl font-bold">
                      M
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(7,11,20,0.5)] pointer-events-none" />
                </div>
              </TiltCard>
            </div>

            {/* Currently Learning Highlight Pill */}
            <div className="w-full max-w-sm p-4 rounded-xl bg-card/85 border border-secondary/30 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-1.5">
                <BookOpen className="w-4 h-4 text-secondary" />
                <span className="uppercase tracking-wider font-semibold">
                  CURRENTLY LEVELING UP
                </span>
              </div>
              <p className="text-sm font-medium text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                {PERSONAL_INFO.currentlyLearning}
              </p>
              <p className="text-xs text-muted mt-1">
                Automating browser workflows, POM design pattern, and assertion pipelines.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative Bio & Three QA Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card/75 border border-border backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Tester Precision + Developer Craft</span>
              </h3>
              <p className="text-sm sm:text-base text-text/90 leading-relaxed mb-4">
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                I approach software from both perspectives: writing clean, modular code with modern JavaScript, React, and Node.js, while systematically challenging every network request, edge-case input, and UI state transition to catch defects long before they ever reach production.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/90 border border-border hover:border-primary/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-secondary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

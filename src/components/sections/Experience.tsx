"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import { Calendar, MapPin, CheckCircle2, Terminal, ExternalLink } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          module="EXPERIENCE"
          title="Practical Engineering Experience"
          subtitle="Real-world development experience delivering interactive web software and dynamic UI systems."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Subtle 3D Depth Timeline Stem */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 sm:pl-20 mb-12"
            >
              {/* Timeline Node Point */}
              <div className="absolute left-2.5 sm:left-6.5 top-6 w-4 h-4 rounded-full bg-bg border-2 border-secondary shadow-[0_0_12px_rgba(34,211,238,0.5)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              </div>

              <TiltCard
                maxTilt={6}
                glowColor="rgba(99, 102, 241, 0.15)"
                className="p-6 sm:p-8 border border-border hover:border-primary/40 transition-all bg-card/85"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/15 text-secondary border border-secondary/25 uppercase tracking-wider font-semibold">
                        {exp.badge || "Engineering & QA"}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        Module: {exp.project}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-secondary">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-muted gap-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted/70">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.liveUrl && (
                      <MagneticButton
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 shadow-md shadow-primary/20 transition-all mt-1"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </MagneticButton>
                    )}
                  </div>
                </div>

                {/* Bullets with QA / Dev checkmarks */}
                <div className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-text/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Footnote */}
                <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-muted">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Terminal className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Stack: {exp.stack || "Modern Web & Automation Testing"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-success font-medium shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    <span>Production Live</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

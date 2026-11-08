"use client";

import { motion } from "framer-motion";
import { EDUCATION, SPECIALIZED_COURSES } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import MagneticButton from "../ui/MagneticButton";
import { GraduationCap, BookCheck, ExternalLink, Network, CheckCircle2, PlayCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          module="EDUCATION"
          title="Academic Foundation & Certifications"
          subtitle="Theoretical grounding in Information Technology, computer networking, and continuous specialized coursework."
        />

        {/* Formal Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard
                maxTilt={8}
                glowColor="rgba(34, 211, 238, 0.15)"
                className="p-6 sm:p-8 h-full border border-border hover:border-secondary/40 transition-all flex flex-col justify-between bg-card/85"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-secondary">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-secondary">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-sm font-semibold text-secondary mb-4">
                    {edu.institution}
                  </h4>

                  {edu.highlights && (
                    <p className="text-xs sm:text-sm text-text/80 leading-relaxed">
                      {edu.highlights}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-mono text-muted">
                  <BookCheck className="w-4 h-4 text-success" />
                  <span>Curriculum Verified</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Specialized Intensive Courses & Networking Deep Dive */}
        {SPECIALIZED_COURSES && SPECIALIZED_COURSES.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Network className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-secondary font-bold">
                CONTINUOUS SPECIALIZED COURSEWORK
              </h3>
            </div>

            <div className="space-y-6">
              {SPECIALIZED_COURSES.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 sm:p-8 rounded-2xl bg-card/75 border border-border hover:border-secondary/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">
                            <PlayCircle className="w-3.5 h-3.5" />
                            {course.platform} COURSE
                          </span>
                          <span className="text-xs font-mono text-muted">
                            Instructor: {course.instructor}
                          </span>
                          {course.period && (
                            <span className="text-xs font-mono text-success flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-success" />
                              {course.period}
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          {course.title}
                        </h4>
                      </div>

                      {course.url && (
                        <MagneticButton
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-surface hover:bg-white/10 text-secondary border border-secondary/30 transition-all shrink-0"
                        >
                          <span>Course Link</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </MagneticButton>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-text/80 leading-relaxed mb-5">
                      {course.description}
                    </p>

                    <div>
                      <div className="text-[11px] font-mono text-secondary uppercase font-semibold mb-2.5">
                        Key Networking Competencies & Protocols Mastered:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-surface border border-border text-text/90 hover:border-secondary/40 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
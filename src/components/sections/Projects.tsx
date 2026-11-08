"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Project } from "@/types";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import MagneticButton from "../ui/MagneticButton";
import {
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Box,
  Layers,
  Users,
  Cpu,
  X,
  Server,
  Sparkles,
} from "lucide-react";

export default function Projects() {
  const [expandedTestCard, setExpandedTestCard] = useState<string | null>("grofit");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const toggleTestDetails = (id: string) => {
    setExpandedTestCard((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          module="VERIFIED_PROJECTS"
          title="Engineered & Tested Projects"
          subtitle="Real-world production web applications engineered for speed and systematically stress-tested for 100% functional integrity."
        />

        {/* Primary 3 Projects Grid - Perfectly Aligned Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {PROJECTS.filter((p) => p.featured).map((project) => {
            const isExpanded = expandedTestCard === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full"
              >
                <TiltCard
                  maxTilt={6}
                  glowColor="rgba(99, 102, 241, 0.2)"
                  className="flex flex-col h-full overflow-hidden border border-border hover:border-primary/40 transition-all p-6 group bg-card/85"
                >
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-4 min-h-[28px]">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.is3dShowcase ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-primary/15 text-secondary border border-secondary/30">
                          <Box className="w-3 h-3 text-secondary animate-spin" />
                          3D WEBGL SHOWCASE
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-secondary/15 text-secondary border border-secondary/30">
                          <Layers className="w-3 h-3" />
                          FULL-STACK APP
                        </span>
                      )}

                      {project.coDeveloped && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-primary/20 text-secondary border border-primary/40 font-semibold">
                          <Users className="w-3 h-3 text-secondary" />
                          CO-DEVELOPED WITH FRIEND
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-success shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-success" />
                      <span>QA VERIFIED</span>
                    </div>
                  </div>

                  {/* Thumbnail / Image Preview - 16:9 Aspect Ratio across all cards */}
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-border bg-surface shrink-0">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card to-surface text-center p-4">
                        <Box className="w-8 h-8 text-secondary mb-2 opacity-60" />
                        <span className="text-xs font-mono text-white font-semibold">
                          {project.title}
                        </span>
                        <span className="text-[10px] font-mono text-muted">
                          Production Preview
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="min-h-[58px] mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-muted line-clamp-1">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text/80 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 min-h-[32px]">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-text/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* "How I Tested It" QA Breakdown */}
                  <div className="rounded-xl border border-border bg-surface/90 overflow-hidden mb-5">
                    <button
                      onClick={() => toggleTestDetails(project.id)}
                      className="w-full p-3 flex items-center justify-between text-left text-xs font-mono font-semibold text-secondary hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-secondary" />
                        <span>HOW I TESTED IT</span>
                      </div>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div className="px-3 pb-3 text-xs text-text/80">
                      <p className="mb-2 italic text-muted">
                        &quot;{project.howITestedIt.summary}&quot;
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 pt-2 border-t border-border"
                          >
                            {project.howITestedIt.scenarios.map((sc, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start gap-2 text-[11px] leading-relaxed text-muted"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                                <span>{sc}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Actions - Locked to bottom with mt-auto */}
                  <div className="mt-auto flex items-center justify-between gap-2 pt-3 border-t border-border flex-wrap">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <MagneticButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 transition-all shadow-md shadow-primary/15"
                        >
                          <span>Launch App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </MagneticButton>
                      )}

                      {project.systemArchitecture && (
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-surface/80 hover:bg-surface text-secondary border border-secondary/30 transition-all hover:scale-[1.02]"
                        >
                          <Cpu className="w-3.5 h-3.5 text-secondary" />
                          <span>Architecture</span>
                        </button>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-muted">
                      Status: Production Live
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Project Card: Staff-Admin Project Management System */}
        {PROJECTS.filter((p) => !p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/15 text-secondary border border-secondary/30">
                      INTERNAL ENTERPRISE TOOL
                    </span>
                    <span className="text-xs font-mono text-muted">
                      Live Project
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text/80 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-text/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex items-center gap-2 text-xs font-mono text-secondary font-semibold mb-2">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>QA VALIDATIONS</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-muted">
                    {project.howITestedIt.scenarios.map((sc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                        <span>{sc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Architecture & Specifications Modal */}
      <AnimatePresence>
        {activeModalProject && activeModalProject.systemArchitecture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-bg/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-card border border-border shadow-2xl shadow-primary/20 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-border bg-surface/50">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-primary/20 text-secondary border border-secondary/30">
                      <Cpu className="w-3.5 h-3.5 text-secondary" />
                      SYSTEM ARCHITECTURE & SPECIFICATIONS
                    </span>
                    {activeModalProject.coDeveloped && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-primary/20 text-secondary border border-primary/40 font-semibold">
                        <Users className="w-3.5 h-3.5 text-secondary" />
                        CO-DEVELOPED WITH FRIEND
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3 flex-wrap">
                    {activeModalProject.title}
                    <span className="text-sm font-normal font-mono text-muted">
                      — {activeModalProject.subtitle}
                    </span>
                  </h2>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl text-muted hover:text-white hover:bg-surface border border-transparent hover:border-border transition-all"
                  aria-label="Close architecture modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-text/90">
                {/* Overview & Market Need */}
                <div className="space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    Mission & Market Problem Statement
                  </h3>
                  <p className="text-sm text-text/80 leading-relaxed bg-surface/40 p-4 rounded-xl border border-border">
                    {activeModalProject.systemArchitecture.overview}
                  </p>
                  {activeModalProject.systemArchitecture.marketNeed && (
                    <div className="p-4 rounded-xl bg-surface/40 border border-border">
                      <h4 className="text-xs font-mono text-white font-semibold mb-1">
                        Market Need & Strategic Regional Focus:
                      </h4>
                      <p className="text-xs text-muted leading-relaxed">
                        {activeModalProject.systemArchitecture.marketNeed}
                      </p>
                    </div>
                  )}
                </div>

                {/* Operating Model */}
                {activeModalProject.systemArchitecture.operatingModel && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                      <Layers className="w-4 h-4 text-secondary" />
                      {activeModalProject.systemArchitecture.operatingModel.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeModalProject.systemArchitecture.operatingModel.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/30 border border-border text-xs leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* System Modules */}
                {activeModalProject.systemArchitecture.modules && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                      <Box className="w-4 h-4 text-secondary" />
                      Core System Modules & Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeModalProject.systemArchitecture.modules.map((mod, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-surface/50 border border-border hover:border-secondary/40 transition-colors"
                        >
                          <h4 className="text-xs font-mono font-bold text-white mb-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {mod.name}
                          </h4>
                          <p className="text-xs text-muted leading-relaxed">
                            {mod.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Specs */}
                {activeModalProject.systemArchitecture.techSpecs && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                      <Server className="w-4 h-4 text-secondary" />
                      Technology Stack & Infrastructure Specs
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalProject.systemArchitecture.techSpecs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-surface/40 border border-border"
                        >
                          <div className="text-[11px] font-mono text-secondary font-semibold uppercase mb-1">
                            {spec.layer}
                          </div>
                          <div className="text-xs text-text/80 leading-relaxed">
                            {spec.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* QA Verification Suite */}
                <div className="space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    QA Test Scenarios & Automation Assertions
                  </h3>
                  <div className="p-4 rounded-xl bg-surface/40 border border-border space-y-2.5">
                    <div className="text-xs font-mono text-muted italic mb-3">
                      &quot;{activeModalProject.howITestedIt.summary}&quot;
                    </div>
                    {activeModalProject.howITestedIt.scenarios.map((sc, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-text/85 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{sc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 px-6 border-t border-border bg-surface/50">
                <span className="text-xs font-mono text-muted">
                  Architecture verified & tested
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-muted hover:text-white hover:bg-surface transition-all"
                  >
                    Close
                  </button>
                  {activeModalProject.liveUrl && (
                    <MagneticButton
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 transition-all shadow-md shadow-primary/20"
                    >
                      <span>Open {activeModalProject.title}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </MagneticButton>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

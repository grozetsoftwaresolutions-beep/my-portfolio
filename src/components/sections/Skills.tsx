"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import { Check, ShieldCheck, Terminal, Cpu, Globe, Database, Network } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    testing: ShieldCheck,
    networking: Network,
    programming: Cpu,
    web: Globe,
    database: Database,
    tools: Terminal,
  };

  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({
      name: s,
      category: cat.title,
      catId: cat.id,
      color: cat.color,
    }))
  );

  const displayedSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.catId === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          module="SKILLS_MATRIX"
          title="Engineered for Quality & Performance"
          subtitle="A comprehensive toolkit spanning end-to-end test validation, object-oriented Java programming, modern front-end web stacks, and database architecture."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md shadow-primary/20"
                : "bg-card border border-border text-muted hover:text-white hover:border-primary/40"
            }`}
          >
            All Skills ({allSkills.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Terminal;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-surface border border-secondary text-white font-bold shadow-md shadow-secondary/15"
                    : "bg-card border border-border text-muted hover:text-white hover:border-border/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-secondary" />
                <span>{cat.title}</span>
                <span className="text-[10px] text-muted/70">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence>
            {displayedSkills.map((skill) => (
              <motion.div
                key={`${skill.catId}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard
                  maxTilt={8}
                  glowColor="rgba(99, 102, 241, 0.15)"
                  className="p-3.5 bg-card/80 border border-border hover:border-primary/40 transition-all flex flex-col justify-between h-full group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div className="flex items-center gap-1 text-[10px] font-mono text-success opacity-80 group-hover:opacity-100 transition-opacity">
                      <Check className="w-3 h-3 text-success" />
                      <span>PASS</span>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-text group-hover:text-white transition-colors">
                    {skill.name}
                  </div>

                  <div className="text-[10px] font-mono text-muted mt-2 truncate">
                    {skill.category}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Category Cards Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-card/60 border border-border backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h4 className="text-base font-bold text-white">{cat.title}</h4>
                </div>
                <span className="text-xs font-mono text-muted">{cat.skills.length} skills</span>
              </div>
              <p className="text-xs text-muted mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-border text-text/80 hover:text-white hover:border-secondary/30 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  module: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  module,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 mb-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
        <span>{number} // {module}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

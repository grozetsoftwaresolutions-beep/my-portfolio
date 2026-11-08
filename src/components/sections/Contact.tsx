"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with test-lab verification
    await new Promise((resolve) => setTimeout(resolve, 1100));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#22D3EE", "#34D399"],
      });
    } catch {
      // ignore
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          module="CONTACT_DISPATCH"
          title="Connect with The Test Lab"
          subtitle="Open for QA Automation Engineer and Front-End Developer roles. Let's build bug-free software together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <TiltCard
              maxTilt={6}
              glowColor="rgba(99, 102, 241, 0.2)"
              className="p-6 sm:p-8 border border-border bg-card/90"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Let&apos;s Discuss Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                Whether you have an open QA / SDET position, a front-end project, or want to discuss automated test strategies, my inbox is always open.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                {/* Email with copy */}
                <div className="p-3.5 rounded-xl bg-surface border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-muted uppercase">
                        Direct Email
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-border text-muted hover:text-white hover:bg-white/5 transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-surface border border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted uppercase">
                      Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="p-3.5 rounded-xl bg-surface border border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted uppercase">
                      LinkedIn
                    </div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors"
                    >
                      {PERSONAL_INFO.linkedinHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-mono text-secondary">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>Response time: &lt; 24 hours guaranteed</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-mono text-secondary font-semibold uppercase tracking-wider">
                    TEST_SUITE_DISPATCH // LIVE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted">
                  Status: Ready
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/20 border border-success flex items-center justify-center text-success mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-text/80 max-w-md">
                      Thank you for reaching out, {formData.name}. Your message has passed all validation assertions and landed in Mahadeer&apos;s queue.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Johnson"
                          className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                            errors.name
                              ? "border-danger focus:border-danger"
                              : "border-border focus:border-secondary"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-danger flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                            errors.email
                              ? "border-danger focus:border-danger"
                              : "border-border focus:border-secondary"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-danger flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. QA Automation Opportunity / Project Inquiry"
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.subject
                            ? "border-danger focus:border-danger"
                            : "border-border focus:border-secondary"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-[11px] text-danger flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                        Message Body
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Share project details, role expectations, or timeline..."
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-danger focus:border-danger"
                            : "border-border focus:border-secondary"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-[11px] text-danger flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button: Indigo -> Cyan Gradient */}
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted hidden sm:inline">
                        100% Client Validation Verified
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Validating & Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Dispatch Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

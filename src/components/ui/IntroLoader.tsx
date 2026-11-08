"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Terminal } from "lucide-react";

export default function IntroLoader({ onFinish }: { onFinish?: () => void }) {
  const [step, setStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Sequence timing: ~1.8s total
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 650),
      setTimeout(() => setStep(3), 1050),
      setTimeout(() => setStep(4), 1400),
      setTimeout(() => {
        setIsDone(true);
        if (onFinish) onFinish();
      }, 1800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg text-white font-mono px-4"
      >
        <div className="w-full max-w-md p-6 rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border text-xs text-muted">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-secondary" />
              <span>TEST_RUNNER // v2.4.0</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-danger/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-success/80" />
            </div>
          </div>

          {/* Test Console Lines */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-secondary">
              <span className="animate-spin text-sm">⟳</span>
              <span>RUNNING: The Test Lab automated test suite...</span>
            </div>

            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  <span>PASS: core/hero.module.ts</span>
                </div>
                <span className="text-[10px] text-muted/60">0.12s</span>
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  <span>PASS: e2e/skills-matrix.spec.ts</span>
                </div>
                <span className="text-[10px] text-muted/60">0.24s</span>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  <span>PASS: integration/projects-showcase.spec.ts</span>
                </div>
                <span className="text-[10px] text-muted/60">0.31s</span>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pt-3 border-t border-border text-success flex items-center justify-between font-bold"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>ALL TESTS PASSED: 18/18</span>
                </div>
                <span className="text-[10px] bg-success/20 px-2 py-0.5 rounded text-success uppercase tracking-wider">
                  0 Defects
                </span>
              </motion.div>
            )}
          </div>

          {/* Progress Bar in Indigo -> Cyan Gradient */}
          <div className="mt-5 w-full bg-white/5 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: "10%" }}
              animate={{
                width:
                  step === 0
                    ? "25%"
                    : step === 1
                    ? "50%"
                    : step === 2
                    ? "75%"
                    : step === 3
                    ? "90%"
                    : "100%",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

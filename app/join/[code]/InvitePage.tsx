"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DOWNLOAD_URL } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring" as const, stiffness: 400, damping: 17 };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const steps = [
  { number: "01", text: "Download and open Roost on your Mac" },
  { number: "02", text: "Choose \"Join existing home\" when prompted" },
  { number: "03", text: "Enter your invite code — you're in" },
];

export default function InvitePage({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const deepLink = `roost://join?code=${code}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[400px] rounded-full bg-primary/[0.07] blur-[100px]" />
      </div>

      <motion.div
        className="relative w-full max-w-md"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div variants={item} className="flex justify-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-medium text-3xl shadow-lg select-none"
            style={{ boxShadow: "0 8px 32px rgba(212, 121, 94, 0.3)" }}
          >
            R
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="text-center mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-primary/50 inline-block" />
            You&apos;ve been invited
            <span className="w-6 h-px bg-primary/50 inline-block" />
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight tracking-tight text-balance">
            Join your partner&apos;s{" "}
            <span className="text-primary">Roost.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed text-balance">
            Your shared home dashboard is ready — shopping, expenses, chores, and your calendar, all in one place.
          </p>
        </motion.div>

        {/* Code card */}
        <motion.div
          variants={item}
          className="bg-card border border-border rounded-xl p-6 mb-4"
          style={{ boxShadow: "0 2px 16px rgba(61, 50, 41, 0.06)" }}
        >
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Your invite code
          </p>

          <div className="flex items-center justify-between gap-4 mb-5">
            <code className="font-mono text-3xl font-semibold tracking-[0.2em] text-foreground select-all">
              {code}
            </code>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={spring}
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         border border-border bg-background text-sm font-medium text-foreground
                         hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Copy invite code"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 text-[#7fa087]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    Copy code
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Primary CTA — open in app */}
          <motion.a
            href={deepLink}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(212, 121, 94, 0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl
                       bg-primary text-primary-foreground font-medium text-base
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ boxShadow: "0 4px 20px rgba(212, 121, 94, 0.25)" }}
          >
            Open in Roost
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Download fallback */}
        <motion.div variants={item} className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3">Don&apos;t have Roost yet?</p>
          <motion.a
            href={DOWNLOAD_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                       border border-border bg-card text-sm font-medium text-foreground
                       hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg width="14" height="14" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109.2C79 740 40 610 40 480c0-178.1 116.2-272.6 230.4-272.6 61.2 0 112.3 40.8 149.8 40.8 35.8 0 92.1-43.1 160.3-43.1 24.4 0 108.2 2.6 168.6 81.3zm-87.4-227.9c28.3-35.2 48.5-84.1 48.5-133 0-6.4-.6-12.9-1.9-18.1-46.2 1.9-101.8 31.5-135.3 71.3-27 31.5-50.2 80.4-50.2 130 0 7.1 1.3 14.2 1.9 16.5 2.6.3 6.4.6 10.3.6 41.5 0 93.2-28.3 126.7-67.3z" />
            </svg>
            Download for Mac
          </motion.a>
        </motion.div>

        {/* Steps */}
        <motion.div variants={item}>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-5 text-center">
            How it works
          </p>
          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-primary tabular-nums">{step.number}</span>
                </div>
                <p className="text-sm text-foreground leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={item}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          macOS 13 and above · Free during early access
        </motion.p>
      </motion.div>
    </div>
  );
}

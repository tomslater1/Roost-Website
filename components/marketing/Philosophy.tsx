"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 px-6" aria-label="Our philosophy">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="w-8 h-0.5 bg-primary/60 mx-auto mb-10 rounded-full"
          aria-hidden="true"
        />

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl font-medium text-primary leading-[1.6] text-balance"
        >
          Roost isn&apos;t a platform. It doesn&apos;t have a social feed, a
          subscription tier, or a team of engineers mining your grocery list for
          insights.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance"
        >
          It&apos;s a quiet, private space for two people to manage their home
          together. Your data lives in your own private database — no tracking,
          no ads, no third parties with a window into your life. We built this
          because we needed it. Maybe you do too.
        </motion.p>

        <motion.div
          variants={item}
          className="w-8 h-0.5 bg-primary/60 mx-auto mt-10 rounded-full"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}

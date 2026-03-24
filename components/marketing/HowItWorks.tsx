"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Download Roost on both your Macs",
    description:
      "Each of you installs Roost from the download page. It takes about a minute and there's nothing to configure.",
  },
  {
    number: "02",
    title: "Create a home and share your invite code",
    description:
      "One of you sets up the household and gives it a name. The other joins with a simple invite code — no complicated account linking.",
  },
  {
    number: "03",
    title: "Everything syncs instantly between you",
    description:
      "That's it. Add a shopping item, log an expense, tick a chore — your partner sees it the moment it happens.",
  },
];

const stepContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const stepItem = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            className="w-1.5 h-7 bg-primary rounded-full"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
          />
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight"
          >
            Up and running in minutes.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 relative"
          variants={stepContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepItem}
              className="relative flex flex-col gap-5"
            >
              {/* Number badge */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20
                            flex items-center justify-center flex-shrink-0"
                whileHover={{
                  backgroundColor: "rgba(212,121,94,0.18)",
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <span className="text-lg font-medium text-primary tabular-nums">
                  {step.number}
                </span>
              </motion.div>

              <div>
                <h3 className="font-medium text-foreground text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

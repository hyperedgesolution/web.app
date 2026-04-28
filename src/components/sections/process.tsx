"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./animated-section";
import { Search, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Deep-dive into your domain challenges. We map existing infrastructure, regulatory constraints, and strategic goals to define the optimal solution architecture.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Architect",
    description:
      "Select from modular platform components and customize every dimension — from data pipelines and ML models to UI workflows and compliance rules.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "Zero-downtime deployment with automated testing, canary releases, and CI/CD pipelines. Go from staging to production in hours, not months.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolve",
    description:
      "Continuous optimization powered by usage analytics. Your platform gets smarter and faster as it scales from thousands to millions of users.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Concept to production
            <br />
            <span className="text-glow">in four steps.</span>
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ProcessStep key={step.number} step={step} index={i} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  Icon,
}: {
  step: (typeof steps)[0];
  index: number;
  Icon: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative text-center group"
    >
      {/* Icon circle */}
      <div className="relative inline-flex mb-6">
        <div className="h-20 w-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/5">
          <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        <div className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
          {step.number}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>
    </motion.div>
  );
}

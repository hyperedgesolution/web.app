"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./animated-section";
import {
  Blocks,
  Gauge,
  Globe,
  Lock,
  Layers,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Modular by Design",
    description:
      "Every component is independently deployable. Mix and match modules to build exactly what you need — nothing more, nothing less.",
    gradient: "from-emerald-500/15 to-teal-500/5",
  },
  {
    icon: Gauge,
    title: "Real-Time Everything",
    description:
      "Sub-millisecond event processing powered by edge computing. Millions of data points, zero lag, infinite scale.",
    gradient: "from-teal-500/15 to-cyan-500/5",
  },
  {
    icon: Globe,
    title: "Deploy Anywhere",
    description:
      "40+ global regions with auto-scaling infrastructure. Your platform expands seamlessly as your business grows.",
    gradient: "from-cyan-500/15 to-emerald-500/5",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    description:
      "End-to-end encryption, RBAC, continuous threat monitoring. Built for the most regulated industries on earth.",
    gradient: "from-emerald-500/15 to-green-500/5",
  },
  {
    icon: Layers,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop automation pipelines. Build complex workflows without writing a single line of code.",
    gradient: "from-green-500/15 to-teal-500/5",
  },
  {
    icon: Zap,
    title: "Instant Experiences",
    description:
      "Intelligent caching, CDN delivery, and progressive rendering. Your users get blazing-fast experiences, always.",
    gradient: "from-teal-500/15 to-emerald-500/5",
  },
];

function FeatureRow({
  icon: Icon,
  title,
  description,
  gradient,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative py-12 lg:py-16">
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`${isEven ? "" : "lg:order-2"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ring-1 ring-white/5`}>
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-mono text-muted-foreground/60">
              0{index + 1}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`${isEven ? "" : "lg:order-1"}`}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bento-card p-6 sm:p-8 flex items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
            <div className="absolute inset-0 dot-bg opacity-20" />
            <div className="relative">
              <Icon className="h-16 w-16 sm:h-20 sm:w-20 text-primary/20" strokeWidth={1} />
            </div>
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 h-6 w-6 border-l border-t border-primary/20 rounded-tl-lg" />
            <div className="absolute bottom-3 right-3 h-6 w-6 border-r border-b border-primary/20 rounded-br-lg" />
          </div>
        </motion.div>
      </div>

      {/* Separator line */}
      {index < features.length - 1 && (
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Engineered for
            <br />
            <span className="text-glow">the impossible.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="text-center mb-16">
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Six foundational pillars that make HyperResolution the platform of choice for teams building at the edge of what&apos;s possible.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          {features.map((feature, i) => (
            <FeatureRow key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

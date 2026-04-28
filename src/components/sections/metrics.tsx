"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./animated-section";

const metrics = [
  {
    value: 99.9,
    suffix: "%",
    label: "Platform Uptime",
    description: "Enterprise-grade reliability you can count on",
  },
  {
    value: 500,
    suffix: "+",
    label: "Global Clients",
    description: "Trusted by teams across 40+ countries",
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster Deployment",
    description: "Compared to traditional development cycles",
  },
  {
    value: 40,
    suffix: "M+",
    label: "Events Processed Daily",
    description: "Real-time data at massive scale",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue =
    value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            By The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Delivering Measurable{" "}
            <span className="text-gradient">Impact</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <AnimatedSection key={metric.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gradient">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

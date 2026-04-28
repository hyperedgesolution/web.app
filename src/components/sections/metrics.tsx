"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./animated-section";

const metrics = [
  {
    value: 99.99,
    suffix: "%",
    label: "Platform Uptime",
    description: "Five-nines reliability across all regions",
    size: "large",
  },
  {
    value: 500,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Across 40+ countries worldwide",
    size: "large",
  },
  {
    value: 3.2,
    suffix: "x",
    label: "Faster Time-to-Market",
    description: "Compared to traditional development",
    size: "large",
  },
  {
    value: 42,
    suffix: "M",
    label: "Events / Second",
    description: "Real-time processing at massive scale",
    size: "large",
  },
  {
    value: 250,
    suffix: "+",
    label: "Integrations",
    description: "Pre-built connectors for any stack",
    size: "small",
  },
  {
    value: 14,
    suffix: "ms",
    label: "Avg Response",
    description: "Global edge network P99 latency",
    size: "small",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
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

  const display =
    value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 noise" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Scale without
            <br />
            <span className="text-glow">compromise.</span>
          </h2>
        </FadeIn>

        {/* Main metrics */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6"
          stagger={0.1}
        >
          {metrics.slice(0, 4).map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="bento-card p-6 sm:p-8 text-center group cursor-default h-full">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-glow leading-none">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Secondary metrics */}
        <StaggerContainer
          className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
          stagger={0.1}
        >
          {metrics.slice(4).map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="bento-card p-5 sm:p-6 text-center group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground/80">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="mt-2 text-xs font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

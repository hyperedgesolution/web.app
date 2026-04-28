"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";
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
    title: "Modular Architecture",
    description:
      "Pick and choose modules to build exactly what you need. Every component is independently deployable and extensible.",
    highlight: false,
  },
  {
    icon: Gauge,
    title: "Real-Time Processing",
    description:
      "Sub-millisecond data pipelines powered by edge computing. Process millions of events per second with zero lag.",
    highlight: false,
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description:
      "Deploy across 40+ regions with auto-scaling infrastructure. Your platform grows seamlessly with your business.",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Zero-trust architecture with end-to-end encryption, role-based access control, and continuous threat monitoring.",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Custom Workflows",
    description:
      "Visual workflow builder for creating bespoke automation pipelines without writing a single line of code.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with intelligent caching, CDN delivery, and progressive rendering for instant user experiences.",
    highlight: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Why HyperResolution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for Innovation,{" "}
            <span className="text-gradient">Engineered for Scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every feature is designed with precision to deliver unmatched
            performance, security, and flexibility for your most demanding
            workloads.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-6 card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 transition-colors group-hover:bg-primary/12">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

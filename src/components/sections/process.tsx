"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";
import { Search, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We analyze your unique challenges, existing infrastructure, and strategic goals to map the perfect solution architecture.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    number: "02",
    icon: Palette,
    title: "Customize",
    description:
      "Select from our modular platform components and tailor every aspect — from workflows to UI — to match your exact needs.",
    color: "from-teal-500/20 to-teal-600/10",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "Zero-downtime deployment with automated testing, staging environments, and CI/CD pipelines built into the platform.",
    color: "from-emerald-500/20 to-cyan-600/10",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Auto-scaling infrastructure ensures your platform handles growth seamlessly — from thousands to millions of users.",
    color: "from-green-500/20 to-emerald-600/10",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From Vision to{" "}
            <span className="text-gradient">Production</span> in Weeks
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A streamlined four-phase process designed to minimize time-to-value
            while maximizing customization and quality.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative group h-full">
                  {/* Connector line (hidden on mobile and last item) */}
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5px)] w-px h-[calc(100%-2.5rem)] bg-gradient-to-b from-border to-transparent" />

                  <div className="relative h-full rounded-2xl border border-border/60 bg-card p-6 card-hover">
                    {/* Step number */}
                    <span className="text-xs font-bold text-primary/40 tracking-wider">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`mt-3 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} transition-transform group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

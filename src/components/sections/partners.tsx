"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";

const partners = [
  "MedTech Global",
  "AutoDrive AI",
  "HealthSync",
  "Velocity Systems",
  "NeuralCare",
  "FleetIQ",
];

export function Partners() {
  return (
    <section className="py-16 lg:py-20 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Trusted by innovative teams worldwide
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6" staggerDelay={0.08}>
          {partners.map((name) => (
            <StaggerItem key={name}>
              <div className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground/60">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold tracking-tight">{name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

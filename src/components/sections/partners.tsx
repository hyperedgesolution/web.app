"use client";

import { FadeIn, Marquee } from "./animated-section";

const partners = [
  "MedTech Global",
  "AutoDrive AI",
  "HealthSync",
  "Velocity Systems",
  "NeuralCare",
  "FleetIQ",
  "BioMatrix",
  "DriveCore",
];

export function Partners() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-border/40 overflow-hidden">
      <FadeIn className="text-center mb-10">
        <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
          Trusted by forward-thinking teams
        </p>
      </FadeIn>

      {/* Row 1 - left to right */}
      <Marquee className="mb-4">
        {partners.map((name, i) => (
          <div
            key={`a-${i}`}
            className="flex items-center gap-2.5 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 shrink-0"
          >
            <div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center">
              <span className="text-[10px] font-bold">{name.charAt(0)}</span>
            </div>
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{name}</span>
          </div>
        ))}
      </Marquee>

      {/* Row 2 - right to left */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee-slow items-center gap-8 [gap:clamp(1.5rem,4vw,3rem)]" style={{ animationDirection: "reverse" }}>
          {[...partners].reverse().map((name, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center gap-2.5 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 shrink-0"
            >
              <div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center">
                <span className="text-[10px] font-bold">{name.charAt(0)}</span>
              </div>
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{name}</span>
            </div>
          ))}
          {[...partners].reverse().map((name, i) => (
            <div
              key={`b2-${i}`}
              className="flex items-center gap-2.5 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 shrink-0"
            >
              <div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center">
                <span className="text-[10px] font-bold">{name.charAt(0)}</span>
              </div>
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

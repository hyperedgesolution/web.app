"use client";

import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "HyperResolution transformed our patient monitoring system. Their customizable platform reduced our development time by 60% and the AI diagnostics accuracy is remarkable.",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "MedTech Global",
    rating: 5,
  },
  {
    quote:
      "The fleet management platform exceeded our expectations. Real-time vehicle analytics and predictive maintenance have saved us over $2M annually in operational costs.",
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "Velocity Systems",
    rating: 5,
  },
  {
    quote:
      "What sets HyperResolution apart is their commitment to customization. Every module was tailored to our exact workflow — nothing cookie-cutter about their approach.",
    name: "Priya Sharma",
    role: "Head of Digital Innovation",
    company: "HealthSync",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hear from the teams that have transformed their operations with
            HyperResolution&apos;s bespoke platforms.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-6 card-hover">
                {/* Quote icon */}
                <div className="mb-4 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/10" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-sm leading-relaxed text-foreground/80 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

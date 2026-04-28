"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animated-section";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "HyperResolution didn't just accelerate our diagnostic pipeline — they fundamentally reimagined it. The modular architecture let us iterate in days what used to take quarters.",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "MedTech Global",
    rating: 5,
    avatar: "SC",
  },
  {
    quote:
      "The fleet intelligence platform paid for itself in the first quarter. Predictive maintenance alone saved us $2.4M in the first year. This is infrastructure that thinks.",
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "Velocity Systems",
    rating: 5,
    avatar: "MR",
  },
  {
    quote:
      "We evaluated seven platforms. HyperResolution was the only one that let us configure workflows visually and deploy custom ML models without a PhD in DevOps. Game-changer.",
    name: "Priya Sharma",
    role: "Head of Digital Innovation",
    company: "HealthSync",
    rating: 5,
    avatar: "PS",
  },
  {
    quote:
      "The V2X connectivity stack handles 100K vehicles in real-time without breaking a sweat. Their edge network architecture is genuinely best-in-class.",
    name: "James Okafor",
    role: "CTO",
    company: "FleetIQ",
    rating: 5,
    avatar: "JO",
  },
  {
    quote:
      "From POC to production in 8 weeks. The HyperResolution team understood our compliance requirements from day one and built them into the platform DNA.",
    name: "Dr. Elena Vasquez",
    role: "Director of R&D",
    company: "NeuralCare",
    rating: 5,
    avatar: "EV",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
}: (typeof testimonials)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bento-card p-6 sm:p-8 flex flex-col h-full group cursor-default"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm sm:text-[15px] leading-relaxed text-foreground/80 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-6 pt-5 border-t border-border/40 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
          <span className="text-xs font-bold text-primary">{avatar}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} · {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-medium text-primary tracking-widest uppercase mb-4">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Trusted by teams
            <br />
            <span className="text-glow">building the future.</span>
          </h2>
        </FadeIn>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-[340px] sm:w-[380px] shrink-0 snap-start">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

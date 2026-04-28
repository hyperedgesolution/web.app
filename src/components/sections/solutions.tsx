"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./animated-section";
import {
  HeartPulse,
  Activity,
  Brain,
  ShieldCheck,
  Car,
  Radar,
  Settings2,
  Wifi,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const solutions = {
  health: {
    label: "Health Tech",
    tagline: "Digital Health Platform",
    description:
      "Transform patient outcomes with predictive diagnostics, real-time monitoring, and AI-powered clinical workflows built on a HIPAA-compliant infrastructure.",
    highlights: [
      "99.97% diagnostic accuracy with ML models",
      "250+ medical device integrations",
      "Real-time patient vitals dashboard",
      "HL7 FHIR & DICOM interoperability",
    ],
    cards: [
      { icon: HeartPulse, title: "Remote Patient Monitoring", desc: "IoT-enabled wearable integration for continuous health tracking and early intervention alerts." },
      { icon: Brain, title: "AI Diagnostics Engine", desc: "Deep learning models trained on 15M+ clinical records for rapid, accurate diagnosis." },
      { icon: Activity, title: "Clinical Analytics", desc: "Predictive analytics for patient outcomes, readmission risk, and resource optimization." },
      { icon: ShieldCheck, title: "Compliance Suite", desc: "Automated HIPAA, GDPR workflows with real-time audit trails and SOC 2 reporting." },
    ],
  },
  auto: {
    label: "Automobility",
    tagline: "Connected Vehicle Intelligence",
    description:
      "Power the future of mobility with AI-driven fleet management, V2X communication, and advanced driver assistance on a globally distributed edge network.",
    highlights: [
      "40% reduction in fleet downtime",
      "Sub-10ms V2X communication",
      "OTA management for 100K+ vehicles",
      "Predictive maintenance AI",
    ],
    cards: [
      { icon: Car, title: "Fleet Command Center", desc: "Real-time GPS tracking, route optimization, and predictive maintenance scheduling." },
      { icon: Radar, title: "ADAS Platform", desc: "Sensor fusion engine with real-time hazard detection and autonomous decision support." },
      { icon: Settings2, title: "Predictive Maintenance", desc: "AI anomaly detection on vehicle telemetry to prevent failures before they occur." },
      { icon: Wifi, title: "V2X Connectivity", desc: "Vehicle-to-everything communication infrastructure for smart city integration." },
    ],
  },
};

type SolutionKey = keyof typeof solutions;

function SolutionCard({
  icon: Icon,
  title,
  desc,
  index,
  span = false,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
  span?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bento-card p-5 sm:p-6 group cursor-default ${span ? "md:col-span-2" : ""}`}
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/3 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="h-9 w-9 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 group-hover:ring-primary/40 transition-all duration-300">
          <Icon className="h-4.5 w-4.5 text-primary" />
        </div>
        <h3 className="text-sm font-semibold mb-1.5 group-hover:text-foreground transition-colors">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Solutions() {
  const [active, setActive] = useState<SolutionKey>("health");
  const data = solutions[active];

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4 text-[11px] font-medium tracking-widest uppercase border-primary/25 text-primary bg-primary/5 px-3 py-1">
            Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-tight">
            Two domains.
            <br />
            <span className="text-glow">One platform.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            Purpose-built modules for health tech and automobility, fully
            customizable to your exact requirements.
          </p>
        </FadeIn>

        {/* Tab switcher */}
        <FadeIn delay={0.15} className="flex justify-center mb-14">
          <div className="inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur-sm p-1">
            {(["health", "auto"] as SolutionKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === key && (
                  <motion.div
                    layoutId="solution-tab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{solutions[key].label}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left info */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <FadeInLeft delay={0.05}>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                    {data.tagline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {data.description}
                  </p>
                </FadeInLeft>

                <div className="space-y-3 mb-8">
                  {data.highlights.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <FadeIn delay={0.3}>
                  <Button className="btn-glow rounded-full bg-primary text-primary-foreground hover:bg-primary/85 h-11 px-6 text-sm font-semibold">
                    Explore {data.label}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </FadeIn>
              </div>

              {/* Right cards grid */}
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {data.cards.map((card, i) => (
                  <SolutionCard
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                    index={i}
                    span={i === 0}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FadeInLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

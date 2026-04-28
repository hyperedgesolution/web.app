"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";
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

const healthFeatures = [
  {
    icon: Activity,
    title: "Patient Analytics",
    description:
      "Real-time patient data aggregation and predictive analytics for better clinical outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Remote Monitoring",
    description:
      "IoT-enabled wearable integration for continuous health tracking and early intervention.",
  },
  {
    icon: Brain,
    title: "AI Diagnostics",
    description:
      "Machine learning models trained on millions of data points for accurate, fast diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Automation",
    description:
      "Automated HIPAA, GDPR, and regional compliance workflows with audit-ready documentation.",
  },
];

const autoFeatures = [
  {
    icon: Car,
    title: "Fleet Management",
    description:
      "End-to-end fleet tracking, route optimization, and predictive maintenance scheduling.",
  },
  {
    icon: Radar,
    title: "ADAS Integration",
    description:
      "Advanced Driver Assistance Systems with real-time sensor fusion and hazard detection.",
  },
  {
    icon: Settings2,
    title: "Predictive Maintenance",
    description:
      "AI-powered vehicle health monitoring to reduce downtime and extend asset lifespan.",
  },
  {
    icon: Wifi,
    title: "Connected Vehicle Platform",
    description:
      "V2X communication infrastructure enabling seamless vehicle-to-everything connectivity.",
  },
];

function SolutionCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border/60 bg-card p-6 card-hover"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function Solutions() {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <section id="solutions" className="py-20 lg:py-28 mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <Badge
            variant="secondary"
            className="mb-4 text-xs font-medium tracking-wide"
          >
            Our Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tailored Platforms for{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From digital health to connected vehicles, our customizable
            solutions adapt to your unique requirements with precision.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 h-12 bg-muted/80 p-1">
              <TabsTrigger
                value="health"
                className="h-10 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
              >
                Health Tech
              </TabsTrigger>
              <TabsTrigger
                value="auto"
                className="h-10 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
              >
                Automobility
              </TabsTrigger>
            </TabsList>

            <div className="mt-12">
              <TabsContent value="health" forceMount className={activeTab !== "health" ? "hidden" : ""}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="health-content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-3">
                          Digital Health Platform
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          Transform patient care with our end-to-end health tech
                          ecosystem. From predictive diagnostics to remote patient
                          monitoring, deliver better outcomes at scale.
                        </p>
                        <div className="space-y-3 mb-8">
                          {[
                            "99.97% diagnostic accuracy",
                            "Real-time patient dashboards",
                            "HL7 FHIR interoperability",
                            "250+ device integrations",
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Explore Health Tech
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {healthFeatures.map((feature, i) => (
                      <SolutionCard key={feature.title} {...feature} index={i} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="auto" forceMount className={activeTab !== "auto" ? "hidden" : ""}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="auto-content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-3">
                          Automobility Intelligence
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          Power the future of mobility with AI-driven fleet
                          management, connected vehicle platforms, and advanced
                          driver assistance systems.
                        </p>
                        <div className="space-y-3 mb-8">
                          {[
                            "40% reduction in fleet downtime",
                            "Real-time V2X communication",
                            "OTA update management",
                            "100K+ vehicles monitored",
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Explore Automobility
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {autoFeatures.map((feature, i) => (
                      <SolutionCard key={feature.title} {...feature} index={i} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}

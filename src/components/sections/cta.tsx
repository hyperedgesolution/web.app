"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "./animated-section";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "14-day free trial — no credit card required",
  "Dedicated onboarding specialist",
  "Custom configuration for your industry",
  "99.9% uptime SLA guarantee",
];

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 sm:p-12 lg:p-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[128px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[128px]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(oklch(0.6 0.14 160) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Ready to Transform
                  <br />
                  Your Business?
                </h2>
                <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-md">
                  Join 500+ organizations that trust HyperResolution to power
                  their most critical operations.
                </p>

                <div className="mt-8 space-y-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Start Your Free Trial
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  Get started in minutes. No commitment required.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEmail("");
                  }}
                  className="space-y-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <p className="mt-4 text-xs text-white/30 text-center">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

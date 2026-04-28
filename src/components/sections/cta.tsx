"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "./animated-section";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl cta-gradient">
            {/* Background effects */}
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 noise" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/8 rounded-full blur-[80px]" />

            <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-medium text-white mb-6">
                  <Sparkles className="h-3 w-3" />
                  14-day free trial
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-tight text-white">
                  Ready to build
                  <br />
                  something great?
                </h2>
                <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-md">
                  Join 500+ organizations using HyperResolution to power their
                  most critical operations. Start free, scale when ready.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "No credit card required",
                    "Dedicated onboarding",
                    "Custom configuration",
                    "99.99% SLA guarantee",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold mb-1 text-white">Start Your Free Trial</h3>
                <p className="text-sm text-white/60 mb-6">
                  Get started in minutes. No commitment.
                </p>

                <form
                  onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                  className="space-y-3"
                >
                  <div>
                    <label className="text-xs font-medium text-white/70 mb-1.5 block">
                      Work email
                    </label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 bg-white/10 border-white/15 text-white placeholder:text-white/30 focus:border-white/40 focus:ring-white/10 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/70 mb-1.5 block">
                      Company name
                    </label>
                    <Input
                      type="text"
                      placeholder="Acme Corp"
                      className="h-11 bg-white/10 border-white/15 text-white placeholder:text-white/30 focus:border-white/40 focus:ring-white/10 rounded-xl backdrop-blur-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn-glow w-full h-11 bg-white text-primary hover:bg-white/90 rounded-xl text-sm font-semibold shadow-lg shadow-black/10"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <p className="mt-4 text-[11px] text-white/40 text-center leading-relaxed">
                  By signing up, you agree to our{" "}
                  <a href="#" className="underline hover:text-white/70 transition-colors">Terms</a>
                  {" "}and{" "}
                  <a href="#" className="underline hover:text-white/70 transition-colors">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-light">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg" />
        {/* Radial glow from top */}
        <div className="absolute inset-0 radial-glow" />
        {/* Ambient orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/4 blur-[120px]"
        />
        {/* Noise */}
        <div className="absolute inset-0 noise" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/6 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            <span>Now in Public Beta</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] max-w-5xl mx-auto"
        >
          <span className="text-foreground">Build the future</span>
          <br />
          <span className="text-shimmer">of resolution.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-center text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Customizable AI platforms for health tech and automobility.
          Bespoke solutions designed to transform complexity into clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Button
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/85 rounded-full h-12 px-7 text-sm font-semibold shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            Schedule a Meeting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 text-sm font-semibold border-border bg-white/80 backdrop-blur-sm hover:bg-white text-foreground w-full sm:w-auto"
            asChild
          ><a href="#solutions">Our Solutions</a></Button>
        </motion.div>

        {/* Bento Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {/* Large card */}
          <div className="col-span-2 row-span-2 bento-card p-6 sm:p-8 group cursor-default">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-primary/10 ring-1 ring-primary/15 flex items-center justify-center mb-4">
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Real-Time Analytics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sub-millisecond data pipelines processing millions of events with live dashboards.
              </p>
              {/* Mini chart */}
              <div className="mt-6 flex items-end gap-1 h-20">
                {[35, 50, 45, 65, 55, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 1.2 + i * 0.05, ease: "easeOut" }}
                    className="flex-1 rounded-sm bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="bento-card p-5 sm:p-6 group cursor-default">
            <div className="h-7 w-7 rounded-lg bg-primary/10 ring-1 ring-primary/15 flex items-center justify-center mb-3">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1 text-foreground">HIPAA</h3>
            <p className="text-xs text-muted-foreground">Enterprise compliance</p>
          </div>

          <div className="bento-card p-5 sm:p-6 group cursor-default">
            <div className="h-7 w-7 rounded-lg bg-primary/10 ring-1 ring-primary/15 flex items-center justify-center mb-3">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1 text-foreground">Global CDN</h3>
            <p className="text-xs text-muted-foreground">40+ edge regions</p>
          </div>

          <div className="bento-card p-5 sm:p-6 group cursor-default">
            <div className="h-7 w-7 rounded-lg bg-primary/10 ring-1 ring-primary/15 flex items-center justify-center mb-3">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1 text-foreground">Edge AI</h3>
            <p className="text-xs text-muted-foreground">&lt;10ms inference</p>
          </div>

          <div className="bento-card p-5 sm:p-6 group cursor-default">
            <div className="h-7 w-7 rounded-lg bg-primary/10 ring-1 ring-primary/15 flex items-center justify-center mb-3">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold mb-1 text-foreground">Modular</h3>
            <p className="text-xs text-muted-foreground">Plug &amp; play</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

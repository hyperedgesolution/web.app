"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Grid3x3,
  Cpu,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.6 0.14 160) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.14 160) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/8 blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-primary/30 bg-primary/10 text-primary-foreground px-3 py-1 text-xs font-medium tracking-wide"
              >
                <Sparkles className="mr-1.5 h-3 w-3" />
                Next-Gen AI Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white"
            >
              Precision Solutions
              <br />
              <span className="text-gradient">for Tomorrow&apos;s</span>
              <br />
              Challenges
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Empowering health tech and automobility with customizable,
              AI-driven platforms. Bespoke experiences built for innovation,
              speed, and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 h-12 text-sm font-semibold"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 px-6 h-12 text-sm font-semibold backdrop-blur-sm"
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex items-center gap-6 text-white/40 text-xs"
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                SOC 2 Certified
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ISO 27001
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-primary/8 border-dashed"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-primary/5"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Core hexagon */}
                  <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center">
                    <Grid3x3 className="h-12 w-12 text-primary/80" />
                  </div>

                  {/* Floating nodes */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 right-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  >
                    <Cpu className="h-6 w-6 text-emerald-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 left-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  >
                    <Sparkles className="h-6 w-6 text-emerald-300" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  >
                    <ArrowRight className="h-5 w-5 text-emerald-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  >
                    <Grid3x3 className="h-5 w-5 text-emerald-300" />
                  </motion.div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

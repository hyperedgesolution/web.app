"use client";

import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Solutions } from "@/components/sections/solutions";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Solutions />
        <Features />
        <Process />
        <Metrics />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

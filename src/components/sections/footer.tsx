"use client";

import { Separator } from "@/components/ui/separator";
import { Hexagon } from "lucide-react";
import { FadeIn } from "./animated-section";

const footerLinks = {
  Product: [
    { label: "Health Tech", href: "#solutions" },
    { label: "Automobility", href: "#solutions" },
    { label: "AI Platform", href: "#features" },
    { label: "Integrations", href: "#features" },
    { label: "Pricing", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
                <Hexagon className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground">
                Hyper<span className="text-glow">Resolution</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Precision solutions for health tech and automobility.
              Built for teams that refuse to compromise.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { label: "X", href: "#" },
                { label: "in", href: "#" },
                { label: "Gh", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent hover:border-border transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="opacity-40" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperResolution Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

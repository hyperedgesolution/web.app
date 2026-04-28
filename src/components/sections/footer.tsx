"use client";

import { Separator } from "@/components/ui/separator";
import { Hexagon } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Health Tech", href: "#solutions" },
    { label: "Automobility", href: "#solutions" },
    { label: "AI Platform", href: "#features" },
    { label: "Custom Integrations", href: "#features" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Hexagon className="h-4 w-4 text-primary" strokeWidth={2.5} />
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">
                Hyper<span className="text-gradient">Resolution</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Precision solutions for health tech and automobility. Empowering
              innovation through customizable, AI-driven platforms.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {["X", "Li", "Gh", "Yt"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="opacity-50" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperResolution. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <a href="#" className="hover:text-foreground transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

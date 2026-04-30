"use client";

import { Separator } from "@/components/ui/separator";
import { FadeIn } from "./animated-section";
import Image from "next/image";

const footerLinks = {
  Solutions: [
    { label: "Platform Dev", href: "#solutions" },
    { label: "Cloud & APIs", href: "#solutions" },
    { label: "Analytics & AI", href: "#features" },
    { label: "UX/UI Design", href: "#features" },
    { label: "Support", href: "#" },
  ],
  Industries: [
    { label: "Finance", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "E-Commerce", href: "#" },
    { label: "Education", href: "#" },
    { label: "Manufacturing", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 lg:py-16 grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-6">
          <div className="col-span-2 md:col-span-4">
            <a href="#" className="inline-block mb-3 sm:mb-4">
              <Image src="/logo.png" alt="HyperEdge Solutions" width={150} height={25} className="h-6 sm:h-7 w-auto object-contain" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Customized SaaS innovation. Empowering businesses from startups to enterprises with cutting-edge design and technology.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-2">
              {[
                { label: "X", href: "#" },
                { label: "in", href: "#" },
                { label: "Gt", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent hover:border-border transition-all duration-200">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase mb-3 sm:mb-4">
                {category}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="opacity-40" />
        <div className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 HyperEdge Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Hexagon, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#testimonials" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/80 backdrop-blur-2xl border border-border shadow-2xl shadow-black/20"
            : "bg-transparent border border-transparent"
        } rounded-full px-2 py-1.5`}
      >
        <nav className="flex items-center gap-1">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
              <Hexagon className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground hidden sm:inline">
              Hyper<span className="text-glow">Resolution</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5 mx-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-1 ml-1">
            <Button
              variant="ghost"
              size="sm"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full px-3"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="btn-glow bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-4 text-[13px] font-semibold h-8"
            >
              Get Started
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl shadow-black/30 p-4 md:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border/50 flex gap-2">
                <Button variant="ghost" className="flex-1 rounded-xl">Sign In</Button>
                <Button className="flex-1 rounded-xl bg-primary text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

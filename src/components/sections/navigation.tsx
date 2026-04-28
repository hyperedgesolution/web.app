"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Hexagon,
} from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Hexagon className="h-5 w-5 text-primary" strokeWidth={2.5} />
                <div className="absolute inset-0 rounded-xl bg-primary/5 blur-xl transition-all group-hover:bg-primary/10" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Hyper<span className="text-gradient">Resolution</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0.5 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-4"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-border/50 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border/50 flex flex-col gap-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full bg-primary text-primary-foreground">
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

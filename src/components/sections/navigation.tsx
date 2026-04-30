"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
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
        className={`fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-1.5rem)] sm:w-auto ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border border-border shadow-lg shadow-black/8"
            : "bg-transparent border border-transparent"
        } rounded-full px-2 sm:px-3 py-1.5`}
      >
        <nav className="flex items-center justify-between gap-1 sm:gap-0">
          <a href="#" className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full hover:bg-black/[0.03] transition-colors shrink-0">
            <Image src="/logo.png" alt="HyperEdge Solutions" width={120} height={20} className="h-5 sm:h-6 w-auto object-contain" priority />
          </a>
          <div className="hidden lg:flex items-center gap-0.5 mx-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-black/[0.03] transition-all duration-200">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 ml-2">
            <Button size="sm" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-4 text-[13px] font-semibold h-8">
              Schedule a Meeting
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </Button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors ml-1" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 sm:inset-x-4 top-[4.5rem] sm:top-20 z-40 rounded-2xl bg-white/95 backdrop-blur-2xl border border-border shadow-xl shadow-black/10 p-4 lg:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-black/[0.03] transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border/50">
                <Button className="w-full rounded-xl bg-primary text-primary-foreground h-11">
                  Schedule a Meeting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = ref.current;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

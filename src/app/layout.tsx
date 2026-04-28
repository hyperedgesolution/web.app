import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyperResolution — Precision Solutions for Health Tech & Automobility",
  description:
    "Empowering health tech and automobility with customizable, AI-driven platforms. Bespoke solutions built for innovation, speed, and scale.",
  keywords: [
    "HyperResolution",
    "health tech",
    "automobility",
    "SaaS",
    "AI solutions",
    "customizable platforms",
    "digital health",
    "connected vehicles",
  ],
  authors: [{ name: "HyperResolution" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "HyperResolution — Precision Solutions for Tomorrow's Challenges",
    description:
      "Customizable AI-driven platforms for health tech and automobility.",
    siteName: "HyperResolution",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

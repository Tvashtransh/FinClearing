import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APIExplore | Enterprise Developer Infrastructure Marketplace",
  description: "Enterprise-grade API packs, hosting, and developer infrastructure for scaling businesses.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark overflow-x-hidden">
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} bg-brand-obsidian text-zinc-100 font-sans antialiased overflow-x-hidden`}>
        {/* Ambient background glow elements - safely contained */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] max-w-[50vw] max-h-[50vw] bg-blue-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] max-w-[60vw] max-h-[60vw] bg-zinc-800/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-10%] left-1/3 w-[500px] h-[500px] max-w-[50vw] max-h-[50vw] bg-blue-950/15 rounded-full blur-[130px]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

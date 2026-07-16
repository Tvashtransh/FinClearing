"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-brand-obsidian/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl overflow-hidden border border-zinc-700/60 shadow-lg group-hover:border-zinc-500 transition-all duration-300 flex items-center justify-center bg-white relative">
            <Image 
              src="/apiexplore_icon.png" 
              alt="APIExplore Logo" 
              fill 
              className="object-cover scale-[1.7] translate-y-0.5" 
            />
          </div>
          <span className="text-sm font-extrabold tracking-widest text-white uppercase leading-none mt-1">
            APIExplore
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/apis" className="hover:text-white transition-colors">API Hub</Link>
          <Link href="/hosting" className="hover:text-white transition-colors">Hosting</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider text-black bg-white border border-transparent hover:bg-zinc-200 transition-all duration-200 uppercase">
            Start Building
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            {isMobileMenuOpen ? <X weight="duotone" className="h-6 w-6" /> : <List weight="duotone" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-obsidian border-b border-zinc-800 p-6 space-y-4 md:hidden animate-fade-in shadow-2xl">
          <Link href="/apis" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">API Hub</Link>
          <Link href="/hosting" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Hosting</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Pricing</Link>
          <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Docs</Link>
          <div className="pt-4 border-t border-zinc-800">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-lg text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all uppercase tracking-widest">
              Start Building
            </Link>
          </div>
        </div>
      )}


    </header>
  );
}

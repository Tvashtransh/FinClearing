"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-brand-obsidian/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-1.5 group mt-1">
          <div className="h-9 w-9 rounded-xl overflow-hidden border border-zinc-700/60 shadow-lg group-hover:border-zinc-500 transition-all duration-300 flex items-center justify-center bg-white relative">
            {/* Zoom into the icon to hide the embedded text */}
            <Image 
              src="/apiexplore_icon.png" 
              alt="APIExplore Logo" 
              fill 
              className="object-cover scale-[1.7] origin-top translate-y-1" 
            />
          </div>
          <span className="text-[10px] font-extrabold tracking-widest text-white uppercase leading-none">
            APIExplore
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/apis" className="hover:text-white transition-colors">API Hub</Link>
          <Link href="/hosting" className="hover:text-white transition-colors">Hosting</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        </nav>

        {/* Action Button & Search */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200"
          >
            <MagnifyingGlass weight="duotone" className="h-5 w-5" />
          </button>
          <Link href="/contact" className="px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider text-black bg-white border border-transparent hover:bg-zinc-200 transition-all duration-200 uppercase">
            Start Building
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200"
          >
            <MagnifyingGlass weight="duotone" className="h-5 w-5" />
          </button>
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
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Services</Link>
          <Link href="/enterprise" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Enterprise</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Pricing</Link>
          <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white transition-colors py-2">Docs</Link>
          <div className="pt-4 border-t border-zinc-800">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-lg text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all uppercase tracking-widest">
              Start Building
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal Placeholder */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setIsSearchOpen(false)}>
          <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden mx-4 animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center px-4 py-3 border-b border-zinc-800">
              <MagnifyingGlass weight="duotone" className="h-5 w-5 text-zinc-500 mr-3" />
              <input 
                type="text" 
                placeholder="Search APIs, hosting, docs..." 
                className="flex-1 bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder-zinc-500"
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 hover:text-zinc-300 px-2 py-1 bg-zinc-800 rounded">ESC</button>
            </div>
            <div className="p-4 bg-zinc-950 min-h-[200px]">
              <p className="text-zinc-500 text-sm text-center mt-12">Type to search across the developer marketplace...</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

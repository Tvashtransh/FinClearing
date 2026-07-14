"use client";

import { BookOpen } from "@phosphor-icons/react/dist/ssr";

export default function DocsPage() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-6">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 mb-8">
          <BookOpen weight="duotone" className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Documentation</h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed">
          Comprehensive guides, API references, and SDK tutorials are being migrated to the new platform structure. 
        </p>
      </div>
    </div>
  );
}

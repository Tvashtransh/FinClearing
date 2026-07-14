"use client";

import Link from "next/link";
import { Buildings } from "@phosphor-icons/react/dist/ssr";

export default function EnterprisePage() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-6">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 mb-8">
          <Buildings weight="duotone" className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Enterprise Solutions</h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed">
          White-label APIs, dedicated hardware, and private cloud deployments for heavily regulated industries. 
        </p>
        <div className="pt-8">
          <Link href="/contact" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase inline-block">
            Talk to Enterprise Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

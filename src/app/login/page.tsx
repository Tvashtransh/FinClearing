"use client";

import React from "react";
import Link from "next/link";
import { GithubLogo, GoogleLogo, WindowsLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function LoginPage() {
  return (
    <div className="bg-brand-obsidian min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <div className="h-10 w-10 mx-auto rounded-xl border border-zinc-800 flex items-center justify-center bg-white">
                <img src="/apiexplore_icon.png" alt="Logo" className="w-6 h-6 object-cover scale-[1.7] translate-y-0.5" />
              </div>
            </Link>
            <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">Welcome Back</h1>
            <p className="text-sm text-zinc-400">Log in to access your dashboard and API keys.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white hover:bg-zinc-200 text-black rounded-lg text-sm font-semibold transition-colors">
              <GithubLogo weight="fill" className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors">
              <GoogleLogo weight="bold" className="w-5 h-5 text-zinc-300" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors">
              <WindowsLogo weight="fill" className="w-5 h-5 text-[#00a4ef]" />
              Continue with Microsoft
            </button>
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-zinc-800 flex-1"></div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Or</span>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Email Address</label>
              <div className="relative">
                <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
              />
            </div>
            
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold tracking-wider uppercase transition-colors shadow-lg shadow-blue-500/20 mt-2">
              Sign In
            </button>
          </form>
          
          <p className="text-center text-xs text-zinc-500 mt-8">
            Don't have an account? <a href="#" className="text-white font-medium hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

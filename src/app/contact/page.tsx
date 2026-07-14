"use client";

import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 mb-8">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Contact Sales</h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Discuss enterprise pricing, request a custom SLA, or apply for the startup program.
          </p>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Work Email</label>
              <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Company Size</label>
              <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-1000 employees</option>
                <option>1000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"></textarea>
            </div>

            <button className="w-full py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

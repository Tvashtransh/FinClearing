"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, HardDrive, ShareNetwork, Shield, Gear, Lightning } from "@phosphor-icons/react/dist/ssr";

export default async function RoutingDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Simulated data fetch based on ID
  const routingName = id.replace("hosting-", "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="bg-brand-obsidian min-h-screen pb-24">
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 border-b border-zinc-900 bg-grid-mesh">
        <div className="absolute inset-0 bg-blue-900/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/routing" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
            <ArrowLeft weight="duotone" className="w-4 h-4" /> Back to Routing
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                API Tier Details
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{routingName} Plan</h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                High-performance data routing endpoints designed for scalable validation and algorithmic workloads.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <button className="px-6 py-3 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase shadow-lg shadow-white/5">
                  Start Routing
                </button>
                <button className="px-6 py-3 rounded-xl text-sm font-bold tracking-wider text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all uppercase flex items-center gap-2">
                  <Gear weight="duotone" className="w-4 h-4" /> Configure Limits
                </button>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="w-full lg:w-96 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Starting Configuration</h4>
                <span className="text-xl font-bold text-white">$49<span className="text-sm font-light text-zinc-500">/mo</span></span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Cpu weight="duotone" className="w-4 h-4" /> <span className="text-sm">Throughput</span>
                  </div>
                  <span className="text-sm font-mono text-white">Up to 10K QPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <HardDrive weight="duotone" className="w-4 h-4" /> <span className="text-sm">Payload Limit</span>
                  </div>
                  <span className="text-sm font-mono text-white">10MB per Request</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <ShareNetwork weight="duotone" className="w-4 h-4" /> <span className="text-sm">Data Routing</span>
                  </div>
                  <span className="text-sm font-mono text-white">5TB Outbound Data</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Shield weight="duotone" className="w-4 h-4" /> <span className="text-sm">SLA</span>
                  </div>
                  <span className="text-sm font-mono text-white">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-12">API Tier Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-8">
            <Lightning weight="duotone" className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Instant Endpoint Access</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Your {routingName} API keys are provisioned and ready for production traffic instantly. Fully integrated with standard REST and GraphQL protocols.
            </p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-8">
            <Shield weight="duotone" className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Data Privacy</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Payload encryption, isolated execution sandboxes, and SOC2 compliant logging ensure your intellectual property remains secure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

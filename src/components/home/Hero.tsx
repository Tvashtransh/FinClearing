import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 md:py-32 bg-grid-mesh border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Hero Details */}
        <div className="lg:col-span-7 text-left space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Enterprise Developer Platform</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            The Sovereign Infrastructure for <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">Scale & Security</span>
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Empower your network with production-ready APIs, managed hosting, and banking-grade security. Purpose-built for high-volume enterprises and agile startups.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link href="/apis" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all duration-200 uppercase flex items-center justify-center gap-2 shadow-lg shadow-white/5">
              <span>Explore APIs</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/hosting" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-zinc-300 hover:text-white bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 uppercase flex items-center justify-center gap-2">
              <span>View Hosting Plans</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 max-w-xl">
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">5.4B+</p>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">API Requests</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">1.2ms</p>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">Avg Latency</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-white tracking-tight">99.99%</p>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">SLA Uptime</p>
            </div>
          </div>
        </div>

        {/* Right Hero Mockup */}
        <div className="lg:col-span-5 relative w-full flex justify-center animate-zoom-in">
          <div className="w-full max-w-[480px] rounded-2xl border border-zinc-800/80 bg-zinc-950/80 shadow-2xl p-6 glow-blue backdrop-blur-xl relative overflow-hidden">
            {/* Glass Overlay Lines */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-zinc-700/10 rounded-full blur-2xl"></div>

            {/* Terminal Mockup Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-800"></span>
                <span className="w-3 h-3 rounded-full bg-zinc-800"></span>
                <span className="w-3 h-3 rounded-full bg-zinc-800"></span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest">APIExplore_Node_Monitor v3.0</span>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-5 pt-4">
              {/* KPI Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 block uppercase font-medium">DB Read Latency</span>
                  <span className="text-lg font-bold text-zinc-100 tracking-tight font-mono">0.8 ms</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 block uppercase font-medium">Active Clusters</span>
                  <span className="text-lg font-bold text-emerald-400 tracking-tight font-mono">142 Global</span>
                </div>
              </div>

              {/* Active Pipeline */}
              <div className="space-y-2">
                <span className="text-[10px] text-zinc-500 uppercase font-semibold tracking-wider block">Active Pipeline Routing</span>
                
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5 rounded bg-zinc-900/40 border border-zinc-900 hover:bg-zinc-900/80 transition-colors">
                    <span className="text-zinc-300">POST /api/v1/kyc/verify</span>
                    <span className="text-emerald-400 font-bold">200 OK — 1.2ms</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-zinc-900/40 border border-zinc-900 hover:bg-zinc-900/80 transition-colors">
                    <span className="text-zinc-300">GET /api/v1/nodes/mumbai-01</span>
                    <span className="text-emerald-400 font-bold">200 OK — 0.4ms</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-zinc-900/40 border border-zinc-900 hover:bg-zinc-900/80 transition-colors">
                    <span className="text-zinc-300">POST /api/v1/auth/token</span>
                    <span className="text-emerald-400 font-bold">200 OK — 0.8ms</span>
                  </div>
                </div>
              </div>

              {/* Live Status Indicator */}
              <div className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs text-zinc-300">Enterprise Nodes Active</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">99.99% Uptime</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

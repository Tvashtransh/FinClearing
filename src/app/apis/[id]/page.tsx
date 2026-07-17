"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, Code, Key, Terminal, Shield, BookOpen, Stack } from "@phosphor-icons/react/dist/ssr";

export default async function APIDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Simulated data fetch based on ID
  const apiName = id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="bg-brand-obsidian min-h-screen pb-24">
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 border-b border-zinc-900 bg-grid-mesh">
        <div className="absolute inset-0 bg-blue-900/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/apis" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
            <ArrowLeft weight="duotone" className="w-4 h-4" /> Back to Hub
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                Production Ready
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{apiName} API</h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                Integrate robust {apiName.toLowerCase()} capabilities into your enterprise applications with millisecond latency and banking-grade security.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <Link href="/login" className="px-6 py-3 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase shadow-lg shadow-white/5 inline-flex items-center justify-center">
                  Get API Key
                </Link>
                <Link href="/docs" className="px-6 py-3 rounded-xl text-sm font-bold tracking-wider text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all uppercase flex items-center gap-2">
                  <BookOpen weight="duotone" className="w-4 h-4" /> Read Docs
                </Link>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="w-full lg:w-80 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-900 pb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock weight="duotone" className="w-4 h-4" /> <span className="text-sm">Avg Latency</span>
                  </div>
                  <span className="text-sm font-mono text-white">120ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <CheckCircle weight="duotone" className="w-4 h-4" /> <span className="text-sm">Success Rate</span>
                  </div>
                  <span className="text-sm font-mono text-emerald-400">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Shield weight="duotone" className="w-4 h-4" /> <span className="text-sm">Compliance</span>
                  </div>
                  <span className="text-sm font-mono text-white">SOC2 / ISO</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Stack weight="duotone" className="w-4 h-4" /> <span className="text-sm">Rate Limit</span>
                  </div>
                  <span className="text-sm font-mono text-white">10k / min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
        
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              The {apiName} API provides developers with a seamless, high-throughput endpoint to fetch verified information. 
              Built on our globally distributed edge network, it ensures minimal latency regardless of where your servers are located. 
              The API uses RESTful principles, JSON payloads, and relies on standard HTTP status codes.
            </p>
          </section>

          {/* Authentication */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Key weight="duotone" className="text-blue-500 w-6 h-6" /> Authentication
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-4">
              All API requests must be authenticated via an API Key provided in the request headers. 
              Generate your API key in the Developer Dashboard.
            </p>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono text-sm text-zinc-300">
              <span className="text-blue-400">Authorization:</span> Bearer YOUR_API_KEY
            </div>
          </section>

          {/* Code Example */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal weight="duotone" className="text-blue-500 w-6 h-6" /> Example Request
            </h2>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-500 uppercase">cURL</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
                <code>
{`curl -X POST "https://api.apiexplore.com/v1/${id}" \\
  -H "Authorization: Bearer sk_live_xxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "reference_id": "REQ-88992",
    "timestamp": "2026-07-14T12:00:00Z"
  }'`}
                </code>
              </pre>
            </div>
          </section>

          {/* Response Example */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Code weight="duotone" className="text-blue-500 w-6 h-6" /> Example Response
            </h2>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex justify-between items-center">
                <span className="text-[10px] font-bold text-emerald-500 uppercase">200 OK</span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase">application/json</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
                <code>
{`{
  "status": "success",
  "data": {
    "reference_id": "REQ-88992",
    "verified": true,
    "created_at": "2026-07-14T12:00:01Z"
  },
  "meta": {
    "latency_ms": 118
  }
}`}
                </code>
              </pre>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Pricing */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Pricing Structure</h3>
            <p className="text-sm text-zinc-400 mb-6 font-light">Pay only for successful requests via prepaid API credits.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-zinc-300 text-sm">Developer</span>
                <span className="text-white font-mono font-bold">Free <span className="text-[10px] text-zinc-500 font-sans">1k/mo</span></span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-zinc-300 text-sm">Growth</span>
                <span className="text-white font-mono font-bold">₹1.50 <span className="text-[10px] text-zinc-500 font-sans">/req</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Enterprise</span>
                <span className="text-white font-mono font-bold text-sm">Enterprise Pricing</span>
              </div>
            </div>
          </div>

          {/* SDKs */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Available SDKs</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                Node.js
              </button>
              <button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                Python
              </button>
              <button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                Java
              </button>
              <button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                Go
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

"use client";

import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import CategoryCard from "@/components/ui/CategoryCard";
import APICard from "@/components/ui/APICard";
import HostingCard from "@/components/ui/HostingCard";
import FeatureGrid from "@/components/ui/FeatureGrid";
import { Buildings, Bank, Fingerprint, MagnifyingGlass, ShieldCheck, CreditCard, Rocket, HardDrives, Shield, Pulse, Globe } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* ── POPULAR CATEGORIES ────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-2">Explore Hub</span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Popular API Categories</h3>
          </div>
          <Link href="/apis" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
            View All Categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            title="API Routing" 
            count={24} 
            icon={<Bank weight="duotone" className="h-6 w-6" />} 
            href="/apis/routing" 
          />
          <CategoryCard 
            title="Code Execution" 
            count={12} 
            icon={<Fingerprint weight="duotone" className="h-6 w-6" />} 
            href="/apis/routing" 
          />
          <CategoryCard 
            title="Data Validation" 
            count={18} 
            icon={<CreditCard weight="duotone" className="h-6 w-6" />} 
            href="/apis/routing" 
          />
          <CategoryCard 
            title="AI & Optimization" 
            count={9} 
            icon={<MagnifyingGlass weight="duotone" className="h-6 w-6" />} 
            href="/apis/ai" 
          />
        </div>
      </section>

      {/* ── FEATURED APIS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.3em] block mb-2">Production Ready</span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Featured APIs</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <APICard 
              name="Code Execution Engine"
              category="Routing"
              description="Secure, isolated sandboxed runtime environment to compile and execute user code snippets across 15+ programming languages."
              responseTime="320ms"
              successRate="99.95%"
              monthlyCalls="10M+"
              startingPrice="₹1.20"
              href="/apis/code-execution"
            />
            <APICard 
              name="Algorithm Profiler"
              category="AI"
              description="Static code analysis API evaluating Big-O runtime performance and space complexity constraints dynamically on codebase submissions."
              responseTime="140ms"
              successRate="99.8%"
              monthlyCalls="5M+"
              startingPrice="₹2.50"
              href="/apis/algorithm-profiler"
            />
            <APICard 
              name="Payload Guard"
              category="Validation"
              description="High-speed data structure checking engine validating heavily nested JSON structures against pre-defined strict developer schemas."
              responseTime="15ms"
              successRate="99.99%"
              monthlyCalls="250M+"
              startingPrice="₹0.15"
              href="/apis/payload-guard"
            />
          </div>
        </div>
      </section>

      {/* ── ROUTING PLANS ─────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[100vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block">API Routing & Execution</span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            API Tiers Built for Developers
          </h3>
          <p className="text-zinc-400 font-light leading-relaxed">
            Execute your algorithmic workloads and route payloads securely with our enterprise-grade execution limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HostingCard 
            title="Developer Plan"
            description="Best for early-stage DSA tools and lightweight validation workloads."
            price="₹19,000"
            period=" / yr"
            features={[
              "Shared SaaS Execution Limits",
              "1TB Data Routing Quota",
              "Automated Daily Snapshots",
              "99.9% Uptime Guarantee",
              "DDoS Protection"
            ]}
            href="/routing"
          />
          <HostingCard 
            title="Pro API Plan"
            description="Great for scaling platforms needing full compliance and stability."
            price="₹49,000"
            period=" / yr"
            isPopular={true}
            features={[
              "Isolated Execution Environment",
              "Unlimited Data Routing",
              "Real-Time Validation Nodes",
              "99.95% Uptime Guarantee",
              "Priority 24/7 Support"
            ]}
            href="/routing"
          />
          <HostingCard 
            title="Enterprise Routing Plan"
            description="Maximum isolation and enterprise SLA backing for large-scale operations."
            price="Enterprise"
            features={[
              "Dedicated Routing Endpoints",
              "Advanced Rate-Limiting Rules",
              "Strict 99.99% SLA",
              "Dedicated Account Manager",
              "On-Premise Deployment Options"
            ]}
            href="/contact"
          />
        </div>
      </section>

      {/* ── WHY APIEXPLORE (FEATURE GRID) ─────────────────────────────────── */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-2">Platform Capabilities</span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Why Choose APIExplore</h3>
          </div>

          <FeatureGrid 
            features={[
              {
                title: "99.99% Uptime SLA",
                description: "Financially backed SLAs ensure your platform never goes down during peak traffic.",
                icon: <Pulse weight="duotone" className="h-6 w-6" />
              },
              {
                title: "Global CDN",
                description: "Deliver API responses in milliseconds with our heavily distributed edge network.",
                icon: <Globe weight="duotone" className="h-6 w-6" />
              },
              {
                title: "Enterprise Security",
                description: "AES-256 encryption, SOC2 Type II compliance, and isolated data vaults.",
                icon: <Shield weight="duotone" className="h-6 w-6" />
              },
              {
                title: "Scalable Execution",
                description: "Auto-scale from zero to millions of requests without manual intervention.",
                icon: <Rocket weight="duotone" className="h-6 w-6" />
              }
            ]}
          />
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-brand-obsidian">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to scale your API execution?
          </h2>
          <p className="text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
            Join thousands of developers building the next generation of financial and enterprise applications on APIExplore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all duration-200 uppercase flex items-center justify-center shadow-lg shadow-white/10">
              Start Building for Free
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all duration-200 uppercase flex items-center justify-center">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

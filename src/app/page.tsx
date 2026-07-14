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
            title="Banking & Finance" 
            count={24} 
            icon={<Bank weight="duotone" className="h-6 w-6" />} 
            href="/apis/banking" 
          />
          <CategoryCard 
            title="Identity & KYC" 
            count={12} 
            icon={<Fingerprint weight="duotone" className="h-6 w-6" />} 
            href="/apis/verification" 
          />
          <CategoryCard 
            title="Payments" 
            count={18} 
            icon={<CreditCard weight="duotone" className="h-6 w-6" />} 
            href="/apis/payments" 
          />
          <CategoryCard 
            title="Data OCR & AI" 
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
              name="PAN Verification API"
              category="Verification"
              description="Real-time fetching of PAN holder details directly from NSDL/Income Tax department databases."
              responseTime="120ms"
              successRate="99.9%"
              monthlyCalls="50M+"
              startingPrice="₹1.50"
              href="/apis/pan-verification"
            />
            <APICard 
              name="Account Aggregator"
              category="Banking"
              description="Fetch consolidated financial data across multiple banks using RBI-approved FIP framework."
              responseTime="450ms"
              successRate="98.5%"
              monthlyCalls="12M+"
              startingPrice="₹4.00"
              href="/apis/account-aggregator"
            />
            <APICard 
              name="UPI Collection"
              category="Payments"
              description="Generate dynamic UPI QR codes, deep links, and handle real-time webhook settlement notifications."
              responseTime="80ms"
              successRate="99.99%"
              monthlyCalls="150M+"
              startingPrice="₹0.50"
              href="/apis/upi-collection"
            />
          </div>
        </div>
      </section>

      {/* ── HOSTING PLANS ─────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[100vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block">Managed Infrastructure</span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Hosting Built for Developers
          </h3>
          <p className="text-zinc-400 font-light leading-relaxed">
            Deploy your API gateways, webhooks, and backend services on our enterprise-grade isolated shards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HostingCard 
            title="Compute VPS"
            description="Perfect for lightweight webhooks and microservices."
            price="$12"
            features={[
              "2 vCPU Cores",
              "4GB RAM",
              "80GB NVMe SSD",
              "Unmetered Bandwidth",
              "DDoS Protection"
            ]}
            href="/hosting/vps"
          />
          <HostingCard 
            title="API Gateway"
            description="High-throughput isolated shard for API routing."
            price="$49"
            isPopular={true}
            features={[
              "8 vCPU Cores",
              "16GB RAM",
              "250GB NVMe SSD",
              "Auto-scaling Enabled",
              "WAF & Rate Limiting",
              "Priority Support"
            ]}
            href="/hosting/cloud"
          />
          <HostingCard 
            title="Dedicated Node"
            description="Bare-metal performance for financial ledgers."
            price="$199"
            features={[
              "32 Core AMD EPYC",
              "128GB ECC RAM",
              "2TB NVMe Raid 1",
              "Custom Network Topology",
              "SOC2 Compliance Certs",
              "Dedicated Account Manager"
            ]}
            href="/hosting/dedicated"
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
                description: "Financially backed SLAs ensure your infrastructure never goes down during peak traffic.",
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
                title: "Scalable Infrastructure",
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
            Ready to scale your API infrastructure?
          </h2>
          <p className="text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
            Join thousands of developers building the next generation of financial and enterprise applications on APIExplore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all duration-200 uppercase flex items-center justify-center shadow-lg shadow-white/10">
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

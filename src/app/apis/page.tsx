"use client";

import { useState } from "react";
import APICard from "@/components/ui/APICard";
import { MagnifyingGlass, Funnel, SlidersHorizontal } from "@phosphor-icons/react/dist/ssr";

// Mock data for APIs
const ALL_APIS = [
  { id: "code-execution", name: "Code Execution Engine", category: "Routing", desc: "Secure, isolated sandboxed runtime environment to compile and execute user code snippets across 15+ programming languages.", time: "320ms", success: "99.95%", calls: "10M+", price: "₹1.20" },
  { id: "algorithm-profiler", name: "Algorithm Profiler", category: "AI", desc: "Static code analysis API evaluating Big-O runtime performance and space complexity constraints dynamically on codebase submissions.", time: "140ms", success: "99.8%", calls: "5M+", price: "₹2.50" },
  { id: "devdoc-exporter", name: "DevDoc Exporter", category: "Routing", desc: "High-fidelity document generation endpoint rendering programmatic structural text layouts and code blocks into production-ready PDFs.", time: "210ms", success: "99.9%", calls: "20M+", price: "₹0.90" },
  { id: "payload-guard", name: "Payload Guard", category: "Routing", desc: "High-speed data structure checking engine validating heavily nested JSON structures against pre-defined strict developer schemas.", time: "15ms", success: "99.99%", calls: "250M+", price: "₹0.15" },
  { id: "edge-location", name: "Edge Location API", category: "Routing", desc: "Fetch highly accurate network routing and geographic metadata context derived strictly from public edge network incoming IP addresses.", time: "45ms", success: "99.99%", calls: "300M+", price: "₹0.30" },
  { id: "syntax-purge", name: "Syntax Purge", category: "AI", desc: "Light processing engine parsing raw text variables to scrub execution code syntax vulnerability components like XSS and raw SQL injection tags.", time: "25ms", success: "99.95%", calls: "50M+", price: "₹0.40" },
  { id: "ocr-document", name: "AI Document OCR", category: "AI", desc: "Extract structured data from basic image-text documents instantly.", time: "1200ms", success: "95.0%", calls: "8M+", price: "₹5.00" },
];

const CATEGORIES = ["All", "Routing", "AI"];

export default function APIHub() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredApis = ALL_APIS.filter(api => {
    const matchesSearch = api.name.toLowerCase().includes(search.toLowerCase()) || api.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || api.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-zinc-900 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">API Marketplace</h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl">
            Discover production-ready APIs for your enterprise. High-availability, banking-grade security, and instant provisioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                <SlidersHorizontal weight="duotone" className="w-4 h-4" /> Filters
              </h3>
              
              <div className="relative mb-6">
                <MagnifyingGlass weight="duotone" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search APIs..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3">Categories</h4>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${categoryFilter === cat ? 'bg-blue-500/10 text-blue-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-sm text-zinc-500 font-mono">{filteredApis.length} APIs found</span>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">Sort by:</span>
                <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500">
                  <option>Popularity</option>
                  <option>Latency (Fastest)</option>
                  <option>Price (Low to High)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredApis.map(api => (
                <APICard 
                  key={api.id}
                  name={api.name}
                  category={api.category}
                  description={api.desc}
                  responseTime={api.time}
                  successRate={api.success}
                  monthlyCalls={api.calls}
                  startingPrice={api.price}
                  href={`/apis/${api.id}`}
                />
              ))}
            </div>

            {filteredApis.length === 0 && (
              <div className="text-center py-20 bg-zinc-950/50 rounded-2xl border border-zinc-900 border-dashed">
                <MagnifyingGlass weight="duotone" className="w-10 h-10 text-zinc-700 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">No APIs found</h4>
                <p className="text-zinc-500 text-sm">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

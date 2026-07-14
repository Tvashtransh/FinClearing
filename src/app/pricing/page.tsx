"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, X, Minus } from "@phosphor-icons/react/dist/ssr";

const dsaPlans = [
  {
    id: "dsa-base",
    title: "DSA Base",
    icon: null,
    description: "Get your firm started. Best for standalone agents or simple validation pipelines.",
    isCustom: false,
    price: {
      monthly: 1499,
      monthlyStrike: 2999,
      yearly: 17988,
      yearlyRenewsAt: 1499
    },
    features: {
      main: [
        { text: "10,000 API Requests/mo", included: true },
        { text: "5 QPS Rate Limit (via Redis Token Bucket)", included: true },
        { text: "Standard API Gateway Access", included: true },
        { text: "99.9% Uptime SLA", included: true },
        { text: "Advanced Endpoint Access", included: false },
        { text: "Real-Time Sandbox Verifications", included: false },
        { text: "Automated Complexity Analyzer", included: false },
        { text: "Priority 24-Hour Ticket Resolution", included: true },
      ],
      buildWith: [
        { text: "Core Endpoints: Arrays, Strings, Stacks", included: true },
        { text: "Memory Optimization: O(1) space algorithms", included: true },
        { text: "Polyglot Snippets: Python 3.10, Java 17, C++20", included: true },
        { text: "Custom Internal Endpoint Integration", included: false },
      ],
      communicate: [
        { text: "Email Support Ticket System", included: true },
        { text: "Meta WhatsApp Business API", included: false },
        { text: "Priority Slack Connect", included: false },
      ]
    }
  },
  {
    id: "dsa-scale",
    title: "DSA Scale",
    icon: "🚀",
    badge: "Best Seller",
    description: "Run operations smoothly. Great for growing firms and data-heavy verification workflows.",
    isCustom: false,
    price: {
      monthly: 5999,
      monthlyStrike: 13999,
      yearly: 71988,
      yearlyRenewsAt: 7999
    },
    features: {
      main: [
        { text: "Unlimited API Requests (1M Fair Use)", included: true },
        { text: "50 QPS Rate Limit", included: true },
        { text: "Standard API Gateway Access", included: true },
        { text: "99.9% Uptime SLA", included: true },
        { text: "Graphs, DP & Trees Endpoints Included", included: true },
        { text: "100 verifications/mo PAN & Bank Sandbox", included: true },
        { text: "Automated Time & Space Complexity Analyzer", included: true },
        { text: "Priority 4-Hour Slack SLA", included: true },
      ],
      buildWith: [
        { text: "Advanced Endpoints: Graphs, Dynamic Programming & Trees", included: true },
        { text: "Clerk Enterprise Auth Gateway (Role-Based Access Pipeline)", included: true },
        { text: "Polyglot Snippets: Python 3.10, Java 17, C++20", included: true },
        { text: "Custom Internal Endpoint Integration", included: false },
      ],
      communicate: [
        { text: "Email Support Ticket System", included: true },
        { text: "Priority Slack Connect Channel", included: true },
        { text: "Meta WhatsApp Business API", included: false },
      ]
    }
  },
  {
    id: "dsa-enterprise",
    title: "DSA Enterprise",
    icon: "🏢",
    badge: "Custom Offer",
    description: "Dedicated scale and absolute throughput for large-tier financial infrastructure.",
    isCustom: true,
    price: {
      customLabel: "Custom Pricing",
      yearlyLabel: "Tailored contract options with volume-based deployment models."
    },
    features: {
      main: [
        { text: "Unlimited Uncapped Throughput", included: true },
        { text: "Dedicated QPS (Custom Rate Limits)", included: true },
        { text: "Custom Enterprise Gateway Access", included: true },
        { text: "Strict 99.99% Uptime SLA with Financial Backing", included: true },
        { text: "Full Data Structure Suite Included", included: true },
        { text: "Unlimited PAN & Bank Sandbox Verifications", included: true },
        { text: "Automated Time & Space Complexity Analyzer", included: true },
        { text: "24/7 Dedicated Support Engineer Line", included: true },
      ],
      buildWith: [
        { text: "All Endpoints + Custom Internal Endpoint Integration", included: true },
        { text: "Clerk Enterprise Auth Gateway (Role-Based Access Pipeline)", included: true },
        { text: "On-Premise or VPC Deployment Options (AWS / GCP)", included: true },
        { text: "Custom Integration Pipeline Support", included: true },
      ],
      communicate: [
        { text: "24/7 Phone Support via Dedicated Direct Line", included: true },
        { text: "Priority Slack Connect Channel", included: true },
        { text: "Meta WhatsApp Business API (Includes 1,500 Utility Msgs)", included: true },
      ]
    }
  }
];

const hostingPlans = [
  {
    id: "hosting-base",
    title: "Hosting Base",
    icon: null,
    description: "Get your infrastructure online. Best for early-stage DSA tools and lightweight validation workloads.",
    isCustom: false,
    price: {
      "1y": { strike: 24000, total: 19000, suffix: "/ yr", savings: undefined, textLabel: "Billed annually." },
      "2y": { strike: 48000, total: 34000, suffix: "/ 2 yrs", savings: "Save ₹4,000 - Tiered Discount", textLabel: "Billed 2-yearly at ₹34,000." },
      "3y": { strike: 72000, total: 45000, suffix: "/ 3 yrs", savings: "Save ₹12,000 - Mega Discount", textLabel: "Billed 3-yearly at ₹45,000." }
    },
    features: {
      main: [
        { text: "Shared Containerized Pods (Isolated Resource Quotas)", included: true },
        { text: "1TB Monthly Egress Bandwidth via Global CDN", included: true },
        { text: "Automated Daily Database Snapshots (7-Day Retention Vault)", included: true },
        { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
        { text: "99.9% Infrastructure Uptime Guarantee", included: true },
        { text: "Isolated Mumbai Region VPS", included: false },
        { text: "Active-Active Database Replication", included: false },
        { text: "Dedicated Technical Account Manager", included: false },
      ],
      section2: {
        title: "Build with:",
        items: [
          { text: "Container Architecture: Shared Docker / Kubernetes Pods", included: true },
          { text: "CDN & Egress: Global Edge Network (1TB Cap)", included: true },
          { text: "Storage: Standard NVMe SSD Quotas", included: true },
          { text: "Custom Disaster Recovery Strategy", included: false },
        ]
      },
      section3: {
        title: "Protect & comply:",
        items: [
          { text: "Basic Cloudflare Layer-4 DDoS Protection Pipeline", included: true },
          { text: "Standard SSL: Automated Let's Encrypt Wildcard", included: true },
          { text: "AES-256 RBI Data Localization Compliance", included: false },
          { text: "SOC2 & ISO 27001 Readiness Reporting", included: false },
        ]
      }
    }
  },
  {
    id: "hosting-pro",
    title: "Hosting Pro",
    badge: "RECOMMENDED",
    icon: "🚀",
    description: "Run mission-critical fintech workloads smoothly. Great for scaling DSA platforms needing RBI compliance.",
    isCustom: false,
    price: {
      "1y": { strike: 59000, total: 49000, suffix: "/ yr", savings: undefined, textLabel: "Billed annually." },
      "2y": { strike: 118000, total: 85000, suffix: "/ 2 yrs", savings: "Save ₹13,000 - Tiered Discount", textLabel: "Billed 2-yearly at ₹85,000." },
      "3y": { strike: 177000, total: 110000, suffix: "/ 3 yrs", savings: "Save ₹37,000 - Mega Discount", textLabel: "Billed 3-yearly at ₹110,000." }
    },
    features: {
      main: [
        { text: "Isolated Mumbai Region VPS (AWS / GCP Data Residency)", included: true },
        { text: "Unlimited Bandwidth (Capped at 10TB Burst Egress)", included: true },
        { text: "Real-Time Active-Active Database Replication Nodes", included: true },
        { text: "Automated Daily Database Snapshots (Extended Retention Vault)", included: true },
        { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
        { text: "99.95% Infrastructure Uptime Guarantee", included: true },
        { text: "Priority 24/7 DevOps Support via Ticket & Chat", included: true },
        { text: "Physically Isolated Bare-Metal Environments", included: false },
      ],
      section2: {
        title: "Build with:",
        items: [
          { text: "Compute Architecture: Dedicated Virtual Private Server (VPS)", included: true },
          { text: "Database Engine: Real-Time Active-Active Replication Nodes", included: true },
          { text: "Cloud Residency: Mumbai Region (AWS / GCP Tier-1 DCs)", included: true },
          { text: "Custom Disaster Recovery Strategy", included: false },
        ]
      },
      section3: {
        title: "Protect & comply:",
        items: [
          { text: "Advanced Layer 7 WAF & Cloudflare Enterprise DDoS Protection", included: true },
          { text: "Storage Encryption: AES-256 Storage Encryption (RBI Compliant)", included: true },
          { text: "Data Localization: Fully Compliant with RBI Guidelines", included: true },
          { text: "SOC2 & ISO 27001 Readiness Reporting", included: false },
        ]
      }
    }
  },
  {
    id: "hosting-enterprise",
    title: "Hosting Enterprise",
    badge: "Custom Quote",
    icon: "🏢",
    description: "Maximum isolation, zero noisy neighbors, and custom SLA backing for large-scale financial institutions.",
    isCustom: true,
    price: {
      customLabel: "Custom Quote",
      yearlyLabel: "Tailored annual billing with dedicated hardware and custom disaster recovery."
    },
    features: {
      main: [
        { text: "Physically Isolated Bare-Metal Environments (Zero Noisy Neighbors)", included: true },
        { text: "Custom Egress Bandwidth & Dedicated Fiber Routing", included: true },
        { text: "Custom Disaster Recovery & Point-In-Time Restore Strategy", included: true },
        { text: "Real-Time Active-Active Database Clusters with Multi-Region Failover", included: true },
        { text: "Custom Web Application Firewall (WAF) & Rate-Limiting Rules", included: true },
        { text: "Strict 99.99% Uptime SLA with Financial Backing", included: true },
        { text: "Dedicated Technical Account Manager (TAM)", included: true },
      ],
      section2: {
        title: "Build with:",
        items: [
          { text: "Compute Architecture: Physically Isolated Bare-Metal Servers", included: true },
          { text: "Disaster Recovery: Custom Point-In-Time Restore Strategy", included: true },
          { text: "Hybrid / On-Premise: Custom VPC / Dedicated Cloud Interconnects", included: true },
          { text: "Custom Integration: Tailored CI/CD Pipeline & Architecture Setup", included: true },
        ]
      },
      section3: {
        title: "Protect & comply:",
        items: [
          { text: "Enterprise Security: Custom WAF & Granular Rate-Limiting Rules", included: true },
          { text: "Compliance Reporting: SOC2 Type II & ISO 27001 Readiness", included: true },
          { text: "Data Localization: 100% RBI Compliant AES-256 Encryption", included: true },
          { text: "Dedicated Support: 24/7 Dedicated TAM via Direct Phone & Slack", included: true },
        ]
      },
      whyThisPlan: "A complete, physically isolated infrastructure solution designed to pass strict bank-grade vendor audits and compliance checks. Everything included."
    }
  }
];

export default function PricingPage() {
  const [dsaIsYearly, setDsaIsYearly] = useState(false);
  const [hostingTerm, setHostingTerm] = useState<'1y' | '2y' | '3y'>('1y');

  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-2">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Choose your scale</h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Technically robust infrastructure and deep API endpoints tailored for serious engineering teams.
          </p>
        </div>

        {/* DSA API PLANS */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">DSA API Plans</h2>
            <div className="bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 grid grid-cols-2 gap-1 relative w-full max-w-[420px] mx-auto">
              <div 
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-8px)] bg-zinc-700/50 rounded-lg transition-transform duration-300 ease-in-out border border-zinc-600/50"
                style={{ transform: dsaIsYearly ? 'translateX(calc(100% + 10px))' : 'translateX(6px)' }}
              />
              <button 
                onClick={() => setDsaIsYearly(false)} 
                className={`relative z-10 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center justify-center ${!dsaIsYearly ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setDsaIsYearly(true)} 
                className={`relative z-10 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${dsaIsYearly ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                Yearly 
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-900/40 border border-emerald-500/30 px-2 py-0.5 rounded-md whitespace-nowrap">
                  -2 Months Free
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dsaPlans.map(plan => (
              <div key={plan.id} className={`bg-zinc-950/80 rounded-3xl p-8 relative flex flex-col h-full ${plan.badge === 'Best Seller' ? 'border-2 border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]' : 'border border-zinc-800'}`}>
                {plan.badge && <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg ${plan.badge === 'Best Seller' ? 'bg-blue-600' : 'bg-zinc-700 border border-zinc-600'}`}>{plan.badge}</div>}
                
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {plan.icon && <span>{plan.icon}</span>}
                  {plan.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light mb-8 h-10">{plan.description}</p>
                
                <div className="flex flex-col gap-1 mb-6">
                  {plan.isCustom ? (
                    <div className="text-4xl font-extrabold text-white mt-1 mb-2">{plan.price.customLabel}</div>
                  ) : (
                    <>
                      {!dsaIsYearly && (
                        <div className="text-sm text-zinc-500 line-through font-medium">
                          ₹{plan.price.monthlyStrike?.toLocaleString('en-IN')}
                        </div>
                      )}
                      <div className="flex items-end gap-2 mt-1">
                        <div className="text-4xl font-extrabold text-white">₹{(dsaIsYearly ? plan.price.yearly! : plan.price.monthly!).toLocaleString('en-IN')}</div>
                        <div className="text-zinc-400 mb-1 font-medium">/ {dsaIsYearly ? 'yr' : 'mo'}</div>
                      </div>
                    </>
                  )}
                </div>

                <Link href={plan.isCustom ? '/contact' : `/pricing/${plan.id}`} className={`block text-center w-full py-3.5 rounded-xl text-sm font-bold tracking-wider transition-all uppercase mb-3 ${plan.badge === 'Best Seller' ? 'text-white bg-blue-600 hover:bg-blue-500' : 'text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800'}`}>
                  {plan.isCustom ? 'Contact Us' : 'Choose plan'}
                </Link>

                <div className="text-xs text-zinc-500 font-medium text-center mb-10 h-4">
                  {plan.isCustom ? plan.price.yearlyLabel : 
                    dsaIsYearly ? `Get 12 months for ₹${plan.price.yearly?.toLocaleString('en-IN')}. Renews at ₹${plan.price.yearlyRenewsAt?.toLocaleString('en-IN')}/mo.` : ''}
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <ul className="space-y-3">
                      {plan.features.main.map(f => (
                        <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {f.included ? 
                            <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                            <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                          }
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Build with:</h4>
                    <ul className="space-y-3">
                      {plan.features.buildWith.map(f => (
                        <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {f.included ? 
                            <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                            <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                          }
                          <span dangerouslySetInnerHTML={{ __html: f.text.replace('O(1)', '<em>O(1)</em>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Communicate & grow:</h4>
                    <ul className="space-y-3">
                      {plan.features.communicate.map(f => (
                        <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {f.included ? 
                            <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                            <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                          }
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOSTING PLANS */}
        <div>
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Hosting Plans</h2>
            <div className="bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 flex items-center gap-1 relative overflow-hidden w-fit mx-auto">
              <button 
                onClick={() => setHostingTerm('1y')} 
                className={`relative z-10 px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${hostingTerm === '1y' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                1 Year
              </button>
              <button 
                onClick={() => setHostingTerm('2y')} 
                className={`relative z-10 px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${hostingTerm === '2y' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                2 Years
              </button>
              <button 
                onClick={() => setHostingTerm('3y')} 
                className={`relative z-10 px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${hostingTerm === '3y' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                3 Years
              </button>
              
              <div 
                className="absolute top-1.5 bottom-1.5 bg-zinc-700/50 rounded-lg transition-all duration-300 ease-in-out border border-zinc-600/50"
                style={{ 
                  left: hostingTerm === '1y' ? '6px' : hostingTerm === '2y' ? 'calc(33.33% + 4px)' : 'calc(66.66% + 2px)',
                  width: 'calc(33.33% - 8px)'
                }}
              />
            </div>
            <p className="text-xs text-zinc-500 mt-4 uppercase tracking-widest font-semibold">Strictly multi-year commitments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map(plan => {
              const currentPricing = !plan.isCustom && (plan.price as any) ? (plan.price as any)[hostingTerm] : null;
              
              return (
                <div key={plan.id} className={`bg-zinc-950/80 rounded-3xl p-8 relative flex flex-col h-full ${plan.badge === 'RECOMMENDED' ? 'border-2 border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]' : 'border border-zinc-800'}`}>
                  {plan.badge && <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg ${plan.badge === 'RECOMMENDED' ? 'bg-blue-600' : 'bg-zinc-700 border border-zinc-600'}`}>{plan.badge}</div>}
                  
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {plan.icon && <span>{plan.icon}</span>}
                    {plan.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light mb-8 h-10">{plan.description}</p>
                  
                  <div className="flex flex-col gap-1 mb-6">
                    {plan.isCustom ? (
                      <div className="text-4xl font-extrabold text-white mt-1 mb-2">{(plan.price as any).customLabel}</div>
                    ) : (
                      <>
                        <div className="text-sm text-zinc-500 line-through font-medium">
                          ₹{currentPricing?.strike?.toLocaleString('en-IN')} {currentPricing?.suffix}
                        </div>
                        <div className="flex items-end gap-2 mt-1">
                          <div className="text-4xl font-extrabold text-white">₹{currentPricing?.total?.toLocaleString('en-IN')}</div>
                          <div className="text-zinc-400 mb-1 font-medium">{currentPricing?.suffix}</div>
                        </div>
                        {currentPricing?.savings && (
                          <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 py-1 px-2 rounded inline-block self-start mt-2">
                            {currentPricing.savings}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <Link href={plan.isCustom ? '/contact' : `/pricing/${plan.id}?term=${hostingTerm}`} className={`block text-center w-full py-3.5 rounded-xl text-sm font-bold tracking-wider transition-all uppercase mb-3 ${plan.badge === 'RECOMMENDED' ? 'text-white bg-blue-600 hover:bg-blue-500' : 'text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800'}`}>
                    {plan.isCustom ? 'Contact Us' : 'Select Plan'}
                  </Link>

                  <div className="text-xs text-zinc-500 font-medium text-center mb-10 h-8">
                    {plan.isCustom ? (plan.price as any).yearlyLabel : 
                      currentPricing ? <>{currentPricing.textLabel} Strictly multi-year commitments available.</> : ''}
                  </div>

                  <div className="space-y-8 flex-1">
                    <div>
                      <ul className="space-y-3">
                        {plan.features.main.map(f => (
                          <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                            {f.included ? 
                              <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                              <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                            }
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.features.section2 && (
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{plan.features.section2.title}</h4>
                        <ul className="space-y-3">
                          {plan.features.section2.items.map(f => (
                            <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                              {f.included ? 
                                <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                                <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                              }
                              <span>{f.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {plan.features.section3 && (
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{plan.features.section3.title}</h4>
                        <ul className="space-y-3">
                          {plan.features.section3.items.map(f => (
                            <li key={f.text} className={`flex items-start gap-3 text-sm leading-relaxed ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}>
                              {f.included ? 
                                <CheckCircle weight="duotone" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> :
                                <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
                              }
                              <span>{f.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(plan.features as any).whyThisPlan && (
                      <div className="pt-6 border-t border-zinc-800">
                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Why this plan?</h4>
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {(plan.features as any).whyThisPlan}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

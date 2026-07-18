"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, X, Minus } from "@phosphor-icons/react/dist/ssr";

const dsaPlans = [
  {
    id: "dsa-base",
    title: "DSA Base",
    icon: null,
    description: "Get your firm started. Best for standalone developers or simple validation pipelines.",
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
        { text: "Advanced Internal Endpoint Routing", included: false },
      ],
      communicate: [
        { text: "Email Support Ticket System", included: true },
        { text: "Advanced Webhook Notification Pipelines", included: false },
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
        { text: "100 runs/mo Algorithmic Performance Sandbox", included: true },
        { text: "Automated Time & Space Complexity Analyzer", included: true },
        { text: "Priority 4-Hour Slack SLA", included: true },
      ],
      buildWith: [
        { text: "Advanced Endpoints: Graphs, Dynamic Programming & Trees", included: true },
        { text: "Secure API Token Access Management (Role-Based Access Pipeline)", included: true },
        { text: "Polyglot Snippets: Python 3.10, Java 17, C++20", included: true },
        { text: "Advanced Internal Endpoint Routing", included: false },
      ],
      communicate: [
        { text: "Email Support Ticket System", included: true },
        { text: "Priority Slack Connect Channel", included: true },
        { text: "Advanced Webhook Notification Pipelines", included: false },
      ]
    }
  },
  {
    id: "dsa-enterprise",
    title: "DSA Enterprise",
    icon: "🏢",
    badge: "Enterprise Offer",
    description: "Isolated scale and absolute throughput for enterprise-grade applications and production systems.",
    isCustom: true,
    price: {
      customLabel: "Enterprise Pricing",
      yearlyLabel: "Tailored contract options with volume-based deployment models."
    },
    features: {
      main: [
        { text: "Unlimited Uncapped Throughput", included: true },
        { text: "Isolated QPS (Enterprise Rate Limits)", included: true },
        { text: "Advanced Enterprise Gateway Access", included: true },
        { text: "Strict 99.99% Uptime SLA with Financial Backing", included: true },
        { text: "Full Data Structure Suite Included", included: true },
        { text: "Unlimited Algorithmic Performance Sandbox Runs", included: true },
        { text: "Automated Time & Space Complexity Analyzer", included: true },
        { text: "24/7 Priority Support Engineer Line", included: true },
      ],
      buildWith: [
        { text: "All Endpoints + Advanced Internal Endpoint Routing", included: true },
        { text: "Secure API Token Access Management (Role-Based Access Pipeline)", included: true },
        { text: "On-Premise or VPC Deployment Options (AWS / GCP)", included: true },
        { text: "Advanced Deployment Pipeline Support", included: true },
      ],
      communicate: [
        { text: "24/7 Phone Support via Priority Direct Line", included: true },
        { text: "Priority Slack Connect Channel", included: true },
        { text: "Advanced Webhook Notification Pipelines (Includes 1,500 Alerts)", included: true },
      ]
    }
  }
];

export default function PricingPage() {
  const [dsaIsYearly, setDsaIsYearly] = useState(false);

  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-2">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Choose your scale</h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Technically robust execution limits and deep API endpoints tailored for serious engineering teams.
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

      </div>
    </div>
  );
}

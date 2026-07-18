"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, CaretDown, CreditCard } from "@phosphor-icons/react/dist/ssr";

// Mock Data - In a real app this would be fetched based on ID
const plansData = {
  "dsa-base": { name: "DSA Base", type: "DSA API", basePrice: 1499, monthlyStrike: 2999, yearlyPrice: 17988, isRouting: false, features: ["Core Endpoints: Arrays, Strings, Stacks", "Up to 10,000 API Requests/mo", "Multi-language Polyglot Snippets"] },
  "dsa-scale": { name: "DSA Scale", type: "DSA API", basePrice: 5999, monthlyStrike: 13999, yearlyPrice: 71988, isRouting: false, features: ["Advanced Endpoints Included", "Unlimited API Requests (1M Fair Use)", "Enterprise Access Pipeline"] },
  "dsa-enterprise": { name: "DSA Enterprise", type: "DSA API", basePrice: 0, isCustom: true, isRouting: false, features: ["Advanced Internal Endpoint Routing", "Strict 99.99% Uptime SLA", "24/7 Priority Support Engineer"] },
  "routing-base": { name: "Developer Plan", type: "API Plan", basePrice: 19000, isRouting: true, features: ["Shared SaaS Execution Limits", "1TB Data Routing Quota", "Algorithmic Validation Basic"] },
  "routing-pro": { name: "Pro API Plan", type: "API Plan", basePrice: 49000, isRouting: true, features: ["Isolated Execution Environment", "Unlimited Data Routing", "Real-Time Validation Nodes"] },
  "routing-enterprise": { name: "Enterprise Routing Plan", type: "API Plan", basePrice: 0, isCustom: true, isRouting: true, features: ["Isolated Routing Endpoints", "Advanced Rate-Limiting Rules", "Strict 99.99% SLA"] }
};

export default function CheckoutCartPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const plan = plansData[resolvedParams.id as keyof typeof plansData];
  const [period, setPeriod] = useState(plan?.isRouting ? '1y' : '1mo');

  if (!plan) {
    return (
      <div className="bg-brand-obsidian min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">Plan not found</h1>
          <Link href="/pricing" className="text-blue-500 hover:text-blue-400 font-medium">Return to Pricing</Link>
        </div>
      </div>
    );
  }

  // Calculate pricing logic
  let baseAmount = 0;
  let strikeAmount = 0;
  let periodLabel = '';
  let perMoLabel = 0;
  
  if (plan.isRouting) {
    if (period === '1y') {
      baseAmount = plan.basePrice;
      strikeAmount = plan.basePrice + 5000;
      periodLabel = '12-month period';
      perMoLabel = Math.round(baseAmount / 12);
    } else if (period === '2y') {
      baseAmount = Math.round(plan.basePrice * 2 * 0.89);
      strikeAmount = plan.basePrice * 2;
      periodLabel = '24-month period';
      perMoLabel = Math.round(baseAmount / 24);
    } else {
      baseAmount = Math.round(plan.basePrice * 3 * 0.75);
      strikeAmount = plan.basePrice * 3;
      periodLabel = '36-month period';
      perMoLabel = Math.round(baseAmount / 36);
    }
  } else {
    if (period === '1y') {
      baseAmount = (plan as any).yearlyPrice || 0;
      strikeAmount = ((plan as any).monthlyStrike || plan.basePrice) * 12;
      periodLabel = '12-month period';
      perMoLabel = Math.round(baseAmount / 12);
    } else {
      baseAmount = plan.basePrice;
      strikeAmount = (plan as any).monthlyStrike || 0;
      periodLabel = '1-month period';
      perMoLabel = baseAmount;
    }
  }

  const subtotal = baseAmount;
  const taxes = subtotal * 0.18; // 18% GST
  const total = subtotal + taxes;

  if ((plan as any).isCustom) {
    return (
      <div className="bg-brand-obsidian min-h-screen pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6 w-full">
           <h1 className="text-4xl font-extrabold text-white tracking-tight mb-8">Contact Sales</h1>
           <div className="bg-zinc-900/80 p-8 rounded-2xl shadow-sm border border-zinc-800">
              <p className="text-zinc-400 mb-6">Please reach out to our enterprise team to configure this enterprise deployment.</p>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors">Contact Us</Link>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="mb-8">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-6">
            <ArrowLeft weight="bold" className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Back to Pricing</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Your cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* LEFT COLUMN - MAIN CART ITEMS */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* PLAN ITEM */}
            <div className="bg-zinc-900/80 p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-zinc-800">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <CreditCard className="w-5 h-5 text-zinc-300" weight="duotone" />
                </div>
                <h2 className="text-lg font-bold text-white">Single plan</h2>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-semibold text-zinc-400 mb-2">Period</label>
                  <div className="relative">
                    <select 
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full appearance-none bg-zinc-950/80 border border-zinc-800 text-white text-sm font-medium rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    >
                      {plan.isRouting ? (
                        <>
                          <option value="1y">12 months</option>
                          <option value="2y">24 months</option>
                          <option value="3y">36 months</option>
                        </>
                      ) : (
                        <>
                          <option value="1mo">1 month</option>
                          <option value="1y">12 months</option>
                        </>
                      )}
                    </select>
                    <CaretDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  {strikeAmount > 0 && (
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        Save ₹{(strikeAmount - baseAmount).toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-zinc-500 line-through font-medium">₹{Math.round(strikeAmount / parseInt(periodLabel.split('-')[0])).toLocaleString('en-IN')}/mo</span>
                    </div>
                  )}
                  <div className="text-2xl font-extrabold text-white">
                    ₹{perMoLabel.toLocaleString('en-IN')}<span className="text-sm font-semibold text-zinc-500">/mo</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mb-6">
                Renews after {periodLabel.split('-')[0]} month{periodLabel.split('-')[0] === '1' ? '' : 's'} at standard rates. Cancel anytime.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-800">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
                    <CheckCircle className="w-5 h-5 text-emerald-500" weight="fill" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN - ORDER SUMMARY */}
          <div className="w-full lg:w-1/3">
            <div className="bg-zinc-900/80 p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-zinc-800 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-zinc-800">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-1">{plan.name}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">{periodLabel}</span>
                    <div className="flex items-center gap-2">
                      {strikeAmount > 0 && <span className="text-zinc-500 line-through text-xs">₹{strikeAmount.toLocaleString('en-IN')}</span>}
                      <span className="font-semibold text-white">₹{baseAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 flex items-center gap-1">Taxes <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded-full">?</span></span>
                  <span className="font-semibold text-white">₹{Math.round(taxes).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-6">
                <span className="text-lg font-bold text-white">Total</span>
                <div className="text-right">
                  {strikeAmount > 0 && <div className="text-sm text-zinc-500 line-through mb-1">₹{Math.round(strikeAmount + taxes).toLocaleString('en-IN')}</div>}
                  <div className="text-2xl font-extrabold text-white">₹{Math.round(total).toLocaleString('en-IN')}</div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl text-base font-bold transition-colors shadow-lg shadow-blue-500/20">
                Continue
              </button>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

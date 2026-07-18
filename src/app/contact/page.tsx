"use client";

import React, { useState } from "react";
import { EnvelopeSimple, Phone, Globe, User, CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function ContactUs() {
  const [source, setSource] = useState("");

  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.3em] block mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Contact Sales & Support</h1>
          <p className="text-lg text-zinc-400 font-light">
            Whether you need tailored enterprise pricing or technical support, our team is ready to help you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6">Talk to Sales</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input type="text" required placeholder="John Doe" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Email *</label>
                    <div className="relative">
                      <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input type="email" required placeholder="john@company.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Website (Optional)</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input type="url" placeholder="https://yourcompany.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">How did you hear about us? *</label>
                  <div className="relative">
                    <select 
                      required
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-4 pr-10 text-white text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="word_of_mouth">Word of Mouth</option>
                      <option value="reddit">Reddit</option>
                      <option value="blog">Blog Post / Article</option>
                      <option value="referral">Colleague / Referral</option>
                      <option value="search_engine">Search Engine (Google)</option>
                      <option value="social_media">Social Media (Twitter/LinkedIn)</option>
                      <option value="other">Other</option>
                    </select>
                    <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>

                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold tracking-wider uppercase transition-colors shadow-lg shadow-emerald-500/20 mt-4">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Support Information & Compliance */}
          <div className="prose prose-invert prose-zinc max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Support & Compliance</h2>
            <p className="mb-6 text-sm text-zinc-400 leading-relaxed">
              <strong>apiexplore.shop</strong> is committed to providing exceptional support for your developer integration and API routing needs. If you require assistance with your account, API access, or subscription billing, our priority support team is here to help.
            </p>
            
            <h3 className="text-lg font-bold text-white mt-8 mb-4 border-b border-zinc-800 pb-2">Email Support</h3>
            <p className="mb-6 text-sm text-zinc-400">
              For all technical inquiries, billing questions, and general support, please reach out to us at:<br/>
              <strong className="text-emerald-400 font-mono mt-2 inline-block">support@apiexplore.shop</strong>
            </p>
            
            <h3 className="text-lg font-bold text-white mt-8 mb-4 border-b border-zinc-800 pb-2">Service Level Agreement (SLA)</h3>
            <p className="mb-6 text-sm text-zinc-400">
              We value your time. All support queries regarding API endpoints, routing execution, or billing mandates will be addressed and resolved within <strong>24 to 48 business hours</strong>.
            </p>
          </div>
            

        </div>
      </div>
    </div>
  );
}

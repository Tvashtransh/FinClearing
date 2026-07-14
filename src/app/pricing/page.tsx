import Link from "next/link";
import { CreditCard, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function PricingPage() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-2">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Pay for what you use</h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            No hidden fees. Scale your API calls and infrastructure dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pricing cards... */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Developer</h3>
            <div className="text-4xl font-extrabold text-white mb-6">Free</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> 1,000 API calls / mo</li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Community Support</li>
            </ul>
            <button className="w-full py-3 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase">Get Started</button>
          </div>
          <div className="bg-zinc-950/80 border border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] rounded-2xl p-8 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">Most Popular</div>
            <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
            <div className="text-4xl font-extrabold text-white mb-6">Pay as you go</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Unlimited API calls</li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Volume discounts</li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Standard Support</li>
            </ul>
            <button className="w-full py-3 rounded-xl text-sm font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all uppercase">Add Payment Method</button>
          </div>
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-extrabold text-white mb-6">Custom</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Dedicated Nodes</li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> SLA & SOC2</li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm"><CheckCircle weight="duotone" className="w-4 h-4 text-emerald-500" /> Premium Support</li>
            </ul>
            <Link href="/contact" className="block text-center w-full py-3 rounded-xl text-sm font-bold tracking-wider text-white bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all uppercase">Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Pulse, Clock, CheckCircle } from "@phosphor-icons/react/dist/ssr";

interface APICardProps {
  name: string;
  category: string;
  description: string;
  responseTime: string;
  successRate: string;
  monthlyCalls: string;
  startingPrice: string;
  href: string;
}

export default function APICard({
  name, category, description, responseTime, successRate, monthlyCalls, startingPrice, href
}: APICardProps) {
  return (
    <Link href={href} className="group block">
      <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/0 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>

        <div className="flex justify-between items-start mb-4 relative z-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">{category}</span>
            <h3 className="text-xl font-bold text-white mt-1 group-hover:text-zinc-200 transition-colors">{name}</h3>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            Online
          </div>
        </div>

        <p className="text-zinc-400 text-sm font-light mb-6 flex-grow relative z-10">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
          <div className="bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/50">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
              <Clock weight="duotone" className="w-3 h-3" />
              <span className="text-[9px] uppercase tracking-wider font-semibold">Latency</span>
            </div>
            <span className="text-sm font-mono text-white">{responseTime}</span>
          </div>
          <div className="bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800/50">
            <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
              <CheckCircle weight="duotone" className="w-3 h-3" />
              <span className="text-[9px] uppercase tracking-wider font-semibold">Success</span>
            </div>
            <span className="text-sm font-mono text-emerald-400">{successRate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-900 relative z-10 mt-auto">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Starting at</span>
            <span className="text-sm font-bold text-white">{startingPrice} <span className="text-xs font-light text-zinc-500">/ 1k calls</span></span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-1 rounded-md">{monthlyCalls} mo</span>
        </div>
      </div>
    </Link>
  );
}

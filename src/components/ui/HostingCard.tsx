"use client";

import Link from "next/link";
import { HardDrives, Lightning, Shield, Check, CheckCircle, Minus } from "@phosphor-icons/react/dist/ssr";

type FeatureProp = string | { text: string; included?: boolean };

interface HostingCardProps {
  title: string;
  description: string;
  price: string;
  strikePrice?: string;
  period?: string;
  features: FeatureProp[];
  section2?: { title: string; items: FeatureProp[] };
  section3?: { title: string; items: FeatureProp[] };
  isPopular?: boolean;
  href: string;
}

export default function HostingCard({
  title, description, price, strikePrice, period = " / month", features, section2, section3, isPopular, href
}: HostingCardProps) {
  const renderFeature = (feature: FeatureProp, idx: number) => {
    const isString = typeof feature === 'string';
    const text = isString ? feature : feature.text;
    const included = isString ? true : feature.included !== false;

    return (
      <li key={idx} className={`flex items-start gap-3 text-sm leading-relaxed ${included ? 'text-zinc-300' : 'text-zinc-600'}`}>
        {included ? 
          <CheckCircle weight="duotone" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> :
          <Minus className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
        }
        <span>{text}</span>
      </li>
    );
  };

  return (
    <div className={`relative p-8 rounded-2xl bg-zinc-950/80 border ${isPopular ? 'border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : 'border-zinc-800/80'} hover:bg-zinc-900 transition-all duration-300 flex flex-col h-full overflow-hidden group`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/0 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>

      <div className="relative z-10 mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm font-light text-zinc-400 min-h-[40px]">{description}</p>
      </div>

      <div className="relative z-10 mb-8">
        {strikePrice && (
          <div className="text-sm text-zinc-500 line-through font-medium mb-1">
            {strikePrice} {period}
          </div>
        )}
        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold text-white tracking-tight">{price}</span>
          {price !== "Enterprise" && <span className="text-sm text-zinc-500 font-light pb-1.5">{period}</span>}
        </div>
      </div>

      <div className="relative z-10 flex-grow mb-8 space-y-8">
        <div>
          <ul className="space-y-3">
            {features.map(renderFeature)}
          </ul>
        </div>
        
        {section2 && (
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{section2.title}</h4>
            <ul className="space-y-3">
              {section2.items.map(renderFeature)}
            </ul>
          </div>
        )}

        {section3 && (
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{section3.title}</h4>
            <ul className="space-y-3">
              {section3.items.map(renderFeature)}
            </ul>
          </div>
        )}
      </div>

      <Link href={href} className={`relative z-10 block w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20' : 'bg-white text-black hover:bg-zinc-200'}`}>
        Deploy Now
      </Link>
    </div>
  );
}

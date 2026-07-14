import Link from "next/link";
import { HardDrives, Lightning, Shield, Check } from "@phosphor-icons/react/dist/ssr";

interface HostingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  href: string;
}

export default function HostingCard({
  title, description, price, features, isPopular, href
}: HostingCardProps) {
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
        <span className="text-4xl font-extrabold text-white tracking-tight">{price}</span>
        <span className="text-sm text-zinc-500 font-light"> / month</span>
      </div>

      <div className="relative z-10 flex-grow mb-8">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check weight="duotone" className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-300 font-light">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href={href} className={`relative z-10 block w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20' : 'bg-white text-black hover:bg-zinc-200'}`}>
        Deploy Now
      </Link>
    </div>
  );
}

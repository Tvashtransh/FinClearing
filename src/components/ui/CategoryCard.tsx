import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface CategoryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  href: string;
}

export default function CategoryCard({ title, count, icon, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
        {/* Hover Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500"></div>
        
        <div className="relative z-10 flex items-start justify-between">
          <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-zinc-700 transition-colors">
            {icon}
          </div>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md">{count} APIs</span>
        </div>
        
        <div className="relative z-10 mt-6 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">{title}</h4>
          <ArrowRight weight="duotone" className="h-4 w-4 text-zinc-600 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

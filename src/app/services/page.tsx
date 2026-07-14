import Link from "next/link";
import { Wrench } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-24 pb-24 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-6">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 mb-8">
          <Wrench className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Developer Services</h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed">
          Our specialized teams offer custom API development, API Gateway setup, and legacy system integrations. 
          This page is currently being upgraded for the new marketplace launch.
        </p>
        <div className="pt-8">
          <Link href="/contact" className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all uppercase inline-block">
            Contact Services Team
          </Link>
        </div>
      </div>
    </div>
  );
}

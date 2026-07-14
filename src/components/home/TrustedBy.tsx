import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="py-10 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-8">Trusted by scaling enterprises and hyper-growth startups</p>
        
        {/* Simple animated marquee container */}
        <div className="flex gap-16 items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-wrap">
          {/* Placeholder for Logos - using text as a placeholder since we don't have SVG logos */}
          <div className="text-xl font-bold font-serif text-white tracking-widest uppercase">Acme Corp</div>
          <div className="text-xl font-bold font-sans text-white tracking-widest uppercase">FinEdge</div>
          <div className="text-xl font-bold font-mono text-white tracking-widest uppercase">GlobalPay</div>
          <div className="text-xl font-bold font-serif text-white tracking-widest uppercase">Nexus</div>
          <div className="text-xl font-bold font-sans text-white tracking-widest uppercase">BlockTrust</div>
        </div>
      </div>
    </section>
  );
}

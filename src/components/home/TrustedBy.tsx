import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="py-10 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-8">Built to Empower Modern Tech Teams</p>
        
        {/* Simple animated marquee container */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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

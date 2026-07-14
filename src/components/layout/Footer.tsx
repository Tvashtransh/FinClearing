import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-500 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Copyright */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center bg-white relative">
              <Image src="/apiexplore_icon.png" alt="APIExplore Logo" fill className="object-contain p-1" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">API<span className="text-blue-500">Explore</span></span>
          </div>
          <p className="font-light leading-relaxed">
            The sovereign ledger infrastructure for high-scale loan distribution networks, expanded into a complete developer marketplace for APIs and Hosting.
          </p>
          <p className="text-[11px] mt-4 font-light">
            © {new Date().getFullYear()} APIExplore Inc. All rights reserved.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <h6 className="font-bold text-white uppercase text-[10px] tracking-widest">Platform</h6>
          <ul className="space-y-2.5 font-light">
            <li><Link href="/apis" className="hover:text-white transition-colors">API Marketplace</Link></li>
            <li><Link href="/hosting" className="hover:text-white transition-colors">Cloud Hosting</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Developer Services</Link></li>
            <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise Solutions</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <h6 className="font-bold text-white uppercase text-[10px] tracking-widest">Security & Legal</h6>
          <ul className="space-y-2.5 font-light">
            <li><Link href="/compliance" className="hover:text-white transition-colors">Data Privacy Shield</Link></li>
            <li><Link href="/compliance" className="hover:text-white transition-colors">Audit Certifications</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Licensing Terms</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Data Processing Addendum</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="space-y-4">
          <h6 className="font-bold text-white uppercase text-[10px] tracking-widest">Corporate</h6>
          <ul className="space-y-2.5 font-light">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise Support</Link></li>
            <li><Link href="/docs" className="hover:text-white transition-colors">Developer Docs</Link></li>
            <li><span className="text-zinc-600">Secure Node Status: </span><span className="text-emerald-400 font-mono text-[10px]">99.99% UP</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

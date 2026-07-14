import HostingCard from "@/components/ui/HostingCard";

export default function HostingHub() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-zinc-900 pb-12 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-4">Enterprise Infrastructure</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Hosting & Compute</h1>
          <p className="text-lg text-zinc-400 font-light">
            Deploy your backend services, databases, and API gateways on our globally distributed, SOC2 compliant cloud infrastructure.
          </p>
        </div>

        {/* ── VPS HOSTING ─────────────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Compute VPS</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HostingCard 
              title="VPS Starter"
              description="For lightweight webhooks and development environments."
              price="$12"
              features={["2 vCPU Cores", "4GB RAM", "80GB NVMe SSD", "Unmetered Bandwidth"]}
              href="/hosting/vps/starter"
            />
            <HostingCard 
              title="VPS Pro"
              description="High-frequency compute for production microservices."
              price="$29"
              isPopular={true}
              features={["4 vCPU Cores", "8GB RAM", "160GB NVMe SSD", "Daily Backups", "DDoS Protection"]}
              href="/hosting/vps/pro"
            />
            <HostingCard 
              title="VPS Max"
              description="Intensive workloads and in-memory databases."
              price="$59"
              features={["8 vCPU Cores", "16GB RAM", "320GB NVMe SSD", "Priority Network Routing", "Custom Firewall"]}
              href="/hosting/vps/max"
            />
          </div>
        </div>

        {/* ── DEDICATED SERVERS ────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Dedicated Bare Metal</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HostingCard 
              title="DB Node"
              description="Optimized for high-IOPS database hosting."
              price="$199"
              features={["32 Core AMD EPYC", "128GB ECC RAM", "2TB NVMe Raid 1", "SOC2 Compliance Certs"]}
              href="/hosting/dedicated/db"
            />
            <HostingCard 
              title="GPU Cluster"
              description="AI model inference and training nodes."
              price="$499"
              isPopular={true}
              features={["Dual NVIDIA A100", "256GB ECC RAM", "4TB NVMe SSD", "100Gbps Internal Network"]}
              href="/hosting/dedicated/gpu"
            />
            <HostingCard 
              title="Enterprise Vault"
              description="Physically isolated hardware for financial ledgers."
              price="Custom"
              features={["Custom CPU config", "Hardware Security Module", "Private Cage", "24/7 On-site Hands"]}
              href="/enterprise/contact"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

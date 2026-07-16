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

        {/* ── HOSTING PLANS ─────────────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Hosting Plans</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HostingCard 
              title="Hosting Base"
              description="Get your infrastructure online. Best for early-stage DSA tools and lightweight validation workloads."
              strikePrice="₹24,000"
              price="₹19,000"
              period=" / yr"
              features={[
                { text: "Shared Containerized Pods (Isolated Resource Quotas)", included: true },
                { text: "1TB Monthly Egress Bandwidth via Global CDN", included: true },
                { text: "Automated Daily Database Snapshots (7-Day Retention Vault)", included: true },
                { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
                { text: "99.9% Infrastructure Uptime Guarantee", included: true },
                { text: "Isolated Mumbai Region VPS", included: false },
                { text: "Active-Active Database Replication", included: false },
                { text: "Dedicated Technical Account Manager", included: false }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Container Architecture: Shared Docker / Kubernetes Pods", included: true },
                  { text: "CDN & Egress: Global Edge Network (1TB Cap)", included: true },
                  { text: "Storage: Standard NVMe SSD Quotas", included: true },
                  { text: "Custom Disaster Recovery Strategy", included: false }
                ]
              }}
              section3={{
                title: "Protect & comply:",
                items: [
                  { text: "Basic Cloudflare Layer-4 DDoS Protection Pipeline", included: true },
                  { text: "Standard SSL: Automated Let's Encrypt Wildcard", included: true },
                  { text: "AES-256 RBI Data Localization Compliance", included: false },
                  { text: "SOC2 & ISO 27001 Readiness Reporting", included: false }
                ]
              }}
              href="/pricing/hosting-base?term=1y"
            />
            <HostingCard 
              title="Hosting Pro"
              description="Run mission-critical fintech workloads smoothly. Great for scaling DSA platforms needing RBI compliance."
              strikePrice="₹59,000"
              price="₹49,000"
              period=" / yr"
              isPopular={true}
              features={[
                { text: "Isolated Mumbai Region VPS (AWS / GCP Data Residency)", included: true },
                { text: "Unlimited Bandwidth (Capped at 10TB Burst Egress)", included: true },
                { text: "Real-Time Active-Active Database Replication Nodes", included: true },
                { text: "Automated Daily Database Snapshots (Extended Retention Vault)", included: true },
                { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
                { text: "99.95% Infrastructure Uptime Guarantee", included: true },
                { text: "Priority 24/7 DevOps Support via Ticket & Chat", included: true },
                { text: "Physically Isolated Bare-Metal Environments", included: false }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Compute Architecture: Dedicated Virtual Private Server (VPS)", included: true },
                  { text: "Database Engine: Real-Time Active-Active Replication Nodes", included: true },
                  { text: "Cloud Residency: Mumbai Region (AWS / GCP Tier-1 DCs)", included: true },
                  { text: "Custom Disaster Recovery Strategy", included: false }
                ]
              }}
              section3={{
                title: "Protect & comply:",
                items: [
                  { text: "Advanced Layer 7 WAF & Cloudflare Enterprise DDoS Protection", included: true },
                  { text: "Storage Encryption: AES-256 Storage Encryption (RBI Compliant)", included: true },
                  { text: "Data Localization: Fully Compliant with RBI Guidelines", included: true },
                  { text: "SOC2 & ISO 27001 Readiness Reporting", included: false }
                ]
              }}
              href="/pricing/hosting-pro?term=1y"
            />
            <HostingCard 
              title="Hosting Enterprise"
              description="Maximum isolation, zero noisy neighbors, and custom SLA backing for large-scale financial institutions."
              price="Custom"
              period=""
              features={[
                { text: "Physically Isolated Bare-Metal Environments (Zero Noisy Neighbors)", included: true },
                { text: "Custom Egress Bandwidth & Dedicated Fiber Routing", included: true },
                { text: "Custom Disaster Recovery & Point-In-Time Restore Strategy", included: true },
                { text: "Real-Time Active-Active Database Clusters with Multi-Region Failover", included: true },
                { text: "Custom Web Application Firewall (WAF) & Rate-Limiting Rules", included: true },
                { text: "Strict 99.99% Uptime SLA with Financial Backing", included: true },
                { text: "Dedicated Technical Account Manager (TAM)", included: true }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Compute Architecture: Physically Isolated Bare-Metal Servers", included: true },
                  { text: "Disaster Recovery: Custom Point-In-Time Restore Strategy", included: true },
                  { text: "Hybrid / On-Premise: Custom VPC / Dedicated Cloud Interconnects", included: true },
                  { text: "Custom Integration: Tailored CI/CD Pipeline & Architecture Setup", included: true }
                ]
              }}
              section3={{
                title: "Protect & comply:",
                items: [
                  { text: "Enterprise Security: Custom WAF & Granular Rate-Limiting Rules", included: true },
                  { text: "Compliance Reporting: SOC2 Type II & ISO 27001 Readiness", included: true },
                  { text: "Data Localization: 100% RBI Compliant AES-256 Encryption", included: true },
                  { text: "Dedicated Support: 24/7 Dedicated TAM via Direct Phone & Slack", included: true }
                ]
              }}
              href="/contact"
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
              price="Custom"
              features={["32 Core AMD EPYC", "128GB ECC RAM", "2TB NVMe Raid 1", "SOC2 Compliance Certs"]}
              href="/contact"
            />
            <HostingCard 
              title="GPU Cluster"
              description="AI model inference and training nodes."
              price="Custom"
              isPopular={true}
              features={["Dual NVIDIA A100", "256GB ECC RAM", "4TB NVMe SSD", "100Gbps Internal Network"]}
              href="/contact"
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

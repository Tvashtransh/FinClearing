import HostingCard from "@/components/ui/HostingCard";

export default function RoutingHub() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-zinc-900 pb-12 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] block mb-4">Data Routing Endpoints</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">API Execution Tiers</h1>
          <p className="text-lg text-zinc-400 font-light">
            Scale your applications with our globally distributed API routing and algorithmic validation endpoints.
          </p>
        </div>

        {/* ── ROUTING PLANS ─────────────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">API Routing Plans</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HostingCard 
              title="Developer Plan"
              description="Start routing data. Best for early-stage DSA tools and lightweight validation workloads."
              strikePrice="₹24,000"
              price="₹19,000"
              period=" / yr"
              features={[
                { text: "Shared SaaS Execution Limits", included: true },
                { text: "1TB Monthly Egress Bandwidth via Global CDN", included: true },
                { text: "Automated Daily Database Snapshots (7-Day Retention Vault)", included: true },
                { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
                { text: "99.9% Infrastructure Uptime Guarantee", included: true },
                { text: "Isolated Execution Environment", included: false },
                { text: "Active-Active Database Replication", included: false },
                { text: "Dedicated Technical Account Manager", included: false }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Routing Architecture: Shared Execution Pools", included: true },
                  { text: "Data Egress: Global Edge Network (1TB Cap)", included: true },
                  { text: "Payload Limits: Standard Validation Quotas", included: true },
                  { text: "Enterprise Rate Limiting Strategy", included: false }
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
              href="/pricing/routing-base?term=1y"
            />
            <HostingCard 
              title="Pro API Plan"
              description="Route mission-critical data payloads smoothly. Great for scaling DSA platforms needing RBI compliance."
              strikePrice="₹59,000"
              price="₹49,000"
              period=" / yr"
              isPopular={true}
              features={[
                { text: "Isolated Routing Environment (Mumbai Data Residency)", included: true },
                { text: "Unlimited Bandwidth (Capped at 10TB Burst Egress)", included: true },
                { text: "Real-Time Active-Active Database Replication Nodes", included: true },
                { text: "Automated Daily Database Snapshots (Extended Retention Vault)", included: true },
                { text: "Let's Encrypt Wildcard SSL Certificates (Auto-Renewing)", included: true },
                { text: "99.95% Infrastructure Uptime Guarantee", included: true },
                { text: "Priority 24/7 DevOps Support via Ticket & Chat", included: true },
                { text: "Dedicated Routing Endpoints", included: false }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Routing Architecture: Isolated Validation Environment", included: true },
                  { text: "Execution Engine: Real-Time Algorithmic Processors", included: true },
                  { text: "Data Residency: Mumbai Region Logging", included: true },
                  { text: "Enterprise Disaster Recovery Strategy", included: false }
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
              href="/pricing/routing-pro?term=1y"
            />
            <HostingCard 
              title="Enterprise Routing Plan"
              description="Maximum isolation, zero noisy neighbors, and enterprise SLA backing for large-scale financial institutions."
              price="Enterprise"
              period=""
              features={[
                { text: "Dedicated Routing Endpoints (Zero Rate-Limit Collisions)", included: true },
                { text: "Enterprise Egress Bandwidth & Dedicated Fiber Routing", included: true },
                { text: "Enterprise Disaster Recovery & Point-In-Time Restore Strategy", included: true },
                { text: "Real-Time Active-Active Database Clusters with Multi-Region Failover", included: true },
                { text: "Advanced Web Application Firewall (WAF) & Rate-Limiting Rules", included: true },
                { text: "Strict 99.99% Uptime SLA with Financial Backing", included: true },
                { text: "Dedicated Technical Account Manager (TAM)", included: true }
              ]}
              section2={{
                title: "Build with:",
                items: [
                  { text: "Routing Architecture: Dedicated API Endpoints", included: true },
                  { text: "Disaster Recovery: Enterprise Point-In-Time Log Restore", included: true },
                  { text: "Hybrid Routing: Enterprise VPC Interconnects", included: true },
                  { text: "Advanced Automation: Tailored CI/CD Validation Pipeline", included: true }
                ]
              }}
              section3={{
                title: "Protect & comply:",
                items: [
                  { text: "Enterprise Security: Advanced WAF & Granular Rate-Limiting Rules", included: true },
                  { text: "Compliance Reporting: SOC2 Type II & ISO 27001 Readiness", included: true },
                  { text: "Data Localization: 100% RBI Compliant AES-256 Encryption", included: true },
                  { text: "Dedicated Support: 24/7 Dedicated TAM via Direct Phone & Slack", included: true }
                ]
              }}
              href="/contact"
            />
          </div>
        </div>

        {/* ── HIGH VOLUME DATA ENDPOINTS ────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">High-Volume Data Endpoints</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HostingCard 
              title="High-IOPS Validation Tier"
              description="Optimized for high-throughput payload validation."
              price="Enterprise"
              features={["32K Requests/sec", "Enterprise Rate Limits", "Custom Routing Logic", "SOC2 Compliance Certs"]}
              href="/contact"
            />
            <HostingCard 
              title="AI Routing Cluster"
              description="Advanced LLM routing and validation endpoints."
              price="Enterprise"
              isPopular={true}
              features={["Advanced LLM Endpoints", "High-Volume Validation", "Custom Execution Sandbox", "100Gbps Internal Routing"]}
              href="/contact"
            />
            <HostingCard 
              title="Secure Vault Endpoints"
              description="Isolated compliance routing for financial payloads."
              price="Enterprise"
              features={["Isolated Compliance Routing", "Private API Cage", "Dedicated Network Link", "24/7 Premium Support"]}
              href="/enterprise/contact"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

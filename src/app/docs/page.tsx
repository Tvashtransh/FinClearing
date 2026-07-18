import React from "react";
import Link from "next/link";
import { Terminal, ShieldCheck, Lightning, Warning } from "@phosphor-icons/react/dist/ssr";

export default function DocsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-zinc-300 font-sans pt-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row gap-12 relative">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 h-max py-8 hidden md:block">
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Getting Started</h4>
              <ul className="space-y-2">
                <li><a href="#introduction" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Introduction</a></li>
                <li><a href="#authentication" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Authentication</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">API Reference</h4>
              <ul className="space-y-2">
                <li><a href="#code-execution" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Code Execution Engine</a></li>
                <li><a href="#algorithm-profiler" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Algorithm Profiler</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Guides</h4>
              <ul className="space-y-2">
                <li><a href="#webhooks" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Webhooks Integration</a></li>
                <li><a href="#rate-limits" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Rate Limits</a></li>
                <li><a href="#errors" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">Error & Handling Metrics</a></li>
                <li><a href="#sla" className="text-sm text-zinc-400 hover:text-white transition-colors block py-1 border-l border-transparent hover:border-zinc-500 pl-3 -ml-3">SLA & Compliance</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl py-8 md:py-12 prose prose-invert prose-zinc prose-pre:bg-[#111111] prose-pre:border prose-pre:border-zinc-800 prose-headings:font-bold">
          
          <div className="mb-12" id="introduction">
            <h1 className="text-4xl text-white tracking-tight mb-4">Documentation & Quickstart Guide</h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Welcome to the <strong>apiexplore.shop</strong> core developer reference. Our globally distributed network allows you to integrate production-ready algorithmic utilities and scalable routing environments seamlessly via a unified API gateway. All interactions require a secure Bearer token header.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Terminal className="w-4 h-4" /> Base Production URL
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-400 m-0 bg-transparent border-none">
                <code>https://api.apiexplore.shop/v1</code>
              </pre>
            </div>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-12" id="authentication">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" /> Authentication
            </h2>
            <p>
              Authenticate your application backend by passing your active API token inside the HTTP authorization header block. Keep your private key completely secured.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                HTTP Headers
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>
<span className="text-pink-400">Authorization:</span> Bearer YOUR_SECRET_API_KEY<br/>
<span className="text-pink-400">Content-Type:</span> application/json
                </code>
              </pre>
            </div>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-12" id="code-execution">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <Lightning className="w-6 h-6 text-amber-400" /> Core Endpoint: Code Execution Engine
            </h2>
            <p>
              Submit a source string snippet along with targeted language parameters to execute algorithmic logic inside an isolated, containerized sandbox framework.
            </p>
            
            <h4 className="text-sm font-semibold text-white mt-8 mb-4">HTTP Request</h4>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 font-mono text-sm inline-flex items-center gap-3">
              <span className="text-blue-400 font-bold">POST</span>
              <span className="text-zinc-300">/routing/execute</span>
            </div>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Request Payload Body</h4>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                JSON
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>{`{
  "language": "python",
  "source_code": "def find_sum(a, b):\\n    return a + b",
  "timeout_ms": 2000
}`}</code>
              </pre>
            </div>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Response Payloads</h4>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                JSON
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>{`{
  "status": "success",
  "execution_time_ms": 42,
  "stdout": "",
  "stderr": "",
  "exit_code": 0
}`}</code>
              </pre>
            </div>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-12" id="algorithm-profiler">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <Lightning className="w-6 h-6 text-blue-400" /> Core Endpoint: Algorithm Profiler
            </h2>
            <p>
              Analyze computational execution characteristics to determine programmatic time and space complexity metrics against defined inputs.
            </p>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">HTTP Request</h4>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 font-mono text-sm inline-flex items-center gap-3">
              <span className="text-blue-400 font-bold">POST</span>
              <span className="text-zinc-300">/ai/profiler</span>
            </div>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Request Payload Body</h4>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                JSON
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>{`{
  "target_function": "def search(arr, x):\\n    for i in range(len(arr)):\\n        if arr[i] == x: return i\\n    return -1"
}`}</code>
              </pre>
            </div>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Response Payloads</h4>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                JSON
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>{`{
  "estimated_time_complexity": "O(N)",
  "estimated_space_complexity": "O(1)",
  "vulnerability_check": "passed",
  "optimization_suggestions": []
}`}</code>
              </pre>
            </div>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-24" id="errors">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <Warning className="w-6 h-6 text-rose-400" /> Error Rate & Handling Metrics
            </h2>
            <p>
              Standard REST API protocol response mappings return specific error states for rate-limiting thresholds (QPS) or bad requests:
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                    <th className="py-4 px-4 font-medium w-1/4">HTTP Status Code</th>
                    <th className="py-4 px-4 font-medium w-2/4">Description</th>
                    <th className="py-4 px-4 font-medium w-1/4">Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-4 font-mono text-emerald-400">200 OK</td>
                    <td className="py-4 px-4 text-zinc-300">Transaction completed successfully.</td>
                    <td className="py-4 px-4 text-zinc-400">Process the standard payload parameters.</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-4 font-mono text-rose-400">401 Unauthorized</td>
                    <td className="py-4 px-4 text-zinc-300">Invalid or expired API header secret token.</td>
                    <td className="py-4 px-4 text-zinc-400">Verify token string in dashboard.</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-4 font-mono text-amber-400">429 Too Many Requests</td>
                    <td className="py-4 px-4 text-zinc-300">Your account rate limit profile has been reached.</td>
                    <td className="py-4 px-4 text-zinc-400">Drop request velocity to match plan QPS.</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-4 font-mono text-rose-500">500 Internal Error</td>
                    <td className="py-4 px-4 text-zinc-300">API failed to process the request correctly.</td>
                    <td className="py-4 px-4 text-zinc-400">Retry request with exponential backoff.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-12" id="webhooks">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <Lightning className="w-6 h-6 text-purple-400" /> Webhooks Integration
            </h2>
            <p>
              Receive real-time notifications about long-running asynchronous jobs. By configuring a webhook URL in your dashboard, you can have apiexplore.shop POST results directly back to your webhook once processing is complete.
            </p>
            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Webhook Delivery Format</h4>
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#111] shadow-xl">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                JSON POST Payload
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 m-0 bg-transparent border-none">
                <code>{`{
  "event_type": "job.completed",
  "job_id": "req_8xV1qM92p",
  "timestamp": "2026-07-16T18:00:00Z",
  "payload": {
    "status": "success",
    "result_url": "https://api.apiexplore.shop/v1/jobs/req_8xV1qM92p/results"
  }
}`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-zinc-400">Ensure your webhook endpoint responds with a <code>200 OK</code> status code within 3 seconds, or the delivery will be marked as failed and retried up to 5 times.</p>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-12" id="rate-limits">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-400" /> Rate Limits
            </h2>
            <p>
              To ensure platform stability and high availability across all tenants, APIExplore enforces rate limits based on your subscription tier.
            </p>
            <ul className="space-y-2 mt-4 text-sm text-zinc-400 list-disc pl-5">
              <li><strong className="text-white">Base Tier:</strong> 5 Requests per second (QPS). Maximum 10,000 requests per month.</li>
              <li><strong className="text-white">Scale Tier:</strong> 50 Requests per second (QPS). Maximum 1,000,000 requests per month.</li>
              <li><strong className="text-white">Enterprise Tier:</strong> Enterprise rate limits based on SLA terms, capable of scaling to 10,000+ QPS.</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-400">If you exceed your QPS limit, you will receive a <code>429 Too Many Requests</code> HTTP response. You should implement a Retry-After header strategy to handle burst traffic gracefully.</p>
          </div>

          <hr className="border-zinc-800 my-12" />

          <div className="mb-24" id="sla">
            <h2 className="text-2xl text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" /> SLA & Compliance
            </h2>
            <p>
              We stand by our uptime guarantees. All API endpoints are monitored 24/7.
            </p>
            <ul className="space-y-2 mt-4 text-sm text-zinc-400 list-disc pl-5">
              <li>Base accounts receive a standard 99.9% uptime guarantee.</li>
              <li>Scale accounts receive a 99.95% uptime guarantee with priority Slack support (4-hour response time).</li>
              <li>Enterprise accounts receive a rigid 99.99% financially backed uptime guarantee. If we miss our targets, we issue automatic service credits equivalent to 10% of your monthly bill.</li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
}

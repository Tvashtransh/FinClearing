import React from "react";

export default function RefundPolicy() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24 text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-zinc">
        <h1 className="text-4xl font-extrabold text-white mb-8">REFUND & CANCELLATION POLICY</h1>
        <p className="mb-6">
          At <strong>apiexplore.shop</strong>, our services involve the instant digital provisioning of API access and dedicated server resources. Due to the immediate and intangible nature of these digital developer products, we enforce a strict refund and cancellation framework.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Cancellation Policy</h3>
        <p className="mb-6">
          You have full control over your subscription. Users may cancel their active monthly or multi-year subscriptions at any time. Cancellations can be executed seamlessly directly through your user dashboard under the "Billing" section, or by submitting a formal cancellation request via email to <strong className="text-emerald-400">support@apiexplore.shop</strong>.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. AutoPay Termination</h3>
        <p className="mb-6">
          Upon successful cancellation of your subscription, the active recurring mandate will be immediately revoked. We guarantee that no further auto-debits will occur in any subsequent billing cycles following your cancellation.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Refund Policy</h3>
        <p className="mb-6">
          Because apiexplore.shop provides instant access to proprietary infrastructure and API endpoints upon payment confirmation, <strong>all payments are final</strong>. We do not issue partial, prorated, or full refunds for mid-cycle cancellations, unused time, or unused API quotas.
        </p>
        <p className="mb-6">
          However, upon cancellation, your account will not be downgraded immediately. You will retain full access to your provisioned API limits and hosting resources until the end of your current paid billing period.
        </p>
      </div>
    </div>
  );
}

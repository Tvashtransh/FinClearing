import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24 text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-zinc">
        <h1 className="text-4xl font-extrabold text-white mb-8">TERMS & CONDITIONS</h1>
        <p className="mb-6">
          Welcome to <strong>apiexplore.shop</strong>. The platform apiexplore.shop is an independent software and infrastructure web service owned and operated by Priyanshu Pethari. By accessing or using our developer platform, you agree to be bound by the following Terms & Conditions.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Services Provided</h3>
        <p className="mb-6">
          apiexplore.shop provides developers with subscription-based access to proprietary Data Structures & Algorithms (DSA) API endpoints and high-performance server hosting infrastructure. These services are delivered digitally upon successful subscription activation.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Account Security & Responsibilities</h3>
        <p className="mb-6">
          Users are strictly responsible for maintaining the confidentiality and security of their account credentials and API secret keys. Any activity occurring under your authenticated account is your sole responsibility. apiexplore.shop will not be liable for any loss or damage arising from your failure to adequately safeguard your credentials.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Fair Use, Rate Limits, & Acceptable Use</h3>
        <p className="mb-6">
          To ensure high availability and optimal performance for all users, our API services are subject to strict rate limits (Queries Per Second / QPS) as defined by your active subscription plan. You agree to adhere to these operational limits. Any attempt to engage in automated abuse, scraping, reverse-engineering of our proprietary APIs, or circumvention of rate limits is strictly prohibited. Violation of these fair use policies will result in immediate, permanent termination of your account without notice.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Subscription Billing & Payments</h3>
        <p className="mb-6">
          apiexplore.shop operates on a recurring subscription model (billed monthly or annually). Payments are processed securely via global merchant of record platforms. By providing your payment information, you authorize apiexplore.shop to establish a recurring mandate to automatically deduct subscription fees according to your selected billing cycle.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Governing Law</h3>
        <p className="mb-6">
          These Terms & Conditions shall be governed by and construed in accordance with the laws of India, subject to the jurisdiction of the competent courts.
        </p>
      </div>
    </div>
  );
}

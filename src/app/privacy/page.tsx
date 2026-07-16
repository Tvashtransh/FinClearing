import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24 text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-zinc">
        <h1 className="text-4xl font-extrabold text-white mb-8">PRIVACY POLICY</h1>
        <p className="mb-6">
          At <strong>apiexplore.shop</strong>, we prioritize the privacy and security of our developer community. This Privacy Policy outlines how we collect, use, and protect your information in compliance with applicable data protection regulations.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Data Collection</h3>
        <p className="mb-6">
          To provision and manage your account, we collect necessary operational data, including your registered email address and authentication details. We also collect technical logs, such as IP addresses and API request headers, which are strictly necessary to monitor server infrastructure, enforce rate limits, and prevent abuse.
        </p>
        <p className="mb-6">
          Regarding financial data: We process payment authentication tokens routed securely through certified payment processors. <strong>We do NOT store, process, or transmit raw credit card numbers or UPI PINs on our servers.</strong>
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Data Security</h3>
        <p className="mb-6">
          We employ industry-standard encryption protocols (including TLS/SSL in transit and AES-256 at rest) to safeguard your user profiles, API secret keys, and telemetry data against unauthorized access, alteration, or disclosure.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Third-Party Disclosures</h3>
        <p className="mb-6">
          Your trust is paramount. We do not sell, rent, or trade your personal information to marketing agencies. Data is strictly shared only with our certified banking partners and authorized payment aggregators (such as Cashfree Payments) for the sole purpose of facilitating transaction processing, validating identity, and executing recurring mandates as required by RBI guidelines.
        </p>
      </div>
    </div>
  );
}

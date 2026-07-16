import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-brand-obsidian min-h-screen pt-12 pb-24 text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-zinc">
        <h1 className="text-4xl font-extrabold text-white mb-8">CONTACT US</h1>
        <p className="mb-6">
          <strong>apiexplore.shop</strong> is committed to providing exceptional support for your developer integration and hosting infrastructure needs. If you require assistance with your account, API access, or subscription billing, our dedicated support team is here to help.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Email Support</h3>
        <p className="mb-6">
          For all technical inquiries, billing questions, and general support, please reach out to us at:<br/>
          <strong className="text-emerald-400">support@apiexplore.shop</strong>
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Service Level Agreement (SLA)</h3>
        <p className="mb-6">
          We value your time. All support queries regarding API endpoints, server hosting infrastructure, or billing mandates will be addressed and resolved within <strong>24 to 48 business hours</strong>.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Phone Support</h3>
        <p className="mb-6">
          You may also reach our support desk at:<br/>
          <strong className="text-emerald-400">[+91-XXXXXXXXXX]</strong><br/>
          <em className="text-sm text-zinc-500">(Operating Hours: Monday to Friday, 9:00 AM to 6:00 PM IST)</em>
        </p>
      </div>
    </div>
  );
}

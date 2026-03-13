"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentMethods() {
  const [activeTab, setActiveTab] = useState("upi");

  return (
    <div className="order-1 w-full lg:order-2 lg:w-1/2">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        
        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          {(['upi', 'card', 'netbanking', 'wallets'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 border-b-2 py-4 text-sm font-medium capitalize transition-colors ${
                activeTab === tab 
                  ? 'border-primary bg-primary/5 text-primary' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'netbanking' ? 'Net Banking' : tab}
            </button>
          ))}
        </div>

        {/* UPI Content */}
        {activeTab === 'upi' && (
          <div className="p-8">
            <div className="space-y-6">
              
              {/* UPI Input */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Enter UPI ID</label>
                <div className="relative">
                  <input 
                    className="h-14 w-full rounded-lg border-slate-200 pl-4 pr-24 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary" 
                    placeholder="yourname" 
                    type="text" 
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 border-l border-slate-200 pl-4 font-medium text-slate-400">
                    @okaxis
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">A payment request will be sent to your UPI app</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-100"></div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">OR</span>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6">
                <div className="mb-4 h-32 w-32 rounded-lg bg-white p-2 shadow-sm">
                  <img 
                    alt="Payment QR Code" 
                    className="h-full w-full object-cover" 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" 
                  />
                </div>
                <p className="text-sm font-medium text-slate-600">Scan QR Code to pay</p>
                <p className="mt-1 text-xs text-slate-400">Open any UPI app to scan</p>
              </div>
            </div>

            <Link href="/success" className="mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
              <span>Generate Payment Link</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        )}
        
        {/* Placeholders for other tabs */}
        {activeTab !== 'upi' && (
          <div className="p-16 text-center text-slate-500">
            <span className="material-symbols-outlined mb-2 text-4xl text-slate-300">construction</span>
            <p>Integration pending for {activeTab}</p>
          </div>
        )}
      </div>

      {/* Trust Badges below the form */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 opacity-60 transition-all duration-300 hover:grayscale-0">
        <div className="flex items-center gap-2">
          {/* Using a placeholder for the Razorpay logo based on your HTML */}
          <div 
            className="h-8 w-24 bg-contain bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg')" }}
          ></div>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5">
          <span className="material-symbols-outlined text-sm">verified_user</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">PCI-DSS Compliant</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5">
          <span className="material-symbols-outlined text-sm">security</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">100% Secure</span>
        </div>
      </div>
    </div>
  );
}
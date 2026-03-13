"use client";

import { useState } from "react";

interface Step3Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3Form({ onNext, onPrev }: Step3Props) {
  const [goGreen, setGoGreen] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(); 
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10 p-6 md:p-8">
        
        {/* Top Row: Plan Summary & Pricing */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Plan Summary */}
          <section className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Selected Plan</h3>
            <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Age Group: 0-5 Years
                  </span>
                  <h4 className="text-lg font-medium text-slate-900">Child Health Subscription</h4>
                  <p className="mt-1 text-sm text-slate-600">Validity: Birth to 18 Years</p>
                </div>
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <span className="material-symbols-outlined text-2xl text-primary">medical_services</span>
                </div>
              </div>
              <div className="border-t border-primary/10 pt-3">
                <button type="button" className="flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2">
                  View Included Benefits <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Breakdown */}
          <section className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Pricing Breakdown</h3>
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Base Price</span>
                <span className="font-medium text-slate-900">₹846.61</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>GST @18%</span>
                <span className="font-medium text-slate-900">₹152.39</span>
              </div>
              
              <div className="border-y border-dashed border-slate-200 py-3">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-primary">sell</span>
                    <span className="text-sm font-bold tracking-wider text-slate-900">SAVE100</span>
                  </div>
                  <button type="button" className="text-xs font-bold uppercase text-red-500 hover:underline">Remove</button>
                </div>
                <div className="flex justify-between text-sm font-medium text-primary">
                  <span>Coupon Discount</span>
                  <span>- ₹100.00</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-1">
                <span className="font-medium text-slate-900">Total Amount</span>
                <span className="text-xl font-medium text-primary">₹999.00</span>
              </div>
            </div>
          </section>
        </div>

        {/* Middle Row: Go Green Participation */}
        <section className="flex flex-col gap-4 border-t border-slate-100 pt-6">
          <div className="flex items-center justify-between rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <span className="material-symbols-outlined text-2xl">park</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Go Green Participation</h4>
                <p className="text-sm text-slate-500">Plant a tree in your child's name</p>
                {goGreen && (
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Certificate Included (Free)
                  </p>
                )}
              </div>
            </div>
            
            {/* Custom Toggle Switch */}
            <button
              type="button"
              onClick={() => setGoGreen(!goGreen)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${goGreen ? 'bg-primary' : 'bg-slate-200'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${goGreen ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </section>

        {/* Bottom Row: Payment Methods */}
        <section className="flex flex-col gap-4 border-t border-slate-100 pt-6">
          <h3 className="text-lg font-semibold text-slate-900">Payment Methods</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button 
              type="button"
              onClick={() => setPaymentMethod("upi")}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${paymentMethod === "upi" ? "border-primary bg-primary/5 text-slate-900" : "border-slate-100 text-slate-500 hover:border-primary/50"}`}
            >
              <span className={`material-symbols-outlined text-3xl ${paymentMethod === "upi" ? "text-primary" : ""}`}>account_balance_wallet</span>
              <span className="text-sm font-semibold">UPI / GPay</span>
            </button>

            <button 
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${paymentMethod === "card" ? "border-primary bg-primary/5 text-slate-900" : "border-slate-100 text-slate-500 hover:border-primary/50"}`}
            >
              <span className={`material-symbols-outlined text-3xl ${paymentMethod === "card" ? "text-primary" : ""}`}>credit_card</span>
              <span className="text-sm font-semibold">Cards</span>
            </button>

            <button 
              type="button"
              onClick={() => setPaymentMethod("netbanking")}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${paymentMethod === "netbanking" ? "border-primary bg-primary/5 text-slate-900" : "border-slate-100 text-slate-500 hover:border-primary/50"}`}
            >
              <span className={`material-symbols-outlined text-3xl ${paymentMethod === "netbanking" ? "text-primary" : ""}`}>account_balance</span>
              <span className="text-sm font-semibold">Net Banking</span>
            </button>

            <button 
              type="button"
              onClick={() => setPaymentMethod("wallet")}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${paymentMethod === "wallet" ? "border-primary bg-primary/5 text-slate-900" : "border-slate-100 text-slate-500 hover:border-primary/50"}`}
            >
              <span className={`material-symbols-outlined text-3xl ${paymentMethod === "wallet" ? "text-primary" : ""}`}>payments</span>
              <span className="text-sm font-semibold">Wallets</span>
            </button>
          </div>
        </section>
      </div>

      {/* Form Footer Actions & Badges (Matches Step 1 & 2 exactly) */}
      <div className="flex flex-col gap-6 border-t border-slate-200 bg-slate-50 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <button 
            type="button" 
            onClick={onPrev} 
            className="flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-slate-900"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span> 
            Back
          </button>
          
          <button 
            type="submit" 
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-all hover:brightness-110 md:px-10"
          >
            Proceed to Payment 
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>

        
      </div>
    </form>
  );
}
"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      question: "Is my data secure and private?",
      answer: "Yes, we use bank-level encryption (AES-256) to secure all medical records. Only you and authorized doctors can access the data."
    },
    {
      question: "How do vaccination reminders work?",
      answer: "Based on your child's date of birth and regional immunization schedules, we send automated SMS, Email, and Push notifications 7 days and 1 day before the due date."
    },
    {
      question: "Can multiple family members access the account?",
      answer: "Yes, you can securely invite a co-parent or guardian to have shared access to your child's health dashboard and alerts."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${isOpen ? "border-primary/30 bg-primary/5 shadow-sm" : "border-slate-200 hover:bg-slate-50"}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`font-medium transition-colors ${isOpen ? "text-primary" : "text-slate-900"}`}>
                    {faq.question}
                  </h4>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "text-primary rotate-45" : "text-slate-400"}`}>
                    add
                  </span>
                </div>
                
                {/* Expandable Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
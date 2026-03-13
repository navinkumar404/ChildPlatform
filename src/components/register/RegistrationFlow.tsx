"use client";

import { useState } from "react";

import Step3Form from "./Step3Form";
import Step4Form from "./Step4Form";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import RegistrationProgress from "./RegistrationProgress";
import { redirect } from "next/dist/server/api-utils";

export default function RegistrationFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  

  return (
    <>
      {currentStep === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <RegistrationProgress 
            title="Child & Mother Details"
            subtitle="Please provide the basic information to start the health journey."
            step={1}
            totalSteps={totalSteps}
            registrationId="CHD-KA-20260310-000XXX"
          />
          <Step1Form
         onNext={nextStep} />
        </div>
      )}

      {currentStep === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <RegistrationProgress 
            title="Contact & Authentication"
            step={2}
            totalSteps={totalSteps}
          />
          <Step2Form onNext={nextStep} onPrev={prevStep} />
        </div>
      )}

      {/* Step 3: Multi-Card Dashboard Layout (NO Unified Wrapper!) */}
      {currentStep === 3 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
            <RegistrationProgress title="Subscription & Pricing" step={3} totalSteps={totalSteps} />
         
          <Step3Form onNext={nextStep} onPrev={prevStep} />
        </div>
      )}

      {/* Step 4: Final Consent & Payment */}
      {currentStep === 4 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <RegistrationProgress 
              title="Consent & Terms Agreement" 
              overline="Final Step"
              step={4} 
              totalSteps={totalSteps} 
            />
            <Step4Form 
              onNext={() => window.location.href = "/payment"} 
              onPrev={prevStep} 
            />
            </div>

          {/* Compliance Footer (Only shows on the final step!) */}
          
        </div>
      )}
    </>
  );
}
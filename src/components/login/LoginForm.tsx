"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  // State to toggle between login methods
  const [loginMethod, setLoginMethod] = useState<"regId" | "mobile">("regId");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-primary/10 bg-white shadow-xl">
      <div className="p-8">
        
        {/* Header */}
        <header className="mb-8 flex flex-col items-center text-center">
          <Link href="/" className="mb-4 flex items-center gap-2">
            
            <h1 className="text-2xl font-medium tracking-tight text-slate-900">WombTo18</h1>
          </Link>
          <h2 className="mb-2 text-3xl font-medium text-slate-800">Welcome Back!</h2>
          <p className="text-sm text-slate-500">Access your child's health journey</p>
        </header>

        {/* Login Method Tabs */}
        <div className="mb-6">
          <div className="flex rounded-full bg-slate-100 p-1">
            <button 
              type="button"
              onClick={() => setLoginMethod("regId")}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${loginMethod === "regId" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Registration ID
            </button>
            <button 
              type="button"
              onClick={() => setLoginMethod("mobile")}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${loginMethod === "mobile" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Mobile / Email
            </button>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Dynamic Input Field based on selected tab */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">
              {loginMethod === "regId" ? "Registration ID" : "Mobile Number or Email"}
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                {loginMethod === "regId" ? "badge" : "contact_mail"}
              </span>
              <input 
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" 
                placeholder={loginMethod === "regId" ? "CHD-KA-20260310-000045" : "+91 9876543210"} 
                type={loginMethod === "regId" ? "text" : "text"} 
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {loginMethod === "regId" 
                ? "First time login? Use your Registration ID provided by the clinic." 
                : "We will send a secure OTP to verify your identity."}
            </p>
          </div>

          {/* Send OTP Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90" type="button">
            Send OTP
            <span className="material-symbols-outlined text-sm">send</span>
          </button>

          {/* OTP Input Section */}
          <div className="pt-4">
            <label className="mb-3 block text-center text-sm font-medium text-slate-700">Enter 6-digit OTP</label>
            <div className="flex justify-between gap-2 px-2">
              {[...Array(6)].map((_, i) => (
                <input 
                  key={i}
                  className="h-12 w-10 rounded-lg border-2 border-slate-200 bg-slate-50 text-center text-xl font-normal text-slate-900 focus:border-primary focus:ring-0 outline-none transition-colors" 
                  maxLength={1} 
                  type="text" 
                />
              ))}
            </div>
          </div>

          <button className="mt-2 w-full rounded-full bg-primary px-4 py-3 font-medium text-white shadow-md transition-all hover:bg-primary/90" type="submit">
            Verify & Login
          </button>

          {/* Alternative Login */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition-all hover:bg-slate-50" type="button">
            <img alt="Google logo icon" className="h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" />
            Login with Google
          </button>
        </form>

        {/* Security Badges */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
            OTP Protected
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">lock_reset</span>
            No password needed
          </div>
          <a className="font-meidum text-primary hover:underline" href="#">Need help?</a>
        </div>
      </div>

      {/* Card Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 p-6">
        <div className="mb-4 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account? <Link className="font-meidum text-primary hover:underline" href="/register">Register Now</Link>
          </p>
        </div>
        {/* <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative">
            <select className="appearance-none rounded-full border border-slate-200 bg-transparent py-1 pl-8 pr-8 text-xs font-medium text-slate-600 outline-none focus:ring-1 focus:ring-primary">
              <option>English (US)</option>
              <option>Hindi (भारत)</option>
              <option>Kannada (ಕರ್ನಾಟಕ)</option>
            </select>
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500">language</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">support_agent</span>
              Support: 1800-CHILD-HLP
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
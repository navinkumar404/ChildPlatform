import { ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary tracking-wide uppercase">
                Trusted by 50,000+ Indian Parents
              </span>
              <h1 className="text-4xl font-normal leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Complete Child Health Journey from <span className="text-primary">0-18 Years</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                Empowering parents with comprehensive health tracking, vaccination reminders, and growth monitoring from birth to adulthood.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-light text-white shadow-xl shadow-primary/30 transition hover:scale-105">
                Register Now
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-light text-slate-700 border border-slate-200 shadow-sm transition hover:bg-slate-50">
                View Demo
              </button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-normal text-slate-600">Go Green Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-normal text-slate-600">Verified Doctors</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full rounded-3xl bg-primary/5 overflow-hidden border-8 border-white shadow-2xl">
              <img alt="Happy Indian family smiling together" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1731202485450-b3eb422f8783?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-400"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Active Community</p>
                  <p className="text-xs text-slate-500">Join 12k+ active discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Features() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-slate-900">Why WombTo18 is different?</h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Paperless Records</h4>
                  <p className="mt-1 text-slate-600">Store all health documents digitally. Never lose a prescription or vaccination record again.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Smart Reminders</h4>
                  <p className="mt-1 text-slate-600">Get timely alerts for upcoming vaccinations and routine health checkups.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Secure & Private</h4>
                  <p className="mt-1 text-slate-600">Your child's health data is encrypted and protected with enterprise-grade security.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <img alt="Doctor examining a child" className="h-40 w-full rounded-2xl object-cover" src="" />
              <p className="mt-4 text-center font-bold">Expert Care</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <img alt="Doctor examining a child" className="h-40 w-full rounded-2xl object-cover" src="" />
              <p className="mt-4 text-center font-bold">Expert Care</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <img alt="Doctor examining a child" className="h-40 w-full rounded-2xl object-cover" src="" />
              <p className="mt-4 text-center font-bold">Expert Care</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <img alt="Doctor examining a child" className="h-40 w-full rounded-2xl object-cover" src="" />
              <p className="mt-4 text-center font-bold">Expert Care</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
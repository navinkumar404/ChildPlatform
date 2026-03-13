export default function RemindersSection() {
  const reminders = [
    { icon: "medical_services", color: "text-primary", bg: "bg-primary/10", title: "Routine Checkup", time: "Tomorrow, 10:30 AM" },
    { icon: "medication", color: "text-orange-600", bg: "bg-orange-100", title: "Polio Booster Shot", time: "March 15, 2026" },
    { icon: "visibility", color: "text-blue-600", bg: "bg-blue-100", title: "Eye Exam", time: "April 20, 2026" }
  ];

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-medium">
          <span className="material-symbols-outlined text-slate-400">notifications_active</span>
          Upcoming Reminders
        </h3>
        <div className="space-y-4">
          {reminders.map((rem, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-transparent p-3 transition-colors hover:border-slate-100 hover:bg-slate-50">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${rem.bg} ${rem.color}`}>
                  <span className="material-symbols-outlined">{rem.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{rem.title}</p>
                  <p className="text-xs text-slate-500">{rem.time}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100"><span className="material-symbols-outlined text-lg">chat</span></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><span className="material-symbols-outlined text-lg">sms</span></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100"><span className="material-symbols-outlined text-lg">mail</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 p-8 text-center">
        <h3 className="mb-4 text-xl font-medium text-white">Want a deeper look?</h3>
        <p className="mb-8 max-w-sm font-light text-slate-400">Access comprehensive health trends, school reports, and environmental impact badges for Aarav.</p>
        <button className="flex w-[50%] transform items-center justify-center gap-3 rounded-full bg-primary py-4 font-normal text-white transition-all hover:scale-[1.02] hover:bg-primary/90">
          <span>View Full Dashboard</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
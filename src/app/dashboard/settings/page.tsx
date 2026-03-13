import ProfileSettings from "@/components/dashboard/settings/ProfileSettings";
import NotificationPreferences from "@/components/dashboard/settings/NotificationPreferences";
import LinkedAccounts from "@/components/dashboard/settings/LinkedAccounts";
import SubscriptionCard from "@/components/dashboard/settings/SubscriptionCard";

export default function SettingsPage() {
  return (
    <div className="mx-auto w-[80%] max-w-8xl space-y-10 pb-12">
      
      {/* Optional Page Title (If your DashboardHeader doesn't display it) */}
      <h1 className="mb-2 text-3xl font-medium tracking-tight text-slate-900">Settings</h1>
      
      {/* Row 1 */}
      <ProfileSettings />
      
      {/* Row 2 */}
      <NotificationPreferences />
      
      {/* Row 3: Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <LinkedAccounts />
        <SubscriptionCard />
      </div>

    </div>
  );
}
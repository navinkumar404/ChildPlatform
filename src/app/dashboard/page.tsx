
import ProfileSection from "@/components/dashboard/ProfileSection";
import RemindersSection from "@/components/dashboard/RemindersSection";
import StatsGrid from "@/components/dashboard/StatsGrid";
import VaccinationTimeline from "@/components/dashboard/VaccinationTimeline";


export default function DashboardPage() {
  return (
    <>
      <StatsGrid />
      <ProfileSection />
      <VaccinationTimeline />
      <RemindersSection />
    </>
  );
}
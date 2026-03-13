import GreenHeader from "@/components/dashboard/green/GreenHeader";
import ImpactStats from "@/components/dashboard/green/ImpactStats";
import TreeDetailsCard from "@/components/dashboard/green/TreeDetailsCard";
import GrowthTimeline from "@/components/dashboard/green/GrowthTimeline";
import CertificateCard from "@/components/dashboard/green/CertificateCard";
import ShareWidget from "@/components/dashboard/green/ShareWidget";
import PhotoUpdatePlaceholder from "@/components/dashboard/green/PhotoUpdatePlaceholder";

export default function GoGreenPage() {
  return (
    <div className="mx-auto w-full max-w-8xl">
      <GreenHeader />
      
      <ImpactStats />
      
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <TreeDetailsCard />
          <GrowthTimeline />
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <CertificateCard />
          <ShareWidget />
        </div>
      </div>

      <PhotoUpdatePlaceholder />
    </div>
  );
}
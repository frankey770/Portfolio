"use client";
import React from "react";
import BackgroundBeams from "@/components/Beams";
import InternshipExperienceCard from "@/components/Experience";

function Page() {
  return (
    <div
      className="min-h-screen bg-black py-12 pt-36"
      suppressHydrationWarning={true}
    >
      <div>
        <BackgroundBeams />
      </div>
      <div className="relative">
        <div className="px-20 relative z-10">
          <InternshipExperienceCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
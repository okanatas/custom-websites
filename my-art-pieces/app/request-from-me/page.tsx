"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import RequestFromMe from "@/components/RequestFromMe";

function RequestFromMeContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  // Determine default type based on URL param
  let defaultType: "custom-painting" | "tutoring" = "custom-painting";
  
  if (type === "tutoring") {
    defaultType = "tutoring";
  }

  // Use key prop to force re-render when type changes
  return <RequestFromMe key={defaultType} defaultType={defaultType} />;
}

export default function RequestFromMePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <RequestFromMeContent />
    </Suspense>
  );
}


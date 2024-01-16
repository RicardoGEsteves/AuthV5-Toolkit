"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import PageTypeCard from "../_components/page-type-card";

export default function AdminPage() {
  const role = useCurrentRole();

  return (
    <div>
      <PageTypeCard
        title="Admin Client Page from Parallel Route"
        role={role}
      />
    </div>
  );
}

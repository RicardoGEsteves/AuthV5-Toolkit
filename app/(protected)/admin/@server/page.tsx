import { currentRole } from "@/lib/auth";
import PageTypeCard from "../_components/page-type-card";

export default async function AdminPage() {
  const role = await currentRole();

  return (
    <div>
      <PageTypeCard
        title="Admin Server Page from Parallel Route"
        role={role}
      />
    </div>
  );
}

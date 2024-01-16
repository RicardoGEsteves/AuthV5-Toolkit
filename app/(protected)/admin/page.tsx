"use client";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RoleGate from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { admin } from "@/actions/admin";

export default function AdminPage() {
  const handleApiRoute = async () => {
    try {
      const response = await fetch("/api/admin");

      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    } catch (error) {
      console.error("An error occurred while fetching the API:", error);
    }
  };

  const handleServerAction = async () => {
    try {
      const data = await admin();

      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    } catch (error) {
      console.error("An error occurred during the server action:", error);
    }
  };

  return (
    <Card className="w-auto shadow-sm">
      <CardHeader className="flex-row items-center justify-center gap-x-4">
        <span>
          <MdOutlineAdminPanelSettings className="h-10 w-10 text-sky-400" />
        </span>
        <p className="text-2xl font-semibold text-center">Admin Page Example</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Allowed, your role give you permissions see this content!" />

          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only API Route</p>
            <Button
              className=" hover:bg-sky-400"
              onClick={handleApiRoute}
            >
              Test it here
            </Button>
          </div>

          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only Server Action</p>
            <Button
              className=" hover:bg-sky-400"
              onClick={handleServerAction}
            >
              Test it here
            </Button>
          </div>
        </RoleGate>
      </CardContent>
    </Card>
  );
}

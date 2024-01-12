"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function SettingsPage() {
  const user = useCurrentUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <button
        onClick={handleLogout}
        type="submit"
      >
        Logout
      </button>
    </div>
  );
}

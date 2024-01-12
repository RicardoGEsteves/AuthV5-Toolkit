"use client";

import { logout } from "@/actions/logout";

const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <span
      onClick={handleLogout}
      className="cursor-pointer"
    >
      {children}
    </span>
  );
};

export default LogoutButton;

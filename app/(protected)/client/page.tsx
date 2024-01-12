"use client";

import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <UserInfo
      user={user}
      label="Client Page Example"
    />
  );
};

export default ClientPage;

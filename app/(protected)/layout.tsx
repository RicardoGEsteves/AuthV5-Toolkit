import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import Navbar from "./_components/navbar";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full w-full flex">
        <Navbar />
        <div className="w-full flex items-center justify-center mx-5">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}

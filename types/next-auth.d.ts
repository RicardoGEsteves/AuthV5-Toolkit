import NextAuth, { User as NextAuthUser } from "next-auth";
import { UserRole } from "@prisma/client";

interface User extends NextAuthUser {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
}

declare module "next-auth" {
  interface JWT {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  }

  interface Session {
    user: User & Session["user"];
  }
}

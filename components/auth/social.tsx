"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full text-xl hover:bg-sky-400 hover:text-background"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <GrGoogle />
      </Button>
      <Button
        size="lg"
        className="w-full text-2xl hover:bg-sky-400 hover:text-background"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;

"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    // TODO: LoginButton modal
    return;
  }

  return (
    <span
      onClick={onClick}
      className="cursor-pointer"
    >
      {children}
    </span>
  );
};

export default LoginButton;

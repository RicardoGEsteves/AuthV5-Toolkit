"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { NAV_LINKS } from "../_constants";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px]">
      <div className="flex gap-x-2">
        {NAV_LINKS.map((link, index) => (
          <Button
            key={index}
            asChild
            variant={pathName === link.path ? "default" : "outline"}
            className="w-full hover:bg-sky-400 hover:text-primary-foreground"
          >
            <Link href={link.path}>{link.title}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};
export default Navbar;

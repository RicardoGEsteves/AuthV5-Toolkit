"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

import { NAV_LINKS } from "../_constants";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <nav className="hidden lg:flex w-full fixed top-0 h-14 bg-secondary justify-between items-center p-4 shadow-md">
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

      <nav className="flex bg-secondary items-center justify-between p-4 lg:hidden shadow-md">
        <Sheet>
          <SheetTrigger>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="w-full text-sky-400 hover:text-background"
            >
              <MdMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex-col p-2">
              {NAV_LINKS.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant={pathName === link.path ? "default" : "outline"}
                  className="w-full hover:bg-sky-400 my-2 hover:text-primary-foreground"
                >
                  <Link href={link.path}>{link.title}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <UserButton />
      </nav>
    </>
  );
};
export default Navbar;

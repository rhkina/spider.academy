import React from "react";
import Image from "next/image";
import { slackey } from "@/lib/fonts";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {};
const Navbar = async (props: Props) => {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-[50] flex items-center
    justify-between border-b-[1px] border-gray-700/50 bg-background/40 px-4 py-2 
    backdrop-blur-lg"
    >
      <aside className="flex items-center gap-[6px]">
        <Image
          src={"/logo-dark.svg"}
          width={40}
          height={40}
          alt="logo"
          className="hidden dark:block"
        />
        <Image
          src={"/logo-light.svg"}
          width={30}
          height={30}
          alt="logo"
          className="block dark:hidden"
        />
        <p className={`${slackey.className} text-primary-background text-xl`}>
          Spider
        </p>
      </aside>
      <nav className="hidden gap-6 md:flex">
        <a
          href="/courses"
          className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Courses
        </a>
        <a
          href="/pricing"
          className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Pricing
        </a>
        <a
          href="/blog"
          className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Blog
        </a>
        <a
          href="/docs"
          className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Docs
        </a>
        <a
          href="/info"
          className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
        >
          Info
        </a>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="#"
          className={cn(buttonVariants({ variant: "ghost" }), "rounded-full")}
        >
          {
            // WIP: Wire up user
            false ? "Dashboard" : "Get Started"
          }
        </Link>
        <ModeToggle />

        {
          // WIP: Wire up user
        }

        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;

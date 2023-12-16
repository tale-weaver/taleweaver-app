"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "../ui/button";
import MainNav from "./main-nav";
import { useSession } from "next-auth/react";
import UserAuth from "./user-auth";
import axios from "axios";

export function NavContainer() {
  const { data: session } = useSession();

  if (session?.user) {
    console.log("token", (session?.user as any)?.accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      (session?.user as any)?.accessToken
    }`;
  }

  return (
    <div className="container hidden md:flex md:justify-between md:items-center h-16">
      <div id="nav-left" className="flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* TODO: LOGO */}
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav />
      </div>
      <div id="nav-right">
        {session?.user ? (
          <UserAuth imgUrl={session?.user.image as string} />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

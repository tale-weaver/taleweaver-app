import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "../ui/button";
import MainNav from "./main-nav";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserAuth from "./user-auth";

export async function NavContainer() {
  const session = await getServerSession(options);

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

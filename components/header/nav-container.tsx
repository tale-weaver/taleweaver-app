"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "../ui/button";
import MainNav from "./main-nav";
import { useSession } from "next-auth/react";
import UserAuth from "./user-auth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUserInfo = async () => {
  const { data } = await axios.get("http://127.0.0.1:5000/user");
  return data;
};

export function NavContainer() {
  const { data: session } = useSession();

  let enabled = false;

  if (session?.user) {
    console.log("token", (session?.user as any)?.accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      (session?.user as any)?.accessToken
    }`;
    enabled = true;
  }

  const {
    status,
    fetchStatus,
    data: getUser,
  } = useQuery({
    queryKey: ["user", session?.user.name],
    queryFn: getUserInfo,
    enabled: !!enabled,
  });

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
        {getUser?.record.username ? (
          <UserAuth
            imgUrl={getUser?.record.avatar as string}
            username={getUser?.record.username}
            is_premium={getUser?.record.role === "premium"}
          />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

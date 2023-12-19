"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "../ui/button";
import MainNav from "./main-nav";
import { useSession } from "next-auth/react";
import UserAuth from "./user-auth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";

const getUserInfo = async () => {
  const { data } = await axios.get("http://127.0.0.1:5000/user");
  return data;
};

export function NavContainer() {
  const { data: session } = useSession();
  const { user, setUser } = useContext(AppContext);

  // set axios header
  useEffect(() => {
    if (session?.user) {
      console.log("token", (session?.user as any)?.accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        (session?.user as any)?.accessToken
      }`;
    }
  }, [session?.user]);

  // when session has user, fetch user info
  const { status, data: gotUser } = useQuery({
    queryKey: ["user", session?.user.name],
    queryFn: getUserInfo,
    enabled: !!session?.user,
  });

  // when user info is fetched, set user
  useEffect(() => {
    if (status === "success") {
      setUser(gotUser);
    }
  }, [status, gotUser]);

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
        {user?.record.username ? (
          <UserAuth
            imgUrl={
              (user?.record.avatar as string) ||
              "https://gravatar.com/avatar/b6eada68a0879b7af38a4ddf32e06aa7?s=400&d=robohash&r=x"
            }
            username={user?.record.username}
            is_premium={user?.record.role === "premium"}
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

"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { removeAuthHeader } from "@/lib/api/common";
import { useSession } from "next-auth/react";
import axios from "axios";

const UserAuth = ({
  imgUrl = "https://gravatar.com/avatar/b6eada68a0879b7af38a4ddf32e06aa7?s=400&d=robohash&r=x",
}) => {
  const { data: session } = useSession();

  if (session?.user) {
    console.log("token", (session?.user as any)?.accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      (session?.user as any)?.accessToken
    }`;
  }

  const handleSignOut = () => {
    removeAuthHeader();
    signOut();
  };

  return (
    <div className="flex justify-between items-center">
      <Image
        src={imgUrl}
        alt="Profile picture"
        width={32}
        height={32}
        className="rounded-full mr-4 border-2"
      />
      <Button onClick={handleSignOut} variant="outline">
        Sign out
      </Button>
    </div>
  );
};

export default UserAuth;

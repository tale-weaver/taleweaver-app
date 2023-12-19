"use client";

import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const ProfileLeft = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="px-10">
      <Image
        src={
          (user?.record.avatar as string) ||
          "https://gravatar.com/avatar/b6eada68a0879b7af38a4ddf32e06aa7?s=400&d=robohash&r=x"
        }
        alt="avatar"
        width={88}
        height={88}
        className="rounded-full mt-10 mb-5"
      />
      <h2 className="text-base font-semibold">{user?.record.username}</h2>
      <p className="text-base font-light">
        {Math.floor(Math.random() * 100)} Followers
      </p>
      <p className="text-sm font-light w-2/3 mt-5 mb-3">
        Hello, I am {user?.record.username}. I am an artist and I love to
        create. My email is {user?.record.email}. Welcome to connect with me!
      </p>
      <Button variant="link" className="mt-4 p-0">
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileLeft;

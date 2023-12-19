"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { removeAuthHeader } from "@/lib/api/common";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Badge = ({ size = 10, color = "black", className }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" className={className}>
    <circle cx="5" cy="5" r="5" fill={color} />
  </svg>
);

const UserAuth = ({
  imgUrl = "https://gravatar.com/avatar/b6eada68a0879b7af38a4ddf32e06aa7?s=400&d=robohash&r=x",
  username = "John Doe",
  is_premium = false,
}) => {
  const router = useRouter();

  const handleSignOut = () => {
    removeAuthHeader();
    signOut();
  };

  return (
    <div className="flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {is_premium ? (
            <div className="relative inline-block">
              <Image
                src={imgUrl}
                alt="Profile picture"
                width={36}
                height={36}
                className="rounded-full mr-4"
              />
              {/* // circle badge svg */}
              <Badge className="absolute top-1 right-4 transform translate-x-1/2 -translate-y-1/2" />
            </div>
          ) : (
            <Image
              src={imgUrl}
              alt="Profile picture"
              width={36}
              height={36}
              className="rounded-full mr-4"
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          alignOffset={-5}
          className="w-[200px]"
          forceMount
        >
          <DropdownMenuLabel>
            {is_premium ? `${username} | Premium` : username}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Setting</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("./profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAuth;

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const ProfileCard = () => {
  return (
    <div className="w-full">
      <div className="py-4">
        <p className="text-sm text-gray-500">Jun 26, 2021</p>
        <div className="flex flex-row justify-between items-start mt-2 h-[208px] border-b-[1px]">
          <div className="w-7/12 flex flex-col justify-between mr-4 h-full">
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-800 pb-2">
                title: this is a title
              </p>
              <p className="text-gray-700 text-base font-serif h-[48px] w-full overflow-hidden text-ellipsis">
                Dolor fugiat tempor anim occaecat cillum do consequat labore
                duis reprehenderit. Aliqua cillum incididunt consequat sit
                deserunt quis. Minim sint eiusmod enim est aliqua aliquip.
                Occaecat esse ut occaecat irure. Ex dolore id excepteur proident
                fugiat irure est cupidatat et do cupidatat. Reprehenderit dolore
                esse ex aute. Proident exercitation laborum sint in anim commodo
                occaecat dolore.
              </p>
            </div>
            <Badge
              variant="secondary"
              className="block text-xs w-[110px] text-center px-3 font-light text-gray-600 mb-16 h-6"
            >
              Got 3 votes
            </Badge>
          </div>
          <div className="flex flex-col justify-center items-end">
            <Image
              src="https://gravatar.com/avatar/b6eada68a0879b7af38a4ddf32e06aa7?s=400&d=robohash&r=x"
              alt="avatar"
              width={112}
              height={112}
              className="h-auto w-auto object-cover border-2 transition-all hover:scale-105 duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

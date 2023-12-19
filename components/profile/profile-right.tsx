"use client";

import { ScrollArea } from "../ui/scroll-area";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./profile-card";

const ProfileRight = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="px-10">
      <div className="pt-[42px] pb-10">
        <h1 className="text-[42px] font-semibold">{user?.record.username}</h1>
      </div>
      <Tabs defaultValue="submit" className="w-full">
        <TabsList className="bg-white space-x-10 rounded-none">
          <TabsTrigger
            className="shadow-none pt-0 px-0 pb-4 rounded-none hover:shadow-none focus:shadow-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-slate-600"
            value="submit"
          >
            Submits
          </TabsTrigger>
          <TabsTrigger
            className="shadow-none pt-0 px-0 pb-4 rounded-none hover:shadow-none focus:shadow-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-slate-600"
            value="comment"
          >
            Comments
          </TabsTrigger>
          <TabsTrigger
            className="shadow-none pt-0 px-0 pb-4 rounded-none hover:shadow-none focus:shadow-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-slate-600"
            value="like"
          >
            Likes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="submit">
          <ScrollArea className="h-[560px]">
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-40 bg-gray-500 my-2"></div>
              ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="comment">
          <ScrollArea className="h-[560px]">
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-40 bg-gray-200 my-2"></div>
              ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="like">
          <ScrollArea className="h-[560px]">
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <ProfileCard key={i} />
              ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileRight;

"use client";

import { ScrollArea } from "../ui/scroll-area";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./profile-card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "lucide-react";

const getProfileData = async () => {
  const { data } = await axios.get("http://127.0.0.1:5000/user/profile");
  return data;
};

const ProfileRight = () => {
  const { user } = useContext(AppContext);

  const {
    data: profile,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["profile", user?.record.username],
    queryFn: getProfileData,
  });

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
            {isLoading && (
              <Loader className="w-6 h-6 my-20 mx-auto animate-spin" />
            )}
            {isSuccess && profile.record.pages.length === 0 && (
              <p className="text-center text-gray-500">No submits yet</p>
            )}
            {isSuccess &&
              profile.record.pages.length > 0 &&
              profile.record.pages.map((item: any, index: any) => (
                <ProfileCard
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  time={item.created_at}
                  metric={item.voted_by_user_ids.length}
                  postfix="Votes"
                />
              ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="comment">
          <ScrollArea className="h-[560px]">
            {isLoading && (
              <Loader className="w-6 h-6 my-20 mx-auto animate-spin" />
            )}
            {isSuccess && profile.record.comments.length === 0 && (
              <p className="text-center text-gray-500">No comments yet</p>
            )}
            {isSuccess &&
              profile.record.comments.length > 0 &&
              profile.record.comments.map((item: any, index: any) => (
                <ProfileCard
                  key={item._id}
                  title={`Review ${index + 1}`}
                  description={item.review}
                  image={`https://picsum.photos/seed/${index + 1}/200/200`}
                  time={item.created_at}
                  metric={item.rating}
                  postfix="Stars"
                />
              ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="like">
          <ScrollArea className="h-[560px]">
            {isLoading && (
              <Loader className="w-6 h-6 my-20 mx-auto animate-spin" />
            )}
            {isSuccess && profile.record.books.length === 0 && (
              <p className="text-center text-gray-500">No likes yet</p>
            )}
            {isSuccess &&
              profile.record.books.length > 0 &&
              profile.record.books.map((item: any) => (
                <ProfileCard
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  image={item.cover}
                  time={item.created_at}
                  metric={item.liked_by_user_ids.length}
                  postfix="Likes"
                />
              ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileRight;

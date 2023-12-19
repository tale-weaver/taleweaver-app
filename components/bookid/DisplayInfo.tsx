"use client";
import React from "react";
import ViewBasic from "./ViewBasic";
import CommentSection from "../CommentSection";
import dynamic from "next/dynamic";
import StoryPageMain from "../storypage/story-page-main";

export default function DisplayInfo() {
  const Description = dynamic(() => import("./Description"), { ssr: false });

  return (
    <div className="flex flex-col">
      <ViewBasic />
      <Description />
      <StoryPageMain />
      <div className="w-full m-4">
        <CommentSection />
      </div>
    </div>
  );
}

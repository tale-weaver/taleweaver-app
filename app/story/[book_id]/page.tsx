import React from "react";
import DisplayInfo from "@/components/bookid/DisplayInfo";
import StoryPageMain from "@/components/storypage/story-page-main";

export default function StoryView() {
  //回傳的資訊除了網址上的ID，其他都是假的
  return (
    <div>
      <DisplayInfo />
      <StoryPageMain />
    </div>
  );
}

'use client';

import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { MessageCircle } from "lucide-react";

interface CommentButtonProps {
  comment_nums: number; // comment counts
}

const CommentButton: React.FC<CommentButtonProps> = ({ comment_nums }) => {
  const [commentCount, setCommentCount] = useState(comment_nums); // TODO: not 0, count should retrieve from DB

  useEffect(() => {
    setCommentCount(comment_nums);
  },[comment_nums])

  const movetoCommentSection = () => {
    const commentsElement = document.getElementById("comments_area");

    if (commentsElement) {
      commentsElement.scrollIntoView({ behavior: "smooth" }); // scroll to <div id="comments"></div>
    }

  };

  return (
    <div className="flex items-center">
      <Button variant="outline" onClick={movetoCommentSection}>
        <MessageCircle color="black"/>
      </Button>
      <span className="pl-2">  {commentCount}</span>
    </div>
  );
};

export default CommentButton;

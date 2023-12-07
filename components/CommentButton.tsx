'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { MessageCircle } from "lucide-react";

const CommentButton: React.FC = () => {
  const [commentCount, setCommentCount] = useState(0); // TODO: not 0, count should retrieve from DB

  const movetoCommentSection = () => {
    const commentsElement = document.getElementById("comments");

    if (commentsElement) {
      commentsElement.scrollIntoView({ behavior: "smooth" }); // scroll to <div id="comments"></div>
    }

  };

  return (
    <div className="flex items-center">
      <Button variant="outline" onClick={movetoCommentSection}>
        <MessageCircle/>
      </Button>
      <span className="pl-2">  {commentCount}</span>
    </div>
  );
};

export default CommentButton;

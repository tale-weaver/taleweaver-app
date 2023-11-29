'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { Heart } from "lucide-react";

const LikeButton: React.FC = () => {
  const [likeCount, setLikeCount] = useState(0); // TODO: not 0, count should retrieve from DB
  const [isFilledHeart, setIsFilledHeart] = useState(false);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1); // TODO: revise it
    setIsFilledHeart((prev) => !prev); // switch heart. TODO: replace with icon
  };

  return (
    <div>
      <Button variant={isFilledHeart ? "destructive" : "outline"} onClick={handleLike}>
        <Heart color={isFilledHeart ? "white" : "black"} />
      </Button>
      <span>  {likeCount}</span>
    </div>
  );
};

export default LikeButton;

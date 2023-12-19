'use client';

import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { Heart } from "lucide-react";
import axios from "axios";

interface LikeButtonProps {
  bookId: string; // 傳給後端的 book_id
  liked: boolean; // whether user liked this book
  like_nums: number; // like counts
}

const LikeButton: React.FC<LikeButtonProps> = ({ bookId, liked, like_nums }) => {
  const [likeCount, setLikeCount] = useState(like_nums);
  const [isFilledHeart, setIsFilledHeart] = useState(liked);

  // 確認有沒有抓到參數 -- bookId 沒拿到？
  console.log("check if we receive the params:", bookId, liked, like_nums)
  useEffect(() => {
    setLikeCount(like_nums);
  },[like_nums])
  // const handleLike = () => {
  //   setLikeCount((prevCount) => prevCount + 1); // TODO: revise it
  //   setIsFilledHeart((prev) => !prev); // switch heart. TODO: replace with icon
  // };

  // useEffect(() => {
    // 从后端获取书籍的初始点赞状态和计数
    // 这里使用伪代码，你需要根据你的实际后端 API 调整
    // fetch(`/story/${bookId}/likes`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setLikeCount(data.numlikes);
    //     setIsFilledHeart(data.isLiked); // 如果后端提供了点赞状态的信息
    //   });
  // }, [initialLikeState]);

  const handleLike = async () => {
    try {
      // update like state
      let bookId = '657d58b34b06369e5deeb7cf'
      const response = await axios.post(`http://127.0.0.1:5000/story/${bookId}/like`);
      
      console.log(bookId, liked, like_nums)

      if (response.status === 200) {
        const data = response.data;
        
        console.log(data)
        
        setLikeCount(data.records.numlikes);
        setIsFilledHeart(true);
      } else {
        console.error('Failed to like the story.');
      }
    } catch (error) {
      console.error('Error liking the story:', error);
    }
  };

  return (
    <div className="flex items-center">
      {/* like = add to user collection; unlike = remove from user collection */}
      <Button variant={isFilledHeart ? "destructive" : "outline"} onClick={handleLike}>
        <Heart color={isFilledHeart ? "white" : "black"} />
      </Button>
      <span className="pl-2"> {likeCount}</span>
    </div>
  );
};

export default LikeButton;

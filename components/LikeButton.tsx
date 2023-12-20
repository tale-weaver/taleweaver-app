'use client';

import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { Heart } from "lucide-react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface LikeButtonProps {
  bookId: string; // 傳給後端的 book_id
  liked: boolean; // whether user liked this book
  like_nums: number; // like counts
}

const LikeButton: React.FC<LikeButtonProps> = ({ bookId, liked, like_nums }) => {
  const [likeCount, setLikeCount] = useState(like_nums);
  // const [isFilledHeart, setIsFilledHeart] = useState(liked);

  const [endpointParam, setEndpointParam] = useState(bookId);

  const searchParams = useSearchParams();
  const params = searchParams.get("book_id");

  useEffect(() => {
    setLikeCount(like_nums);
    // setIsFilledHeart(liked)
    
    if (bookId == undefined) {
      setEndpointParam(params);
    }
  }, [like_nums]) //, liked])

  // console.log("Receive the params:", endpointParam, liked, like_nums)

  // const queryClient = useQueryClient();

  // const { data } = useQuery(
  //   ['story', endpointParam],
  //   async () => {
  //     const response = await axios.get(`http://127.0.0.1:5000/story/${endpointParam}`);
  //     return response.data;
  //   },
  //   {
  //     initialData: { records: { numlikes: like_nums } }, // Set initial data based on the current like count
  //   }
  // );

  const handleLike = async () => {
    try {
      // update like state
      const response = await axios.post(`http://127.0.0.1:5000/story/${endpointParam}/like`);

      // console.log(endpointParam, liked, like_nums)

      if (response.status === 200) {
        const data = response.data;

        // console.log(data)

        setLikeCount(data.records.numlikes);
        // setIsFilledHeart(prev => !prev);

        const router = useRouter();
        router.refresh();
        
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
      {/* <Button variant={isFilledHeart ? "destructive" : "outline"} onClick={handleLike}>
        <Heart color={isFilledHeart ? "white" : "black"} />
      </Button> */}
      <Button variant="outline" onClick={handleLike}>
        <Heart color="black" />
      </Button>
      <span className="pl-2"> {likeCount}</span>
    </div>
  );
};

export default LikeButton;

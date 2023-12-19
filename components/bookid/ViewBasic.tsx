"use client";
import React from "react";
import Image from "next/image";
import LikeButton from "../LikeButton";
import CommentButton from "../CommentButton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function ViewBasic() {
  const searchParams = useSearchParams();
  const book_id = searchParams.get("book_id");

  const queryStory = async () => {
    const { data } = await axios.get(`http://127.0.0.1:5000/story/${book_id}`);
    return data;
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["story", book_id],
    queryFn: queryStory,
  });

  if (isPending) {
    return (
      <div className="w-full">
        <div className="relative h-96">
          <Skeleton className="w-full h-96 bg-slate-100" />
        </div>
        <div className="grid grid-flow-col mt-4">
          <Skeleton className="w-64 h-8 bg-slate-100" />
          <div className="flex flex-row justify-self-end gap-4">
            <Skeleton className="w-16 h-8 bg-slate-100" />
            <Skeleton className="w-16 h-8 bg-slate-100" />
          </div>
        </div>
      </div>
    );
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  } else {
    const records = data.records;
    console.log(records);
    const src = records.bookurl.replace("./bin", "http://127.0.0.1:5000/bin");
    return (
      // 還沒設link到story-read
      <div className="w-full">
        <div className="relative h-96">
          <Image src={src} alt="Post" fill className="object-cover" />
        </div>

        <div className="grid grid-flow-col mt-4">
          <h1 className="flex flex-start text-4xl font-semibold">
            {records.bookname}
          </h1>
          <div className="flex flex-row justify-self-end gap-4">
            <LikeButton
              bookId={records.book_id}
              liked={false}
              like_nums={records.numlikes}
            />
            <CommentButton comment_nums={records.numcomments} />
          </div>
        </div>
      </div>
    );
  }
}

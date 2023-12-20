"use client";
import React, { useEffect } from "react";
import ViewBasic from "./ViewBasic";
import CommentSection from "../CommentSection";
import dynamic from "next/dynamic";
import StoryPageMain from "../storypage/story-page-main";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getBook = async (bookId: string) => {
  const { data } = await axios.get(`http://127.0.0.1:5000/story/${bookId}`);
  return data;
};

export default function DisplayInfo() {
  const Description = dynamic(() => import("./Description"), { ssr: false });

  const searchParams = useSearchParams();
  const book_id = searchParams.get("book_id");

  const {
    data: book,
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["story", book_id],
    queryFn: () => getBook(book_id),
    enabled: false,
  });

  useEffect(() => {
    if (book_id) {
      refetch();
    }
  }, [book_id]);

  console.log("book", book);

  return (
    <div className="flex flex-col">
      <ViewBasic />
      <Description
        isPending={isPending}
        isError={isError}
        data={book}
        error={error}
        refetch={refetch}
      />
      <StoryPageMain
        winner={book?.records.pages.winner}
        ongoing={book?.records.pages.ongoing}
        isLoading={isLoading}
        refetch={refetch}
        state={book?.records.state}
      />
      <div className="w-full m-4">
        <CommentSection />
      </div>
    </div>
  );
}

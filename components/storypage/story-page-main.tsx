"use client";

import React from "react";
import StoryPagePrimary from "./story-page-primary";
import StoryPageSecondary from "./story-page-secondary";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getBook = async (bookId: string) => {
  const { data } = await axios.get(`http://127.0.0.1:5000/story/${bookId}`);
  return data;
};

const StoryPageMain = () => {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("book_id");

  const {
    data: book,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () => getBook(bookId),
    enabled: !!bookId,
  });

  console.log(book);

  return <div></div>;
};

export default StoryPageMain;

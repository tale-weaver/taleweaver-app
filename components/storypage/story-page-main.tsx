"use client";

import { useEffect } from "react";
import StoryPagePrimary from "./story-page-primary";
import StoryPageSecondary from "./story-page-secondary";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { PageType } from "@/types/page";

const getBook = async (bookId: string) => {
  const { data } = await axios.get(`http://127.0.0.1:5000/story/${bookId}`);
  return data;
};

const StoryPageMain = () => {
  const searchParams = useSearchParams();
  const book_id = searchParams.get("book_id");

  const {
    data: book,
    isLoading,
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

  return (
    <>
      <section className="mt-8">
        <StoryPagePrimary
          pages={book?.records.pages.winner as PageType[]}
          book_status={book?.records.state}
          isLoading={isLoading}
        />
      </section>
      <section className="my-8">
        <StoryPageSecondary
          pages={book?.records.pages.ongoing as PageType[]}
          book_status={book?.records.state}
          isLoading={isLoading}
          refetch={refetch}
        />
      </section>
    </>
  );
};

export default StoryPageMain;

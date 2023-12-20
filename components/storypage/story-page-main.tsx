"use client";

import StoryPagePrimary from "./story-page-primary";
import StoryPageSecondary from "./story-page-secondary";

import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import type { PageType } from "@/types/page";

type Props = {
  winner: PageType[];
  ongoing: PageType[];
  state: string;
  isLoading: boolean;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
};

const StoryPageMain = ({
  winner = [],
  ongoing = [],
  isLoading = true,
  state = "submitting",
  refetch,
}: Props) => {
  return (
    <>
      <section className="mt-8">
        <StoryPagePrimary
          pages={winner as PageType[]}
          book_status={state}
          isLoading={isLoading}
        />
      </section>
      <section className="my-8">
        <StoryPageSecondary
          pages={ongoing as PageType[]}
          book_status={state}
          isLoading={isLoading}
          refetch={refetch}
        />
      </section>
    </>
  );
};

export default StoryPageMain;

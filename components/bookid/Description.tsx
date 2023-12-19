"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Upload } from "lucide-react";
import Countdown from "./CountDown";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function Discription({
  setRefetchToggle,
}: {
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const searchParams = useSearchParams();
  const book_id = searchParams.get("book_id");

  const queryStory = async () => {
    const { data } = await axios.get(`http://127.0.0.1:5000/story/${book_id}`);
    return data;
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["story", book_id],
    queryFn: queryStory,
    enabled: !!book_id,
  });
  if (isPending) {
    return (
      <div className="w-full h-8 mt-4 mb-8">
        <Skeleton className="w-full h-full bg-slate-100" />
      </div>
    );
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  } else {
    const records = data.records;
    const timearray: any = records.time_intervals;
    const currentTime = new Date().getTime();
    const intervalStart =
      timearray
        .slice()
        .reverse()
        .find(
          (interval) => currentTime >= new Date(interval.time_stamp).getTime()
        ) || null;
    const intervalEnd =
      timearray
        .slice()
        .find(
          (interval) => currentTime < new Date(interval.time_stamp).getTime()
        ) || null;
    // console.log(intervalStart, intervalEnd);

    const status = intervalStart.status;
    const page_number = intervalStart.round;

    if (status === "submitting") {
      return (
        <div className="w-full mt-4 mb-8">
          <div className="grid grid-cols-6 items-start text-lg font-serif">
            <div className="flex flex-col">
              <div className="">現正投稿中: 第{page_number}頁</div>
              <div className="mb-2">Now Submitting: page {page_number}</div>
              <Countdown
                date={intervalEnd}
                setRefetchToggle={setRefetchToggle}
              />
            </div>
            <div className="self-start pt-2">
              <Link
                href={{
                  pathname: "/storyupload/book_id",
                  query: { book_id: book_id },
                }}
              >
                <Button
                  variant="secondary"
                  className="flex flex-row items-center font-sans"
                >
                  <Upload className="mr-4 h-4 w-4 text-black" />
                  <p>Page Submit</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (status === "voting") {
      return (
        <div className="w-full mt-4 mb-8">
          <div className="flex flex-col justify-start items-start text-lg font-serif">
            <div className="">現正投票中: 第{page_number}頁</div>
            <div className="mb-2">Now Voting: page {page_number}</div>
            <Countdown date={intervalEnd} />
          </div>
        </div>
      );
    } else if (status === "finished") {
      return (
        <div className="w-full mt-4 mb-8">
          <p className="text-lg font-serif">本故事已完結！感謝大家的參與</p>
        </div>
      );
    }
  }
}

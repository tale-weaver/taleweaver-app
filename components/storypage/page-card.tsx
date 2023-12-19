import Image from "next/image";
import { useContext, useState } from "react";
import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";
import type { PageType } from "@/types/page";
import { PageModal } from "./page-modal";
import { Progress } from "@/components/ui/progress";
import { AppContext } from "@/context/AppContext";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  page: PageType;
  refetch?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  page_id?: number;
  is_voting?: boolean;
  allpages?: PageType[];
}

export function PageCard({
  page,
  aspectRatio = "portrait",
  width,
  height,
  refetch,
  page_id = 0,
  is_voting = false,
  allpages = [],
  className,
  ...props
}: PageProps) {
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AppContext);

  const page_votes =
    page.voted_by_user_ids.length * 10 > 100
      ? 100
      : page.voted_by_user_ids.length * 10;

  console.log("user_id", user?.record._id);
  console.log("page_voters", page.voted_by_user_ids);

  const is_user_voted = page.voted_by_user_ids.includes(user?.record._id || 0);

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        {isLoading && (
          <Skeleton
            className={cn(
              `h-[${height}px] w-[${width}px]`,
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        )}
        <PageModal
          page_id={page_id}
          is_voting={is_voting}
          allpages={allpages}
          refetch={refetch}
        >
          <div className="relative">
            <Image
              src={page.pageurl}
              alt={page.pagename}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105 duration-500 cursor-pointer",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => setLoading(false)}
              // loading="lazy"
              priority
            />
            {is_voting && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <Progress
                  className={`w-[${width * 0.6}px] h-1 bg-slate-200`}
                  title={is_user_voted ? "bg-yellow-700" : "bg-black"}
                  value={page_votes}
                />
              </div>
            )}
          </div>
        </PageModal>
      </div>
      <div className="space-y-1 text-sm w-full">
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </>
        ) : (
          <>
            <h3 className="block font-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
              {page.pagename}
            </h3>
            <p className="text-xs text-muted-foreground">{page.creator}</p>
          </>
        )}
      </div>
    </div>
  );
}

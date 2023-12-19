import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";
import type { PageType } from "@/types/page";
import { PageModal } from "./page-modal";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  page: PageType;
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
  page_id = 0,
  is_voting = false,
  allpages = [],
  className,
  ...props
}: PageProps) {
  const [isLoading, setLoading] = useState(true);
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
        <PageModal page_id={page_id} is_voting={is_voting} allpages={allpages}>
          <Image
            src={page.pageurl}
            alt={page.pagename}
            width={width}
            height={height}
            className={cn(
              "relative h-auto w-auto object-cover transition-all hover:scale-105 duration-500 cursor-pointer",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setLoading(false)}
            // loading="lazy"
            priority
          />
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

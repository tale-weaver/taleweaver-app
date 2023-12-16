import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";
import { PagePreview } from "@/types/page";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  page: PagePreview;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function PageCard({
  page,
  aspectRatio = "portrait",
  width,
  height,
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
        <Image
          src={page.image}
          alt={page.title}
          width={width}
          height={height}
          className={cn(
            "relative h-auto w-auto object-cover transition-all hover:scale-105 duration-500 cursor-pointer",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
      </div>
      <div className="space-y-1 text-sm w-full">
        <h3 className="block font-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
          {page.title}
        </h3>
        <p className="text-xs text-muted-foreground">{page.creator}</p>
      </div>
    </div>
  );
}

"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageCard } from "./page-card";
import { StoryPageInfo } from "@/data/story-page-info";
import { useState } from "react";
import type { PagePreview } from "@/types/page";

interface StoryPageProps {
  pages?: PagePreview[];
  book_status?: string;
}

const StoryPagePrimary = ({
  book_status = "voting",
  pages = [],
}: StoryPageProps) => {
  const [isProtrait, setIsPortrait] = useState(true);
  const gridColsLiteral = isProtrait
    ? "grid-cols-[repeat(8,_minmax(250px,_1fr))]"
    : "grid-cols-[repeat(12,_minmax(150px,_1fr))]";

  const info =
    book_status === "finished"
      ? StoryPageInfo.finished_primary
      : StoryPageInfo.comfirmed;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {info.title}
          </h2>
          <p className="text-sm text-muted-foreground">{info.description}</p>
        </div>
        {pages.length > 0 && (
          <Button
            variant="secondary"
            onClick={() => setIsPortrait(!isProtrait)}
          >
            {isProtrait ? "Square View" : "Portrait View"}
          </Button>
        )}
      </div>
      <Separator className="my-4" />
      {pages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <p className="text-lg font-semibold text-center">
            {info.nopagesmessage}
          </p>
        </div>
      ) : (
        <div className="relative">
          <ScrollArea>
            <div className={`grid ${gridColsLiteral} gap-x-4 gap-y-8 mb-4`}>
              {pages.map((p, index) => (
                <PageCard
                  key={p.image}
                  page={p}
                  className={isProtrait ? "w-[250px]" : "w-[150px]"}
                  aspectRatio={isProtrait ? "portrait" : "square"}
                  width={isProtrait ? 250 : 150}
                  height={isProtrait ? 330 : 150}
                  page_id={index}
                  is_voting={book_status === "voting"}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      )}
    </>
  );
};

export default StoryPagePrimary;
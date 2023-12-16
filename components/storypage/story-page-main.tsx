"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PageCard } from "./page-card";
import { Pages } from "@/data/pages";
import { useState } from "react";

const StoryPageMain = () => {
  const [isProtrait, setIsPortrait] = useState(true);
  const gridColsLiteral = isProtrait
    ? "grid-cols-[repeat(8,_minmax(250px,_1fr))]"
    : "grid-cols-[repeat(12,_minmax(150px,_1fr))]";

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Submitted Pages
          </h2>
          <p className="text-sm text-muted-foreground">
            See all the pages artists have submitted.
          </p>
          <button onClick={() => setIsPortrait(!isProtrait)}>Toggle</button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className={`grid ${gridColsLiteral} gap-x-4 gap-y-8 mb-4`}>
            {Pages.map((p, index) => (
              <PageCard
                key={p.image}
                page={p}
                className={isProtrait ? "w-[250px]" : "w-[150px]"}
                aspectRatio={isProtrait ? "portrait" : "square"}
                width={isProtrait ? 250 : 150}
                height={isProtrait ? 330 : 150}
                page_id={index}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default StoryPageMain;

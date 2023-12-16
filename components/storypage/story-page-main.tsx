"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PageCard } from "./page-card";
import { Pages } from "@/data/pages";
import { useState } from "react";
import PageVeiwer from "./page-veiwer";

const StoryPageMain = () => {
  const [isProtrait, setIsPortrait] = useState(true);
  const gridColsLiteral = isProtrait
    ? "grid-cols-[repeat(7,_minmax(250px,_1fr))]"
    : "grid-cols-[repeat(10,_minmax(150px,_1fr))]";

  return (
    <div className="border-t">
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              <div className="h-full space-y-6">
                <div className="border-none p-0 outline-none">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Submitted Pages
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        See all the pages artists have submitted.
                      </p>
                      <button onClick={() => setIsPortrait(!isProtrait)}>
                        Toggle
                      </button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea>
                      <div
                        className={`grid ${gridColsLiteral} gap-x-4 gap-y-8`}
                      >
                        {Pages.map((p) => (
                          <PageCard
                            key={p.image}
                            page={p}
                            className={isProtrait ? "w-[250px]" : "w-[150px]"}
                            aspectRatio={isProtrait ? "portrait" : "square"}
                            width={isProtrait ? 250 : 150}
                            height={isProtrait ? 330 : 150}
                            onClick={() => alert(p.description)}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>

                  <PageVeiwer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPageMain;

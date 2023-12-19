import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import type { PageType } from "@/types/page";

interface PageVeiwer extends React.HTMLAttributes<HTMLDivElement> {
  page_id?: number;
  width?: number;
  allpages?: PageType[];
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

export default function PageVeiwer({
  page_id = 0,
  width = 700,
  allpages = [],
  setCurrentPage,
  className,
}: PageVeiwer) {
  const index = useRef(page_id);
  const [props, api] = useSprings(
    allpages.length,
    (i) => ({
      x: i * width,
      scale: 1,
      display: "block",
    }),
    [width]
  );

  useEffect(() => {
    api.start((i) => {
      if (i < index.current - 1 || i > index.current + 1) {
        return { display: "none" };
      }
      const x = (i - index.current) * width;
      const scale = 1;
      return { x, scale, display: "block" };
    });
  }, []);

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          allpages.length - 1
        );
        setCurrentPage(index.current);
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1) {
          return { display: "none" };
        }
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - distance / width / 1 : 1;
        return { x, scale, display: "block" };
      });
    }
  );
  return (
    <div
      className={cn(
        "w-[700px] h-[80vh] overflow-hidden relative box-border",
        className
      )}
    >
      <div className="w-[700px] h-[80vh] absolute">
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className="absolute w-full h-full will-change-transform"
            {...bind()}
            key={i}
            style={{ display, x }}
          >
            <animated.div
              className="touch-none bg-cover bg-no-repeat bg-center rounded-xl w-full h-full will-change-transform shadow-[0_62.5px_125px_-25px_rgba(50,50,73,0.5),0_37.5px_75px_-37.5px_rgba(0,0,0,0.6)]"
              style={{
                scale,
                backgroundImage: `url(${allpages[i].pageurl})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">
                      {allpages[i].pagename}
                    </h2>
                    <p className="text-xs text-white mb-4">
                      {allpages[i].creator}
                    </p>
                    <p className="text-ms text-white italic font-serif">
                      {allpages[i].description}
                    </p>
                  </div>
                </div>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

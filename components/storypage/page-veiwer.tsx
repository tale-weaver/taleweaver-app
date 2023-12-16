import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";
import { Pages } from "@/data/pages";

export default function PageVeiwer() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    Pages.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          Pages.length - 1
        );
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
    <div className="my-20 w-[250px] h-[330px] overflow-hidden relative">
      <div ref={ref} className="w-[250px] h-[330px] absolute">
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className="absolute w-[250px] h-[330px] will-change-transform"
            {...bind()}
            key={i}
            style={{ display, x }}
          >
            <animated.div
              className="touch-none bg-cover bg-no-repeat bg-center w-[250px] h-[330px] will-change-transform shadow-[0_62.5px_125px_-25px_rgba(50,50,73,0.5),0_37.5px_75px_-37.5px_rgba(0,0,0,0.6)]"
              style={{
                scale,
                backgroundImage: `url(${Pages[i].image})`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

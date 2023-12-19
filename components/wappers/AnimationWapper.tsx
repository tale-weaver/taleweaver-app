"use client";

import { AnimatePresence, motion } from "framer-motion";

const AnimationWapper = ({
  children,
  inital = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={inital}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWapper;

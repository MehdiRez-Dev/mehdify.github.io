"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";

const orentaionInitial = {
  x: { x: -50, y: 0 },
  reverseX: { x: 50, y: 0 },
  longX: { x: -100, y: 0 },
  reverseLongX: { x: 100, y: 0 },
  y: { y: 50, x: 0 },
  reverseY: { y: -50, x: 0 },
  longY: { y: 100, x: 0 },
  reverseLongY: { y: -100, x: 0 },
};

const AnimationDiv = ({
  children,
  delay = 0,
  orentaion = "y",
  ...props
}: {
  children: ReactNode;
  delay?: number;
  orentaion?: keyof typeof orentaionInitial;
} & MotionProps &
  HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        offscreen: {
          ...orentaionInitial[orentaion],
          opacity: 0,
        },
        onscreen: {
          y: 0,
          x: 0,
          opacity: 100,
          transition: {
            // type: "spring",
            // bounce: 0.5,
            duration: 0.6,
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;

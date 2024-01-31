import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";
import webapp from "@pub/webApp.png";

const WebApps = () => {
  return (
    <div className={"flex w-full h-full bg-background tracking-widest"}>
      <div className="flex-1 flex flex-col gap-24">
        <AnimationDiv>
          <Image
            src={webapp}
            className="rounded-xl"
            alt=""
            width={500}
            height={500}
          />
        </AnimationDiv>
        <AnimationDiv delay={0.2}>
          <p className="text-7xl">Web</p>
          <p className="text-7xl">App</p>
        </AnimationDiv>
      </div>
      <div className="flex-1 bg-[#f6f6f6] dark:bg-background rounded-xl flex items-center justify-center px-24 text-justify text-2xl font-medium">
        <AnimationDiv orentaion="reverseX" delay={0.3}>
          <p className="">
            I led the creation of an innovative web app, blending dynamic design
            with seamless functionality for a user-centric experience. The
            robust architecture anticipates evolving needs, ensuring efficient
            data management and real-time interactions.
          </p>
        </AnimationDiv>
      </div>
    </div>
  );
};

export default WebApps;

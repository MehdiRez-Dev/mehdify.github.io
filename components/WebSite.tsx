import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";

const WebSite = () => {
  return (
    <div className={"flex w-full h-full bg-background tracking-widest"}>
      <div className="flex-1 flex flex-col gap-24">
        <AnimationDiv orentaion="reverseY">
          <p className="text-7xl">Web</p>
          <p className="text-7xl">Site</p>
        </AnimationDiv>
        <AnimationDiv orentaion="reverseLongY" delay={0.2}>
          <Image
            src={"./website.png"}
            className="rounded-xl"
            alt=""
            width={500}
            height={500}
          />
        </AnimationDiv>
      </div>
      <div className="flex-1 bg-[#f6f6f6] dark:bg-background rounded-xl flex items-center justify-center px-24 text-justify text-2xl font-medium">
        <AnimationDiv orentaion="reverseX" delay={0.3}>
          <p className="">
            I spearheaded the development of a modern website, emphasizing a
            user-centric design and robust architecture. Through iterative
            development and user feedback, the site showcases our commitment to
            innovation, delivering a streamlined and engaging digital
            experience.
          </p>
        </AnimationDiv>
      </div>
    </div>
  );
};

export default WebSite;

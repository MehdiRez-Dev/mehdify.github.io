import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";

const Background = () => {
  return (
    <div className={"flex w-full h-full bg-background tracking-widest"}>
      <div className="flex-1 flex flex-col font-medium justify-center">
        <AnimationDiv>
          <p className="text-6xl">Background</p>
        </AnimationDiv>
        <AnimationDiv delay={0.1}>
          <p className="text-xl font-bold mt-12">Taraz Pouyesh Co.</p>
        </AnimationDiv>
        <AnimationDiv delay={0.15}>
          <p>Fullstack Developer, 2021-2023</p>
        </AnimationDiv>
        <AnimationDiv delay={0.2}>
          <p>Frontend Developer, 2020-2021</p>
        </AnimationDiv>
        <AnimationDiv delay={0.25}>
          <p className="text-xl font-bold mt-12">Scinito Co.</p>
        </AnimationDiv>
        <AnimationDiv delay={0.3}>
          <p>Fullstack Developer, 2022-2023</p>
        </AnimationDiv>
        <AnimationDiv delay={0.35}>
          <p className="text-xl font-bold mt-12">
            Freelance Fullstack Developer, 2023-Present
          </p>
        </AnimationDiv>

        <AnimationDiv delay={0.4}>
          <p className="text-xl font-bold mt-12">Educations :</p>
        </AnimationDiv>
        <AnimationDiv delay={0.45}>
          <p>Azad University, 2023-Present</p>
        </AnimationDiv>
        <AnimationDiv delay={0.5}>
          <p>Mehregan Academy, 2022-2023</p>
        </AnimationDiv>
        <AnimationDiv delay={0.55}>
          <p>Emam Reza High-School, 2014-2018</p>
        </AnimationDiv>
      </div>
      <div className="flex-1 flex items-center justify-start">
        <AnimationDiv orentaion="reverseLongX" delay={0.15}>
          <Image
            className="rounded-xl"
            src={"./writing.jpg"}
            width={500}
            height={500}
            alt=""
          />
        </AnimationDiv>
      </div>
    </div>
  );
};

export default Background;

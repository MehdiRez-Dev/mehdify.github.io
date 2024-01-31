import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";

const About = () => {
  return (
    <div className={"flex w-full h-full bg-background tracking-widest"}>
      <div className="flex-1 flex flex-col">
        <AnimationDiv orentaion="x">
          <p className="text-2xl font-medium">BIO</p>
        </AnimationDiv>
        <div className="flex-1 flex items-center justify-center">
          <AnimationDiv orentaion="longX" delay={0.2}>
            <Image
              className="rounded-xl"
              src={"/coding.jpg"}
              width={500}
              height={500}
              alt=""
            />
          </AnimationDiv>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-justify pr-12">
        <AnimationDiv delay={0.3}>
          <p className="text-[47px] font-normal">
            FullStack Alchemist of Digital Innovation.
          </p>
        </AnimationDiv>
        <div className="flex flex-col gap-8 mt-10">
          <AnimationDiv delay={0.4}>
            <p>
              Experienced Full Stack Developer with 3 years in web development.
              Proven track record of delivering scalable web applications.
              Collaborative team player committed to innovative and high-quality
              solutions.
            </p>
          </AnimationDiv>
          <AnimationDiv delay={0.5}>
            <p>
              In my career, I&apos;ve had the privilege of contributing to a
              variety of projects, collaborating with cross-functional teams to
              deliver innovative solutions. From e-commerce platforms to
              data-driven applications, I&apos;ve tackled challenges head-on,
              always with an eye for efficiency, scalability, and user
              satisfaction.
            </p>
          </AnimationDiv>
        </div>
      </div>
    </div>
  );
};

export default About;

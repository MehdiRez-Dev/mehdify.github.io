import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";
import js from "@pub/icons/js.svg";
import ts from "@pub/icons/ts.svg";
import react from "@pub/icons/react.svg";
import next from "@pub/icons/next.svg";
import node from "@pub/icons/node.svg";
import express from "@pub/icons/express.svg";
import nest from "@pub/icons/nest.svg";
import bootstrap from "@pub/icons/bootstrap.svg";
import tailwind from "@pub/icons/tailwind.svg";
import socket from "@pub/icons/socket.io.svg";
import prisma from "@pub/icons/prisma.svg";
import nx from "@pub/icons/nx.svg";
import yarn from "@pub/icons/yarn.svg";
import npm from "@pub/icons/npm.svg";
import vite from "@pub/icons/vite.svg";
import vs from "@pub/icons/vs.svg";

const Expertise = () => {
  return (
    <div
      className={
        "flex flex-col w-full h-full bg-background tracking-widest gap-24"
      }
    >
      <AnimationDiv>
        <p className="text-5xl font-normal w-full">Expertise</p>
      </AnimationDiv>
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col gap-20">
          <div className="w-full h-full flex flex-col justify-start items-start gap-2">
            <AnimationDiv delay={0.1}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={256}
                  height={56}
                  src={js}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={256}
                  height={56}
                  src={ts}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={171}
                  height={56}
                  src={react}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={155}
                  height={56}
                  src={next}
                  alt=""
                />
              </div>
            </AnimationDiv>
            <AnimationDiv delay={0.2}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={200}
                  height={56}
                  src={node}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={244}
                  height={56}
                  src={express}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={171}
                  height={56}
                  src={nest}
                  alt=""
                />
              </div>
            </AnimationDiv>
            <AnimationDiv delay={0.2}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={262}
                  height={56}
                  src={bootstrap}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={276}
                  height={56}
                  src={tailwind}
                  alt=""
                />
              </div>
            </AnimationDiv>
            <AnimationDiv delay={0.3}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={234}
                  height={56}
                  src={socket}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={192}
                  height={56}
                  src={prisma}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={126}
                  height={56}
                  src={nx}
                  alt=""
                />
              </div>
            </AnimationDiv>
            <AnimationDiv delay={0.4}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={161}
                  height={56}
                  src={yarn}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={146}
                  height={56}
                  src={npm}
                  alt=""
                />
                <Image
                  className="rounded-xl"
                  width={151}
                  height={56}
                  src={vite}
                  alt=""
                />
              </div>
            </AnimationDiv>
            <AnimationDiv delay={0.5}>
              <div className="flex justify-center gap-4">
                <Image
                  className="rounded-xl"
                  width={361}
                  height={56}
                  src={vs}
                  alt=""
                />
              </div>
            </AnimationDiv>
          </div>
        </div>
        <div className="flex-1 px-24 flex items-end justify-center pb-24">
          <AnimationDiv delay={0.2}>
            <p className="text-justify font-medium text-xl">
              With a versatile skill set, I bring proficiency in front-end
              technologies such as React.js and responsive design. My expertise
              extends to back-end development using Node.js and Express.js,
              ensuring robust server-side solutions. I&apos;m adept at working
              with databases like MongoDB and MySQL, and I&apos;m well-versed in
              JavaScript and TypeScript. Additionally, I excel in creating
              visually appealing user interfaces through frameworks like
              Tailwind CSS and Bootstrap, demonstrating a comprehensive approach
              to web development. My skills include project management,
              strategic problem-solving, and a commitment to delivering
              innovative and scalable solutions.
            </p>
          </AnimationDiv>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

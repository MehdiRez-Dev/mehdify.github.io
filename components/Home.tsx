import { cn } from "@/lib/utils";
import React from "react";
import AnimationDiv from "./animationDiv";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import home from "@pub/home.jpg";

const bogart = localFont({
  src: "../public/fonts/bogart/Bogart-Regular-trial.ttf",
});

const Home = () => {
  return (
    <div
      className={
        "flex w-full h-full bg-[#f6f6f6] dark:bg-background tracking-widest"
      }
    >
      <div className="flex-1 flex flex-col items-center justify-center uppercase px-20 ">
        <AnimationDiv>
          <p className="text-xl mb-16">Portfolio</p>
        </AnimationDiv>

        <AnimationDiv delay={0.2}>
          <div
            className={cn(
              bogart.className,
              "text-[133px] text-center flex flex-col leading-[135px]"
            )}
          >
            <p>Mehdi</p>
            <p>Rezaei</p>
          </div>
        </AnimationDiv>
        <AnimationDiv delay={0.3}>
          <p className="mt-4 normal-case text-sm">
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </p>
        </AnimationDiv>

        <div className="flex items-center justify-between w-full mt-32 text-xl">
          <AnimationDiv className="w-1/2" delay={0.5}>
            <p className="w-full text-center">fullstack developer</p>
          </AnimationDiv>
          <div className="w-1/2 text-center">
            <AnimationDiv delay={0.55}>
              <Link
                download
                target="_blank"
                href="/resume.pdf"
                className="border-b-2 border-gray-700 w-[120px] cursor-pointer inline-block"
              >
                Resume
              </Link>
            </AnimationDiv>
            {/* <AnimationDiv delay={0.55}>
              <Link
                href="#Contact"
                className="border-b-2 border-gray-700 w-[120px] cursor-pointer inline-block"
              >
                email me
              </Link>
            </AnimationDiv> */}
          </div>
        </div>
      </div>
      <div className="w-1/3 overflow-hidden">
        <div className="w-full h-full relative">
          <Image src={home} alt="" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;

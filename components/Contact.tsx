import Image from "next/image";
import React from "react";
import AnimationDiv from "./animationDiv";
import me from "@pub/me.jpg";

const Contact = () => {
  return (
    <div className={"flex w-full h-full bg-background tracking-widest"}>
      <div className="flex-1 flex flex-col gap-6">
        <AnimationDiv>
          <p className="text-8xl">Work We Me</p>
        </AnimationDiv>
        <AnimationDiv delay={0.1}>
          <Image
            className="my-auto rounded-xl"
            width={500}
            height={720}
            src={me}
            alt=""
          />
        </AnimationDiv>
      </div>
      <div className="flex-1 flex flex-col gap-12 justify-center">
        <div className="flex flex-col gap-4">
          <AnimationDiv delay={0.2}>
            <p className="text-xl">Address</p>
          </AnimationDiv>
          <AnimationDiv delay={0.25}>
            <p className="text-2xl">Esfahan, Esfahan Iran</p>
          </AnimationDiv>
        </div>
        <div className="flex flex-col gap-4">
          <AnimationDiv delay={0.3}>
            <p className="text-xl">Phone</p>
          </AnimationDiv>
          <AnimationDiv delay={0.35}>
            <p className="text-2xl">+98916-432-5523</p>
          </AnimationDiv>
        </div>
        <div className="flex flex-col gap-4">
          <AnimationDiv delay={0.4}>
            <p className="text-xl">Email</p>
          </AnimationDiv>
          <AnimationDiv delay={0.45}>
            <p className="text-2xl">its.mehdirezaei@gmail.com</p>
          </AnimationDiv>
        </div>
      </div>
    </div>
  );
};

export default Contact;

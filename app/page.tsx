"use client";
import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Home from "@/components/Home";
import WebApps from "@/components/WebApps";
import WebSite from "@/components/WebSite";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function App() {
  return (
    <main className="flex flex-col h-screen min-h-screen bg-background min-w-full">
      <div className="overflow-auto flex flex-col h-full font-medium">
        <Container id="Home" paddingPage={false}>
          <Home />
        </Container>

        <Separator />
        <Container id="Bio">
          <About />
        </Container>

        <Separator />
        <Container id="Background">
          <Background />
        </Container>

        <Separator />
        <Container id="Expertise">
          <Expertise />
        </Container>

        <Separator />
        <Container id="WebApp">
          <WebApps />
        </Container>

        <Separator />
        <Container id="WebSite">
          <WebSite />
        </Container>

        <Separator />
        <Container id="Contact">
          <Contact />
        </Container>
      </div>
    </main>
  );

  function Container({
    children,
    paddingPage = true,
    id,
  }: {
    children: ReactNode;
    id?: string;
    paddingPage?: boolean;
  }) {
    return (
      <div
        id={id}
        className={cn("h-full min-h-full relative", paddingPage && "p-28")}
      >
        {children}
      </div>
    );
  }
}

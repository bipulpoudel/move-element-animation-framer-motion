"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Lamp from "@/components/landing/hero/lamp";
import Books from "./books";
import { cn } from "@/lib/utils";
import HomeUI from "./home-ui";
import AIImageEditor from "./ai-image-editor";
import TextEditor from "./text-editor";

const HeroSection = () => {
  const onClickGetStarted = () => {
    console.log("Get Started");
  };
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center w-full bg-hero-background pt-48 pb-32">
        <Lamp />
        <Books />
        <AIImageEditor />
        <TextEditor />
        <div className="flex flex-col gap-10 w-full max-w-6xl items-center justify-center">
          <h1 className="text-primary-foreground text-9xl font-light text-center leading-[6.5rem]">
            Create a website without limits
          </h1>

          <p className="text-primary-foreground text-2xl font-light text-center max-w-xl">
            Bring your vision to life with the website builder that gives you
            the tools you need to succeed.
          </p>

          <div className="flex flex-col gap-3">
            <button
              className="flex items-center justify-center gap-3 bg-hero-button-background text-hero-button-foreground font-medium px-6 pr-4 py-4 rounded-full shadow-lg text-2xl"
              onClick={onClickGetStarted}
            >
              Get Started
              <ArrowRight />
            </button>

            <span className="text-primary-foreground text-sm font-light">
              Start for free. No credit card required.
            </span>
          </div>

          <HomeUI
            content={
              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col justify-between h-full">
                  <div className="w-full aspect-square bg-red-500">
                    Lamp target div
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="w-full h-28 bg-green-500">
                      Text target div
                    </div>
                    <div className="flex flex-col gap-5">
                      <h3 className="text-hero-homeUI-foreground text-2xl font-normal">
                        Forward-Thinking Design. Sustainable Craftsmanship.
                      </h3>

                      <button className="py-1 text-hero-homeUI-foreground border border-hero-homeUI-foreground rounded-full w-full uppercase font-semibold flex gap-5 justify-center">
                        Shop new collection
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 relative h-[60vh]">
                  <Image
                    src="/home-ui-image.avif"
                    fill
                    alt="Lamp"
                    className="rounded-2xl"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <div className="w-full aspect-square bg-red-500">
                    AI editor target div
                  </div>

                  <h3 className="text-hero-homeUI-foreground text-2xl font-normal">
                    Consult with our AI image editor
                    <ArrowRight className="w-6 h-6 ml-2 inline-block" />
                  </h3>
                  <div className="w-full bg-green-500">Books target div</div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const NavItem = ({
  text,
  isActive = false,
}: {
  text: string;
  isActive?: boolean;
}) => {
  return (
    <span
      className={cn(
        "font-extrabold text-lg",
        isActive
          ? "bg-hero-homeUI-foreground rounded-full py-[2px] px-4 text-hero-homeUI-background"
          : "text-hero-homeUI-foreground font-semibold"
      )}
    >
      {text}
    </span>
  );
};

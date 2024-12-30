"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import Lamp from "@/components/landing/hero/lamp";
import Books from "./books";
import { cn } from "@/lib/utils";
import HomeUI from "./home-ui";
import AIImageEditor from "./ai-image-editor";
import TextEditor from "./text-editor";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lampTargetRef = useRef<HTMLDivElement>(null);
  const bookTargetRef = useRef<HTMLDivElement>(null);
  const aiImageTargetRef = useRef<HTMLDivElement>(null);
  const textEditorTargetRef = useRef<HTMLDivElement>(null);

  const onClickGetStarted = () => {
    console.log("Get Started");
  };
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center w-full bg-hero-background pt-48 pb-32"
    >
      {lampTargetRef && (
        <Lamp scrollYProgress={scrollYProgress} targetRef={lampTargetRef} />
      )}

      {bookTargetRef && (
        <Books scrollYProgress={scrollYProgress} targetRef={bookTargetRef} />
      )}

      {aiImageTargetRef && (
        <AIImageEditor
          scrollYProgress={scrollYProgress}
          targetRef={aiImageTargetRef}
        />
      )}

      {textEditorTargetRef && (
        <TextEditor
          scrollYProgress={scrollYProgress}
          targetRef={textEditorTargetRef}
        />
      )}

      <div className="flex flex-col gap-10 w-full max-w-6xl items-center justify-center">
        <h1 className="text-primary-foreground text-9xl font-light text-center leading-[6.5rem]">
          Create a website without limits
        </h1>

        <p className="text-primary-foreground text-2xl font-light text-center max-w-xl">
          Bring your vision to life with the website builder that gives you the
          tools you need to succeed.
        </p>

        <div className="flex flex-col gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-hero-button-background text-hero-button-foreground font-medium px-6 pr-4 py-4 rounded-full shadow-lg text-2xl"
            onClick={onClickGetStarted}
          >
            Get Started
            <ArrowRight />
          </motion.button>

          <span className="text-primary-foreground text-sm font-light">
            Start for free. No credit card required.
          </span>
        </div>

        <HomeUI
          content={
            <div className="grid grid-cols-4 gap-5">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full aspect-square" ref={lampTargetRef} />
                <div className="flex flex-col w-full">
                  <div className="w-full h-28" ref={textEditorTargetRef} />
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
              <div>
                <div ref={aiImageTargetRef} className="w-full aspect-square" />

                <h3 className="text-hero-homeUI-foreground text-2xl font-normal mt-10">
                  Consult with our AI image editor
                  <ArrowRight className="w-6 h-6 ml-2 inline-block" />
                </h3>
                <div ref={bookTargetRef} className="w-full" />
              </div>
            </div>
          }
        />
      </div>
    </motion.div>
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

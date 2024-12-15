"use client";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Books = () => {
  return (
    <div className="flex flex-col absolute right-20 h-36 w-48 top-32 border-2 border-hero-editBorder z-10">
      <div>
        {/* Corner Dots */}
        <CornerDot position="top-left" />
        <CornerDot position="top-right" />
        <CornerDot position="bottom-left" />
        <CornerDot position="bottom-right" />

        {/* Edge Dots */}
        <CornerDot position="top" />
        <CornerDot position="bottom" />
        <CornerDot position="left" />
        <CornerDot position="right" />
      </div>

      {/* Label */}
      <span className="absolute left-1 -top-4 h-4 bg-hero-editBorder px-4 text-xs text-primary-foreground z-9">
        Transparent video
      </span>

      {/* Image */}
      <Image
        src="/books.png"
        fill
        alt="Lamp"
        objectFit="cover"
        className="p-3"
      />
    </div>
  );
};

export default Books;

const CornerDot = ({
  position,
}: {
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top"
    | "bottom"
    | "left"
    | "right";
}) => {
  const positionClass = {
    "top-left": "-top-1.5 -left-1.5",
    "top-right": "-top-1.5 -right-1.5",
    "bottom-left": "-bottom-1.5 -left-1.5",
    "bottom-right": "-bottom-1.5 -right-1.5",
    top: "-top-1.5 left-1/2 transform -translate-x-1/2",
    bottom: "-bottom-1.5 left-1/2 transform -translate-x-1/2",
    left: "top-1/2 -left-1.5 transform -translate-y-1/2",
    right: "top-1/2 -right-1.5 transform -translate-y-1/2",
  };

  return (
    <div
      className={cn(
        "w-2.5 h-2.5 rounded-full bg-hero-editBorder absolute flex items-center justify-center z-[8]",
        positionClass[position]
      )}
    >
      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
    </div>
  );
};

"use client";
import { Sparkle } from "lucide-react";

import { cn } from "@/lib/utils";

const AIImageEditor = () => {
  return (
    <div
      className={cn(
        "flex flex-col absolute shadow-md z-10 right-20 top-[45vh] bg-white bg-opacity-70 rounded-2xl"
      )}
    >
      <img
        src="/hero-2.jpg"
        alt="Lamp"
        className="object-contain w-72 p-3 rounded-3xl"
      />
      <span className="w-8 h-8 rounded-full bg-white  bg-opacity-80 flex items-center justify-center z-10 absolute right-5 bottom-5">
        <Sparkle className="w-5 h-5" />
      </span>
    </div>
  );
};

export default AIImageEditor;

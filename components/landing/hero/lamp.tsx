"use client";
import { cn } from "@/lib/utils";

const Lamp = () => {
  return (
    <div
      className={cn(
        "flex flex-col absolute shadow-md z-10 left-20 bg-white bg-opacity-70 rounded-2xl"
      )}
    >
      <img
        src="/lamp.avif"
        alt="Lamp"
        className="object-cover w-72 p-3 rounded-3xl"
      />
      <p className="bg-white bg-opacity-80 px-4 py-1 text-sm rounded-full w-fit absolute bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        Nordar Lamp $84.00
      </p>
    </div>
  );
};

export default Lamp;

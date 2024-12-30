"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Books = ({
  targetRef,
  scrollYProgress,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    targetX: 0,
    targetY: 0,
    targetWidth: 0,
    initialWidth: 0,
  });

  const calculatePosition = useCallback(() => {
    if (targetRef.current && contentRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();

      setPosition({
        targetX: targetRect.left - contentRect.left,
        targetY: targetRect.top - contentRect.top,
        targetWidth: targetRect.width,
        initialWidth: contentRect.width,
      });
    }
  }, [targetRef]);

  // Calculate the initial position of the lamp
  useEffect(() => {
    calculatePosition();

    const handleResize = () => {
      calculatePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Map scroll progress to horizontal and vertical movement
  const x = useTransform(scrollYProgress, [0, 0.8], [0, position.targetX]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, position.targetY]);

  const borderWidth = useTransform(scrollYProgress, [0, 0.8], [2, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      className="flex flex-col absolute right-20 h-36 w-48 top-40 border-2 border-hero-editBorder z-10"
      style={{ x, y, borderWidth }}
      ref={contentRef}
    >
      <motion.div style={{ opacity }}>
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
      </motion.div>

      {/* Label */}
      <motion.span
        className="absolute left-1 -top-4 h-4 bg-hero-editBorder px-4 text-xs text-primary-foreground z-9"
        style={{ opacity }}
      >
        Transparent video
      </motion.span>

      {/* Image */}
      <Image
        src="/books.png"
        fill
        alt="Lamp"
        objectFit="cover"
        className="p-3"
      />
    </motion.div>
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

"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { Sparkle } from "lucide-react";

import { cn } from "@/lib/utils";

const AIImageEditor = ({
  scrollYProgress,
  targetRef,
}: {
  scrollYProgress: MotionValue<number>;
  targetRef: React.RefObject<HTMLDivElement | null>;
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
        targetX: targetRect.right - contentRect.right,
        targetY: targetRect.top - contentRect.top,
        targetWidth: targetRect.width,
        initialWidth: contentRect.width,
      });
    }
  }, [targetRef, contentRef]);

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

  const width = useTransform(
    scrollYProgress,
    [0, 0.8],
    [300, position.targetWidth]
  );

  const padding = useTransform(scrollYProgress, [0, 0.8], [8, 0]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.8], [24, 16]);

  return (
    <motion.div
      className={cn(
        "flex flex-col absolute shadow-md z-10 right-20 top-[45vh] bg-white bg-opacity-70"
      )}
      style={{ x, y, width, borderRadius }}
      ref={contentRef}
    >
      <motion.img
        src="/hero-2.jpg"
        alt="Lamp"
        style={{ padding, borderRadius }}
        className="object-contain"
      />
      <span className="w-8 h-8 rounded-full bg-white  bg-opacity-80 flex items-center justify-center z-10 absolute right-5 bottom-5">
        <Sparkle className="w-5 h-5" />
      </span>
    </motion.div>
  );
};

export default AIImageEditor;

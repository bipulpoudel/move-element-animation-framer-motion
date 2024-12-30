"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const Lamp = ({
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

  const width = useTransform(
    scrollYProgress,
    [0, 0.9],
    [288, position.targetWidth]
  );

  const padding = useTransform(scrollYProgress, [0, 0.9], [8, 0]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.9], [24, 16]);

  return (
    <motion.div
      className={cn(
        "flex flex-col absolute shadow-md z-10 left-20 bg-white bg-opacity-70"
      )}
      style={{ x, y, width, borderRadius }}
      ref={contentRef}
    >
      <motion.img
        src="/lamp.avif"
        alt="Lamp"
        style={{ padding, borderRadius }}
        className="object-cover"
      />
      <p className="bg-white bg-opacity-80 px-4 py-1 text-sm rounded-full w-fit absolute bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        Nordar Lamp $84.00
      </p>
    </motion.div>
  );
};

export default Lamp;

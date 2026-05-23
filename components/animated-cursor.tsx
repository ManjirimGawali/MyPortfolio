"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const outlineSpringConfig = { damping: 20, stiffness: 300 };
  const outlineXSpring = useSpring(cursorX, outlineSpringConfig);
  const outlineYSpring = useSpring(cursorY, outlineSpringConfig);

  const isHovering = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="cursor-outline hidden lg:block"
        style={{
          x: outlineXSpring,
          y: outlineYSpring,
        }}
      />
    </>
  );
}

"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right" | "stagger-fade-up";
  delay?: number;
  duration?: number;
  triggerStart?: string;
  staggerSelector?: string;
  staggerAmount?: number;
  className?: string;
}

export default function GSAPReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  triggerStart = "top 85%",
  staggerSelector,
  staggerAmount = 0.15,
  className = "",
}: GSAPRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const config = {
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          toggleActions: "play none none none",
        },
        duration,
        delay,
        ease: "power3.out",
      };

      if (animation === "fade-up") {
        gsap.fromTo(el, 
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ...config }
        );
      } else if (animation === "fade-in") {
        gsap.fromTo(el, 
          { opacity: 0 },
          { opacity: 1, ...config }
        );
      } else if (animation === "scale-in") {
        gsap.fromTo(el, 
          { scale: 0.93, opacity: 0 },
          { scale: 1, opacity: 1, ...config }
        );
      } else if (animation === "slide-left") {
        gsap.fromTo(el, 
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, ...config }
        );
      } else if (animation === "slide-right") {
        gsap.fromTo(el, 
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, ...config }
        );
      } else if (animation === "stagger-fade-up" && staggerSelector) {
        const targets = el.querySelectorAll(staggerSelector);
        if (targets.length > 0) {
          gsap.fromTo(targets, 
            { y: 45, opacity: 0 },
            { y: 0, opacity: 1, stagger: staggerAmount, ...config }
          );
        }
      }

      // Refresh ScrollTrigger to recalculate DOM heights
      ScrollTrigger.refresh();
    }, el);

    return () => ctx.revert();
  }, [animation, delay, duration, triggerStart, staggerSelector, staggerAmount]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DynamicPageAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.from(".heading", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(".text-block", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text-block",
        start: "top bottom",
        scrub: 2,
      },
    });
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
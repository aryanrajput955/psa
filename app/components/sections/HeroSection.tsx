"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import CloudinaryImage from "../ui/CloudinaryImage";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  heroBg: string;
}

export default function HeroSection({ heroBg }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation timeline on load
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(bgRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.6,
      })
      .from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1.0,
      }, "-=1.1")
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1.0,
      }, "-=0.8")
      .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 1.0,
      }, "-=0.7")
      .from(".hero-btns", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(statsRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.1)",
      }, "-=0.5");

      // 2. Scroll-driven animations using ScrollTrigger
      // Parallax for background image
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for watermark text
      gsap.to(watermarkRef.current, {
        yPercent: -25,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for the stats bar (moves upwards on scroll)
      gsap.to(statsRef.current, {
        y: -40,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, [heroBg]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D1F0F] pb-28 pt-16"
    >
      {/* Full-width High-contrast Action Backplate */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <CloudinaryImage
          src={heroBg}
          alt="Cricket training session at Prakash Sports Academy"
          fill
          className="object-cover object-center opacity-55"
          priority
        />
        {/* Centered linear-to-radial dark forest gradient masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F0F]/80 via-[#0D1F0F]/50 to-[#0D1F0F]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0D1F0F]/80" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 sports-grid-bg pointer-events-none" />
      </div>

      {/* Large watermark text */}
      <div 
        ref={watermarkRef} 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 z-0 font-title font-extrabold text-[8vw] leading-none text-white/5 uppercase select-none tracking-widest text-center w-full whitespace-nowrap pointer-events-none"
      >
        PRAKASH SPORTS
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6">


        <div className="space-y-4">
          <h1 className="hero-title font-title text-4xl sm:text-6xl lg:text-7.5xl font-extrabold text-white tracking-tight leading-[1.02] uppercase">
            Prakash Sports Academy
          </h1>
          <h2 className="hero-subtitle font-title text-base sm:text-xl lg:text-2xl font-bold text-gold tracking-[0.2em] uppercase">
            Building Champions Since 2018
          </h2>
        </div>

        <p className="hero-desc text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Prakash Sports Academy is one of Haridwar&apos;s leading cricket training centers, dedicated to nurturing young talent and developing skilled cricketers through professional coaching, modern training methods, and a performance-driven environment.
        </p>

        <div className="hero-btns flex flex-col sm:flex-row gap-3.5 justify-center pt-4">
          <Button href="/contact?type=join" variant="accent" size="lg">
            Join Academy
          </Button>
          <Button href="/contact?type=trial" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[#0D1F0F] hover:border-white">
            Book a Trial
          </Button>
        </div>
      </div>

      {/* ─── STATS BAR OVERLAP (With GSAP ScrollTrigger Translation) ─── */}
      <div 
        ref={statsRef}
        className="absolute bottom-0 left-1/2 w-[90%] max-w-5xl z-20 translate-y-1/2 -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-[#1B4332] to-[#122B1E] border border-t-2 border-[#2D6A4F]/30 border-t-gold/80 p-1 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#2D6A4F]/30 bg-[#0D1F0F]/30">
            {[
              { value: "2018", label: "Academy Founded" },
              { value: "10+", label: "Expert Coaches" },
              { value: "5+", label: "Turf Net Tracks" },
              { value: "ELITE", label: "Performance Curriculums" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 sm:py-8 px-4 text-center">
                <p className="font-title text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight uppercase">{stat.value}</p>
                <p className="text-gold uppercase tracking-widest text-[9px] font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

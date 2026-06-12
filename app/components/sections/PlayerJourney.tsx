"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  { stage: "01", title: "Foundation", desc: "Fundamental motor skills, hand-eye coordination, basic grip and stance.", level: "Grassroots" },
  { stage: "02", title: "Skill Building", desc: "Refining shots, bowling actions, spin techniques, and fielding skills.", level: "Skills Base" },
  { stage: "03", title: "Game Preparation", desc: "Match situations, captaincy, set-plays, and intra-academy match sessions.", level: "Game Sense" },
  { stage: "04", title: "Tournament Play", desc: "Representing the academy in school, college, and district tournaments.", level: "District Play" },
  { stage: "05", title: "Elite Selection", desc: "Advanced fitness, video analysis, mental training, and state trial preparation.", level: "Elite Selection" },
];

export default function PlayerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Scroll-Scrubbed Vertical Progress Line
      gsap.fromTo(
        trackRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 25%",
            end: "bottom 75%",
            scrub: 0.5,
          },
        }
      );

      // 2. Animate nodes and content cards on scroll
      const steps = gsap.utils.toArray<HTMLElement>(".journey-step");
      steps.forEach((step) => {
        const dot = step.querySelector(".step-dot");
        const glow = step.querySelector(".step-glow");
        const num = step.querySelector(".step-num");
        const content = step.querySelector(".step-content-card");

        // Initial starting states
        gsap.set([dot, content], { opacity: 0.4, scale: 0.95 });

        ScrollTrigger.create({
          trigger: step,
          start: "top 75%",
          end: "bottom 25%",
          onEnter: () => {
            gsap.to(dot, { borderColor: "#C9A84C", scale: 1.1, opacity: 1, duration: 0.4 });
            gsap.to(glow, { opacity: 0.35, scale: 1.3, duration: 0.4 });
            gsap.to(num, { color: "#C9A84C", duration: 0.4 });
            gsap.to(content, { opacity: 1, scale: 1, y: -5, borderColor: "rgba(201, 168, 76, 0.3)", duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(dot, { borderColor: "rgba(45, 106, 79, 0.4)", scale: 1.0, opacity: 0.4, duration: 0.4 });
            gsap.to(glow, { opacity: 0, scale: 1.0, duration: 0.4 });
            gsap.to(num, { color: "#FAFCFA", duration: 0.4 });
            gsap.to(content, { opacity: 0.4, scale: 0.95, y: 0, borderColor: "rgba(45, 106, 79, 0.1)", duration: 0.5 });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#122B1E] py-16 md:py-28 border-y border-[#1B4332] relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-5 sports-grid-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-24 space-y-3">
          <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">Development Path</span>
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Player Journey
          </h2>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto py-6 md:py-10">
          
          {/* Vertical Track Lines (Background & Animated Gold Overlay) */}
          {/* Desktop central line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#2D6A4F]/20 z-0" />
          <div ref={trackRef} className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gold z-0 scale-y-0" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-24 relative z-10">
            {STAGES.map((s, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={s.stage} 
                  className="journey-step grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center w-full"
                >
                  
                  {/* Left Column (Desktop card or empty) */}
                  <div className={`hidden md:block w-full ${isEven ? "" : "pointer-events-none"}`}>
                    {isEven && (
                      <div className="step-content-card bg-[#1B4332]/40 backdrop-blur-sm border border-[#2D6A4F]/10 p-6 md:p-8 hover:border-gold/30 transition-all duration-300 text-right">
                        <span className="text-[9px] font-title font-bold uppercase tracking-widest text-gold block mb-1">
                          {s.level}
                        </span>
                        <h3 className="font-title text-lg md:text-xl font-bold text-white tracking-tight mb-3">
                          {s.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Middle Column (Node & mobile vertical track indicator) */}
                  <div className="relative flex flex-col items-center justify-center flex-shrink-0 z-10 w-14 h-full">
                    {/* Mobile background vertical track line segment */}
                    <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#2D6A4F]/20 z-0" />
                    
                    <div className="relative flex items-center justify-center">
                      <div className="step-glow absolute inset-0 w-14 h-14 bg-gold/25 rounded-full blur-md opacity-0 pointer-events-none" />
                      <div className="step-dot w-14 h-14 bg-[#0D1F0F] border-2 border-[#2D6A4F]/40 flex items-center justify-center font-title font-extrabold text-white text-lg transition-all duration-300 relative z-10">
                        <span className="step-num transition-colors duration-300">{s.stage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Desktop card or mobile card) */}
                  <div className="w-full">
                    {/* On desktop: show card only if odd index. On mobile: show card always */}
                    <div className={`step-content-card bg-[#1B4332]/40 backdrop-blur-sm border border-[#2D6A4F]/10 p-6 md:p-8 hover:border-gold/30 transition-all duration-300 text-left ${
                      !isEven ? "" : "md:hidden"
                    }`}>
                      <span className="text-[9px] font-title font-bold uppercase tracking-widest text-gold block mb-1">
                        {s.level}
                      </span>
                      <h3 className="font-title text-lg md:text-xl font-bold text-white tracking-tight mb-3">
                        {s.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}



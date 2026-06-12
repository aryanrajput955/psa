"use client";

import { useState } from "react";
import CloudinaryImage from "../ui/CloudinaryImage";
import GSAPReveal from "../ui/GSAPReveal";

interface PhotoItem {
  img: string;
  isPortrait: boolean;
}

interface VideoItem {
  src: string;
  isVertical: boolean;
  label: string;
}

interface MediaGalleryProps {
  photos: PhotoItem[];
  videos: VideoItem[];
}

export default function MediaGallery({ photos, videos }: MediaGalleryProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const optimizeVideoUrl = (src: string) => {
    if (src.includes("res.cloudinary.com") && src.includes("/video/upload")) {
      const parts = src.split("/video/upload");
      if (parts.length === 2) {
        // Inject f_auto,q_auto for automatic browser optimization and compression
        return `${parts[0]}/video/upload/f_auto,q_auto${parts[1]}`;
      }
    }
    return src;
  };

  return (
    <section className="bg-[#122B1E] py-16 md:py-24 border-t border-[#1B4332] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-4">
          <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">
            Media Hub
          </span>
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academy Gallery
          </h2>
          <div className="w-10 h-[1px] bg-gold mx-auto" />

          {/* Clean Tab Controls */}
          <div className="inline-flex bg-[#0D1F0F]/60 border border-[#2D6A4F]/20 p-1.5 mt-8 select-none">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2.5 font-title text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-gold text-[#0D1F0F]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2.5 font-title text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gold text-[#0D1F0F]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Tab Panel: Photos */}
        {activeTab === "photos" && (
          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".gallery-card"
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {photos.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-card break-inside-avoid relative overflow-hidden bg-[#1B4332]/20 border border-[#2D6A4F]/10 hover:border-gold/30 hover:shadow-xl transition-all duration-500 group opacity-100"
              >
                <div className={`relative w-full ${item.isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <CloudinaryImage
                    src={item.img}
                    alt="Prakash Sports Academy Gallery Photo"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0D1F0F]/10 pointer-events-none" />
                </div>
              </div>
            ))}
          </GSAPReveal>
        )}

        {/* Tab Panel: Videos */}
        {activeTab === "videos" && (
          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".video-card"
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {videos.map((video, idx) => (
              <div 
                key={idx} 
                className="video-card break-inside-avoid relative overflow-hidden bg-[#1B4332]/25 border border-[#2D6A4F]/10 hover:border-gold/30 transition-all duration-500 group opacity-100"
              >
                <div className={`relative w-full overflow-hidden bg-black ${
                  video.isVertical ? "aspect-[9/16]" : "aspect-[16/9]"
                }`}>
                  <video
                    src={optimizeVideoUrl(video.src)}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata" // Only load video metadata initially to optimize bandwidth
                    playsInline
                    muted
                    loop
                  />
                </div>
              </div>
            ))}
          </GSAPReveal>
        )}

      </div>
    </section>
  );
}

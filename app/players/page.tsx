import type { Metadata } from "next";
import CloudinaryImage from "@/app/components/ui/CloudinaryImage";
import Button from "@/app/components/ui/Button";
import PlayerJourney from "@/app/components/sections/PlayerJourney";
import GSAPReveal from "@/app/components/ui/GSAPReveal";
import MediaGallery from "@/app/components/sections/MediaGallery";

export const metadata: Metadata = {
  title: "Our Players | Success Stories & Gallery | Prakash Sports Academy",
  description:
    "See our featured players, tournament achievements, player journey stages, and our training/match gallery at Prakash Sports Academy, Haridwar.",
  keywords:
    "cricket players haridwar, state cricket players, cricket academy success stories, cricket gallery",
};

const PLAYERS = [
  {
    name: "Suryansh Singh",
    tournament: "Vijay Hazare Trophy (Uttarakhand Senior Team)",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263383/s10_j77ewe.jpg",
  },
  {
    name: "Avaneet Kumar Pandey",
    tournament: "BCCI Cooch Behar Trophy (Uttarakhand U-19)",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263385/s6_cnavhz.jpg",
  },
  {
    name: "Saket Chauhan",
    tournament: "Uttarakhand District League",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263385/s5_tfbsfe.jpg",
  },
];

const GALLERY = [
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263395/s1_mf2f03.jpg", isPortrait: false },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263387/s4_prurja.jpg", isPortrait: false },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263384/s8_mqibgn.jpg", isPortrait: false },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263382/s23_g41kbl.jpg", isPortrait: false },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263376/s11_vmxlnk.jpg", isPortrait: true },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263378/s18_j2pbad.jpg", isPortrait: true },
  { img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263377/s16_esyshu.jpg", isPortrait: true },
];

const VIDEOS = [
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263345/v12_x8tgah.mp4", isVertical: false, label: "Kabaddi Training" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263344/v10_rwbacc.mp4", isVertical: false, label: "Kabaddi Match Action" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263347/v5_ehhbdz.mp4", isVertical: true, label: "Volleyball Defensive Drills" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263346/v3_oj56se.mp4", isVertical: true, label: "Volleyball Serving Session" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263345/v11_fhbolk.mp4", isVertical: false, label: "Volleyball Game Setup" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263348/v9_flfueg.mp4", isVertical: true, label: "Kabaddi Conditioning" },
  { src: "https://res.cloudinary.com/dhlvq35cc/video/upload/v1781263347/v8_zzpwml.mp4", isVertical: true, label: "Volleyball Net Practice" },
];

export default function PlayersPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header - Editorial/Sports Action Background Cover */}
      <section className="relative bg-[#0D1F0F] py-16 md:py-32 border-b border-[#1B4332] overflow-hidden">
        {/* Background image & gradient overlays */}
        <div className="absolute inset-0 z-0">
          <CloudinaryImage
            src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263384/s8_mqibgn.jpg"
            alt="Prakash Sports Academy Players"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F0F] via-[#0D1F0F]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F0F] via-transparent to-[#0D1F0F]/60" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 sports-grid-bg pointer-events-none" />
        </div>

        {/* Large Watermark Text */}
        <div className="absolute right-0 bottom-4 z-0 font-title font-extrabold text-[12vw] leading-none text-white/5 uppercase select-none tracking-widest pointer-events-none hidden lg:block">
          CHAMPIONS
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left aligned title area */}
            <GSAPReveal animation="slide-left" className="lg:col-span-7 space-y-6 border-l-2 border-gold pl-6 py-2">
              <span className="text-gold font-title font-semibold uppercase tracking-[0.25em] text-xs block">
                PSA ACHIEVERS & ROSTER
              </span>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none uppercase">
                Players & <br />
                <span className="text-gold font-serif italic font-normal tracking-wide lowercase">the</span> Gallery
              </h1>
              <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                Discover the path of excellence walked by our players. From grassroots drills to state selections, view our featured achievers and training snapshots.
              </p>
            </GSAPReveal>

            {/* Right side floating summary stats */}
            <GSAPReveal animation="slide-right" className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "State Representatives" },
                { value: "50+", label: "District Selections" },
                { value: "3", label: "Pro Turf Grounds" },
                { value: "100%", label: "Dedication Focus" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1B4332]/40 backdrop-blur-sm border border-[#2D6A4F]/10 p-5 md:p-6 hover:border-gold/30 transition-all duration-300">
                  <p className="font-title text-2xl md:text-3.5xl font-extrabold text-gold tracking-tight">{stat.value}</p>
                  <p className="text-white/50 uppercase tracking-widest text-[8px] font-bold mt-2 leading-snug">{stat.label}</p>
                </div>
              ))}
            </GSAPReveal>

          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-10 md:py-16 sports-grid-bg overflow-hidden">
        <GSAPReveal animation="fade-up" className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/80 text-base leading-relaxed font-medium">
            We take pride in the achievements and growth of our players. Through dedicated coaching and regular match exposure, our athletes excel in district, state, and club-level competitions.
          </p>
        </GSAPReveal>
      </section>

      {/* Player Journey (With Scroll-scrubbed dynamic path) */}
      <PlayerJourney />

      {/* Featured Players */}
      <section className="bg-background py-16 md:py-24 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">Achievers</span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              Featured Players
            </h2>
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".player-card"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {PLAYERS.map((p, idx) => (
              <div key={idx} className="player-card bg-[#1B4332]/20 border border-[#2D6A4F]/10 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col opacity-100">
                {/* Photo frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-[#2D6A4F]/20 bg-[#0D1F0F]/30">
                  <CloudinaryImage
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F0F]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Profile detail text */}
                <div className="p-6 md:p-8 space-y-2 flex-1">
                  <h3 className="font-title text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-gold font-title text-xs uppercase tracking-wider font-semibold">
                    {p.tournament}
                  </p>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* Media Gallery (Interactive Tabs for Photos & Videos) */}
      <MediaGallery photos={GALLERY} videos={VIDEOS} />

      <GSAPReveal animation="scale-in" className="bg-[#0D1F0F] py-12 md:py-20 text-center relative overflow-hidden border-t border-[#1B4332]">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-title text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Start Your <span className="text-gold">Cricket Journey</span>?
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Book a free trial session or register to join Prakash Sports Academy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button href="/contact?type=trial" variant="accent" size="lg">
              Book a Free Trial
            </Button>
            <Button href="/contact?type=join" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[#0D1F0F] hover:border-white">
              Register Now
            </Button>
          </div>
        </div>
      </GSAPReveal>
    </div>
  );
}


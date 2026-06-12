import type { Metadata } from "next";
import Button from "@/app/components/ui/Button";
import CloudinaryImage from "@/app/components/ui/CloudinaryImage";
import GSAPReveal from "@/app/components/ui/GSAPReveal";

export const metadata: Metadata = {
  title: "About Us | Prakash Sports Academy",
  description:
    "Learn about Prakash Sports Academy's history, mission, vision, and core values in cricket coaching and development in Haridwar, Uttarakhand.",
  keywords:
    "about cricket academy, cricket academy history, cricket coaches haridwar, sports academy haridwar",
};

const VALUES = [
  {
    title: "Discipline",
    subtitle: "The Foundation of Character",
    desc: "Building strong habits on and off the field.",
    num: "01"
  },
  {
    title: "Dedication",
    subtitle: "The Commitment to Craft",
    desc: "Encouraging commitment towards continuous improvement.",
    num: "02"
  },
  {
    title: "Excellence",
    subtitle: "The Standard of Performance",
    desc: "Striving for the highest standards in coaching and performance.",
    num: "03"
  },
  {
    title: "Sportsmanship",
    subtitle: "The Respect for Legacy",
    desc: "Promoting respect, teamwork, and fair play.",
    num: "04"
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header Banner - Editorial Opener */}
      <section className="relative bg-[#0D1F0F] py-20 md:py-32 border-b border-[#1B4332] overflow-hidden">
        {/* Subtle branding background graphics */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 border border-gold/10 rounded-full pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 border border-gold/10 rounded-full pointer-events-none" />

        <GSAPReveal animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-gold font-title font-semibold uppercase tracking-[0.3em] text-xs block">
            ESTABLISHED 2018 — HARIDWAR
          </span>
          <h1 className="font-title text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
            The Spirit of <br/>
            <span className="text-gold font-serif italic font-normal tracking-wide lowercase">the</span> Game
          </h1>
          <div className="w-12 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            A look inside our philosophy, our values, and the commitment that drives every athlete under our banner.
          </p>
        </GSAPReveal>
      </section>

      {/* Narrative Section 1: Our Story */}
      <section className="bg-background py-16 md:py-28 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Storytelling Side-Column: Editorial Intro */}
            <GSAPReveal animation="slide-left" className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">
                Chapter I
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Our Story
              </h2>
              <div className="w-16 h-[1px] bg-gold" />
              
              {/* Quick Academy Stats Panel */}
              <div className="grid grid-cols-3 gap-2 pt-6">
                <div className="border border-[#2D6A4F]/20 bg-[#1B4332]/20 p-4 text-center">
                  <p className="font-title text-xl font-bold text-gold">2018</p>
                  <p className="text-white/40 uppercase tracking-widest text-[7px] font-semibold mt-1">Established</p>
                </div>
                <div className="border border-[#2D6A4F]/20 bg-[#1B4332]/20 p-4 text-center">
                  <p className="font-title text-xl font-bold text-gold">5+</p>
                  <p className="text-white/40 uppercase tracking-widest text-[7px] font-semibold mt-1">Turf Nets</p>
                </div>
                <div className="border border-[#2D6A4F]/20 bg-[#1B4332]/20 p-4 text-center">
                  <p className="font-title text-xl font-bold text-gold">15+</p>
                  <p className="text-white/40 uppercase tracking-widest text-[7px] font-semibold mt-1">State Reps</p>
                </div>
              </div>
            </GSAPReveal>

            {/* Narrative Main Content Column */}
            <GSAPReveal animation="slide-right" className="lg:col-span-7 space-y-8 text-white/80">
              <p className="text-white text-lg sm:text-xl font-serif italic leading-relaxed border-l-2 border-gold pl-6 py-2 bg-[#1B4332]/20">
                &ldquo;Prakash Sports Academy was established with a vision to develop cricket talent in Haridwar and surrounding regions. We are committed to providing quality coaching and creating opportunities for aspiring cricketers to achieve their goals.&rdquo;
              </p>
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-white/70">
                <p>
                  Our journey began with a clear realization: that the talent in our region deserved access to professional infrastructure and structured training. We built our systems not simply to teach the physical mechanics of batting and bowling, but to cultivate a deep understanding of the sport.
                </p>
                <p>
                  &ldquo;Our academy focuses not only on cricket skills but also on developing discipline, leadership, teamwork, and confidence among players.&rdquo;
                </p>
                <p>
                  By treating cricket as a school of life, we ensure that every player who steps onto our pitches learns to carry themselves with dignity, face pressure with confidence, and work cohesively in teams to achieve collective milestones.
                </p>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="accent">
                  Join Our Journey
                </Button>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Mission & Vision (Interlocked Column Layout) */}
      <section className="bg-[#122B1E] py-16 md:py-28 border-y border-[#1B4332] relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#0D1F0F]/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Mission Panel */}
            <GSAPReveal animation="slide-left" className="lg:col-span-6 space-y-6">
              <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">
                Chapter II / The Mandate
              </span>
              <h3 className="font-title text-3xl font-bold text-white tracking-tight">
                Our Mission
              </h3>
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-serif italic">
                &ldquo;To nurture cricket talent through professional coaching, modern training methodologies, and a supportive environment that helps players reach their full potential.&rdquo;
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                We achieve this by providing modern facilities, employing structured skill syllabi, and creating a supportive culture that keeps players motivated through their growth milestones.
              </p>
            </GSAPReveal>

            {/* Vision Panel */}
            <GSAPReveal animation="slide-right" className="lg:col-span-6 space-y-6">
              <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">
                Chapter III / The Horizon
              </span>
              <h3 className="font-title text-3xl font-bold text-white tracking-tight">
                Our Vision
              </h3>
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-serif italic">
                &ldquo;To become one of the most respected cricket academies in Uttarakhand by producing skilled, disciplined, and competitive cricketers.&rdquo;
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Our ultimate goal is to raise the benchmark of cricket coaching in our region, ensuring our players stand out in county, league, and state selections across the nation.
              </p>
            </GSAPReveal>

          </div>
        </div>
      </section>

      {/* Narrative Section 3: Core Values Path */}
      <section className="bg-background py-16 md:py-28 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">
              Our Creed
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Core Values
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
          </GSAPReveal>

          {/* Sequential Path Storytelling Grid */}
          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".value-card"
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {VALUES.map((val) => (
              <div 
                key={val.num} 
                className="value-card bg-[#1B4332] border border-[#2D6A4F]/10 p-8 flex flex-col justify-between hover:bg-[#122B1E] hover:border-gold/30 transition-all duration-300 relative group opacity-100"
              >
                {/* Visual sequential path line indicator */}
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gold/10 group-hover:bg-gold transition-all duration-300" />
                
                <div className="space-y-4">
                  <span className="font-title text-2xl font-bold text-gold/20 group-hover:text-gold transition-colors duration-300 block">
                    {val.num}
                  </span>
                  <div>
                    <h3 className="font-title text-lg font-bold text-white tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-gold/60 text-[10px] uppercase font-semibold tracking-wider mt-0.5">
                      {val.subtitle}
                    </p>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed italic pt-2">
                    &ldquo;{val.desc}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>
    </div>
  );
}


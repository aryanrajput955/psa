import type { Metadata } from "next";
import Button from "@/app/components/ui/Button";
import CloudinaryImage from "@/app/components/ui/CloudinaryImage";
import GSAPReveal from "@/app/components/ui/GSAPReveal";

export const metadata: Metadata = {
  title: "Our Academy | Facilities & Programs | Prakash Sports Academy",
  description:
    "Explore our professional cricket facilities in Haridwar. View practice nets, bowling machine training, training schedules, coaching methodologies, and programs.",
  keywords:
    "cricket nets haridwar, cricket ground haridwar, cricket practice timings, bowling machine academy",
};

const FACILITIES = [
  {
    title: "Cricket Ground",
    desc: "Professionally maintained outfields and match-ready pitches simulating competitive match conditions.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263380/s19_lnkfz7.jpg",
    tag: "Match Pitch"
  },
  {
    title: "Practice Nets",
    desc: "Multiple turf and clay net tracks reserved for batting, bowling, and spin-development sessions.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781292612/nets_dhys4e.jpg",
    tag: "Turf & Clay"
  },
  {
    title: "Bowling Machine",
    desc: "Automated delivery machines providing variations in line, swing, speed, and bounce for technique refinement.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781292593/bowling_xukax7.jpg",
    tag: "Tech-Training"
  },
  {
    title: "Fitness & Conditioning",
    desc: "Dedicated performance zone built for cardiovascular strength, explosive power, and athletic agility.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263377/s12_w7rwrr.jpg",
    tag: "Athletics"
  },
  {
    title: "Fielding Drills Area",
    desc: "Reflex training grids built to improve throwing speed, catching reflexes, and outfield mobility.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263378/s18_j2pbad.jpg",
    tag: "Reflex Grids"
  },
  {
    title: "Match Assessment",
    desc: "Regular competitive fixtures and intra-academy matches under simulated high-pressure tournament conditions.",
    img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263384/s8_mqibgn.jpg",
    tag: "Competitive"
  },
];

const METHODOLOGIES = [
  {
    category: "Technical Skill",
    desc: "Refining core batting, bowling, and wicket-keeping foundations.",
    items: ["Stance and batting balance alignment", "Bowling release point & trajectory", "Reflexive catching & diving techniques", "Wicket-keeping gloves positioning"],
  },
  {
    category: "Physical Fitness",
    desc: "Building the stamina and power profile required for long-format matches.",
    items: ["Explosive running speed between wickets", "Core stability & lower back protection", "High-intensity cardio circuits", "Targeted post-match active recovery"],
  },
  {
    category: "Tactical Intelligence",
    desc: "Developing cricket game sense, field setups, and captaincy logic.",
    items: ["Match situation review & target chases", "Strategic field placements by bowler", "Managing target run rates dynamically", "Building resilient mental game focus"],
  },
];

const PROGRAMS = [
  {
    title: "Grassroots Curriculum",
    desc: "For young beginners entering the sport. Focused on grip foundations, hand-eye reflexes, coordinate drills, and basic physical fitness.",
    tag: "Under-12",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Development Curriculum",
    desc: "For middle-tier players with tournament potential. Features intensive turf net practice, specific bowling lengths, and basic match play.",
    tag: "Under-16",
    img: "https://images.unsplash.com/photo-1531415080290-bc98545ab3ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Elite Championship Prep",
    desc: "Tournament-grade training for state aspirants. Features video frame analysis, bowling machine training, and advanced strength drills.",
    tag: "Under-23 / Open",
    img: "https://images.unsplash.com/photo-1540747737956-3787293a9fc1?auto=format&fit=crop&w=600&q=80"
  },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header Opener - Unique Layered Split Layout */}
      <section className="relative bg-[#0D1F0F] py-16 md:py-24 lg:py-32 border-b border-[#1B4332] overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-10 sports-grid-bg pointer-events-none" />
        <div className="absolute -right-36 -top-36 w-96 h-96 bg-[#1B4332]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (6 Cols) */}
            <GSAPReveal animation="slide-left" className="lg:col-span-6 space-y-6 border-l-2 border-gold pl-6 py-2">
              <div className="inline-flex items-center gap-2 bg-[#1B4332]/60 backdrop-blur-sm border border-[#2D6A4F]/30 text-gold font-title text-[10px] uppercase tracking-[0.25em] px-4 py-2 font-semibold">
                <span className="w-1.5 h-1.5 bg-gold animate-pulse" />
                Professional Facilities & Methods
              </div>

              <div className="space-y-3">
                <h1 className="font-title text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-white tracking-tight leading-[1.05] uppercase">
                  Our Academy
                </h1>
                <h2 className="font-title text-base sm:text-lg lg:text-xl font-bold text-gold tracking-[0.15em] uppercase">
                  Elite Infrastructure & Curriculums
                </h2>
              </div>

              <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                Explore our high-performance facility designed for player development. From professional turf tracks and high-speed bowling machines to comprehensive fitness analysis, our training ecosystem is built to mold next-generation cricketers.
              </p>
            </GSAPReveal>

            {/* Right Media Section (6 Cols) - Double Layered Collage */}
            <GSAPReveal animation="slide-right" className="lg:col-span-6 relative w-full flex justify-center lg:justify-end lg:pr-10">
              {/* Main Image Container */}
              <div className="relative w-full max-w-[440px] aspect-[4/3] bg-[#1B4332] border border-[#2D6A4F]/30 p-2 shadow-2xl z-10">
                <div className="relative w-full h-full overflow-hidden">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263377/s17_ktn1lo.jpg"
                    alt="Cricket Practice Nets"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#0D1F0F]/20 pointer-events-none" />
                </div>
              </div>

              {/* Offset Mini Image Overlay */}
              <div className="absolute -bottom-6 left-6 lg:-left-6 w-40 sm:w-48 aspect-square bg-[#1B4332] border border-[#2D6A4F]/40 p-1.5 shadow-2xl z-20 hidden sm:block">
                <div className="relative w-full h-full overflow-hidden">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263378/s18_j2pbad.jpg"
                    alt="Turf close up details"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0D1F0F]/15 pointer-events-none" />
                </div>
              </div>

              {/* Decorative background outline offset */}
              <div className="absolute -top-4 -right-4 lg:right-6 w-24 h-24 border-t-2 border-r-2 border-gold/30 z-0 pointer-events-none" />
            </GSAPReveal>

          </div>
        </div>
      </section>

      {/* Facilities Section - Cool Visual Image Cards */}
      <section className="bg-background py-16 md:py-28 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">Infrastructure</span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Elite Training Facilities
            </h2>
            <div className="w-10 h-[1px] bg-gold mx-auto mt-4" />
          </GSAPReveal>

          {/* Cool Visual Cards Grid */}
          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".facility-card"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FACILITIES.map((f, idx) => (
              <div 
                key={idx} 
                className="facility-card group relative h-[360px] overflow-hidden bg-[#1B4332] border border-[#2D6A4F]/20 hover:border-gold/40 transition-all duration-300 flex flex-col justify-end p-6 opacity-100"
              >
                {/* Background Image with overlay gradient */}
                <div className="absolute inset-0 z-0">
                  <CloudinaryImage
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F0F] via-[#0D1F0F]/45 to-transparent pointer-events-none" />
                </div>

                <div className="relative z-10 space-y-3">
                  <span className="text-[9px] font-title font-semibold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 border border-gold/20 inline-block">
                    {f.tag}
                  </span>
                  <h3 className="font-title text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* Coaching Methodology Narrative */}
      <section className="bg-[#122B1E] py-16 md:py-28 border-y border-[#1B4332] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">Coaching Framework</span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How We Train Champions
            </h2>
            <div className="w-10 h-[1px] bg-gold mx-auto mt-4" />
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".method-card"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {METHODOLOGIES.map((method, idx) => (
              <div key={idx} className="method-card bg-[#1B4332] border border-[#2D6A4F]/20 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow opacity-100">
                <div>
                  <span className="text-[10px] uppercase font-title font-bold tracking-widest text-gold bg-[#0D1F0F] px-3 py-1 border border-[#2D6A4F]/20">
                    Phase 0{idx + 1}
                  </span>
                  <h3 className="font-title text-lg font-bold text-white tracking-tight mt-6 mb-2">{method.category}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-6">{method.desc}</p>
                  
                  <div className="h-px w-full bg-[#2D6A4F]/20 mb-5" />
                  
                  <ul className="space-y-3">
                    {method.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm leading-snug">
                        <span className="text-gold mt-1 text-xs">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* Timetable Schedule */}
      <section className="bg-background py-16 md:py-28 sports-grid-bg overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <GSAPReveal className="text-center mb-16 space-y-3">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">Timetable</span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Training Schedule
            </h2>
            <div className="w-10 h-[1px] bg-gold mx-auto mt-4" />
          </GSAPReveal>

          <GSAPReveal animation="scale-in" className="bg-[#1B4332] border border-[#2D6A4F]/20 shadow-xl overflow-hidden">
            <div className="p-4 bg-[#122B1E] border-b border-[#2D6A4F]/20 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span className="font-title text-xs font-bold text-gold uppercase tracking-widest">Regular Batches (Monday – Saturday)</span>
              <span className="text-[10px] text-white/50 bg-background px-2.5 py-0.5 border border-white/5 uppercase">Rain / Shine Scheduled</span>
            </div>
            
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0D1F0F] border-b border-[#2D6A4F]/20">
                  <th className="py-4 px-6 font-title text-xs uppercase tracking-wider text-white font-bold">Session Batch</th>
                  <th className="py-4 px-6 font-title text-xs uppercase tracking-wider text-white font-bold">Timings</th>
                  <th className="py-4 px-6 font-title text-xs uppercase tracking-wider text-white font-bold">Core Focus Area</th>
                  <th className="py-4 px-6 font-title text-xs uppercase tracking-wider text-white font-bold text-right">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D6A4F]/20 text-xs sm:text-sm">
                <tr className="hover:bg-[#122B1E]/30 transition-colors">
                  <td className="py-4 px-6 font-title font-bold text-white">Morning Batch</td>
                  <td className="py-4 px-6 text-white/80">06:00 AM – 09:00 AM</td>
                  <td className="py-4 px-6 text-white/60">Conditioning & Net Sessions</td>
                  <td className="py-4 px-6 text-right"><span className="text-gold font-title font-semibold text-xs uppercase tracking-wider">Open Slots</span></td>
                </tr>
                <tr className="hover:bg-[#122B1E]/30 transition-colors">
                  <td className="py-4 px-6 font-title font-bold text-white">Evening Batch</td>
                  <td className="py-4 px-6 text-white/80">04:00 PM – 07:00 PM</td>
                  <td className="py-4 px-6 text-white/60">Skills Development & Matches</td>
                  <td className="py-4 px-6 text-right"><span className="text-gold font-title font-semibold text-xs uppercase tracking-wider">Open Slots</span></td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#122B1E] p-4 text-center border-t border-[#2D6A4F]/20">
              <p className="text-white/40 text-[10px] sm:text-xs">
                * Slot timings may adjust depending on regional weather constraints or state tournaments.
              </p>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Curriculum Programs with Images */}
      <section className="bg-[#122B1E] py-16 md:py-28 border-t border-[#1B4332] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs block">Admissions</span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Admissions & Curriculums
            </h2>
            <div className="w-10 h-[1px] bg-gold mx-auto mt-4" />
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".curriculum-card"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PROGRAMS.map((prog, idx) => (
              <div 
                key={idx} 
                className="curriculum-card bg-[#1B4332] border border-[#2D6A4F]/20 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden opacity-100"
              >
                {/* Header Image for Curriculums */}
                <div className="relative h-[200px] w-full overflow-hidden border-b border-[#2D6A4F]/20">
                  <CloudinaryImage
                    src={prog.img}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0D1F0F]/30 pointer-events-none" />
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[9px] font-title uppercase font-bold tracking-widest text-gold bg-[#0D1F0F] border border-gold/10 px-3 py-1">
                      {prog.tag}
                    </span>
                    <h3 className="font-title text-xl font-bold text-white tracking-tight">{prog.title}</h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{prog.desc}</p>
                  </div>
                  <div className="pt-8">
                    <Button href="/contact" variant="outline" className="w-full text-center">
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>
    </div>
  );
}


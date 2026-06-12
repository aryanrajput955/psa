import CloudinaryImage from "@/app/components/ui/CloudinaryImage";
import Button from "@/app/components/ui/Button";
import HeroSection from "@/app/components/sections/HeroSection";
import GSAPReveal from "@/app/components/ui/GSAPReveal";

const HERO_BG = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263381/s20_tvzeym.jpg";
const SNAPSHOT_IMG = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1781263395/s1_mf2f03.jpg";

const STRENGTHS = [
  {
    title: "Professional Coaching",
    desc: "Certified coaches with years of competitive experience providing personalised skill development for every player.",
  },
  {
    title: "Modern Facilities",
    desc: "Well-maintained cricket ground, dedicated turf practice nets, and specialised skill-development zones.",
  },
  {
    title: "Performance Tracking",
    desc: "Regular analytical assessments to monitor progress and fast-track every player's growth trajectory.",
  },
  {
    title: "Match Exposure",
    desc: "Frequent intra-academy matches, external tournaments, and competitive league play at district and state level.",
  },
  {
    title: "Fitness & Conditioning",
    desc: "Specialised athletic programs designed to enhance strength, endurance, agility, and on-field speed.",
  },
  {
    title: "Positive Environment",
    desc: "A disciplined yet supportive culture centered around teamwork, sportsmanship, and mental resilience.",
  },
];

const PROGRAMS = [
  {
    title: "Junior Program",
    age: "5–12 Years",
    focus: [
      "Basic cricket techniques & grip",
      "Batting stance fundamentals",
      "Bowling action development",
      "Fielding & catching drills",
      "Fun, engaging sessions",
    ],
    highlight: false,
  },
  {
    title: "Youth Program",
    age: "13–18 Years",
    focus: [
      "Advanced batting & bowling",
      "Match strategy & game sense",
      "Physical fitness training",
      "Competitive match preparation",
      "Video analysis & feedback",
    ],
    highlight: true,
  },
  {
    title: "Senior Program",
    age: "19–30 Years",
    focus: [
      "Professional skill refinement",
      "Tournament preparation",
      "Performance analytics",
      "Advanced conditioning",
      "Leadership development",
    ],
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "The coaching methodology at Prakash Sports Academy is exceptional. The structured net sessions and video feedback have helped my son correct his stance and improve his technique dramatically in just a few months.",
    author: "Arvind Sharma",
    role: "Parent of U-14 District Player",
    initials: "AS",
  },
  {
    quote: "The academy provides an elite, disciplined environment that pushes you to your limits. The turf pitches are top-class, and the conditioning drills prepare you perfectly for multi-day state selection matches.",
    author: "Kabir Negi",
    role: "State Level U-19 Fast Bowler",
    initials: "KN",
  },
  {
    quote: "Training here under certified coaches has completely transformed my approach to cricket. The match simulations and mental strategy classes have built high game awareness and self-confidence.",
    author: "Sanjay Rawat",
    role: "Senior Club Team Captain",
    initials: "SR",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* ─── HERO (With Parallax Scroll Reveal) ─── */}
      <HeroSection heroBg={HERO_BG} />

      {/* ─── ABOUT SNAPSHOT ─── */}
      <section className="bg-background pt-36 pb-24 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <GSAPReveal animation="slide-left" className="space-y-6">
              <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">
                About the Academy
              </span>
              <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Where Potential Meets Professional Training
              </h2>
              <p className="text-foreground/80 text-base leading-relaxed">
                At Prakash Sports Academy, we believe every player has the potential to achieve greatness. Our structured coaching programs focus on technical skills, fitness, mental strength, match awareness, and character development.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Whether you&apos;re a beginner learning the fundamentals or an advanced player preparing for competitive cricket, our academy provides the right platform and environment to grow.
              </p>
              <Button href="/about" variant="outline" size="md">
                Learn More
              </Button>
            </GSAPReveal>

            <GSAPReveal animation="slide-right" className="relative">
              <div className="bg-[#1B4332] border border-[#2D6A4F]/30 p-2.5 shadow-lg">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <CloudinaryImage
                    src={SNAPSHOT_IMG}
                    alt="Cricket practice nets at Prakash Sports Academy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Decorative accent line */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/30 pointer-events-none" />
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-[#122B1E] py-16 md:py-24 border-y border-[#1B4332] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">
              Our Strengths
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              Why Choose Prakash Sports Academy
            </h2>
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".strength-card" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1B4332] border border-[#1B4332]"
          >
            {STRENGTHS.map((item, index) => (
              <div
                key={index}
                className="strength-card bg-[#1B4332] p-8 hover:bg-[#122B1E] transition-colors duration-300 group opacity-100"
              >
                <span className="text-gold/60 font-title text-sm font-bold">
                  0{index + 1}
                </span>
                <h3 className="font-title text-base font-bold text-white tracking-tight mt-3 mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="bg-background py-16 md:py-24 sports-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">
              Training Programs
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              Programs We Offer
            </h2>
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".program-card" 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className={`program-card bg-[#1B4332] border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg opacity-100 ${
                  program.highlight
                    ? "border-gold shadow-md relative"
                    : "border-[#2D6A4F]/30 hover:border-gold/30"
                }`}
              >
                {program.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                )}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-title text-lg font-bold text-white tracking-tight">
                      {program.title}
                    </h3>
                    <span className="text-gold font-title text-[10px] uppercase tracking-widest bg-[#122B1E] border border-gold/20 px-2.5 py-1 font-bold">
                      {program.age}
                    </span>
                  </div>
                  <div className="h-px w-full bg-[#2D6A4F]/20 mb-5" />
                  <ul className="space-y-3">
                    {program.focus.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <span className="text-gold mt-0.5 text-xs">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <Button
                    href={`/contact?program=${program.title.split(" ")[0].toLowerCase()}`}
                    variant={program.highlight ? "accent" : "outline"}
                    className="w-full text-center"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#122B1E] py-16 md:py-24 border-y border-[#1B4332] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">
              Testimonials
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              What Players & Parents Say
            </h2>
          </GSAPReveal>

          <GSAPReveal 
            animation="stagger-fade-up" 
            staggerSelector=".testimonial-card"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="testimonial-card bg-[#1B4332] border border-[#2D6A4F]/20 p-8 flex flex-col justify-between hover:shadow-lg hover:border-gold/30 transition-all duration-300 relative group opacity-100"
              >
                {/* Large double quote indicator */}
                <div className="absolute top-6 right-8 text-gold/10 font-serif text-6xl select-none pointer-events-none group-hover:text-gold/20 transition-colors">
                  “
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 text-gold mb-6 text-xs">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                  <p className="text-white/80 italic text-sm leading-relaxed mb-8 relative">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10 border-t border-[#2D6A4F]/10 pt-6">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-title font-bold text-xs tracking-wider">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-title font-bold text-white text-xs uppercase tracking-wider">
                      {t.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </GSAPReveal>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
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


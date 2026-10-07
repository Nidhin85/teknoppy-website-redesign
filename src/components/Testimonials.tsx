import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import clients from '../data/clients.json';

const defaultTestimonials = [
  {
    name: "Biju Thomas",
    role: "CEO, Olives Resort, Wayanad",
    content: "We now rank at the top of Google for our keywords and get many direct booking calls due to better visibility. Thank you Teknoppy for all the support.",
    initials: "BT",
    photo: "/testimonials/biju-thomas.webp"
  },
  {
    name: "Vivek Menon",
    role: "CTO, Evosyz, Kochi",
    content: "Being in the Fintech space, we needed a reliable partner. Teknoppy created an appealing website that represents our brand perfectly.",
    initials: "VM",
    photo: "/testimonials/vivek-menon-portrait.webp"
  },
  {
    name: "Shainesh Prakashan",
    role: "CEO, Exacore IT, Infopark Kochi",
    content: "Teknoppy was very intuitive in understanding our requirements. They made great digital collateral and now we are getting good outreach to the market.",
    initials: "SP",
    photo: "/testimonials/shainesh-prakashan.webp"
  },
  {
    name: "Dr. Asghar",
    role: "CEO, Greens Ayurveda, Calicut",
    content: "Mr. Sanal is exceptionally supportive and customer-friendly. I have worked with many IT teams, but I am 100% happy with Teknoppy. No doubt, I recommend them with 100% satisfaction.",
    initials: "DA",
    photo: "/testimonials/dr-asghar.webp"
  },
  {
    name: "Rincy",
    role: "Astrologer & Psychic Healer, Australia",
    content: "Thank you Teknoppy for a wonderful mobile app for my tarot channel. All functions work great and I am getting many subscribers.",
    initials: "R",
    photo: "/testimonials/rincy.webp"
  }
];

// The grid shows the first nine of the shared roster; /clients/ shows all of them.
const clientLogos = clients.logos.slice(0, 9);

type VideoTestimonial = {
  youtubeId: string;
  name?: string;
  role?: string;
  thumb: string;
  isShort?: boolean;
};

export default function Testimonials({
  testimonials = defaultTestimonials,
  videos = [],
  badge = "Client Success Stories",
  heading,
  headingLead,
  headingAccent,
  headingRest,
  intro = "Businesses across Kerala and the GCC have trusted our website design Kerala expertise to build their online presence — here is what some of them have to say about working with Teknoppy web design agency.",
  statsLabel = "120+ projects delivered",
}: {
  testimonials?: { name: string; role: string; content: string; initials: string; photo?: string }[];
  videos?: VideoTestimonial[];
  badge?: string;
  heading?: React.ReactNode;
  headingLead?: string;
  headingAccent?: string;
  headingRest?: string;
  intro?: string;
  statsLabel?: string;
} = {}) {
  // Real client videos, supplied by the client. The panel used to rotate a stock
  // image behind a play button that did nothing.
  const videoTestimonials = videos;
  // The slides are absolutely stacked so the card never changes height mid-rotation.
  // An invisible copy of the longest quote reserves exactly the space that quote
  // needs — at any breakpoint — instead of a hand-tuned fixed height that leaves a
  // hole under the short ones.
  const longestQuote = testimonials.reduce(
    (a, b) => (b.content.length > a.length ? b.content : a),
    testimonials[0]?.content ?? ''
  );
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (playingId) return;                 // don't rotate out from under a playing video
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, playingId]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] }
    })
  };

  const video3DVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      z: -200,
      opacity: 0,
      scale: 0.85
    }),
    center: {
      rotateY: 0,
      z: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1] 
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      z: -200,
      opacity: 0,
      scale: 0.85,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1] 
      }
    })
  };

  const current = testimonials[currentIndex];
  const currentVideo = videoTestimonials.length
    ? videoTestimonials[currentIndex % videoTestimonials.length]
    : null;

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden" id="testimonials">
      {/* Background overlapping rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full border border-[#F05A2C]/8 animate-float-slow"></div>
        <div className="absolute top-20 left-20 w-[450px] h-[450px] rounded-full border border-dashed border-[#F9AE42]/10 animate-float-slower"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-[#F05A2C]/10 animate-float-slow"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Combined Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9AE42]/10 border border-[#F9AE42]/30 text-primary text-sm font-bold uppercase tracking-wider mb-6 shadow-sm transform -rotate-1">
              {badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
              {heading || (headingLead ? (
                <>
                  {headingLead} {headingAccent && <span className="text-primary">{headingAccent}</span>} {headingRest}
                </>
              ) : (
                <>
                  What Our Clients Say About <span className="text-primary">Teknoppy</span> — Web Design Agency Kerala
                </>
              ))}
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              {intro}
            </p>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-neutral-950 tracking-tight shrink-0">
            {statsLabel}
          </div>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Testimonial Card */}
          <div 
            className="lg:col-span-4 relative flex flex-col justify-between bg-white rounded-xl px-6 pb-7 pt-14 sm:p-8 sm:pt-16 border border-neutral-100 shadow-sm lg:min-h-[460px] overflow-visible"
          >
            {/* Stacked Cards Effect behind the main card */}
            <div className="absolute inset-0 bg-cream rounded-xl -translate-y-4 scale-[0.94] border border-neutral-100 -z-20"></div>
            <div className="absolute inset-0 bg-[#F9AE42]/5 rounded-xl -translate-y-2 scale-[0.97] border border-neutral-100 -z-10"></div>

            {/* Client portrait — overlaps the card's top-left corner, as on the
                live site. Falls back to the initials avatar when a client has
                no photo on file. */}
            <div className="absolute -top-8 left-6 sm:left-8 z-10">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`avatar-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } }}
                  className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.25)] ring-2 ring-primary/70"
                >
                  {current.photo ? (
                    <img
                      src={current.photo}
                      alt={`${current.name} — ${current.role}`}
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  ) : (
                    <span className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-base font-black text-primary">
                      {current.initials}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Top Row: Quote Mark & Controls */}
            <div className="flex justify-end items-center mb-6">
              <div className="flex gap-1.5 bg-neutral-50 border border-neutral-100 p-1 rounded-full">
                <button 
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-650 hover:text-primary hover:bg-neutral-50 shadow-sm transition-all border border-neutral-100"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-650 hover:text-primary hover:bg-neutral-50 shadow-sm transition-all border border-neutral-100"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle: Testimonial Text with slide transition */}
            <div className="flex-grow relative mb-6">
              <p aria-hidden="true" className="invisible select-none text-sm md:text-base leading-relaxed font-medium italic">
                "{longestQuote}"
              </p>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex flex-col justify-center"
                >
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-medium italic">
                    "{current.content}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Client Profile — animated on the same key and timing as the
                quote and the portrait, so the name never runs ahead of the words. */}
            <div className="pt-5 border-t border-neutral-100 h-[62px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`profile-${currentIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } }}
                >
                  <h4 className="font-bold text-neutral-900 text-base leading-snug">{current.name}</h4>
                  <p className="text-xs text-primary font-semibold mt-0.5">{current.role}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Column 2: Video Testimonial Preview with 3D Rotation */}
          <div 
            className="lg:col-span-4 relative rounded-xl overflow-visible min-h-[440px] md:min-h-[460px]" 
            style={{ perspective: "1500px" }}
          >
            {playingId ? (
              <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm border border-neutral-100 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${playingId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Client video testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <button
                  onClick={() => setPlayingId(null)}
                  aria-label="Close video"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : currentVideo ? (
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={video3DVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm border border-neutral-100 bg-neutral-900"
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <img
                    src={currentVideo.thumb}
                    alt={currentVideo.name ? `${currentVideo.name} — video testimonial for Teknoppy` : "Client video testimonial for Teknoppy"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-85 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  {/* Play — loads the YouTube iframe only on click */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-28 h-28 rounded-full bg-[#F9AE42]/30 blur-xl pointer-events-none animate-pulse"></div>
                    <button
                      onClick={() => setPlayingId(currentVideo.youtubeId)}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-xl relative z-10"
                      aria-label={currentVideo.name ? `Play video testimonial from ${currentVideo.name}` : "Play client video testimonial"}
                    >
                      <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                    </button>
                  </div>

                  {(currentVideo.name || currentVideo.role) && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2">
                        {currentVideo.name && (
                          <div className="w-8 h-8 rounded-full bg-primary border border-primary/10 flex items-center justify-center text-xs font-bold text-white">
                            {currentVideo.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          {currentVideo.name && <h4 className="font-bold text-white text-sm">{currentVideo.name}</h4>}
                          {currentVideo.role && <p className="text-[12px] text-white/70 font-medium">{currentVideo.role}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            ) : null}
          </div>

          {/* Column 3: Client Logos Grid (3x3 on mobile/desktop, 9-col strip on tablet) */}
          <div className="md:col-span-2 lg:col-span-4 bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm grid grid-cols-3 md:grid-cols-9 lg:grid-cols-3 divide-x divide-y md:divide-y-0 lg:divide-y divide-neutral-100">
            {clientLogos.map((logo) => (
              <div 
                key={logo.src} 
                className="logo-plate aspect-square flex items-center justify-center p-3.5 sm:p-4 md:p-3 lg:p-6 bg-white hover:bg-neutral-50/50 transition-colors duration-300 border-neutral-100"
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* The grid is a teaser — the full roster lives on /clients/ */}
          <div className="md:col-span-2 lg:col-span-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
            <a
              href="/clients/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-neutral-900 bg-white border border-neutral-200 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              View all clients
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/request-a-quote/"
              className="cta-reveal cta-pulse-medium cta-pulse-delay-2 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors group"
            >
              <span>Join Our Growing Client Network</span>
              <ArrowRight className="cta-arrow cta-arrow-invite w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Trust-based Conversion CTA: After Testimonials (Standout Checkpoint) */}
        <div className="cta-checkpoint mt-16 pt-10 border-t border-neutral-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-9 rounded-2xl bg-white border border-neutral-200/80 shadow-xs text-center sm:text-left">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                Ready to Work With Us?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Let's discuss your goals and build the right digital solution.
              </p>
            </div>
            <a
              href="/request-a-quote/"
              data-magnetic-btn
              className="cta-shimmer-btn cta-pulse-strong cta-pulse-delay-4 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-primary rounded-full hover:bg-primary/95 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 shrink-0 group whitespace-nowrap"
            >
              <span>Get Started with Teknoppy</span>
              <ArrowRight className="cta-arrow cta-arrow-invite w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    name: "Arun Mathew",
    role: "Greenleaf Exports, Kochi",
    content: "Teknoppy completely transformed our online presence. Within three months of the new website going live, our enquiries doubled and our Google ranking moved from page 3 to page 1 for our target keyword. The team was professional, on time, and genuinely understood what our business needed.",
    initials: "AM"
  },
  {
    name: "Priya Nair",
    role: "Nair Jewellery House, Thrissur",
    content: "We approached Teknoppy for a full website redesign and SEO setup. The results have been outstanding. Our website now loads in under two seconds, ranks for multiple keywords, and our sales inquiries have increased by over 40 percent. Highly recommended for any Kerala business serious about digital growth.",
    initials: "PN"
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Suresh Medical Centre, Ernakulam",
    content: "The team at Teknoppy delivered exactly what they promised — a clean, fast, and SEO-optimised website for our clinic. Patients now find us easily on Google and our appointment bookings through the website have grown consistently month on month.",
    initials: "SK"
  }
];

const videoTestimonials = [
  {
    name: "Arun Mathew",
    initial: "A",
    company: "Founder Greenleaf Exports",
    image: "/testimonial_video_preview.png"
  },
  {
    name: "Priya Nair",
    initial: "P",
    company: "Director Nair Jewellery House",
    image: "/testimonial_video_preview_2.png"
  },
  {
    name: "Dr. Suresh Kumar",
    initial: "S",
    company: "Suresh Medical Centre",
    image: "/testimonial_video_preview_3.png"
  }
];

const clientLogos = [
  '/client logos/Abroad-career-1.jpg',
  '/client logos/abu-dhabi.jpg',
  '/client logos/al-coffee-1.jpg',
  '/client logos/amster.jpg',
  '/client logos/ar.jpg',
  '/client logos/first-class.jpg',
  '/client logos/kewsa.jpg',
  '/client logos/metal-center.jpg',
  '/client logos/olive.jpg'
];

export default function Testimonials() {
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
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

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
  const currentVideo = videoTestimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Combined Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider mb-6 shadow-lg transform -rotate-1">
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
              What Our Clients Say About <span className="text-primary">Teknoppy</span> — Web Design Agency Kerala
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Hundreds of businesses across Kerala have trusted our website design Kerala expertise to build their online presence — here is what some of them have to say about working with Teknoppy web design agency.
            </p>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight shrink-0">
            150+ global clients
          </div>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Testimonial Card */}
          <div 
            className="lg:col-span-4 relative flex flex-col justify-between bg-white rounded-xl p-8 border border-neutral-100 shadow-sm min-h-[440px] md:min-h-[460px] overflow-visible"
          >
            {/* Stacked Cards Effect behind the main card */}
            <div className="absolute inset-0 bg-neutral-50 rounded-xl -translate-y-4 scale-[0.94] border border-neutral-100 -z-20"></div>
            <div className="absolute inset-0 bg-neutral-100/50 rounded-xl -translate-y-2 scale-[0.97] border border-neutral-100 -z-10"></div>

            {/* Top Row: Quote Mark & Controls */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-6xl font-serif font-black text-neutral-200 select-none leading-none">
                “
              </span>
              <div className="flex gap-1.5 bg-neutral-50 border border-neutral-100 p-1 rounded-full">
                <button 
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-600 hover:text-primary hover:bg-neutral-50 shadow-sm transition-all border border-neutral-100"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-600 hover:text-primary hover:bg-neutral-50 shadow-sm transition-all border border-neutral-100"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle: Testimonial Text with slide transition */}
            <div className="flex-grow relative h-48 md:h-52 overflow-hidden mb-8">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex flex-col justify-start"
                >
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-medium italic">
                    "{current.content}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Client Profile */}
            <div className="flex items-center gap-3 pt-6 border-t border-neutral-50">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-800 flex-shrink-0">
                {current.initials}
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">{current.name}</h4>
                <p className="text-xs text-neutral-400 font-medium">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Video Testimonial Preview with 3D Rotation */}
          <div 
            className="lg:col-span-4 relative rounded-xl overflow-visible min-h-[440px] md:min-h-[460px]" 
            style={{ perspective: "1500px" }}
          >
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
                  src={currentVideo.image} 
                  alt={currentVideo.name} 
                  className="w-full h-full object-cover opacity-85 absolute inset-0"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-xl"
                    aria-label="Play video testimonial"
                  >
                    <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  </button>
                </div>

                {/* Video Label Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-white">
                      {currentVideo.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{currentVideo.name}</h4>
                      <p className="text-[10px] text-white/70 font-medium">{currentVideo.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: 3x3 Client Logos Grid */}
          <div className="lg:col-span-4 bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm grid grid-cols-3 divide-x divide-y divide-neutral-100">
            {clientLogos.map((src, i) => (
              <div 
                key={i} 
                className="aspect-square flex items-center justify-center p-6 bg-white hover:bg-neutral-50/50 transition-colors duration-300 border-neutral-100"
              >
                <img 
                  src={src} 
                  alt="Client brand logo" 
                  className="max-h-full max-w-full object-contain grayscale mix-blend-multiply opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

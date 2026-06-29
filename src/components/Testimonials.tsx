import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Arun Mathew",
    role: "Greenleaf Exports, Kochi, Kerala",
    content: "Teknoppy completely transformed our online presence. Within three months of the new website going live, our enquiries doubled and our Google ranking moved from page 3 to page 1 for our target keyword. The team was professional, on time, and genuinely understood what our business needed.",
    rating: 5,
    initials: "AM"
  },
  {
    name: "Priya Nair",
    role: "Nair Jewellery House, Thrissur, Kerala",
    content: "We approached Teknoppy for a full website redesign and SEO setup. The results have been outstanding. Our website now loads in under two seconds, ranks for multiple keywords, and our sales inquiries have increased by over 40 percent. Highly recommended for any Kerala business serious about digital growth.",
    rating: 5,
    initials: "PN"
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Suresh Medical Centre, Ernakulam, Kerala",
    content: "The team at Teknoppy delivered exactly what they promised — a clean, fast, and SEO-optimised website for our clinic. Patients now find us easily on Google and our appointment bookings through the website have grown consistently month on month.",
    rating: 5,
    initials: "SK"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
      transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] }
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-[#FAFAFA] relative overflow-hidden perspective-[1000px]" id="testimonials">
      {/* Decorative gradient meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full blur-[100px] -z-10 animate-[spin_20s_linear_infinite]"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-sm font-bold text-black uppercase tracking-wider mb-8">
            <MessageSquareQuote className="w-4 h-4 text-primary" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black mb-6">
            What Our Clients Say About Teknoppy — <br className="hidden lg:block"/> Web Design Agency Kerala
          </h2>
          <p className="text-xl text-muted font-medium leading-relaxed max-w-3xl mx-auto">
            Hundreds of businesses across Kerala have trusted our website design Kerala expertise to build their online presence — here is what some of them have to say about working with Teknoppy web design agency.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto min-h-[480px] md:min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
              className="absolute inset-0 w-full"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Hidden Review Schema Entity for Teknoppy */}
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="Teknoppy" />
              </div>

              <div className="bg-white/80 backdrop-blur-2xl border-2 border-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] h-full flex flex-col md:flex-row items-center gap-10 cursor-grab active:cursor-grabbing relative overflow-hidden group">
                
                {/* Large Background Quote */}
                <Quote className="absolute -top-10 -right-10 w-64 h-64 text-primary/5 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />

                {/* Left Side: Avatar & Info (Desktop) */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-10 z-10" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-black text-black">
                      {currentTestimonial.initials}
                    </div>
                  </div>
                  <h4 className="font-black text-2xl text-black mb-2" itemProp="name">{currentTestimonial.name}</h4>
                  <p className="text-sm font-bold text-muted uppercase tracking-wider leading-relaxed">{currentTestimonial.role}</p>
                </div>

                {/* Right Side: Review Content */}
                <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left z-10">
                  <div className="flex gap-1.5 mb-8 bg-gray-50 px-4 py-2 rounded-full border border-border inline-flex" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={currentTestimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary drop-shadow-sm" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-black leading-relaxed mb-8 italic" itemProp="reviewBody">
                    "{currentTestimonial.content}"
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none -mx-6 md:-mx-8 lg:-mx-16 z-20">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-black hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-black hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary scale-125 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-32">
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-black text-black uppercase tracking-wider hover:text-primary transition-all">
            See all our verified Google reviews
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

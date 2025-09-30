import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import partner logos
import kattiLogo from '../assets/katti-logo.png';
import knecLogo from '../assets/logo_knec_new.png';
import moeLogo from '../assets/MOE-logo.jpg';
import nitaLogo from '../assets/NITA-Logo.png';
import tvetCdaccLogo from '../assets/TVET-CDACC-logo.png';
import tvetaLogo from '../assets/TVETA-web-Logo.png';

const testimonials = [
  {
    id: 1,
    quote: "I studied in AIRADS Kericho Campus in 2016. Indeed it is where my dreams were hatched and ultimately I am who I am today because of this institution.",
    author: "Janeth Chepkorir",
    details: "Class of 2016, Kericho Campus",
    course: "Business Administration",
    image: "👩‍🎓"
  },
  {
    id: 2,
    quote: "AIRADS College provided me with the practical skills and knowledge I needed to excel in my career. The lecturers were supportive and the learning environment was exceptional.",
    author: "David Kimani",
    details: "Class of 2018, Nairobi Campus",
    course: "Information Technology",
    image: "👨‍💻"
  },
  {
    id: 3,
    quote: "The hands-on approach to learning at AIRADS prepared me for the real world. I'm now running my own successful business thanks to the entrepreneurship skills I gained here.",
    author: "Mary Wanjiku",
    details: "Class of 2019, Eldoret Campus",
    course: "Entrepreneurship",
    image: "👩‍💼"
  },
  {
    id: 4,
    quote: "AIRADS College changed my life completely. The quality education and mentorship I received here opened doors to opportunities I never imagined possible.",
    author: "James Mwangi",
    details: "Class of 2020, Mombasa Campus",
    course: "Hospitality Management",
    image: "👨‍🍳"
  }
];

const partners = [
  { id: 1, name: "KATTI", logo: kattiLogo },
  { id: 2, name: "KNEC", logo: knecLogo },
  { id: 3, name: "Ministry of Education", logo: moeLogo },
  { id: 4, name: "NITA", logo: nitaLogo },
  { id: 5, name: "TVET CDACC", logo: tvetCdaccLogo },
  { id: 6, name: "TVETA", logo: tvetaLogo }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-red-400 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-white to-red-200 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mx-auto"></div>
          </div>

          {/* Testimonial Slider */}
          <div 
            className="max-w-4xl mx-auto relative"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/40 to-red-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              {/* Sliding Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Avatar Section */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                          {testimonial.image}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Quote */}
                        <blockquote className="text-base md:text-lg mb-4 leading-relaxed italic text-gray-100">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Author Info */}
                        <div className="border-t border-white/20 pt-4">
                          <cite className="text-lg md:text-xl font-bold not-italic bg-gradient-to-r from-blue-200 to-red-200 bg-clip-text text-transparent block mb-1">
                            {testimonial.author}
                          </cite>
                          <p className="text-blue-200 text-sm font-medium mb-1">
                            {testimonial.details}
                          </p>
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-full border border-white/20">
                            <p className="text-red-200 text-xs font-semibold">
                              Course: {testimonial.course}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-400 to-red-400 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-blue-800/30 to-red-800/30 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-200 to-red-200 bg-clip-text text-transparent">5000+</h3>
              <p className="text-blue-200 text-sm">Graduates</p>
            </div>
            <div className="bg-gradient-to-br from-red-800/30 to-blue-800/30 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-red-200 to-blue-200 bg-clip-text text-transparent">90-100%</h3>
              <p className="text-red-200 text-sm">Pass Rate</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-red-800/30 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-200 to-red-200 bg-clip-text text-transparent">7</h3>
              <p className="text-blue-200 text-sm">Campuses</p>
            </div>
          </div>
        </div>
      </section>

     {/* Our Partners Section */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
        Our Partners
      </h2>
      <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
    </div>
    {/* Sliding Logos */}
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {partners.map((partner) => (
          <div
            key={`first-${partner.id}`}
            className="flex-shrink-0 w-48 h-32 mx-8 flex items-center justify-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {partners.map((partner) => (
          <div
            key={`second-${partner.id}`}
            className="flex-shrink-0 w-48 h-32 mx-8 flex items-center justify-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* CSS Animation */}
  <style>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
    </>
  );
};

export default TestimonialSection;
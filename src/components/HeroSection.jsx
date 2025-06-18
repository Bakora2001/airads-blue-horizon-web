
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Welcome to AIRADS College",
      subtitle: "Where Quality Education Meets Excellence",
      description: "A national TVET technical training college - Centre of Excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Excellence in Technical Education",
      subtitle: "18 Years of Consistent KNEC Excellence",
      description: "90-100% pass rate in KNEC, NITA, ICM & KASNEB Exams"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Innovation & Technology",
      subtitle: "Cutting-edge Learning Experience",
      description: "Modern facilities and qualified experienced trainers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(185, 28, 28, 0.3)), url(${slide.image})`
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl mb-6 text-blue-100 animate-fade-in">
                  {slide.subtitle}
                </h2>
                <p className="text-xl mb-8 leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                <div className="space-x-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                    Apply Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

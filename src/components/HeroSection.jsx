import { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'src/public/63.JPG',
    'src/public/68.JPG',
    'src/public/6.7.JPG',
    'src/public/7.1.JPG',
    'src/public/11.jpg',
    'src/public/14 (2).jpg',
    'src/public/17.jpg',
    'src/public/31.jpg',
    '/assets/33.JPG'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm md:text-base text-white drop-shadow-lg">
              Centre of Excellence with 18 years of consistent KNEC excellence and 90-100% pass rate in KNEC, NITA, ICM & KASNEB Exams.
            </p>
            <div className="mt-4">
              <a 
                href="/admissions" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-md inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
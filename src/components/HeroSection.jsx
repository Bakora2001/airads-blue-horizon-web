import videoBackground from "../assets/Airads-home-video-1.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-20">
        <div className="max-w-3xl text-white drop-shadow-lg">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            Welcome to <span className="text-neutral-200">AIRADS College</span>
          </h1>
          <h2 className="text-2xl mb-6 text-neutral-200 animate-fade-in">
            Where Quality Education Meets Excellence
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-neutral-100 animate-fade-in">
            A national TVET technical training college - Centre of Excellence with 18 years of consistent KNEC excellence and 90-100% pass rate in KNEC, NITA, ICM & KASNEB Exams.
          </p>
          <div className="space-x-4">
            <a 
              href="https://admissions.airads.ac.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-md inline-block"
            >
              Apply Now
            </a>
            <a 
              href="/admissions" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-md inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
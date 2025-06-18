
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Schools = () => {
  const schools = [
    {
      name: "School of Engineering & ICT",
      description: "Offering cutting-edge programs in electrical, electronic, and information technology fields.",
      programs: ["Electrical Engineering", "Electronic Engineering", "Information Technology", "Computer Science"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "School of Hospitality & Tourism Management",
      description: "Comprehensive training in hospitality, tourism, and customer service excellence.",
      programs: ["Hotel Management", "Tourism Management", "Catering Services", "Event Management"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      name: "School of Health & Social Sciences",
      description: "Preparing healthcare professionals and social workers for community service.",
      programs: ["Community Health", "Social Work", "Counseling", "Public Health"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      name: "School of Beauty & Hair Dressing",
      description: "Professional training in beauty therapy, cosmetology, and hair styling.",
      programs: ["Beauty Therapy", "Hair Dressing", "Cosmetology", "Nail Technology"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      name: "School of Media Studies",
      description: "Modern media training covering journalism, broadcasting, and digital media.",
      programs: ["Journalism", "Broadcasting", "Digital Media", "Film Production"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "School of Business Management",
      description: "Comprehensive business training for entrepreneurship and corporate leadership.",
      programs: ["Business Administration", "Project Management", "Entrepreneurship", "Finance"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Our Schools</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AIRADS College offers diverse academic programs through specialized schools, each designed to provide 
              industry-relevant skills and knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {schools.map((school, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(185, 28, 28, 0.3)), url(${school.image})`
                  }}
                >
                  <div className="h-full flex items-center justify-center p-6">
                    <h3 className="text-white text-2xl font-bold text-center">
                      {school.name}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {school.description}
                  </p>
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Key Programs:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {school.programs.map((program, programIndex) => (
                      <div key={programIndex} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm">
                        {program}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Explore Programs
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-800 to-red-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6">Choose your path and join thousands of successful graduates</p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              APPLY TODAY
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schools;

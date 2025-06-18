
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Students = () => {
  const studentServices = [
    {
      title: "Student Mentoring and Leadership Programs (LAMP)",
      description: "Comprehensive programs designed to develop leadership skills and provide guidance throughout your academic journey.",
      icon: "🎯"
    },
    {
      title: "Students Hostels",
      description: "Modern male and female hostels providing safe and comfortable accommodation for our students.",
      icon: "🏠"
    },
    {
      title: "Academic Trips & Tours",
      description: "Educational excursions and field trips to enhance practical learning and industry exposure.",
      icon: "🚌"
    },
    {
      title: "Sports and Talent Development",
      description: "Various sports activities and talent development initiatives to nurture holistic growth.",
      icon: "⚽"
    },
    {
      title: "Industrial Attachment Placements",
      description: "Guaranteed placement opportunities in leading companies for hands-on experience.",
      icon: "🏭"
    },
    {
      title: "Free Internet & WiFi",
      description: "Unlimited internet access across all campuses for research and academic purposes.",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Student Life</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At AIRADS College, we provide comprehensive support and services to ensure your academic success 
              and personal development.
            </p>
          </div>

          {/* Student Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {studentServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Student Testimonial */}
          <div className="bg-blue-800 text-white p-8 rounded-xl mb-16">
            <div className="text-center">
              <div className="text-6xl mb-6">"</div>
              <blockquote className="text-2xl mb-8 leading-relaxed italic max-w-4xl mx-auto">
                I studied in AIRADS Kericho Campus in 2016. Indeed it is where my dreams were hatched and 
                ultimately I am who I am today because of this institution. I will live to remember this college.
              </blockquote>
              <div className="border-t border-white/20 pt-6 max-w-md mx-auto">
                <cite className="text-xl font-semibold not-italic">Janeth Chepkorir</cite>
                <p className="text-blue-200 mt-2">Class of 2016, Kericho Campus</p>
              </div>
            </div>
          </div>

          {/* Student Resources */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Student Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="font-bold mb-2">Well-furnished Libraries</h3>
                <p className="text-gray-600 text-sm">Modern libraries with extensive collections</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-bold mb-2">Computer Labs</h3>
                <p className="text-gray-600 text-sm">State-of-the-art computer laboratories</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="font-bold mb-2">Lecture Halls</h3>
                <p className="text-gray-600 text-sm">Modern lecture halls with AV equipment</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="font-bold mb-2">Cafeteria</h3>
                <p className="text-gray-600 text-sm">Affordable meals and refreshments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Students;

import React from 'react';
import TopNavbar from '@/components/TopNavbar';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Award, BookOpen, Wrench, Computer, Zap, Building } from 'lucide-react';

const SchoolOfEngineeringICT = () => {
  const courses = [
    {
      title: "Diploma in Electrical/Electronic Engineering (KNEC)",
      duration: "2 Years",
      type: "Diploma",
      description: "Comprehensive knowledge in electrical and electronic systems with practical applications."
    },
    {
      title: "Diploma in Information Communication Technology",
      duration: "2 Years", 
      type: "Diploma",
      description: "Modern ICT skills and applications for the digital age."
    },
    {
      title: "Certificate in Information Communication Technology",
      duration: "1 Year",
      type: "Certificate",
      description: "Foundational ICT skills for beginners in technology."
    },
    {
      title: "Diploma in Land Mapping and Survey",
      duration: "2 Years",
      type: "Diploma", 
      description: "Comprehensive surveying techniques and mapping technologies."
    },
    {
      title: "Certificate in Land Mapping and Survey",
      duration: "1 Year",
      type: "Certificate",
      description: "Foundational skills in surveying and mapping techniques."
    },
    {
      title: "Certificate in Electrical Installation",
      duration: "6 Months",
      type: "Certificate",
      description: "Practical skills in electrical systems installation and maintenance."
    },
    {
      title: "Certificate in Plumbing (KNEC)",
      duration: "6 Months",
      type: "Certificate",
      description: "Water supply and sanitation systems expertise."
    },
    {
      title: "Artisan in Electrical and Electronic Technology (KNEC)",
      duration: "3 Years",
      type: "Artisan",
      description: "Hands-on technical skills in electrical and electronics."
    },
    {
      title: "Artisan in Plumbing (KNEC)",
      duration: "3 Years",
      type: "Artisan",
      description: "Practical plumbing skills and water systems management."
    },
    {
      title: "Artisan in Electrical Installation (KNEC)",
      duration: "3 Years",
      type: "Artisan",
      description: "Comprehensive electrical installation and maintenance skills."
    }
  ];

  const facilities = [
    "Modern Computer Labs with Latest Software",
    "Electrical Workshop with Industry-Standard Equipment",
    "Electronics Laboratory",
    "Surveying Equipment and Tools",
    "CAD/CAM Software Suite",
    "High-Speed Internet Connectivity",
    "Project Development Center",
    "Technical Library"
  ];

  const careerOpportunities = [
    "Electrical Engineer",
    "ICT Specialist", 
    "Network Administrator",
    "Land Surveyor",
    "Electronics Technician",
    "Systems Analyst",
    "Project Manager",
    "Technical Consultant",
    "Electrical Contractor",
    "Software Developer"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School of Engineering & ICT
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building Tomorrow's Engineers and ICT Professionals
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  <span>90-100% Pass Rate</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  <span>Expert Faculty</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <Building className="h-6 w-6 mr-2" />
                  <span>Modern Facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Engineering & ICT Education
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The School of Engineering and ICT at AIRADS College is at the forefront of technical education, 
                combining theoretical knowledge with practical skills to prepare students for the modern workforce.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our programs are designed to meet industry standards and are approved by KNEC, NITA, and other 
                relevant bodies. We focus on hands-on learning, ensuring our graduates are job-ready upon completion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Programs</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <Computer className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern ICT Labs</h3>
                <p className="text-gray-600">State-of-the-art computer laboratories with latest software and hardware.</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                <Wrench className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Workshops</h3>
                <p className="text-gray-600">Fully equipped workshops for hands-on engineering practice.</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical Labs</h3>
                <p className="text-gray-600">Professional electrical and electronics laboratories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of engineering and ICT programs designed to meet industry needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.type === 'Diploma' ? 'bg-blue-100 text-blue-800' :
                    course.type === 'Certificate' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.type}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our school is equipped with modern facilities that provide students with hands-on experience 
                using industry-standard equipment and software.
              </p>
              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our graduates are highly sought after in various industries. Here are some career paths available:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-blue-800">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Engineering & ICT Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who started their careers at AIRADS College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📞 Call us: 0723-555-999 | 💬 WhatsApp: 0723-555-999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfEngineeringICT;





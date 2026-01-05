import { useState } from "react";

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  // ✅ If public folder is at root level, use these paths
  const courses = [
    {
      title: "Certificate in Project Management",
      description: "AIRADS College is the best technical college offering this comprehensive project management program.",
      category: "Business Management",
      level: "Certificate Courses",
      image: "/17.jpg"
    },
    {
      title: "Diploma in Planning and Project Management",
      description: "Course Overview: This two year diploma course offered at AIRADS focuses on strategic planning and project execution.",
      category: "Business Management",
      level: "Diploma Course",
      image: "/course-2.jpg"
    },
    {
      title: "Diploma in Electrical/Electronic Engineering (KNEC)",
      description: "This is a two years course which aims at equipping learners with comprehensive knowledge in electrical and electronic systems.",
      category: "Engineering",
      level: "Diploma Course",
      image: "/course-3.webp"
    },
    {
      title: "Diploma in Information Communication Technology",
      description: "This course offered at African Institute of Research and Development Studies focuses on modern ICT skills and applications.",
      category: "Computer",
      level: "Diploma Course",
      image: "/course-4.jpg"
    },
    {
      title: "Certificate in Information Communication Technology",
      description: "Certificate in Information Communication Technology course is intended to provide foundational ICT skills.",
      category: "Computer",
      level: "Certificate Courses",
      image: "/18.jpg"
    },
    {
      title: "Diploma in Land Mapping and Survey",
      description: "Course Overview: This two year diploma course offered at AIRADS covers comprehensive surveying techniques.",
      category: "Engineering",
      level: "Diploma Course",
      image: "/course-6.webp"
    },
    {
      title: "Certificate in Land Mapping and Survey",
      description: "Certificate in Land Mapping and Survey course provides foundational skills in surveying and mapping techniques.",
      category: "Engineering",
      level: "Certificate Courses",
      image: "/course-6.webp"
    },
    {
      title: "Certificate in Electrical Installation",
      description: "This Certificate course in Electrical Installation is designed to equip learners with necessary skills in electrical systems.",
      category: "Engineering",
      level: "Certificate Courses",
      image: "/course-8.webp"
    },
    {
      title: "Certificate in Plumbing (KNEC)",
      description: "Plumbing is the system of pipes, tanks, fittings, and other apparatus required for water supply and sanitation.",
      category: "Engineering",
      level: "Certificate Courses",
      image: "/course-1.webp"
    },
    {
      title: "Artisan in Electrical and Electronic Technology (KNEC)",
      description: "This electrical and electronics technology program is designed for hands-on technical skills development.",
      category: "Engineering",
      level: "Artisan Courses",
      image: "/course-9.webp"
    },
    {
      title: "Artisan in Plumbing (KNEC)",
      description: "Artisan course in plumbing focusing on practical skills in water supply and sanitation systems.",
      category: "Engineering",
      level: "Artisan Courses",
      image: "/course-1.webp"
    },
    {
      title: "Artisan in Electrical Installation (KNEC)",
      description: "Hands-on artisan course in electrical installation covering practical electrical systems.",
      category: "Engineering",
      level: "Artisan Courses",
      image: "/course-8.webp"
    },
    {
      title: "Disaster Management",
      description: "Comprehensive course in disaster management and emergency response planning.",
      category: "Safety & Security",
      level: "Certificate Courses",
      image: "/36.jpg"
    },
    {
      title: "Short Courses",
      description: "Various short duration courses designed for quick skill acquisition and professional development.",
      category: "General",
      level: "Short Courses",
      image: "/course-12.jpg"
    },
    {
      title: "NITA Courses",
      description: "National Industrial Training Authority approved courses for professional certification.",
      category: "Professional",
      level: "Certificate Courses",
      image: "/course-13.jpg"
    },
    {
      title: "Packages (Computer Packages)",
      description: "Introduction to computers and various software applications for modern workplace skills.",
      category: "Computer",
      level: "Short Courses",
      image: "/ict.jpeg"
    },
    {
      title: "Engineering",
      description: "Comprehensive engineering programs covering various technical disciplines and practical applications.",
      category: "Engineering",
      level: "Diploma Course",
      image: "/electrical-1.jpg"
    },
    {
      title: "Beauty",
      description: "Beauty therapy and cosmetology courses focusing on professional beauty skills and techniques.",
      category: "Beauty and Cosmetology",
      level: "Short Courses",
      image: "/beauty-1.JPG"
    }
  ];

  const schools = [
    "All Courses",
    "SCHOOL OF ENGINEERING & ICT",
    "SCHOOL OF HOSPITALITY & TOURISM",
    "SCHOOL OF MEDIA STUDIES",
    "SCHOOL OF BEAUTY",
    "SCHOOL OF BUSINESS MGT",
    "SCHOOL OF HEALTH SCIENCES",
    "SHORT COURSES"
  ];

  const filters = [
    "All Courses",
    "Artisan Courses",
    "Beauty and Cosmetology",
    "Business Management",
    "Certificate Courses",
    "Computer",
    "Diploma Course",
    "Engineering",
    "General",
    "Professional",
    "Safety & Security",
    "Short Courses"
  ];

  const filteredCourses = activeFilter === "All Courses" 
    ? courses 
    : courses.filter(course => 
        course.category === activeFilter || course.level === activeFilter
      );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 mb-6">Courses We Offer</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AIRADS College is the best college in Kenya. We have various courses approved by the Ministry of Education and TVETA.
          </p>
        </div>

        {/* Schools Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-800">Our Campuses</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-blue-800 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => setActiveFilter(school === "All Courses" ? "All Courses" : school)}
              >
                <div className="text-sm font-medium">{school}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-blue-800 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-red-600 text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-red-600 text-white p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">JANUARY 2026 INTAKE ONGOING</h3>
            <p className="text-xl mb-6">Intake in Progress in all our Campuses</p>
            <a
              href="https://admissions.airads.ac.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              APPLY NOW
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
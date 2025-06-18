
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MainNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-blue-800">
              AIRADS <span className="text-red-600">COLLEGE</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/about/mission" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Mission and Vision
                  </Link>
                  <Link to="/about/history" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Our History
                  </Link>
                  <Link to="/about/why-study" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Why Study at Airads
                  </Link>
                </div>
              )}
            </div>

            {/* Admissions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('admissions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Admissions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'admissions' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/admissions/procedure" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Application Procedure
                  </Link>
                  <Link to="/admissions/forms" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Application Forms
                  </Link>
                  <Link to="/admissions/apply-online" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Apply Online
                  </Link>
                  <Link to="/admissions/career-guide" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Career Guide & Prospectus
                  </Link>
                </div>
              )}
            </div>

            {/* Campuses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('campuses')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Campuses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'campuses' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/campuses/bungoma" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Bungoma
                  </Link>
                  <Link to="/campuses/kericho" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Kericho
                  </Link>
                  <Link to="/campuses/eldoret" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Eldoret
                  </Link>
                  <Link to="/campuses/kisumu" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Kisumu
                  </Link>
                  <Link to="/campuses/nakuru" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Nakuru
                  </Link>
                  <Link to="/campuses/lodwar" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Lodwar
                  </Link>
                  <Link to="/campuses/maralal" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Maralal
                  </Link>
                  <Link to="/campuses/virtual" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Virtual Campus
                  </Link>
                </div>
              )}
            </div>

            {/* Schools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('schools')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Schools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'schools' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/schools/engineering-ict" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    School of Engineering and ICT
                  </Link>
                  <Link to="/schools/hospitality-tourism" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    School of Hospitality and Tourism MGT
                  </Link>
                  <Link to="/schools/health-social" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    School of Health and Social Sciences
                  </Link>
                  <Link to="/schools/beauty-hairdressing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    School of Beauty and Hair dressing
                  </Link>
                  <Link to="/schools/media" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    School of Media
                  </Link>
                  <Link to="/schools/nita-courses" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    NITA courses & Short Courses
                  </Link>
                </div>
              )}
            </div>

            {/* News Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('news')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                News <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'news' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/news/latest" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Latest News
                  </Link>
                  <Link to="/news/events" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Events & Upcoming Events
                  </Link>
                </div>
              )}
            </div>

            <Link to="/students" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Students
            </Link>

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'contact' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                  <Link to="/contact/contacts" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Our Contacts
                  </Link>
                  <Link to="/contact/inquiries" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Inquiries
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

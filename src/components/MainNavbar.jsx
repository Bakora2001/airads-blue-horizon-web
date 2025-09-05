import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/airads-logo.png";

const MainNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-40 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo and Institution Name */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="AIRADS College Logo" className="h-12 md:h-14" />
            </Link>
            <div className="hidden md:block">
              <h1 className="text-blue-800  font-bold text-lg leading-tight">
                AFRICAN INSTITUTE <br/>
                <span className="text-red-600"> Of Research and Development Studies</span>
              </h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm whitespace-nowrap">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                About Us <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'about' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/about/mission" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Mission and Vision
                  </Link>
                  <Link to="/about/history" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Our History
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                Admissions <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'admissions' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/admissions/procedure" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Application Procedure
                  </Link>
                  <Link to="/admissions/forms" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Application Forms
                  </Link>
                  <Link to="https://admissions.airads.ac.ke/" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Apply Online
                  </Link>
                  <Link to="/admissions/career-guide" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                Campuses <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'campuses' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/campuses/bungoma" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Bungoma
                  </Link>
                  <Link to="/campuses/kericho" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Kericho
                  </Link>
                  <Link to="/campuses/eldoret" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Eldoret
                  </Link>
                  <Link to="/campuses/kisumu" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Kisumu
                  </Link>
                  <Link to="/campuses/nakuru" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Nakuru
                  </Link>
                  <Link to="/campuses/lodwar" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Lodwar
                  </Link>
                  <Link to="/campuses/maralal" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Maralal
                  </Link>
                  <Link to="/campuses/virtual" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                Schools <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'schools' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/schools/engineering-ict" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    School of Engineering and ICT
                  </Link>
                  <Link to="/schools/hospitality-tourism" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    School of Hospitality and Tourism MGT
                  </Link>
                  <Link to="/schools/health-social" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    School of Health and Social Sciences
                  </Link>
                  <Link to="/schools/beauty-hairdressing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    School of Beauty and Hair dressing
                  </Link>
                  <Link to="/schools/media" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    School of Media
                  </Link>
                  <Link to="/schools/nita-courses" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                Events <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'news' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/news/latest" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Events & News
                  </Link>
                </div>
              )}
            </div>

            <Link to="/students" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm whitespace-nowrap">
              Students
            </Link>

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm py-2 whitespace-nowrap">
                Contact Us <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {openDropdown === 'contact' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link to="/contact/" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Our Contacts
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
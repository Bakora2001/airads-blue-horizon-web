import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/airads-logo.png";

const MainNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-40 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo and Institution Name */}
            <div className="flex items-center space-x-4">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={logo} alt="AIRADS College Logo" className="h-12 md:h-14" />
              </Link>
              <div className="hidden md:block">
                <h1 className="text-blue-800 font-bold text-lg leading-tight">
                  AFRICAN INSTITUTE <br/>
                  <span className="text-red-600"> Of Research and Development Studies</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
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
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 p-2"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button 
            onClick={closeMobileMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          <nav className="p-4 space-y-2">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Home
            </Link>

            {/* About Us Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                About Us
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'about' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'about' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/about/mission" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Mission and Vision
                  </Link>
                  <Link to="/about/history" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Our History
                  </Link>
                </div>
              )}
            </div>

            {/* Admissions Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('admissions')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Admissions
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'admissions' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'admissions' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/admissions/procedure" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Application Procedure
                  </Link>
                  <Link to="/admissions/forms" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Application Forms
                  </Link>
                  <Link to="https://admissions.airads.ac.ke/" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Apply Online
                  </Link>
                  <Link to="/admissions/career-guide" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Career Guide & Prospectus
                  </Link>
                </div>
              )}
            </div>

            {/* Campuses Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('campuses')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Campuses
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'campuses' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'campuses' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/campuses/bungoma" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Bungoma
                  </Link>
                  <Link to="/campuses/kericho" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Kericho
                  </Link>
                  <Link to="/campuses/eldoret" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Eldoret
                  </Link>
                  <Link to="/campuses/kisumu" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Kisumu
                  </Link>
                  <Link to="/campuses/nakuru" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Nakuru
                  </Link>
                  <Link to="/campuses/lodwar" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Lodwar
                  </Link>
                  <Link to="/campuses/maralal" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Maralal
                  </Link>
                  <Link to="/campuses/virtual" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Virtual Campus
                  </Link>
                </div>
              )}
            </div>

            {/* Schools Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('schools')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Schools
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'schools' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'schools' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/schools/engineering-ict" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    School of Engineering and ICT
                  </Link>
                  <Link to="/schools/hospitality-tourism" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    School of Hospitality and Tourism MGT
                  </Link>
                  <Link to="/schools/health-social" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    School of Health and Social Sciences
                  </Link>
                  <Link to="/schools/beauty-hairdressing" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    School of Beauty and Hair dressing
                  </Link>
                  <Link to="/schools/media" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    School of Media
                  </Link>
                  <Link to="/schools/nita-courses" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    NITA courses & Short Courses
                  </Link>
                </div>
              )}
            </div>

            {/* Events Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('news')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Events
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'news' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'news' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/news/latest" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Events & News
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/students" 
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              Students
            </Link>

            {/* Contact Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('contact')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Contact Us
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdownOpen === 'contact' ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdownOpen === 'contact' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/contact/" onClick={closeMobileMenu} className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Our Contacts
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
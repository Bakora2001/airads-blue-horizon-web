import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Contact = () => {
  const campusContacts = [
    { name: "ELDORET Campus", phone: "0715-696-979" },
    { name: "NAKURU Campus", phone: "" },
    { name: "KERICHO Campus", phone: "0729-976-885" },
    { name: "KISUMU Campus", phone: "0715-505-262" },
    { name: "BUNGOMA Campus", phone: "0715-771-316" },
    { name: "LODWAR Campus", phone: "0723-555-999" },
    { name: "MARALAL Campus", phone: "0723-555-999" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20 mt-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-red-600 mb-8 leading-tight">
                Contact Us
              </h1>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full opacity-50"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Get in touch with us for admissions, inquiries, or any information about 
              <span className="font-semibold text-blue-800"> AIRADS College</span>.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center xl:text-left">
                <h2 className="text-4xl font-black text-blue-800 mb-4 relative">
                  Our Contacts
                  <div className="absolute -bottom-2 left-0 xl:left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mx-auto xl:mx-0"></div>
                </h2>
                <p className="text-gray-600 text-lg mt-6">We're here to help you every step of the way</p>
              </div>
              
              {/* Head Office Card */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    HQ
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Head Office</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <span className="text-blue-600 text-lg">📍</span>
                    </div>
                    <span className="text-gray-700 font-medium">Institute Plaza 3rd & 4th Floor</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                      <span className="text-green-600 text-lg">📞</span>
                    </div>
                    <a href="tel:+254723555999" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                      +254 723 555 999
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors group">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                      <span className="text-purple-600 text-lg">📧</span>
                    </div>
                    <a href="mailto:info@airads.ac.ke" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                      info@airads.ac.ke
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors group">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                      <span className="text-indigo-600 text-lg">🌐</span>
                    </div>
                    <a href="https://www.airads.ac.ke" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                      www.airads.ac.ke
                    </a>
                  </div>
                </div>
              </div>

              {/* Campus Contacts Card */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    📱
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Campus Contact Numbers</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {campusContacts.map((campus, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:scale-102 group"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-300 transition-colors">
                          <span className="text-blue-700 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="font-semibold text-gray-800">{campus.name}</span>
                      </div>
                      <a 
                        href={`tel:${campus.phone}`} 
                        className="text-blue-700 hover:text-blue-900 font-bold px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200 transition-all duration-200"
                      >
                        {campus.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="space-y-8">
              <div className="text-center xl:text-left">
                <h2 className="text-4xl font-black text-blue-800 mb-4 relative">
                  Send us an Inquiry
                  <div className="absolute -bottom-2 left-0 xl:left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mx-auto xl:mx-0"></div>
                </h2>
                <p className="text-gray-600 text-lg mt-6">We'll get back to you within 24 hours</p>
              </div>
              
              <form className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wider">Subject</label>
                    <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white">
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Course Information</option>
                      <option>Campus Visit</option>
                      <option>Financial Aid</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-800 font-bold mb-3 text-sm uppercase tracking-wider">Message</label>
                  <textarea 
                    rows="6" 
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-red-600 hover:from-blue-800 hover:via-blue-900 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute top-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 -translate-y-30"></div>
              <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-white rounded-full -translate-x-40 translate-y-40"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-4">Other Ways to Reach Us</h3>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Choose your preferred communication method for faster support
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group hover:scale-110 transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl group-hover:bg-opacity-30 transition-all duration-300">
                    💬
                  </div>
                  <h4 className="text-2xl font-bold mb-4">WhatsApp</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Send us a WhatsApp message for quick responses and instant support
                  </p>
                </div>
                
                <div className="group hover:scale-110 transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl group-hover:bg-opacity-30 transition-all duration-300">
                    📱
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Facebook Messenger</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Connect with us through Facebook Messenger for social support
                  </p>
                </div>
                
                <div className="group hover:scale-110 transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl group-hover:bg-opacity-30 transition-all duration-300">
                    📞
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Call/SMS</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Call or send SMS to any of our campus numbers for direct communication
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-6">
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                    📞 Call Now
                  </button>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
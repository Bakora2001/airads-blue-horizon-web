import React from 'react';

const WelcomeSection = () => {
  const whyJoinReasons = [
    {
      title: "Excellent KNEC Pass Rate ",
      description: "90-100% pass rate in KNEC, NITA, ICM & KASNEB Exams for 18 years consistently",
      icon: "🏆",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Qualified Trainers",
      description: "Experienced and qualified trainers dedicated to student success",
      icon: "👨‍🏫",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Learning Resources",
      description: "Well-furnished lecture halls, computers, internet, books and furniture",
      icon: "📚",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Free Internet & WiFi",
      description: "Free internet and WiFi access for research and learning",
      icon: "🌐",
      color: "from-red-600 to-red-700"
    },
    {
      title: "Student Diversity",
      description: "6 National campuses across the country serving diverse students",
      icon: "🌍",
      color: "from-blue-700 to-blue-800"
    },
    {
      title: "Industrial Attachment",
      description: "Industrial attachment placements and mentoring programs",
      icon: "🏭",
      color: "from-red-700 to-red-800"
    }
  ];

  const campusContacts = [
    { campus: "ELDORET Campus", contact: "0715696979" },
    { campus: "NAKURU Campus", contact: "0711488302" },
    { campus: "KERICHO Campus", contact: "0729976885" },
    { campus: "KISUMU Campus", contact: "0715057262" },
    { campus: "BUNGOMA Campus", contact: "0715771316" },
    { campus: "MARALAL Campus", contact: "0717885888" },
    { campus: "Head Office", contact: "0723555999" }
  ];

  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/[-\s]/g, '');
    window.open(`https://wa.me/254${formattedNumber.substring(1)}`, '_blank');
  };

  const handleWebsiteVisit = () => {
    window.open('https://www.airads.ac.ke', '_blank');
  };

  const handleFacebookVisit = () => {
    window.open('https://www.facebook.com/www.airads.ac.ken/', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* CEO Welcome Message */}
        <div className="bg-white rounded-2xl shadow-2xl mb-16 overflow-hidden animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* CEO Photo */}
            <div className="lg:col-span-2 relative">
              <div className="h-full min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
                <img 
                  src="/src/public/ceo-min.png" 
                  alt="AIRADS College CEO" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
                    <p className="font-bold text-lg">CEO Message</p>
                    <p className="text-sm opacity-90">Welcome to Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Welcome Content */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-600 to-red-600 rounded-full"></div>
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-red-600 bg-clip-text text-transparent">
                    Welcome to AIRADS College
                  </h1>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Welcome to AIRADS College a national TVET technical training college. We are the best college 
                    registered and licensed by TVETA, a Centre of Excellence where Quality is Nurtured.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    We focus on Technical vocational Education and training TVET - TVET education worldwide is seen 
                    as a tool that empowers trainees with practical skills.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl border-l-4 border-gradient-to-b border-blue-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <p className="text-blue-800 font-bold text-xl">A Centre of Excellence <span className="text-red-600 font-semibold" >Where Quality is Nurtured</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join AIRADS College - Enhanced Section */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-red-600 bg-clip-text text-transparent mb-4">
              Why Join AIRADS College?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 opacity-20`}></div>
                    <div className="relative text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${reason.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Section - Enhanced with Clickable Links */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white p-10 rounded-2xl shadow-2xl animate-fade-in">
          <h3 className="text-4xl font-bold mb-8 text-center animate-scale-in">How to Apply or Register</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Registration Methods */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">📞</div>
                  <h4 className="text-xl font-bold">Call/SMS/WhatsApp</h4>
                </div>
                <p className="text-blue-100 mb-4">Contact any of our campus admission lines</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {campusContacts.map((campus, index) => (
                    <div key={index} className="bg-blue/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                      <div className="font-semibold text-red-400 mb-1">{campus.campus}</div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handlePhoneCall(campus.contact)}
                          className="text-white hover:text-yellow-200 transition-colors duration-200 underline"
                        >
                          📞 Call
                        </button>
                        <span className="text-white">|</span>
                        <button 
                          onClick={() => handleWhatsApp(campus.contact)}
                          className="text-white hover:text-green-300 transition-colors duration-200 underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </button>
                      </div>
                      <div className="text-white text-xs mt-1">{campus.contact}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">💻</div>
                    <h4 className="text-xl font-bold">Apply Online</h4>
                  </div>
                  <p className="text-blue-100 mb-3">Visit our website to apply online</p>
                  <a 
                    href="https://admissions.airads.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 w-full block text-left group"
                  >
                    <span className="text-yellow-200 font-semibold group-hover:text-yellow-100">
                      🌐 https://admissions.airads.ac.ke/
                    </span>
                  </a>
            </div>

            </div>

            {/* Additional Contact Methods */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Facebook Messenger</h4>
                </div>
                <p className="text-blue-100 mb-3">Use Facebook inbox to reach us instantly</p>
                <button 
                  onClick={handleFacebookVisit}
                  className="bg-white/10 hover:bg-blue-600/30 p-3 rounded-lg transition-all duration-300 w-full text-left group flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-yellow-200 font-semibold group-hover:text-yellow-100">
                    AIRADS College Facebook Page
                  </span>
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🏢</div>
                  <h4 className="text-xl font-bold">Head Office</h4>
                </div>
                <p className="text-blue-100 mb-3">Contact our main office for general inquiries</p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handlePhoneCall('0723555999')}
                    className="bg-white/10 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 flex-1 group"
                  >
                    <span className="text-yellow-200 font-semibold group-hover:text-yellow-100">
                      📞 0723555999
                    </span>
                  </button>
                  <button 
                    onClick={() => handleWhatsApp('0723-555-999')}
                    className="bg-green-600/20 hover:bg-green-600/40 p-3 rounded-lg transition-all duration-300 flex-1 group flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-green-200 font-semibold group-hover:text-green-100">
                      WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/30 to-red-500/30 border-2 border-red-400 p-6 rounded-xl animate-pulse hover:from-red-600/50 hover:to-red-500/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2 text-blue-200 flex items-center">
                  📢 Register Now! 
                  <span className="ml-2 text-2xl animate-bounce">🎓</span>
                </h4>
                <p className="text-white">Don't miss out on our quality education. Contact us today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WelcomeSection;
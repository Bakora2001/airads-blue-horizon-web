
const WelcomeSection = () => {
  const features = [
    {
      title: "Excellent KNEC Pass Rate",
      description: "90-100% pass rate in KNEC, NITA, ICM & KASNEB Exams for 18 years consistently",
      icon: "🏆"
    },
    {
      title: "Qualified Trainers",
      description: "Experienced and qualified trainers dedicated to student success",
      icon: "👨‍🏫"
    },
    {
      title: "Learning Resources",
      description: "Well-furnished lecture halls, computers, internet, books and furniture",
      icon: "📚"
    },
    {
      title: "Free Internet & WiFi",
      description: "Free internet and WiFi access for research and learning",
      icon: "🌐"
    },
    {
      title: "Student Diversity",
      description: "6 National campuses across the country serving diverse students",
      icon: "🌍"
    },
    {
      title: "Industrial Attachment",
      description: "Industrial attachment placements and mentoring programs",
      icon: "🏭"
    }
  ];

  const campusContacts = [
    { campus: "ELDORET Campus", contact: "0715-696-979" },
    { campus: "NAKURU Campus", contact: "0711-488-302" },
    { campus: "KERICHO Campus", contact: "0729-976-885" },
    { campus: "KISUMU Campus", contact: "0715-505-262" },
    { campus: "BUNGOMA Campus", contact: "0715-771-316" },
    { campus: "Head Office", contact: "0723-555-999" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="text-center mb-4">
          <h1 className="text-6xl font-bold text-blue-800 mb-6 animate-fade-in">
            Welcome to AIRADS College
          </h1>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 animate-fade-in">
            Why Join AIRADS College?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Welcome to AIRADS College, a national TVET technical training college. We are the best college 
            registered and licensed by TVETA, a Centre of Excellence where Quality is nurtured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 animate-pulse">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-red-600 text-white p-10 rounded-2xl shadow-2xl animate-fade-in">
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
                    <div key={index} className="bg-white/10 p-3 rounded-lg">
                      <div className="font-semibold text-yellow-200">{campus.campus}</div>
                      <div className="text-white">{campus.contact}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">💻</div>
                  <h4 className="text-xl font-bold">Apply Online</h4>
                </div>
                <p className="text-blue-100">Visit our website to apply online</p>
                <div className="mt-3 bg-white/10 p-3 rounded-lg">
                  <span className="text-yellow-200 font-semibold">www.airads.ac.ke</span>
                </div>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">📱</div>
                  <h4 className="text-xl font-bold">Facebook Messenger</h4>
                </div>
                <p className="text-blue-100">Use Facebook inbox to reach us instantly</p>
                <div className="mt-3 bg-white/10 p-3 rounded-lg">
                  <span className="text-yellow-200 font-semibold">AIRADS College Facebook Page</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🏢</div>
                  <h4 className="text-xl font-bold">Head Office</h4>
                </div>
                <p className="text-blue-100">Contact our main office for general inquiries</p>
                <div className="mt-3 bg-white/10 p-3 rounded-lg">
                  <span className="text-yellow-200 font-semibold">0723-555-999</span>
                </div>
              </div>

              <div className="bg-red-600/20 border-2 border-red-400 p-6 rounded-xl animate-pulse">
                <h4 className="text-xl font-bold mb-2 text-yellow-200">📢 Register Now!</h4>
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

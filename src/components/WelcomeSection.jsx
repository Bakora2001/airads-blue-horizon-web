
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 mb-6">
            Why Join AIRADS College?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to AIRADS College, a national TVET technical training college. We are the best college 
            registered and licensed by TVETA, a Centre of Excellence where Quality is nurtured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">How to Apply or Register</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <h4 className="font-bold mb-2">Call/SMS/WhatsApp</h4>
              <p className="text-sm">Contact any of our campus admission lines</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="font-bold mb-2">Apply Online</h4>
              <p className="text-sm">Visit www.airads.ac.ke to apply online</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-bold mb-2">Facebook Messenger</h4>
              <p className="text-sm">Use Facebook inbox to reach us</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🏢</div>
              <h4 className="font-bold mb-2">Head Office</h4>
              <p className="text-sm">Contact: 0723 555 999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

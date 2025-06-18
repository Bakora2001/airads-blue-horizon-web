
const CampusesSection = () => {
  const campuses = [
    {
      name: "KERICHO TOWN CAMPUS",
      phone: "0729-976-885",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Located in the heart of Kericho, offering comprehensive technical programs."
    },
    {
      name: "ELDORET TOWN CAMPUS",
      phone: "0715-696-979",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Modern facilities in Eldoret serving the Rift Valley region."
    },
    {
      name: "BUNGOMA TOWN CAMPUS",
      phone: "0715-771-316",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "Strategic location in Bungoma with state-of-the-art equipment."
    },
    {
      name: "LODWAR TOWN CAMPUS",
      phone: "0723-555-999",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Serving the Turkana region with quality technical education."
    },
    {
      name: "KISUMU CITY CAMPUS",
      phone: "0715-505-262",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Located in the lakeside city, offering diverse programs."
    },
    {
      name: "NAKURU CAMPUS",
      phone: "0711-488-302",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "Central location serving students across Kenya."
    },
    {
      name: "MARALAL CAMPUS",
      phone: "0723-555-999",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Bringing quality education to Northern Kenya."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 mb-6">Our Campuses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With 6 National campuses across the country, we bring quality technical education closer to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.3), rgba(185, 28, 28, 0.2)), url(${campus.image})`
                }}
              >
                <div className="h-full flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {campus.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {campus.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-800">
                    <span className="text-lg mr-2">📞</span>
                    <span className="font-semibold">{campus.phone}</span>
                  </div>
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-600 to-blue-800 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">SPECIAL OFFER ON 14 COMPUTER PACKAGES</h3>
            <p className="text-xl mb-6 max-w-4xl mx-auto">
              We offer special offers on 14 computer packages and partial sponsorship for the same if you pursue 
              Artisan, Certificate or Diploma Course at AIRADS College.
            </p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Learn More About Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;

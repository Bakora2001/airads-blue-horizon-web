
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Campuses = () => {
  const campuses = [
    {
      name: "KERICHO TOWN CAMPUS",
      phone: "0729-976-885",
      location: "Kericho Town",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Located in the heart of Kericho, our campus offers comprehensive technical programs in a conducive learning environment."
    },
    {
      name: "ELDORET TOWN CAMPUS",
      phone: "0715-696-979", 
      location: "Eldoret Town",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Modern facilities in Eldoret serving the Rift Valley region with state-of-the-art equipment and qualified trainers."
    },
    {
      name: "BUNGOMA TOWN CAMPUS",
      phone: "0715-771-316",
      location: "Bungoma Town", 
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "Strategic location in Bungoma with excellent infrastructure for technical and vocational training."
    },
    {
      name: "LODWAR TOWN CAMPUS",
      phone: "0723-555-999",
      location: "Lodwar Town",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b", 
      description: "Serving the Turkana region, bringing quality technical education to Northern Kenya."
    },
    {
      name: "KISUMU CITY CAMPUS", 
      phone: "0715-505-262",
      location: "Kisumu City",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Located in the vibrant lakeside city, offering diverse programs for students across Western Kenya."
    },
    {
      name: "NAKURU CAMPUS",
      phone: "",
      location: "Nakuru Town",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "Centrally located campus serving students from across Kenya with excellent connectivity."
    },
    {
      name: "MARALAL CAMPUS", 
      phone: "0723-555-999",
      location: "Maralal Town",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Bringing quality technical education to Northern Kenya and surrounding communities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Our Campuses</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With 7 strategically located campuses across Kenya, we bring quality technical education closer to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
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
                  <div className="mb-4">
                    <span className="text-blue-600 font-semibold">📍 {campus.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {campus.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-800">
                      <span className="text-lg mr-2">📞</span>
                      <span className="font-semibold">{campus.phone}</span>
                    </div>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Visit Campus →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Campuses;

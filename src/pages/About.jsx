
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">About AIRADS College</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              African Institute of Research and Development Studies (AIRADS) College is a leading TVET institution 
              committed to providing quality technical education and training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide quality, relevant, and accessible technical and vocational education and training 
                that empowers learners with practical skills for sustainable development.
              </p>
              <h2 className="text-3xl font-bold text-blue-800 mb-6 mt-8">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading centre of excellence in technical and vocational education and training, 
                producing competent and innovative graduates for national and regional development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-red-50 p-8 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Students learning"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Why Study at AIRADS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">90-100% pass rate for 18 years consistently</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Qualified and experienced trainers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600">7 campuses across Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

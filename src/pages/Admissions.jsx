
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Admissions</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join AIRADS College and start your journey to a successful career in technical education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Application Procedure</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</span>
                  <div>
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p className="text-gray-600">Call, SMS, or WhatsApp any of our admission lines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</span>
                  <div>
                    <h3 className="font-bold mb-2">Apply Online</h3>
                    <p className="text-gray-600">Visit www.airads.ac.ke to submit your application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</span>
                  <div>
                    <h3 className="font-bold mb-2">Submit Documents</h3>
                    <p className="text-gray-600">Provide required academic certificates and documents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</span>
                  <div>
                    <h3 className="font-bold mb-2">Confirmation</h3>
                    <p className="text-gray-600">Receive admission confirmation and begin your studies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Campus Contact Numbers:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>ELDORET Campus: 0715-696-979</li>
                    <li>NAKURU Campus: 0711-488-302</li>
                    <li>KERICHO Campus: 0729-976-885</li>
                    <li>KISUMU Campus: 0715-505-262</li>
                    <li>BUNGOMA Campus: 0715-771-316</li>
                    <li>Head Office: 0723-555-999</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Other Contact Methods:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Facebook Messenger</li>
                    <li>Email: info@airads.ac.ke</li>
                    <li>Website: www.airads.ac.ke</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-800 to-red-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4"> January 2026 INTAKE ONGOING</h3>
            <p className="text-xl mb-6">Don't miss this opportunity to join Kenya's premier technical college</p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              APPLY NOW
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admissions;

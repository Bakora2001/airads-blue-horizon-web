
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Contact = () => {
  const campusContacts = [
    { name: "ELDORET Campus", phone: "0715-696-979" },
    { name: "NAKURU Campus", phone: "0711-488-302" },
    { name: "KERICHO Campus", phone: "0729-976-885" },
    { name: "KISUMU Campus", phone: "0715-505-262" },
    { name: "BUNGOMA Campus", phone: "0715-771-316" },
    { name: "LODWAR Campus", phone: "0723-555-999" },
    { name: "MARALAL Campus", phone: "0723-555-999" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for admissions, inquiries, or any information about AIRADS College.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Contacts</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Head Office</h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="mr-3">📍</span>
                    Institute Plaza 3rd & 4th Floor
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📞</span>
                    <a href="tel:+254723555999" className="hover:text-blue-600">+254 723 555 999</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📧</span>
                    <a href="mailto:info@airads.ac.ke" className="hover:text-blue-600">info@airads.ac.ke</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">🌐</span>
                    <a href="https://www.airads.ac.ke" className="hover:text-blue-600">www.airads.ac.ke</a>
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Campus Contact Numbers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {campusContacts.map((campus, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{campus.name}</span>
                      <a href={`tel:${campus.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                        {campus.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Send us an Inquiry</h2>
              <form className="bg-white border border-gray-200 p-6 rounded-xl">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Course Information</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="bg-gradient-to-r from-blue-800 to-red-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-6">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                <p>Send us a WhatsApp message for quick responses</p>
              </div>
              <div>
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold mb-2">Facebook Messenger</h4>
                <p>Connect with us through Facebook Messenger</p>
              </div>
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h4 className="text-xl font-bold mb-2">Call/SMS</h4>
                <p>Call or send SMS to any of our campus numbers</p>
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

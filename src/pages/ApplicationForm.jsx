import { useState, useEffect } from "react";
import { Download, FileText, ExternalLink, Calendar, MapPin, AlertCircle } from "lucide-react";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const ApplicationForm = () => {
  const [downloadingForm, setDownloadingForm] = useState(null);

  const campusForms = [
    {
      name: "Bungoma Campus",
      key: "bungoma",
      description: "Application form and brochure for Bungoma Campus",
      location: "College House – 3rd Floor – Opposite Bungoma Main Stage",
      contact: "0715-771-316",
      color: "from-blue-500 to-blue-700",
      hasForm: true
    },
    {
      name: "Eldoret Campus", 
      key: "eldoret",
      description: "Application form and brochure for Eldoret Campus",
      location: "Institute Plaza 3rd Floor- Oloo Street, Next to KPLC Commercial Office",
      contact: "0715-696-979",
      color: "from-red-500 to-red-700",
      hasForm: true
    },
    {
      name: "Kisumu City Campus",
      key: "kisumu",
      description: "Application form and brochure for Kisumu Campus",
      location: "Oginga Odinga Street, Swan Building, 2nd Floor",
      contact: "0715-505-262",
      color: "from-blue-500 to-blue-700",
      hasForm: true
    },
    {
      name: "Lodwar Campus",
      key: "lodwar",
      description: "Application form and brochure for Lodwar Campus", 
      location: "Equity Bank Building – Opposite Lodwar Town",
      contact: "Coming Soon",
      color: "from-red-500 to-red-700",
      hasForm: true
    },
    {
      name: "Nakuru Campus",
      key: "nakuru",
      description: "Application form and brochure for Nakuru Campus",
      location: "TradeWorld Building 2nd Floor, Opposite Prestige Mall, Kijabe Row",
      contact: "0711488302",
      color: "from-blue-500 to-blue-700",
      hasForm: true
    },
    {
      name: "Kericho Campus",
      key: "kericho",
      description: "Application form and brochure for Kericho Campus",
      location: "ACK BUSINESS PARK Building -2ND Floor Along Kericho –Nakuru Highway",
      contact: "0729-976-885",
      color: "from-red-500 to-red-700",
      hasForm: true
    }
  ];

  // Universal PDF URL
  const universalPdfUrl = "https://airads.ac.ke/bronchure/UNIVERSAL%20BROCHURE-compressed.pdf";

  const handleDownload = (campusKey) => {
    setDownloadingForm(campusKey);
    
    // Open the universal PDF in a new tab
    window.open(universalPdfUrl, '_blank');
    
    setTimeout(() => {
      setDownloadingForm(null);
    }, 1000);
  };

  const availableFormsCount = campusForms.filter(campus => campus.hasForm).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <TopNavbar />
      <MainNavbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full">
              <span className="text-lg font-medium">Application Forms Available</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Download Application Forms
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
              Get your application forms and brochures based on your preferred campus
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Updated: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>{availableFormsCount} forms available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Complete Application Package
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Each campus form includes everything you need for your application
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-0">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-white w-fit">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Application Forms</h3>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  All Programs
                </div>
                <p className="text-gray-600">
                  Complete application forms for Certificate, Diploma, and Short Courses
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-0">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-white w-fit">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Course Information</h3>
                <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                  Detailed Brochures
                </div>
                <p className="text-gray-600">
                  Comprehensive course details, requirements, and campus information
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-0">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-white w-fit">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fee Structure</h3>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  Transparent Pricing
                </div>
                <p className="text-gray-600">
                  Complete fee breakdown and payment options for all programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Forms Download Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Download Forms by Campus
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Select your preferred campus to download the complete application package
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {campusForms.map((campus, index) => {
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden">
                  <div className={`bg-gradient-to-r ${campus.color} text-white p-6`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <MapPin className="mr-3 h-6 w-6" />
                        <h3 className="text-2xl font-bold">{campus.name}</h3>
                      </div>
                      <div className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                        {campus.hasForm ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                    <p className="text-white/90">{campus.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{campus.location}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">📞</span>
                        </div>
                        <p className="text-sm font-medium text-gray-800">{campus.contact}</p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      {campus.hasForm ? (
                        <div className="rounded-lg p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded bg-gradient-to-r from-blue-500 to-red-500 text-white">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-sm text-gray-800">Complete Application Package</p>
                                <p className="text-xs text-gray-500">
                                  Universal Brochure • All Programs Included
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDownload(campus.key)}
                              disabled={downloadingForm === campus.key}
                              className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50"
                            >
                              {downloadingForm === campus.key ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                              ) : (
                                <Download className="h-4 w-4 mr-2" />
                              )}
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg p-6 bg-gray-50 text-center">
                          <div className="p-3 bg-gray-300 rounded-full w-fit mx-auto mb-3">
                            <FileText className="h-6 w-6 text-gray-500" />
                          </div>
                          <p className="font-medium text-gray-600 mb-2">Application Form Coming Soon</p>
                          <p className="text-sm text-gray-500 mb-3">
                            We're preparing the application materials for this campus
                          </p>
                          <div className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                            Not Available Yet
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-lg">
                      <p className="text-center text-sm text-gray-600">
                        <strong>Complete Package Includes:</strong> Application forms for all programs, course brochures, fee structure, admission requirements, and campus-specific information.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
            <p className="mb-6 text-lg opacity-90">
              Our admissions team is ready to assist you with the application process
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdl9v2WYIAbX41Wo2LyrUjhSZucHuvytgoYxd9Elq1yFSV0ig/alreadyresponded" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Apply Online at admissions.airads.ac.ke
              </button>
            </a>
            <a href="https://wa.me/254723555999" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="mr-2">📞</span>
                Contact Admissions Office
              </button>
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* File Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Available Downloads</h3>
              <p className="text-sm text-gray-600">
                Quick overview of all available application forms
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {availableFormsCount}
                </div>
                <p className="text-sm text-gray-600">Available Forms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {availableFormsCount}
                </div>
                <p className="text-sm text-gray-600">Active Campuses</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  6
                </div>
                <p className="text-sm text-gray-600">Total Campuses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Leave a Reply</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your email address will not be published. Required fields are marked *
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input 
                    type="url" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your website"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comment *</label>
                <textarea 
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Your comment..."
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </section>
   <Footer />
    </div>
  );
};

export default ApplicationForm;
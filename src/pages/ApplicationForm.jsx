import { useState, useEffect } from "react";
import { Download, FileText, ExternalLink, Calendar, MapPin, AlertCircle } from "lucide-react";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

const ApplicationForm = () => {
  const [downloadingForm, setDownloadingForm] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Load uploaded files from localStorage and listen for changes
  useEffect(() => {
    const loadFiles = () => {
      const storedFiles = localStorage.getItem('airadsPdfFiles');
      if (storedFiles) {
        try {
          setUploadedFiles(JSON.parse(storedFiles));
        } catch (error) {
          console.error('Error loading stored files:', error);
          setUploadedFiles([]);
        }
      } else {
        setUploadedFiles([]);
      }
    };

    // Load files initially
    loadFiles();

    // Listen for storage changes (real-time sync)
    const handleStorageChange = (e) => {
      if (e.key === 'airadsPdfFiles') {
        loadFiles();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const campusForms = [
    {
      name: "Bungoma Campus",
      key: "bungoma",
      description: "Application form and brochure for Bungoma Campus",
      location: "College House – 3rd Floor – Opposite Bungoma Main Stage",
      contact: "0715-771-316",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Eldoret Campus", 
      key: "eldoret",
      description: "Application form and brochure for Eldoret Campus",
      location: "Institute Plaza 3rd Floor- Oloo Street, Next to KPLC Commercial Office",
      contact: "0715-696-979",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Kisumu City Campus",
      key: "kisumu",
      description: "Application form and brochure for Kisumu Campus",
      location: "Oginga Odinga Street, Swan Building, 2nd Floor",
      contact: "0715-505-262",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Lodwar Campus",
      key: "lodwar",
      description: "Application form and brochure for Lodwar Campus", 
      location: "Equity Bank Building – Opposite Lodwar Town",
      contact: "Coming Soon",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Nakuru Campus",
      key: "nakuru",
      description: "Application form and brochure for Nakuru Campus",
      location: "TradeWorld Building 2nd Floor, Opposite Prestige Mall, Kijabe Row",
      contact: "0711-488-302",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Kericho Campus",
      key: "kericho",
      description: "Application form and brochure for Kericho Campus",
      location: "ACK BUSINESS PARK Building -2ND Floor Along Kericho –Nakuru Highway",
      contact: "0729-976-885",
      color: "from-red-500 to-red-700"
    }
  ];

  // Get file for a specific campus (only one file per campus)
  const getFileForCampus = (campusKey) => {
    return uploadedFiles.find(file => file.campus === campusKey);
  };

  const handleDownload = (file) => {
    setDownloadingForm(file.id);
    try {
      // Create download link
      const link = document.createElement('a');
      link.href = file.data;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setDownloadingForm(null);
      }, 1000);
    } catch (error) {
      console.error('Error downloading file:', error);
      setDownloadingForm(null);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
              <span>{uploadedFiles.length} forms available</span>
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

          {uploadedFiles.length === 0 && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
              <p className="text-yellow-800">
                No application forms are currently available for download. Please check back later or contact the admissions office.
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {campusForms.map((campus, index) => {
              const campusFile = getFileForCampus(campus.key);
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden">
                  <div className={`bg-gradient-to-r ${campus.color} text-white p-6`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <MapPin className="mr-3 h-6 w-6" />
                        <h3 className="text-2xl font-bold">{campus.name}</h3>
                      </div>
                      <div className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                        {campusFile ? '1 form' : 'Coming Soon'}
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
                      {campusFile ? (
                        <div className="rounded-lg p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded bg-gradient-to-r from-blue-500 to-red-500 text-white">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-sm text-gray-800">Complete Application Package</p>
                                <p className="text-xs text-gray-500">
                                  {formatFileSize(campusFile.size)} • {new Date(campusFile.uploadDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDownload(campusFile)}
                              disabled={downloadingForm === campusFile.id}
                              className="bg-gradient-to-r from-blue-500 to-red-500 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50"
                            >
                              {downloadingForm === campusFile.id ? (
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
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Apply Online at airads.ac.ke
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="mr-2">📞</span>
                Contact Admissions Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* File Statistics Section */}
      {uploadedFiles.length > 0 && (
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
                    {uploadedFiles.length}
                  </div>
                  <p className="text-sm text-gray-600">Available Forms</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    {campusForms.filter(campus => 
                      uploadedFiles.some(file => file.campus === campus.key)
                    ).length}
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
      )}

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            AIRADS College
          </h3>
          <p className="text-gray-400 mb-6">Download your application forms and start your journey with us</p>
          <div className="flex justify-center space-x-6 mb-6">
            <div className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-600 rounded-full text-sm">
              admissions
            </div>
            <div className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-600 rounded-full text-sm">
              {uploadedFiles.length} forms available
            </div>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 AIRADS College. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationForm;

// import { useState, useEffect } from "react";
// import { Download, FileText, ExternalLink, Calendar, MapPin, AlertCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import TopNavbar from "../components/TopNavbar";
// import MainNavbar from "../components/MainNavbar";

// const ApplicationForm = () => {
//   const [downloadingForm, setDownloadingForm] = useState(null);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   // Load uploaded files from localStorage
//   useEffect(() => {
//     const storedFiles = localStorage.getItem('airadsPdfFiles');
//     if (storedFiles) {
//       try {
//         setUploadedFiles(JSON.parse(storedFiles));
//       } catch (error) {
//         console.error('Error loading stored files:', error);
//         setUploadedFiles([]);
//       }
//     }
//   }, []);

//   const campusForms = [
//     {
//       name: "Bungoma Campus",
//       key: "bungoma",
//       description: "Application forms and brochures for Bungoma Campus",
//       location: "College House – 3rd Floor – Opposite Bungoma Main Stage",
//       contact: "0715-771-316",
//       color: "from-airads-blue to-airads-blue-dark"
//     },
//     {
//       name: "Eldoret Campus", 
//       key: "eldoret",
//       description: "Application forms and brochures for Eldoret Campus",
//       location: "Institute Plaza 3rd Floor- Oloo Street, Next to KPLC Commercial Office",
//       contact: "0715-696-979",
//       color: "from-airads-red to-airads-red-dark"
//     },
//     {
//       name: "Kisumu City Campus",
//       key: "kisumu",
//       description: "Application forms and brochures for Kisumu Campus",
//       location: "Oginga Odinga Street, Swan Building, 2nd Floor",
//       contact: "0715-505-262",
//       color: "from-airads-blue to-airads-blue-dark"
//     },
//     {
//       name: "Lodwar Campus",
//       key: "lodwar",
//       description: "Application forms and brochures for Lodwar Campus", 
//       location: "Equity Bank Building – Opposite Lodwar Town",
//       contact: "Coming Soon",
//       color: "from-airads-red to-airads-red-dark"
//     },
//     {
//       name: "Nakuru Campus",
//       key: "nakuru",
//       description: "Application forms and brochures for Nakuru Campus",
//       location: "TradeWorld Building 2nd Floor, Opposite Prestige Mall, Kijabe Row",
//       contact: "0711-488-302",
//       color: "from-airads-blue to-airads-blue-dark"
//     },
//     {
//       name: "Kericho Campus",
//       key: "kericho",
//       description: "Application forms and brochures for Kericho Campus",
//       location: "ACK BUSINESS PARK Building -2ND Floor Along Kericho –Nakuru Highway",
//       contact: "0729-976-885",
//       color: "from-airads-red to-airads-red-dark"
//     }
//   ];

//   const formTypes = [
//     {
//       title: "Certificate Courses Application",
//       key: "certificate",
//       description: "Application form for all certificate level programs",
//       category: "Certificate Courses",
//       icon: <FileText className="h-6 w-6" />
//     },
//     {
//       title: "Diploma Courses Application", 
//       key: "diploma",
//       description: "Application form for all diploma level programs",
//       category: "Diploma courses",
//       icon: <FileText className="h-6 w-6" />
//     },
//     {
//       title: "Short Courses Application",
//       key: "short",
//       description: "Application form for professional short courses and computer packages",
//       category: "Short Courses", 
//       icon: <FileText className="h-6 w-6" />
//     }
//   ];

//   // Get files for a specific campus and form type
//   const getFilesForCampusAndType = (campusKey, formTypeKey) => {
//     return uploadedFiles.filter(file => 
//       file.campus === campusKey && file.formType === formTypeKey
//     );
//   };

//   const handleDownload = (file) => {
//     setDownloadingForm(file.id);
//     try {
//       // Create download link
//       const link = document.createElement('a');
//       link.href = file.data;
//       link.download = file.name;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       setTimeout(() => {
//         setDownloadingForm(null);
//       }, 1000);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       setDownloadingForm(null);
//     }
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//       <TopNavbar />
//       <MainNavbar />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-airads-blue/10 to-airads-red/10 animate-pulse"></div>
//         <div className="container mx-auto text-center relative z-10">
//           <div className="animate-fade-in">
//             <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-airads-blue to-airads-red text-white border-0">
//               Application Forms Available
//             </Badge>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
//               Download Application Forms
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
//               Get your application forms and brochures based on your preferred campus
//             </p>
//             <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
//               <Calendar className="h-4 w-4" />
//               <span>Updated: {new Date().toLocaleDateString()}</span>
//               <span>•</span>
//               <span>{uploadedFiles.length} forms available</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Form Types */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//               Application Form Categories
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Choose the appropriate form based on your program level
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {formTypes.map((form, index) => (
//               <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-gradient-to-br from-white to-primary/5">
//                 <CardHeader className="text-center">
//                   <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-airads-blue to-airads-red rounded-full text-white w-fit">
//                     {form.icon}
//                   </div>
//                   <CardTitle className="text-xl">{form.title}</CardTitle>
//                   <Badge className="w-fit mx-auto bg-airads-blue/10 text-airads-blue border-airads-blue">
//                     {form.category}
//                   </Badge>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-muted-foreground mb-6">{form.description}</p>
//                   <div className="text-sm text-muted-foreground">
//                     <span className="font-medium">Available forms: </span>
//                     <Badge variant="outline" className="text-xs">
//                       {uploadedFiles.filter(file => file.formType === form.key).length}
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Campus Forms Download Section */}
//       <section className="py-16 px-4 bg-gradient-to-r from-white to-primary/5">
//         <div className="container mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//               Download Forms by Campus
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Select your preferred campus to download application forms and brochures
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
//           </div>

//           {uploadedFiles.length === 0 && (
//             <Alert className="mb-8 max-w-2xl mx-auto">
//               <AlertCircle className="h-4 w-4" />
//               <AlertDescription>
//                 No application forms are currently available for download. Please check back later or contact the admissions office.
//               </AlertDescription>
//             </Alert>
//           )}

//           <div className="grid lg:grid-cols-2 gap-8">
//             {campusForms.map((campus, index) => {
//               const campusFiles = uploadedFiles.filter(file => file.campus === campus.key);
              
//               return (
//                 <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-slide-in-left border-0 overflow-hidden">
//                   <CardHeader className={`bg-gradient-to-r ${campus.color} text-white`}>
//                     <CardTitle className="text-2xl flex items-center justify-between">
//                       <div className="flex items-center">
//                         <MapPin className="mr-3 h-6 w-6" />
//                         {campus.name}
//                       </div>
//                       <Badge className="bg-white/20 text-white border-white/30">
//                         {campusFiles.length} forms
//                       </Badge>
//                     </CardTitle>
//                     <p className="text-white/90">{campus.description}</p>
//                   </CardHeader>
//                   <CardContent className="p-6">
//                     <div className="space-y-4 mb-6">
//                       <div className="flex items-start space-x-3">
//                         <MapPin className="h-5 w-5 text-airads-blue mt-1 flex-shrink-0" />
//                         <p className="text-sm text-muted-foreground">{campus.location}</p>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <div className="h-5 w-5 bg-airads-red rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs">📞</span>
//                         </div>
//                         <p className="text-sm font-medium">{campus.contact}</p>
//                       </div>
//                     </div>

//                     <Separator className="my-6" />

//                     <div className="space-y-3">
//                       {formTypes.map((form, formIndex) => {
//                         const formFiles = getFilesForCampusAndType(campus.key, form.key);
//                         const hasFiles = formFiles.length > 0;
                        
//                         return (
//                           <div key={formIndex} className={`rounded-lg transition-colors ${
//                             hasFiles 
//                               ? 'p-3 bg-primary/5 hover:bg-primary/10' 
//                               : 'p-3 bg-gray-50 opacity-60'
//                           }`}>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center space-x-3">
//                                 <div className={`p-2 rounded ${
//                                   hasFiles 
//                                     ? 'bg-gradient-to-r from-airads-blue to-airads-red text-white'
//                                     : 'bg-gray-300 text-gray-500'
//                                 }`}>
//                                   {form.icon}
//                                 </div>
//                                 <div>
//                                   <p className="font-medium text-sm">{form.title}</p>
//                                   <p className="text-xs text-muted-foreground">
//                                     {hasFiles ? `${formFiles.length} file(s) available` : 'No files available'}
//                                   </p>
//                                 </div>
//                               </div>
//                               {hasFiles ? (
//                                 <div className="flex flex-col space-y-1">
//                                   {formFiles.map((file) => (
//                                     <Button
//                                       key={file.id}
//                                       size="sm"
//                                       onClick={() => handleDownload(file)}
//                                       disabled={downloadingForm === file.id}
//                                       className="bg-gradient-to-r from-airads-blue to-airads-blue-dark hover:shadow-lg transition-all duration-300 text-xs"
//                                     >
//                                       {downloadingForm === file.id ? (
//                                         <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent" />
//                                       ) : (
//                                         <Download className="h-3 w-3" />
//                                       )}
//                                       <span className="ml-1 max-w-24 truncate" title={file.name}>
//                                         {file.name.length > 15 ? file.name.substring(0, 15) + '...' : file.name}
//                                       </span>
//                                     </Button>
//                                   ))}
//                                 </div>
//                               ) : (
//                                 <Badge variant="outline" className="text-xs text-gray-500 border-gray-300">
//                                   Coming Soon
//                                 </Badge>
//                               )}
//                             </div>
                            
//                             {hasFiles && (
//                               <div className="mt-2 pl-11">
//                                 <div className="flex flex-wrap gap-2">
//                                   {formFiles.map((file) => (
//                                     <div key={file.id} className="text-xs text-muted-foreground bg-white rounded px-2 py-1">
//                                       <span className="font-medium">{formatFileSize(file.size)}</span>
//                                       <span className="mx-1">•</span>
//                                       <span>{new Date(file.uploadDate).toLocaleDateString()}</span>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         );
//                       })}
//                     </div>

//                     <div className="mt-6 p-4 bg-gradient-to-r from-airads-red/10 to-airads-blue/10 rounded-lg">
//                       <p className="text-center text-sm text-muted-foreground">
//                         <strong>Note:</strong> All forms include registration fee details, course requirements, and campus-specific information.
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-airads-blue to-airads-red text-white animate-scale-in">
//             <CardContent className="p-8 text-center">
//               <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
//               <p className="mb-6 text-lg opacity-90">
//                 Our admissions team is ready to assist you with the application process
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" variant="secondary" className="bg-white text-airads-blue hover:bg-gray-100">
//                   <ExternalLink className="mr-2 h-5 w-5" />
//                   Apply Online at airads.ac.ke
//                 </Button>
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                   <span className="mr-2">📞</span>
//                   Contact Admissions Office
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* File Statistics Section */}
//       {uploadedFiles.length > 0 && (
//         <section className="py-16 px-4 bg-gradient-to-r from-white to-primary/5">
//           <div className="container mx-auto max-w-4xl">
//             <Card className="animate-fade-in">
//               <CardHeader>
//                 <CardTitle className="text-center">Available Downloads</CardTitle>
//                 <p className="text-center text-sm text-muted-foreground">
//                   Quick overview of all available application forms
//                 </p>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-airads-blue mb-2">
//                       {uploadedFiles.length}
//                     </div>
//                     <p className="text-sm text-muted-foreground">Total Forms</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-airads-red mb-2">
//                       {campusForms.filter(campus => 
//                         uploadedFiles.some(file => file.campus === campus.key)
//                       ).length}
//                     </div>
//                     <p className="text-sm text-muted-foreground">Active Campuses</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-green-600 mb-2">
//                       {formTypes.filter(form => 
//                         uploadedFiles.some(file => file.formType === form.key)
//                       ).length}
//                     </div>
//                     <p className="text-sm text-muted-foreground">Form Types</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//       )}

//       {/* Comments Section */}
//       <section className="py-16 px-4 bg-gradient-to-r from-white to-primary/5">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="animate-fade-in">
//             <CardHeader>
//               <CardTitle>Leave a Reply</CardTitle>
//               <p className="text-sm text-muted-foreground">
//                 Your email address will not be published. Required fields are marked *
//               </p>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Name *</label>
//                   <input 
//                     type="text" 
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airads-blue focus:border-airads-blue outline-none transition-colors"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email *</label>
//                   <input 
//                     type="email" 
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airads-blue focus:border-airads-blue outline-none transition-colors"
//                     placeholder="Your email"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Website</label>
//                   <input 
//                     type="url" 
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airads-blue focus:border-airads-blue outline-none transition-colors"
//                     placeholder="Your website"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Comment *</label>
//                 <textarea 
//                   rows={6}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airads-blue focus:border-airads-blue outline-none transition-colors resize-none"
//                   placeholder="Your comment..."
//                 ></textarea>
//               </div>
//               <Button className="bg-gradient-to-r from-airads-blue to-airads-blue-dark hover:shadow-lg transition-all duration-300">
//                 Post Comment
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 px-4">
//         <div className="container mx-auto text-center">
//           <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
//             AIRADS College
//           </h3>
//           <p className="text-gray-400 mb-6">Download your application forms and start your journey with us</p>
//           <div className="flex justify-center space-x-6 mb-6">
//             <Badge className="bg-airads-blue/20 text-airads-blue border-airads-blue">admissions</Badge>
//             <Badge className="bg-airads-red/20 text-airads-red border-airads-red">
//               {uploadedFiles.length} forms available
//             </Badge>
//           </div>
//           <p className="text-sm text-gray-500">
//             © 2025 AIRADS College. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ApplicationForm;
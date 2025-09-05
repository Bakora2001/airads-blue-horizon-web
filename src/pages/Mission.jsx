import React from 'react';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Mission = () => {
  const coreValues = [
    {
      title: "Innovative thinking",
      description: "Fostering creativity and new ideas that drive technological advancement and educational excellence.",
      icon: "💡",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Hard work",
      description: "Commitment and dedication to tasks with unwavering determination and perseverance.",
      icon: "💪",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "Integrity",
      description: "Upholding honesty and strong moral principles in all our educational endeavors.",
      icon: "🛡️",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in all endeavors and continuous improvement.",
      icon: "⭐",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      title: "Corporate Social Responsibility",
      description: "Contributing positively to society and the environment through sustainable practices.",
      icon: "🌍",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <TopNavbar />
      <MainNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-bounce"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative container mx-auto px-6 py-32">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white bg-opacity-10 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-white border-opacity-20">
                Our Foundation
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Mission & Vision
            </h1>
            <p className="text-xl md:text-3xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Shaping the future through knowledge, innovation, and excellence in 
              <span className="font-semibold text-white"> technical education</span>
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-white via-blue-300 to-purple-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-100 rounded-full opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-2xl transform group-hover:rotate-6 transition-transform duration-300">
                      🎯
                    </div>
                    <div className="ml-6">
                      <h2 className="text-4xl font-black text-gray-800">Our Vision</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    To be a <span className="font-black text-blue-700">World class Centre of Excellence</span> and 
                    Innovation in Technical, Research and <span className="font-black text-purple-700">Entrepreneurship Training</span>
                  </p>
                  <div className="mt-8 flex items-center text-sm text-gray-500">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600">✨</span>
                    </div>
                    <span className="font-semibold">Excellence • Innovation • Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-2xl transform group-hover:rotate-6 transition-transform duration-300">
                      🚀
                    </div>
                    <div className="ml-6">
                      <h2 className="text-4xl font-black text-gray-800">Our Mission</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    To provide <span className="font-black text-emerald-700">Quality Technical and Entrepreneurship Training</span> and 
                    Cutting Edge Research that will ensure developmental <span className="font-black text-teal-700">Transformation of individuals</span> and 
                    communities in the world
                  </p>
                  <div className="mt-8 flex items-center text-sm text-gray-500">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600">🌱</span>
                    </div>
                    <span className="font-semibold">Quality • Research • Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%236366f1&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wider uppercase">
                What Drives Us
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make and every action we take
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-3xl p-8 h-full">
                  {/* Background Decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-2xl`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        {value.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors font-medium">
                      {value.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex items-center">
                      <div className={`w-6 h-1 bg-gradient-to-r ${value.gradient} rounded-full`}></div>
                      <div className="w-2 h-1 bg-gray-200 rounded-full ml-2"></div>
                      <div className="w-2 h-1 bg-gray-200 rounded-full ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white bg-opacity-10 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-white border-opacity-20">
                Join Our Community
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Ready to Shape <br/>
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Your Future?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their lives through quality technical education at 
              <span className="font-bold text-white"> AIRADS College</span>. Your journey to excellence starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                          <a href="https://admissions.airads.ac.ke/" target="_blank" rel="noopener noreferrer">
              <button className="group relative bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors">
                  Apply Now
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </span>
              </button>
            </a>

              
              <button className="group border-3 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;




// import React from 'react';
// import { Eye, Target, Heart, Lightbulb, Award, Users } from 'lucide-react';

// const Mission = () => {
//   const coreValues = [
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovative Thinking",
//       description: "Fostering creativity and forward-thinking solutions in all our endeavors"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Hard Work",
//       description: "Commitment to excellence through dedication and perseverance"
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Integrity",
//       description: "Upholding honesty, transparency, and ethical standards in everything we do"
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Excellence",
//       description: "Striving for the highest quality in education and service delivery"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Corporate Social Responsibility",
//       description: "Contributing positively to society and environmental sustainability"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
//       {/* Hero Section */}
//       <div className="pt-24 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-4">
//               Mission & Vision
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Guiding principles that drive our commitment to excellence in technical education and research
//             </p>
//           </div>

//           {/* Vision Section */}
//           <div className="mb-20">
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="bg-white/20 rounded-full p-4">
//                     <Eye className="w-12 h-12 text-white" />
//                   </div>
//                 </div>
//                 <h2 className="text-4xl font-bold text-center mb-4">Our Vision</h2>
//               </div>
//               <div className="p-12">
//                 <p className="text-2xl text-gray-700 leading-relaxed text-center font-medium">
//                   To be a <span className="text-blue-600 font-bold">World class Centre of Excellence</span> and 
//                   <span className="text-red-600 font-bold"> Innovation</span> in Technical, Research and 
//                   Entrepreneurship Training
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Mission Section */}
//           <div className="mb-20">
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//               <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="bg-white/20 rounded-full p-4">
//                     <Target className="w-12 h-12 text-white" />
//                   </div>
//                 </div>
//                 <h2 className="text-4xl font-bold text-center mb-4">Our Mission</h2>
//               </div>
//               <div className="p-12">
//                 <p className="text-2xl text-gray-700 leading-relaxed text-center font-medium">
//                   To provide <span className="text-red-600 font-bold">Quality Technical and Entrepreneurship Training</span> and 
//                   <span className="text-blue-600 font-bold"> Cutting Edge Research</span> that will ensure developmental 
//                   Transformation of individuals and communities in the world
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Core Values Section */}
//           <div>
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-4">
//                 Our Core Values
//               </h2>
//               <p className="text-xl text-gray-600">
//                 The fundamental principles that guide our institution
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//               {coreValues.map((value, index) => (
//                 <div 
//                   key={index}
//                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//                 >
//                   <div className="text-center">
//                     <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 ${
//                       index % 2 === 0 
//                         ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' 
//                         : 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'
//                     }`}>
//                       {value.icon}
//                     </div>
//                     <h3 className={`text-xl font-bold mb-4 ${
//                       index % 2 === 0 ? 'text-blue-600' : 'text-red-600'
//                     }`}>
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-20 text-center">
//             <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-12 text-white">
//               <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
//               <p className="text-xl mb-8 opacity-90">
//                 Be part of our mission to transform lives through quality education
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300">
//                   Apply Now
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mission;
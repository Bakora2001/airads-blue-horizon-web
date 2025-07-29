import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 text-gray-800 font-sans antialiased">
      {/* Navbar Placeholder - You'll need to integrate your MainNavbar here */}
      <div className="h-24 bg-white/90 backdrop-blur-sm shadow-sm"></div> {/* Placeholder for Navbar */}

      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Mission & Vision
          </h1>
          <p className="text-xl text-gray-600">
            Shaping the future through knowledge and innovation.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-6 border-b-4 border-red-400 pb-2 inline-block">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To be a World class Centre of Excellence and Innovation in Technical, Research and Entrepreneurship Training
            </p>
          </div>
          <div className="text-center">
            <svg className="w-24 h-24 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a2 2 0 001.962 1.568h3.458c.585 0 1.132.233 1.59.65l3.192 3.192a2 2 0 01.59 1.591v6.728c0 .585-.233 1.132-.65 1.591l-9.545 9.545c-.585.584-1.132.65-1.591.65H7.015a2 2 0 01-1.591-.65L2.355 17.89a2 2 0 01-.65-1.591v-6.728c0-.585.233-1.132.65-1.591l5.476-5.476z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 15a1 1 0 11-2 0 1 1 0 012 0zm0 0a1 1 0 11-2 0m3-3a1 1 0 11-2 0 1 1 0 012 0zm0 0a1 1 0 11-2 0m3-3a1 1 0 11-2 0 1 1 0 012 0zm0 0a1 1 0 11-2 0"></path></svg>
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">Our Vision</h3>
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-400 pb-2 inline-block">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            To provide Quality Technical and Entrepreneurship Training and Cutting Edge Research that will ensure developmental Transformation of individuals and communities in the world
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-red-600 mb-6 border-b-4 border-red-400 pb-2 inline-block">
            OUR CORE VALUES
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovative thinking</h3>
              <p className="text-gray-600">Fostering creativity and new ideas.</p>
            </li>
            <li className="bg-red-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Hard work</h3>
              <p className="text-gray-600">Commitment and dedication to tasks.</p>
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Integrity</h3>
              <p className="text-gray-600">Upholding honesty and strong moral principles.</p>
            </li>
            <li className="bg-red-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in all endeavors.</p>
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Corporate Social Responsibility</h3>
              <p className="text-gray-600">Contributing positively to society and the environment.</p>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer Placeholder */}
      <div className="mt-24 h-40 bg-gray-800 text-white flex items-center justify-center">
        Footer
      </div>
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
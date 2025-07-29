import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 text-gray-800 font-sans antialiased">
      {/* Navbar Placeholder - You'll need to integrate your MainNavbar here */}
      <div className="h-24 bg-white/90 backdrop-blur-sm shadow-sm"></div> {/* Placeholder for Navbar */}

      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Our History
          </h1>
          <p className="text-xl text-gray-600">
            A journey of growth and excellence since 2006.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-red-600 mb-6 border-b-4 border-red-400 pb-2 inline-block">
              AIRADS COLLEGE
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              African Institute of Research and Development Studies is one of the best tertiary technical training institutions offering Higher National Diploma, Diploma, certificate and artisan courses examined by KNEC and KASNEB. We are an institution with campuses in major towns in Kenya. Our main campus is located at Eldoret town.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              We opened our doors to the public on 1st April 2006 and have been in operation for 18 years. We have been granted approval by all the relevant government agencies to offer training programmes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">Approvals and Registrations</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Technical and Vocational Education and Training Authority (TVETA) – Registration no. MOHEST/PC/1049/07.</li>
              <li>KNDI Interim License – Registration number KNDI/ACCR/IL 029</li>
              <li>Kenya Pharmacy and Poisons Board – Registration number PPB/COL/013/07</li>
              <li>Kenya National Examination Council with Centre numbers for Technical, Business and ECDE</li>
              <li>Kenya Accountants and Secretaries National Examination Board – KASNEB</li>
            </ul>
          </div>
        </section>

        <section className="mb-16 text-center bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-400 pb-2 inline-block">
            GRADUATION
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            We have held 8 graduation ceremonies of which more than 25,000 students have been released to the job market. AIRADS College is proud of you graduands. The real ambassadors of African Institute of Research and Development Studies.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            African Institute Of Research and Development Studies – AIRADS College has since inception risen to its vision and mission.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-red-600 mb-6 border-b-4 border-red-400 pb-2 inline-block">
            Our Campuses Across the Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Kericho Town Campus</h3>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Kisumu City Campus</h3>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Nakuru City Campus</h3>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Eldoret Town Campus</h3>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Bungoma Town Campus</h3>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Lodwar Campus</h3>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Placeholder */}
      <div className="mt-24 h-40 bg-gray-800 text-white flex items-center justify-center">
        Footer
      </div>
    </div>
  );
};

export default History;




// import React from 'react';
// import { Calendar, MapPin, Award, Users, Building, CheckCircle, GraduationCap, Star } from 'lucide-react';

// const History = () => {
//   const milestones = [
//     {
//       year: "2006",
//       title: "Foundation",
//       description: "AIRADS College opened its doors to the public on April 1st, 2006",
//       icon: <Building className="w-6 h-6" />
//     },
//     {
//       year: "2007",
//       title: "Official Registration",
//       description: "Received TVETA registration and various regulatory approvals",
//       icon: <CheckCircle className="w-6 h-6" />
//     },
//     {
//       year: "2010-2024",
//       title: "Expansion",
//       description: "Established multiple campuses across Kenya's major towns",
//       icon: <MapPin className="w-6 h-6" />
//     },
//     {
//       year: "Present",
//       title: "Excellence",
//       description: "25,000+ graduates and counting, 8 graduation ceremonies held",
//       icon: <GraduationCap className="w-6 h-6" />
//     }
//   ];

//   const accreditations = [
//     {
//       title: "TVETA Registration",
//       number: "MOHEST/PC/1049/07",
//       description: "Technical and Vocational Education and Training Authority"
//     },
//     {
//       title: "KNDI Interim License",
//       number: "KNDI/ACCR/IL 029",
//       description: "Kenya National Development Institute"
//     },
//     {
//       title: "Pharmacy Board Registration",
//       number: "PPB/COL/013/07",
//       description: "Kenya Pharmacy and Poisons Board"
//     },
//     {
//       title: "KNEC Approval",
//       number: "Multiple Centers",
//       description: "Kenya National Examination Council"
//     },
//     {
//       title: "KASNEB Approval",
//       number: "Certified",
//       description: "Kenya Accountants and Secretaries National Examination Board"
//     }
//   ];

//   const campuses = [
//     { name: "Eldoret Town Campus", status: "Main Campus", color: "blue" },
//     { name: "Kericho Town Campus", status: "Branch", color: "red" },
//     { name: "Kisumu City Campus", status: "Branch", color: "blue" },
//     { name: "Nakuru City Campus", status: "Branch", color: "red" },
//     { name: "Bungoma Town Campus", status: "Branch", color: "blue" },
//     { name: "Lodwar Campus", status: "Branch", color: "red" },
//     { name: "Maralal Campus", status: "Branch", color: "blue" },
//     { name: "Virtual Campus", status: "Online", color: "red" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
//       {/* Hero Section */}
//       <div className="pt-24 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-4">
//               Our History
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               18 years of excellence in technical education and community transformation
//             </p>
//           </div>

//           {/* Introduction Section */}
//           <div className="mb-20">
//             <div className="bg-white rounded-3xl shadow-2xl p-12">
//               <div className="flex items-center justify-center mb-8">
//                 <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-full p-4">
//                   <Star className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//               <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
//                 AIRADS COLLEGE
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
//                 African Institute of Research and Development Studies is one of the best tertiary technical 
//                 training institutions offering Higher National Diploma, Diploma, certificate and artisan courses 
//                 examined by KNEC and KASNEB. We are an institution with campuses in major towns in Kenya. 
//                 Our main campus is located at Eldoret town.
//               </p>
//               <div className="flex items-center justify-center space-x-8 text-center">
//                 <div className="bg-blue-100 rounded-xl p-6">
//                   <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                   <p className="text-2xl font-bold text-blue-600">18</p>
//                   <p className="text-sm text-gray-600">Years of Service</p>
//                 </div>
//                 <div className="bg-red-100 rounded-xl p-6">
//                   <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
//                   <p className="text-2xl font-bold text-red-600">25,000+</p>
//                   <p className="text-sm text-gray-600">Graduates</p>
//                 </div>
//                 <div className="bg-blue-100 rounded-xl p-6">
//                   <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                   <p className="text-2xl font-bold text-blue-600">8</p>
//                   <p className="text-sm text-gray-600">Campuses</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
//               Our Journey
//             </h2>
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-red-600 rounded-full"></div>
              
//               <div className="space-y-12">
//                 {milestones.map((milestone, index) => (
//                   <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                     <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
//                       <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
//                         <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
//                           index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
//                         }`}>
//                           {milestone.icon}
//                         </div>
//                         <h3 className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`}>
//                           {milestone.year}
//                         </h3>
//                         <h4 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h4>
//                         <p className="text-gray-600">{milestone.description}</p>
//                       </div>
//                     </div>
                    
//                     {/* Timeline dot */}
//                     <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
//                       index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'
//                     }`}></div>
                    
//                     <div className="w-5/12"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Accreditations Section */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
//               Accreditations & Approvals
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {accreditations.map((accred, index) => (
//                 <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
//                     index % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
//                   }`}>
//                     <Award className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`} />
//                   </div>
//                   <h3 className={`text-xl font-bold mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-red-600'}`}>
//                     {accred.title}
//                   </h3>
//                   <p className="text-sm font-mono text-gray-800 mb-2 bg-gray-100 px-3 py-1 rounded">
//                     {accred.number}
//                   </p>
//                   <p className="text-gray-600 text-sm">{accred.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Campuses Section */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
//               Our Campuses Nationwide
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {campuses.map((campus, index) => (
//                 <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 ${
//                   campus.color === 'blue' ? 'border-blue-600' : 'border-red-600'
//                 }`}>
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
//                     campus.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'
//                   }`}>
//                     <MapPin className={`w-5 h-5 ${campus.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">{campus.name}</h3>
//                   <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
//                     campus.status === 'Main Campus' 
//                       ? 'bg-green-100 text-green-800'
//                       : campus.status === 'Online'
//                       ? 'bg-purple-100 text-purple-800'
//                       : campus.color === 'blue'
//                       ? 'bg-blue-100 text-blue-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {campus.status}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Graduation Success */}
//           <div>
//             <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-12 text-white text-center">
//               <GraduationCap className="w-16 h-16 mx-auto mb-6" />
//               <h2 className="text-4xl font-bold mb-4">Celebrating Our Graduates</h2>
//               <p className="text-xl mb-6 opacity-90">
//                 We have held 8 graduation ceremonies with more than 25,000 students released to the job market
//               </p>
//               <p className="text-lg opacity-80">
//                 AIRADS College is proud of our graduates - the real ambassadors of 
//                 African Institute of Research and Development Studies
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
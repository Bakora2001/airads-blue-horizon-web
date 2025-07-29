// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       {/* WhatsApp & Apply Now Floating Buttons */}
//       <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-50">
//         {/* WhatsApp Button */}
//         <a
//           href="https://wa.me/254723555999?text=Hello%20AIRADS%20College%2C%20I%20have%20an%20inquiry."
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-all"
//         >
//           <span>💬</span>
//           <span>Chat with us</span>
//         </a>

//         {/* Apply Now Button */}
//         <a
//           href="https://admissions.airads.ac.ke"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all"
//         >
//           Apply Now
//         </a>
//       </div>

//       {/* Footer Content */}
//       <footer className="bg-gray-900 text-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* College Info */}
//             <div>
//               <h3 className="text-2xl font-bold text-blue-400 mb-4">AIRADS College</h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 African Institute of Research and Development Studies –AIRADS College is the best College that 
//                 provides a holistic training, innovation and research environment to equip trainees with the best 
//                 tools & Infrastructure.
//               </p>
//               <div className="space-y-2">
//                 <p className="flex items-center">
//                   <span className="mr-2">📧</span>
//                   <a href="mailto:info@airads.ac.ke" className="hover:text-blue-400">info@airads.ac.ke</a>
//                 </p>
//                 <p className="flex items-center">
//                   <span className="mr-2">📞</span>
//                   <a href="tel:+254723555999" className="hover:text-blue-400">+254 723 555 999</a>
//                 </p>
//               </div>
//             </div>

//             {/* Featured Links */}
//             <div>
//               <h4 className="text-xl font-bold mb-4 text-blue-400">Featured Links</h4>
//               <ul className="space-y-3">
//                 <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Online Admissions</Link></li>
//                 <li><a href="https://tveta.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">TVETA</a></li>
//                 <li><a href="https://cdacc.ac.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">TVET-CDACC</a></li>
//                 <li><a href="https://knec.ac.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">KNEC</a></li>
//                 <li><a href="https://nita.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">NITA</a></li>
//                 <li><a href="https://katti.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">KATTI</a></li>
//                 <li><a href="https://education.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">MOE</a></li>
//                 <li><a href="mailto:staff@airads.ac.ke" className="text-gray-300 hover:text-white transition-colors">Staff Mail</a></li>
//               </ul>
//             </div>

//             {/* Location */}
//             <div>
//               <h4 className="text-xl font-bold mb-4 text-blue-400">Location</h4>
//               <div className="text-gray-300 space-y-2">
//                 <p>Institute Plaza 3rd & 4th Floor</p>
//                 <p>Head Office</p>
//                 <p className="mt-4">
//                   <span className="mr-2">📞</span>
//                   +254 723 555 999
//                 </p>
//                 <p>
//                   <span className="mr-2">📱</span>
//                   0723 555 999
//                 </p>
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h4 className="text-xl font-bold mb-4 text-blue-400">Newsletter</h4>
//               <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
//               <div className="space-y-3">
//                 <input
//                   type="email"
//                   placeholder="E-mail"
//                   className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
//                 />
//                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
//                   Subscribe Now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-gray-800 mt-12 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400">
//                 © Copyright AIRADS College 2024. All rights reserved.
//               </p>
//               <p className="text-gray-400 mt-2 md:mt-0">
//                 Designed and Developed by{" "}
//                 <span className="text-blue-400 font-medium">Powerspur Solutions Ltd</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-20 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">AIRADS College</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              African Institute of Research and Development Studies –AIRADS College is the best College that 
              provides a holistic training, innovation and research environment to equip trainees with the best 
              tools & Infrastructure.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:info@airads.ac.ke" className="hover:text-blue-400">info@airads.ac.ke</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+254723555999" className="hover:text-blue-400">+254 723 555 999</a>
              </p>
            </div>
          </div>

          {/* Featured Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Featured Links</h4>
            <ul className="space-y-3">
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Online Admissions</Link></li>
              <li><a href="https://tveta.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">TVETA</a></li>
              <li><a href="https://cdacc.ac.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">TVET-CDACC</a></li>
              <li><a href="https://knec.ac.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">KNEC</a></li>
              <li><a href="https://nita.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">NITA</a></li>
              <li><a href="https://katti.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">KATTI</a></li>
              <li><a href="https://education.go.ke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">MOE</a></li>
              <li><a href="mailto:staff@airads.ac.ke" className="text-gray-300 hover:text-white transition-colors">Staff Mail</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Location</h4>
            <div className="text-gray-300 space-y-2">
              <p>Institute Plaza 3rd & 4th Floor</p>
              <p>Head Office</p>
              <p className="mt-4">
                <span className="mr-2">📞</span>
                +254 723 555 999
              </p>
              <p>
                <span className="mr-2">📱</span>
                0723 555 999
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © Copyright AIRADS College 2024. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Designed and Developed by{" "}
              <span className="text-blue-400 font-medium">Powerspur Solutions Ltd</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 space-y-3 z-50">
        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/254723555999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Chat with us
        </a>

        {/* Apply Now Button */}
        <a
          href="https://admissions.airads.ac.ke/" target="_blank" rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors text-center block"
        >
          Apply Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const StudyAirads = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 text-gray-800 font-sans antialiased">
      {/* Navbar Placeholder - You'll need to integrate your MainNavbar here */}
      <div className="h-24 bg-white/90 backdrop-blur-sm shadow-sm"></div> {/* Placeholder for Navbar */}

      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Why Study at AIRADS?
          </h1>
          <p className="text-xl text-gray-600">
            Your Gateway to a Successful Career in Technical Education
          </p>
        </header>

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6 border-b-4 border-red-400 pb-2 inline-block">
            The Leading TVET Institution in Kenya
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            AIRADS College is proud to be one of Kenya’s top TVET-accredited institutions, with six campuses strategically located across the country. We are dedicated to delivering Competency-Based Education and Training (CBET) in alignment with Kenya Vision 2030, equipping learners with practical skills for the modern workforce.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 1.381-1.119 2.5-2.5 2.5S7 12.381 7 11s1.119-2.5 2.5-2.5S12 9.619 12 11z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 7.5c-2.057-2.057-4.713-3.211-7.5-3.211S4.057 5.443 2 7.5"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.5c-3.285 0-6.198-1.751-7.973-4.5M16.008 16.5c-1.775 2.749-4.688 4.5-7.977 4.5"></path></svg>
              <h3 className="text-2xl font-bold text-blue-700">Hands-On Training</h3>
            </div>
            <p className="text-lg text-gray-600">
              We provide state-of-the-art workshops, science laboratories, and catering labs to ensure students receive quality, practical learning experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-red-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 11.5a9.5 9.5 0 0119 0v1c0 1.381-1.119 2.5-2.5 2.5H5.5a2.5 2.5 0 01-2.5-2.5v-1z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12v4"></path></svg>
              <h3 className="text-2xl font-bold text-red-700">National Presence</h3>
            </div>
            <p className="text-lg text-gray-600">
              With campuses in major towns, AIRADS offers access to quality education wherever you are.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.209 1.791 4 4 4h10c2.209 0 4-1.791 4-4V7"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 11a2 2 0 100-4 2 2 0 000 4z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 11a2 2 0 100-4 2 2 0 000 4z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L5 17"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17L19 17"></path></svg>
              <h3 className="text-2xl font-bold text-blue-700">Skills for Today, Careers for Tomorrow</h3>
            </div>
            <p className="text-lg text-gray-600">
              Our courses are designed to match industry needs and prepare students for real-world opportunities.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-xl shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-400 pb-2 inline-block">
            Why Choose AIRADS College?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            At African Institute of Research and Development Studies (AIRADS), we are committed to delivering world-class technical and professional education. Here’s why thousands of students choose us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Outstanding Exam Success</h3>
                <p className="text-lg text-gray-600">We consistently achieve excellent pass rates (90–100%) in KNEC, NITA, ICM, and KASNEB examinations — a track record we’ve maintained for over 18 years.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Qualified & Experienced Trainers</h3>
                <p className="text-lg text-gray-600">Our teaching team comprises highly trained and industry-experienced professionals dedicated to student success.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Adequate Learning Resources</h3>
                <p className="text-lg text-gray-600">Our libraries, laboratories, and digital resources are fully equipped to support effective learning and research.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Free Internet & Wi-Fi</h3>
                <p className="text-lg text-gray-600">Stay connected with our complimentary internet access across campus.</p>
              </div>
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

export default StudyAirads;

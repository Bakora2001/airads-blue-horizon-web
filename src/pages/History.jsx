import React from 'react';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const History = () => {
  const registrations = [
    {
      title: "Technical and Vocational Education and Training Authority",
      acronym: "TVETA",
      registration: "MOHEST/PC/1049/07",
      icon: "🎓",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      title: "AIRADS COLLEGE KNDI Interim License",
      acronym: "KNDI",
      registration: "KNDI/ACCR/IL 029",
      icon: "📜",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      title: "Kenya Pharmacy and Poisons Board",
      acronym: "KPPB",
      registration: "PPB/COL/013/07",
      icon: "💊",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      title: "Kenya National Examination Council",
      acronym: "KNEC",
      registration: "Technical, Business and ECDE Centre numbers",
      icon: "📚",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      title: "Kenya Accountants and Secretaries National Examination Board",
      acronym: "KASNEB",
      registration: "KASNEB",
      icon: "📊",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100"
    }
  ];

  const campuses = [
    { name: "Eldoret Town Campus", isMain: true, students: "5,000+", established: "2006" },
    { name: "Kericho Town Campus", isMain: false, students: "3,200+", established: "2012" },
    { name: "Kisumu City Campus", isMain: false, students: "4,100+", established: "2014" },
    { name: "Nakuru City Campus", isMain: false, students: "3,800+", established: "2015" },
    { name: "Bungoma Town Campus", isMain: false, students: "2,900+", established: "2017" },
    { name: "Lodwar Campus", isMain: false, students: "1,500+", established: "2019" },
    { name: "Maralal Campus", isMain: false, students: "1,200+", established: "2020" }
  ];

  const milestones = [
    { year: "2006", event: "AIRADS College Founded", description: "Opened our doors with a vision for excellence", icon: "🏫" },
    { year: "2010", event: "First Graduation Ceremony", description: "Celebrated our first graduating class", icon: "🎓" },
    { year: "2015", event: "Multi-Campus Expansion", description: "Established campuses across Kenya", icon: "🌍" },
    { year: "2020", event: "Digital Transformation", description: "Embraced online learning platforms", icon: "💻" },
    { year: "2024", event: "25,000+ Graduates", description: "Milestone achievement in student success", icon: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <TopNavbar />
      <MainNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl animate-bounce"></div>
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative container mx-auto px-6 py-32">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-8 py-4 bg-white bg-opacity-10 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-sm border border-white border-opacity-20">
                Since 2006
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-red-300 bg-clip-text text-transparent leading-tight">
              Our History
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-normal max-w-4xl mx-auto">
              <span className="font-semibold text-white">18 Years</span> of Excellence in Technical Education and 
              <span className="font-semibold text-red-200"> Innovation</span>
            </p>
            <div className="mt-12 flex justify-center space-x-4">
              <div className="w-8 h-1 bg-white rounded-full"></div>
              <div className="w-16 h-1 bg-blue-300 rounded-full"></div>
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About AIRADS Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-red-500"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-red-100 rounded-full opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Institution Overview */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-4xl font-bold mb-8 shadow-2xl">
                🏛️
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                African Institute of Research and Development Studies
              </h2>
              <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 rounded-3xl p-12 shadow-2xl border border-blue-100">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-normal">
                  African Institute of Research and Development Studies is one of the best tertiary technical training institutions offering 
                  <span className="font-semibold text-blue-700"> Higher National Diploma, Diploma, certificate, and artisan courses</span> examined by 
                  KNEC and KASNEB. We are an institution with campuses in major towns in Kenya.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                      🗓️
                    </div>
                    <div className="text-3xl font-semibold text-blue-600 mb-2">April 1st, 2006</div>
                    <div className="text-gray-600 font-medium text-lg">Opened Our Doors</div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg bg-red-500">
                      ⭐
                    </div>
                    <div className="text-3xl font-semibold mb-2 text-red-600">18 Years</div>
                    <div className="text-gray-600 font-medium text-lg">Of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-semibold text-gray-800 text-center mb-16">
                Our Journey Through Time
              </h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      {milestone.icon}
                    </div>
                    <div className="ml-8 flex-1 bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <div className="text-xl font-semibold text-blue-600 mb-2">{milestone.year}</div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.event}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                        <div className="hidden md:block w-1 h-16 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graduation Achievements */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-5 blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-400 rounded-full opacity-5 blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-semibold mb-8">🎓 GRADUATION ACHIEVEMENTS</h3>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                    <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                      <div className="text-4xl font-bold text-yellow-300 mb-4">8</div>
                      <div className="text-lg font-medium">Graduation Ceremonies</div>
                      <div className="text-sm opacity-75 mt-2">Celebrating Excellence</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                      <div className="text-4xl font-bold text-green-300 mb-4">25,000+</div>
                      <div className="text-lg font-medium">Students Released to Job Market</div>
                      <div className="text-sm opacity-75 mt-2">Making Impact Globally</div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6 max-w-4xl mx-auto backdrop-blur-sm">
                    <p className="text-lg md:text-xl text-blue-200 italic leading-relaxed">
                      "AIRADS College is proud of you graduands. The real ambassadors of African Institute of Research and Development Studies."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Registrations */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                  Official Registrations & Approvals
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Officially recognized and approved by leading educational authorities in Kenya
                </p>
                <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {registrations.map((reg, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${reg.color} rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}></div>
                    <div className={`relative bg-gradient-to-br ${reg.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${reg.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {reg.icon}
                        </div>
                        <div className="ml-4">
                          <div className={`text-2xl font-black bg-gradient-to-r ${reg.color} bg-clip-text text-transparent`}>
                            {reg.acronym}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-base font-semibold text-gray-800 mb-4 leading-tight">{reg.title}</h4>
                      <div className="bg-white bg-opacity-50 rounded-xl p-4">
                        <p className="text-sm text-gray-700 font-mono font-semibold">
                          {reg.registration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Network */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                  Our Campus Network
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Strategically located across Kenya to serve students nationwide
                </p>
                <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl p-10 shadow-2xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campuses.map((campus, index) => (
                    <div key={index} className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                      campus.isMain 
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-2xl' 
                        : 'bg-white text-gray-700 shadow-lg hover:shadow-2xl'
                    }`}>
                      {/* Background Effect for Main Campus */}
                      {campus.isMain && (
                        <div className="absolute inset-0">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
                        </div>
                      )}
                      
                      <div className="relative p-6 text-center">
                        <div className="text-3xl mb-4">
                          {campus.isMain ? '🏛️' : '🏢'}
                        </div>
                        <h4 className="text-base font-semibold mb-2">
                          {campus.name}
                          {campus.isMain && <div className="text-sm font-normal mt-1 opacity-90">(Main Campus)</div>}
                        </h4>
                        <div className="flex justify-center space-x-4 text-sm opacity-75">
                          <div>
                            <div className="font-semibold">{campus.students}</div>
                            <div>Students</div>
                          </div>
                          <div>
                            <div className="font-semibold">{campus.established}</div>
                            <div>Established</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision 2030 Commitment */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-800 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-400 rounded-full opacity-10 blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-semibold mb-8">🚀 Vision 2030 Commitment</h3>
                  <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto font-normal">
                    AIRADS College in the spirit of the <span className="font-semibold text-blue-300">vision 2030</span> and 
                    <span className="font-semibold text-red-300"> TVETA publications</span>, is one of the best colleges in implementing and executing the 
                    <span className="font-semibold text-blue-200"> TVET courses and Competency Based Curriculum</span>. We have various courses approved by the ministry of education and TVETA.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-16">Our Impact in Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "18", label: "Years of Excellence", icon: "🏆", color: "from-blue-500 to-blue-600" },
                  { number: "7", label: "Campus Locations", icon: "🏢", color: "from-blue-600 to-blue-700" },
                  { number: "25K+", label: "Graduates", icon: "🎓", color: "from-red-500 to-red-600" },
                  { number: "5+", label: "Official Registrations", icon: "📜", color: "from-blue-700 to-red-500" }
                ].map((stat, index) => (
                  <div key={index} className="group text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                    <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-2xl group-hover:rotate-12 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className={`text-4xl font-semibold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
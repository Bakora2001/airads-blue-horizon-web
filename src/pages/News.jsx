
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const News = () => {
  const newsItems = [
    {
      title: "August 2025 INTAKE ONGOING",
      date: "June 15, 2025",
      category: "Admissions",
      excerpt: "Applications are now open for the July 2025 intake across all our campuses. Join us for quality technical education.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Special Computer Packages Offer",
      date: "June 10, 2025", 
      category: "Programs",
      excerpt: "Take advantage of our special offer on 14 computer packages with partial sponsorship opportunities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "New Campus Opening in Maralal",
      date: "May 20, 2025",
      category: "Campus News",
      excerpt: "We are excited to announce the opening of our newest campus in Maralal, bringing quality education to Northern Kenya.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  const events = [
    {
      title: "Career Guidance Workshop",
      date: "July 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "All Campuses",
      description: "Free career guidance workshop for prospective students and parents."
    },
    {
      title: "Industrial Attachment Fair",
      date: "July 12, 2025", 
      time: "9:00 AM - 4:00 PM",
      location: "Nakuru Campus",
      description: "Meet with industry partners and secure attachment opportunities."
    },
    {
      title: "Annual Sports Day",
      date: "July 20, 2025",
      time: "8:00 AM - 5:00 PM", 
      location: "Eldoret Campus",
      description: "Inter-campus sports competitions and talent showcase."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">News & Events</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and upcoming events at AIRADS College.
            </p>
          </div>

          {/* Latest News Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full m-4">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-gray-500">
                        <span>📅 {event.date}</span>
                        <span>🕒 {event.time}</span>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;

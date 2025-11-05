import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Ship, Fish, Building2, Trophy, Star, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';

// PageLayout Component
const PageLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section 
        className="mt-24 relative py-24 px-4 overflow-hidden"
         style={{ 
          background: `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`,
          ...(backgroundImage && {
            backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          })
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-amber-500/90"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Content */}
      <main className="relative -mt-12 z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description, className }) => {
  return (
    <Card className={`bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 group ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

// ContactCard Component
const ContactCard = ({ phone, whatsapp, email, address, className }) => {
  return (
    <Card className={`bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href={`tel:${phone}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                {phone}
              </a>
            </div>
          </div>

          {whatsapp && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="text-green-600 font-medium hover:text-green-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsapp}
                </a>
              </div>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-900 font-medium">{address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Kisumu = () => {
  const features = [
    {
      icon: Waves,
      title: "Lakeside Location",
      description: "Strategic location in the beautiful lakeside city with access to unique opportunities."
    },
    {
      icon: Ship,
      title: "Marine Programs",
      description: "Specialized programs in marine and aquatic related technical fields."
    },
    {
      icon: Building2,
      title: "Business Hub",
      description: "Located in Western Kenya's commercial center with strong industry connections."
    },
    {
      icon: Fish,
      title: "Aquaculture Focus",
      description: "Programs aligned with the region's fishing and aquaculture industries."
    }
  ];

  const programs = [
    "Hospitality and Tourism Management",
    "Information Communication Technology",
    "Business Management",
    "Health and Social Sciences",
    "Beauty and Cosmetology",
    "Electrical Engineering"
  ];

  return (
    <PageLayout
      title="AIRADS Kisumu Campus"
      subtitle="Located in the beautiful lakeside city of Kisumu, offering diverse programs with strong connections to regional industries."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kisumu Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Situated in the vibrant lakeside city of Kisumu, our campus serves as a gateway to technical 
                    education in Western Kenya. The campus benefits from its unique location near Lake Victoria, 
                    offering students exposure to diverse economic activities including fishing, agriculture, and commerce.
                  </p>
                  <p className="mb-4">
                    Our Kisumu campus is renowned for its comprehensive programs that align with the region's 
                    economic needs. From hospitality and tourism to technical engineering, we prepare students 
                    for careers in both traditional and emerging sectors.
                  </p>
                  <p>
                    With modern facilities and a commitment to practical education, the campus maintains 
                    AIRADS College's tradition of excellence while serving the unique needs of the lakeside region.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Advantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Programs</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <Trophy className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Regional Impact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Integration</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Tourism & hospitality sector</li>
                      <li>• Fishing industry partnerships</li>
                      <li>• Agricultural value chains</li>
                      <li>• Cross-border trade opportunities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Benefits</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Diverse career opportunities</li>
                      <li>• Industry mentorship programs</li>
                      <li>• Practical training placements</li>
                      <li>• Entrepreneurship support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">450+</div>
                  <div className="text-white/90">Graduates</div>
                </CardContent>
              </Card>
              <Card className="bg-green-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">92%</div>
                  <div className="text-white/90">Pass Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">12+</div>
                  <div className="text-white/90">Programs</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <ContactCard
              phone="0715-505-262"
              whatsapp="0715-505-262"
              email="kisumu@airads.ac.ke"
              address="Kisumu City, Kisumu County"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Kisumu;
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Users, BookOpen, Wifi, Trophy, Star, Phone, MessageCircle, Mail } from 'lucide-react';
import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';

// PageLayout Component
const PageLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section with Blue Theme */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
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
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href={`tel:${phone}`} className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
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
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
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
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
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
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Nakuru = () => {
  const features = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Centrally located in Nakuru, serving students from across Kenya with easy accessibility."
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "Well-equipped classrooms, workshops, and laboratories for comprehensive technical training."
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Vibrant student community from different backgrounds creating rich learning experiences."
    },
    {
      icon: BookOpen,
      title: "Quality Programs",
      description: "Comprehensive technical programs aligned with industry needs and TVETA standards."
    }
  ];

  const programs = [
    "Diploma in Information Communication Technology",
    "Certificate in Project Management", 
    "Diploma in Business Management",
    "Certificate in Electrical Installation",
    "Beauty and Cosmetology",
    "Computer Packages Training",
    "Artisan Courses",
    "Short Professional Courses"
  ];

  return (
    <PageLayout
      title="AIRADS Nakuru Campus"
      subtitle="Central location serving students across Kenya with comprehensive technical education programs and modern facilities."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Nakuru Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Located in the heart of Nakuru, our campus serves as a central hub for technical education 
                    in the Rift Valley region. The strategic location makes it easily accessible to students 
                    from different parts of Kenya, fostering a diverse and vibrant learning community.
                  </p>
                  <p className="mb-4">
                    Our Nakuru campus is equipped with modern facilities and infrastructure that support 
                    comprehensive technical education. From ICT laboratories to engineering workshops, 
                    we provide students with hands-on training that prepares them for the modern workplace.
                  </p>
                  <p>
                    With a commitment to excellence and innovation, the campus maintains AIRADS College's 
                    reputation for quality education while serving the unique needs of the central Kenya region.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Programs</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Campus Life & Opportunities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Excellence</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• TVETA approved curriculum</li>
                      <li>• Industry-experienced instructors</li>
                      <li>• Modern learning facilities</li>
                      <li>• 90-100% pass rates</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Support</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Career guidance & counseling</li>
                      <li>• Industrial attachment placement</li>
                      <li>• Free WiFi & computer access</li>
                      <li>• Entrepreneurship programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">700+</div>
                  <div className="text-white/90">Students</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-white/90">Pass Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-white/90">Programs</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <ContactCard
              phone=""
              whatsapp=""
              email="nakuru@airads.ac.ke"
              address="Nakuru Town, Nakuru County"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Nakuru;
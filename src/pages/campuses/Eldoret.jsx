import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Cog, Computer, Users, Trophy, Star, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

// PageLayout Component
const PageLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`,
          ...(backgroundImage && {
            backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          })
        }}
      >
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
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>{title}</h3>
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
        <h3 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div 
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
            >
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <a href={`tel:${phone}`} className="font-medium hover:opacity-80 transition-all duration-300" style={{ color: '#1e3a8a' }}>
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
                <p className="text-sm text-gray-600">WhatsApp</p>
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="text-green-500 font-medium hover:opacity-80 transition-all duration-300"
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
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#1e3a8a' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a 
                  href={`mailto:${email}`} 
                  className="font-medium hover:opacity-80 transition-all duration-300"
                  style={{ color: '#1e3a8a' }}
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
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium" style={{ color: '#1e3a8a' }}>{address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <Button 
            className="w-full text-white hover:shadow-lg transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
          >
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            className="w-full hover:text-white transition-all duration-300"
            style={{ 
              borderColor: '#1e3a8a', 
              color: '#1e3a8a',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e3a8a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Eldoret = () => {
  const features = [
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art workshops, laboratories and modern equipment for comprehensive training."
    },
    {
      icon: Cog,
      title: "Engineering Excellence",
      description: "Specialized in engineering and technical programs with industry-standard equipment."
    },
    {
      icon: Computer,
      title: "ICT Hub",
      description: "Advanced computer labs and ICT training facilities for digital skills development."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Highly qualified trainers with extensive industry experience and expertise."
    }
  ];

  const specialPrograms = [
    "Diploma in Electrical/Electronic Engineering",
    "Diploma in Information Communication Technology",
    "Certificate in Project Management",
    "Artisan in Electrical Installation",
    "Computer Packages Training",
    "Industrial Attachment Programs"
  ];

  return (
    <PageLayout
      title="AIRADS Eldoret Campus"
      subtitle="Modern facilities in Eldoret serving the Rift Valley region with cutting-edge technical education and engineering programs."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1e3a8a' }}>About Eldoret Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Our Eldoret campus stands as a beacon of technical excellence in the Rift Valley region. 
                    Located in one of Kenya's fastest-growing cities, the campus serves as a hub for engineering, 
                    ICT, and technical education with modern facilities that rival the best institutions in the country.
                  </p>
                  <p className="mb-4">
                    With a focus on practical, hands-on learning, our Eldoret campus is equipped with industry-standard 
                    workshops, computer laboratories, and modern equipment that ensure students graduate with skills 
                    that are immediately applicable in the workplace.
                  </p>
                  <p>
                    The campus has built strong partnerships with local industries and maintains our institutional 
                    commitment to excellence with consistent high pass rates and graduate employment success.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1e3a8a' }}>Why Choose Eldoret Campus?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Specialized Programs</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {specialPrograms.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#f1f5f9' }}>
                      <Star className="w-5 h-5 flex-shrink-0" style={{ color: '#1e3a8a' }} />
                      <span className="font-medium" style={{ color: '#1e3a8a' }}>{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Campus Excellence</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>Academic Excellence</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 90-100% KNEC pass rate</li>
                      <li>• TVETA approved programs</li>
                      <li>• Industry-aligned curriculum</li>
                      <li>• Qualified instructors</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>Facilities & Resources</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Modern workshops & labs</li>
                      <li>• Free WiFi & internet</li>
                      <li>• Computer training centers</li>
                      <li>• Library & study areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-white shadow-lg border-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">800+</div>
                  <div className="text-white/90">Students</div>
                </CardContent>
              </Card>
              <Card className="bg-green-500 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">18</div>
                  <div className="text-white/90">Years</div>
                </CardContent>
              </Card>
              <Card className="text-white shadow-lg border-0" style={{ backgroundColor: '#1e3a8a' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/90">Employment</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <ContactCard
              phone="0715-696-979"
              whatsapp="0715-696-979"
              email="eldoret@airads.ac.ke"
              address="Eldoret Town, Uasin Gishu County"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Eldoret;
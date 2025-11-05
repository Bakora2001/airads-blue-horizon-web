import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Wifi, Building2, Trophy, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

// PageLayout Component
const PageLayout = ({ children, title, subtitle, backgroundImage }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
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

const Bungoma = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Qualified and experienced trainers dedicated to student success and practical learning."
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art workshops, laboratories, and equipment for hands-on training."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Wide range of TVET courses approved by TVETA and aligned with industry needs."
    },
    {
      icon: Wifi,
      title: "Digital Learning",
      description: "Free WiFi and computer access for research and modern learning approaches."
    }
  ];

  const courses = [
    "Diploma in Electrical/Electronic Engineering",
    "Certificate in Information Communication Technology", 
    "Artisan in Plumbing",
    "Certificate in Project Management",
    "Beauty and Cosmetology",
    "Short Courses & NITA Programs"
  ];

  return (
    <PageLayout
      title="AIRADS Bungoma Campus"
      subtitle="Strategic location in Bungoma with state-of-the-art equipment. Serving Western Kenya with quality technical education and vocational training."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1e3a8a' }}>About Bungoma Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Located in the vibrant town of Bungoma, our campus serves as a beacon of technical education 
                    in Western Kenya. With over 18 years of consistent KNEC excellence, we continue to produce 
                    skilled graduates who contribute meaningfully to Kenya's workforce.
                  </p>
                  <p className="mb-4">
                    Our Bungoma campus is equipped with modern workshops, computer laboratories, and practical 
                    training facilities that ensure students gain hands-on experience in their chosen fields. 
                    We maintain our commitment to quality education with a 90-100% pass rate in national examinations.
                  </p>
                  <p>
                    The campus serves students from Bungoma County and surrounding regions, offering flexible 
                    learning schedules and industry-relevant curricula that prepare graduates for immediate 
                    employment or entrepreneurship opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1e3a8a' }}>Why Choose Bungoma Campus?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            {/* Popular Courses */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Popular Courses</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#f1f5f9' }}>
                      <Trophy className="w-5 h-5 flex-shrink-0" style={{ color: '#1e3a8a' }} />
                      <span className="font-medium" style={{ color: '#1e3a8a' }}>{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-white shadow-lg border-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Graduates</div>
                </CardContent>
              </Card>
              <Card className="bg-green-500 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/90">Pass Rate</div>
                </CardContent>
              </Card>
              <Card className="text-white shadow-lg border-0" style={{ backgroundColor: '#1e3a8a' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/90">Programs</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div>
            <ContactCard
              phone="0715-771-316"
              whatsapp="0715-771-316"
              email="bungoma@airads.ac.ke"
              address="Bungoma Town, Western Kenya"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Bungoma;
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Wifi, Globe, Clock, Users, BookOpen, Trophy, Star, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
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
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: backgroundImage ? 
            `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(245, 158, 11, 0.9) 100%), url(${backgroundImage})` :
            'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            Enroll Online
          </Button>
          <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Virtual = () => {
  const features = [
    {
      icon: Monitor,
      title: "Digital Learning Platform",
      description: "State-of-the-art online learning management system with interactive content and tools."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials and recorded lectures."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access quality education from anywhere in the world with internet connectivity."
    },
    {
      icon: Users,
      title: "Virtual Community",
      description: "Interactive online community with peer collaboration and instructor support."
    }
  ];

  const programs = [
    "Certificate in Information Communication Technology",
    "Certificate in Project Management",
    "Diploma in Business Management",
    "Computer Packages Training",
    "Digital Marketing Fundamentals", 
    "Entrepreneurship and Innovation",
    "Data Analysis and Visualization",
    "Online Teaching and Learning",
    "E-commerce and Digital Business",
    "Cybersecurity Fundamentals"
  ];

  const platforms = [
    "Video Conferencing (Zoom, Google Meet)",
    "Learning Management System (LMS)",
    "Interactive Whiteboards",
    "Digital Libraries and Resources",
    "Online Assessment Tools",
    "Mobile Learning Apps"
  ];

  return (
    <PageLayout
      title="AIRADS Virtual Campus"
      subtitle="Breaking geographical barriers with quality online education. Learn from anywhere, anytime with our comprehensive virtual learning platform."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Virtual Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Our Virtual Campus represents AIRADS College's commitment to making quality technical education 
                    accessible to everyone, regardless of location. Through innovative online learning technologies, 
                    we deliver the same high-quality education that has made AIRADS a leader in technical training.
                  </p>
                  <p className="mb-4">
                    The virtual campus leverages cutting-edge digital tools and platforms to create engaging, 
                    interactive learning experiences. Students benefit from live online classes, recorded lectures, 
                    digital resources, and real-time interaction with instructors and fellow students.
                  </p>
                  <p>
                    Whether you're a working professional seeking to upgrade your skills, a parent managing family 
                    responsibilities, or someone in a remote location, our virtual campus brings quality education 
                    directly to you.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Virtual Learning Advantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Programs Available</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Platforms</h3>
                  <div className="space-y-3">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Wifi className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600">{platform}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Student Support</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">24/7 Technical Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">Online Tutoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">Digital Library Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">Career Guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">Progress Tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-white/90">Online Students</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-white/90">Completion Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/90">Online Programs</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <ContactCard
              phone="0723-555-999"
              whatsapp="0723-555-999"
              email="virtual@airads.ac.ke"
              address="Online Platform - Accessible Worldwide"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Virtual;
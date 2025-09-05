import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Wifi, MapPin, Trophy, Phone, MessageCircle, Mail } from 'lucide-react';
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
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: backgroundImage 
            ? `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(245, 158, 11, 0.9) 100%), url(${backgroundImage})`
            : 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(245, 158, 11) 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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

const Kericho = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Tea Capital Location",
      description: "Strategic location in Kenya's tea capital offering unique agricultural and technical programs."
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Strong partnerships with local tea estates and manufacturing industries for attachments."
    },
    {
      icon: BookOpen,
      title: "Practical Training",
      description: "Hands-on training approach with modern equipment and real-world applications."
    },
    {
      icon: Wifi,
      title: "Connected Learning",
      description: "High-speed internet and digital resources for enhanced learning experience."
    }
  ];

  return (
    <PageLayout
      title="AIRADS Kericho Campus" 
      subtitle="Located in the heart of Kericho, offering comprehensive technical programs in Kenya's beautiful highlands region."
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kericho Campus</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-4">
                    Nestled in the scenic town of Kericho, renowned for its lush tea plantations and cool climate, 
                    our campus provides an ideal learning environment for technical education. The campus has been 
                    a cornerstone of vocational training in the South Rift region.
                  </p>
                  <p className="mb-4">
                    Our Kericho campus benefits from strong industry connections, particularly with the agricultural 
                    and manufacturing sectors. Students have access to practical training opportunities in local 
                    industries, making their education highly relevant and employment-ready.
                  </p>
                  <p>
                    With modern facilities and experienced faculty, we maintain our tradition of excellence, 
                    consistently achieving high pass rates and producing graduates who excel in their careers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Success Story</h2>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <blockquote className="text-lg italic text-gray-800 mb-4">
                    "I studied in AIRADS Kericho Campus in 2016. Indeed it is where my dreams were hatched 
                    and ultimately I am who I am today because of this institution."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Janeth Chepkorir</div>
                      <div className="text-gray-600">Class of 2016 • Business Administration</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">600+</div>
                  <div className="text-white/90">Alumni</div>
                </CardContent>
              </Card>
              <Card className="bg-green-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/90">Pass Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-600 text-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-white/90">Years</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <ContactCard
              phone="0729-976-885"
              whatsapp="0729-976-885"
              email="kericho@airads.ac.ke"
              address="Kericho Town, Kericho County"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Kericho;
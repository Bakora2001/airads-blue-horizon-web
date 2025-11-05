import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Utensils, 
  MapPin, 
  Users, 
  Award, 
  Clock,
  GraduationCap,
  Briefcase,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const SchoolOfHospitalityTourism = () => {
  const courses = [
    {
      title: "Diploma in Food and Beverage Production and Service",
      duration: "2 Years",
      level: "Diploma",
      description: "Comprehensive training in culinary arts, restaurant management, and beverage service.",
      modules: ["Culinary Arts", "Menu Planning", "Food Safety", "Restaurant Operations"]
    },
    {
      title: "Certificate in Hotel and Restaurant Management",
      duration: "1 Year",
      level: "Certificate",
      description: "Essential skills in hotel operations, guest services, and hospitality management.",
      modules: ["Front Office", "Housekeeping", "Customer Service", "Hotel Operations"]
    },
    {
      title: "Diploma in Travel and Tourism Management",
      duration: "2 Years",
      level: "Diploma",
      description: "Professional training in tourism operations, travel planning, and destination management.",
      modules: ["Tour Operations", "Travel Planning", "Cultural Tourism", "Hospitality Marketing"]
    },
    {
      title: "Certificate in Catering and Accommodation",
      duration: "1 Year",
      level: "Certificate",
      description: "Practical skills in commercial catering and accommodation services.",
      modules: ["Commercial Cooking", "Catering Management", "Accommodation Services", "Event Planning"]
    },
    {
      title: "Artisan in Food Production",
      duration: "6 Months",
      level: "Artisan",
      description: "Hands-on training in professional food preparation and production techniques.",
      modules: ["Basic Cooking", "Food Preparation", "Kitchen Safety", "Food Presentation"]
    },
    {
      title: "Short Course in Barista Training",
      duration: "1 Month",
      level: "Short Course",
      description: "Specialized training in coffee preparation and café operations.",
      modules: ["Coffee Knowledge", "Espresso Techniques", "Latte Art", "Customer Service"]
    }
  ];

  const facilities = [
    {
      icon: <ChefHat className="h-8 w-8 text-blue-600" />,
      title: "Professional Kitchen",
      description: "Fully equipped commercial kitchen with modern appliances and cooking stations"
    },
    {
      icon: <Utensils className="h-8 w-8 text-blue-600" />,
      title: "Restaurant Training Facility",
      description: "Mock restaurant setup for practical training in food service and hospitality"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Conference & Events Hall",
      description: "Multi-purpose hall for event management training and practical sessions"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Tourism Resource Center",
      description: "Information hub with tourism materials, maps, and planning resources"
    }
  ];

  const careerOpportunities = [
    "Hotel Manager", "Restaurant Manager", "Tour Guide", "Event Coordinator",
    "Chef/Cook", "Front Office Supervisor", "Catering Manager", "Travel Consultant",
    "Food & Beverage Supervisor", "Housekeeping Manager", "Tourism Officer", "Hospitality Trainer"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section with Blue Theme */}
      <section 
        className="mt-24 relative py-20 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School of Hospitality & Tourism Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Excellence in Hospitality Education - Shaping Future Leaders in Tourism & Service Industry
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                Get Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Our School</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The School of Hospitality and Tourism Management at AIRADS College is dedicated to preparing students 
              for successful careers in Kenya's growing hospitality and tourism sector. Our comprehensive programs 
              combine theoretical knowledge with practical skills, ensuring graduates are industry-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Courses approved by KNEC and recognized by leading hospitality employers across Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Practical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hands-on experience in our state-of-the-art facilities and industry attachments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Employment Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  95% of our graduates secure employment within 6 months of completion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of hospitality and tourism programs designed to meet industry demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">{course.level}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Modules:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.modules.map((module, idx) => (
                        <Badge key={idx} className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our modern facilities provide the perfect environment for practical learning and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{facility.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Career Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates excel in various roles across the hospitality and tourism industry
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section 
        className="py-16 text-white"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Hospitality Career?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join AIRADS College School of Hospitality and Tourism Management and become part of Kenya's premier hospitality professionals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              Apply Online Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us: +254 723 555 999 | Email: hospitality@airads.ac.ke</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolOfHospitalityTourism;
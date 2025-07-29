import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  Calendar,
  Phone,
  Globe,
  Facebook,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

const Application = () => {
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => prev + 1);
    }, 200);
    
    return () => clearInterval(timer);
  }, []);

  const campuses = [
    "ELDORET", "NAKURU", "KERICHO", "KISUMU", "BUNGOMA", "LODWAR"
  ];

  const whyChooseUs = [
    "Technical Education for gainful and Self employment",
    "All our campuses are Accredited by Ministry of Education – TVETA",
    "Adequate learning well-furnished resources for practical training",
    "Excellent KNEC pass rate (90-100%) for the last 13 years consistently",
    "Qualified and Experienced Lecturers, Trainers and Instructors",
    "Serene Learning Environment",
    "Free WIFI-Internet for Research and Learning",
    "Industrial attachments and High Employability – Job Placements"
  ];

  const schools = [
    {
      title: "SCHOOL OF ELECTRICAL ENGINEERING AND ICT",
      courses: [
        "Electrical and Electronics Engineering (Power Option)",
        "Electrical Installation",
        "Welding and Fabrication",
        "Plumbing",
        "Information Communication Technology (ICT)",
        "Networking",
        "Computer Software Programming"
      ]
    },
    {
      title: "SCHOOL OF HOSPITALITY AND TOURISM MANAGEMENT",
      courses: [
        "Food and Beverage Production",
        "Food and Beverage Service",
        "Hotel and Catering Accommodation",
        "Housekeeping and Laundry Services",
        "Bakery Technology",
        "Tourism Management",
        "Tour Guiding and Operations"
      ]
    },
    {
      title: "SCHOOL OF HEALTH AND SOCIAL SCIENCES",
      courses: [
        "Nutrition and Dietetics Management",
        "Social Work",
        "Community Development",
        "HIV Testing and Management",
        "Disaster Management",
        "Health Records with IT",
        "Community Health and Development"
      ]
    },
    {
      title: "SCHOOL OF BEAUTY AND HAIRDRESSING",
      courses: [
        "Hairdressing and Plaiting",
        "Beauty Therapy",
        "Cosmetology (Beauty Therapy and Hairdressing)",
        "Barbering",
        "Nail Technology",
        "Massage/Reflexology",
        "Lash Tinting & Perming technology"
      ]
    },
    {
      title: "SCHOOL OF JOURNALISM AND MEDIA STUDIES",
      courses: [
        "Journalism",
        "Mass Media and Communication",
        "Radio Production and Broadcasting",
        "TV Production and Broadcasting",
        "Video Editing"
      ]
    },
    {
      title: "SCHOOL OF BUSINESS AND MANAGEMENT STUDIES",
      courses: [
        "Business Management",
        "Entrepreneurship development",
        "Human Resource Management",
        "Supply Chain Management",
        "Cooperative Management",
        "Sales & Marketing",
        "Banking and Finance"
      ]
    }
  ];

  const computerPackages = [
    "Introduction to computers", "Keyboarding", "Microsoft Windows /operating system",
    "Word processing using MS word", "Spreadsheet using MS Excel", "Database Management using MS Access",
    "Digital Presentation using MS PowerPoint", "Internet and Email", "Introduction to graphic design",
    "Social Media & Digital Skills", "Software Installation", "Computer & Maintenance",
    "Document Formatting and printing skills", "PC troubleshooting"
  ];

  const contactMethods = [
    { campus: "ELDORET", phone: "0715-696-979" },
    { campus: "NAKURU", phone: "0711-488-302" },
    { campus: "KERICHO", phone: "0729-976-885" },
    { campus: "KISUMU", phone: "0715-505-262" },
    { campus: "BUNGOMA", phone: "0715-771-316" },
    { campus: "LODWAR", phone: "Coming Soon" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-airads-blue/10 to-airads-red/10 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-airads-blue to-airads-red text-white border-0">
              AUGUST 2025 INTAKE NOW OPEN
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
              AFRICAN INSTITUTE OF RESEARCH<br />
              AND DEVELOPMENT STUDIES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              The Best TVET College in Kenya - A Centre of Excellence Where Quality is Nurtured
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {campuses.map((campus, index) => (
                <Badge key={campus} 
                       className={`text-sm px-4 py-2 bg-airads-blue/10 text-airads-blue border-airads-blue animate-scale-in`}
                       style={{ animationDelay: `${index * 0.1}s` }}>
                  {campus} CAMPUS
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-airads-blue to-airads-blue-dark hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <Globe className="mr-2 h-5 w-5" />
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-airads-red text-airads-red hover:bg-airads-red hover:text-white">
                <Phone className="mr-2 h-5 w-5" />
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AIRADS */}
      <section className="py-20 px-4 bg-gradient-to-r from-white to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why AIRADS College is the Best!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} 
                    className={`hover:shadow-lg transition-all duration-300 border-l-4 border-l-airads-blue ${
                      index < visibleCards ? 'animate-slide-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-airads-blue flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schools and Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Schools & Programs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We offer Artisan, Certificate and Diploma courses in 6 major schools
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {schools.map((school, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-gradient-to-br from-white to-primary/5">
                <CardHeader className="bg-gradient-to-r from-airads-blue to-airads-blue-dark text-white">
                  <CardTitle className="text-lg font-bold flex items-center">
                    <GraduationCap className="mr-3 h-6 w-6" />
                    {school.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-2">
                    {school.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-2 h-2 bg-airads-red rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Packages */}
      <section className="py-20 px-4 bg-gradient-to-r from-airads-blue/5 to-airads-red/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Computer Application Packages
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              14 Computer Packages = Kshs 2,800/= only
            </p>
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-airads-red to-airads-red-dark text-white border-0">
              Certificate in Computer Applications Awarded
            </Badge>
          </div>
          <Card className="max-w-4xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {computerPackages.map((pkg, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-airads-blue to-airads-red rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{pkg}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-airads-blue/10 to-airads-red/10 rounded-lg">
                <p className="text-center text-sm text-muted-foreground">
                  <strong>Duration:</strong> 1-2 months depending on number of hours you attend class per day<br />
                  <strong>Schedule:</strong> Part-time, Evening and Saturday classes Available<br />
                  <strong>New classes commence:</strong> Every Week on Monday and Tuesday
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              HOW TO APPLY OR REGISTER
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <Card className="animate-slide-in-left">
              <CardHeader className="bg-gradient-to-r from-airads-blue to-airads-blue-dark text-white">
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 h-6 w-6" />
                  Campus Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {contactMethods.map((contact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
                      <span className="font-medium text-airads-blue">{contact.campus} Campus</span>
                      <span className="text-muted-foreground">{contact.phone}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Methods */}
            <Card className="animate-slide-in-left">
              <CardHeader className="bg-gradient-to-r from-airads-red to-airads-red-dark text-white">
                <CardTitle className="flex items-center">
                  <Globe className="mr-3 h-6 w-6" />
                  Application Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Globe className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Apply online at www.airads.ac.ke</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Facebook className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Use Facebook inbox (Messenger)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <MapPin className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Visit any of our campus locations</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Phone className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Call/SMS/WhatsApp any campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-airads-blue to-airads-red p-8 rounded-xl text-white animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 text-lg opacity-90">
                Join thousands of successful graduates from AIRADS College
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-airads-blue hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  Apply for AUgusty 2025 Intake
                </Button>
                <Link to="/admissions/forms">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Application Forms
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
            AIRADS College
          </h3>
          <p className="text-gray-400 mb-6">A Centre of Excellence Where Quality is Nurtured</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Globe className="h-6 w-6 text-airads-blue hover:text-airads-red transition-colors cursor-pointer" />
            <Facebook className="h-6 w-6 text-airads-blue hover:text-airads-red transition-colors cursor-pointer" />
            <Twitter className="h-6 w-6 text-airads-blue hover:text-airads-red transition-colors cursor-pointer" />
          </div>
          <p className="text-sm text-gray-500">
            © 2025 AIRADS College. All rights reserved. | TVETA Registered and Licensed
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Application;
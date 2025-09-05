import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Target, 
  Users, 
  Zap, 
  Award, 
  Clock,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Phone,
  Mail,
  Star
} from 'lucide-react';

const NitaCourses = () => {
  const nitaCourses = [
    {
      title: "NITA Welding Technology",
      duration: "6 Months",
      level: "NITA Level 1-3",
      description: "Comprehensive welding training covering arc welding, gas welding, and advanced welding techniques.",
      modules: ["Arc Welding", "Gas Welding", "Safety Procedures", "Metal Fabrication"]
    },
    {
      title: "NITA Motor Vehicle Mechanics",
      duration: "1 Year",
      level: "NITA Level 1-2",
      description: "Professional training in automotive repair, maintenance, and diagnostic procedures.",
      modules: ["Engine Repair", "Electrical Systems", "Transmission", "Diagnostics"]
    },
    {
      title: "NITA Electrical Installation",
      duration: "6 Months",
      level: "NITA Level 1-3",
      description: "Training in electrical wiring, installation, and maintenance of electrical systems.",
      modules: ["Wiring Systems", "Power Distribution", "Safety Standards", "Electrical Testing"]
    },
    {
      title: "NITA Plumbing Technology",
      duration: "6 Months",
      level: "NITA Level 1-2",
      description: "Hands-on training in water supply systems, drainage, and plumbing installations.",
      modules: ["Pipe Installation", "Water Systems", "Drainage", "Plumbing Repairs"]
    },
    {
      title: "NITA Carpentry and Joinery",
      duration: "1 Year",
      level: "NITA Level 1-3",
      description: "Comprehensive woodworking skills including furniture making and construction carpentry.",
      modules: ["Wood Working", "Furniture Making", "Construction Carpentry", "Tool Operation"]
    },
    {
      title: "NITA Masonry",
      duration: "6 Months",
      level: "NITA Level 1-2",
      description: "Professional training in brickwork, stonework, and construction techniques.",
      modules: ["Brickwork", "Stone Masonry", "Concrete Work", "Construction Safety"]
    }
  ];

  const shortCourses = [
    {
      title: "Computer Packages Training",
      duration: "1-3 Months",
      description: "Microsoft Office Suite, Internet skills, and basic computer literacy"
    },
    {
      title: "Digital Marketing",
      duration: "2 Months",
      description: "Social media marketing, SEO, and online business strategies"
    },
    {
      title: "First Aid Training",
      duration: "1 Week",
      description: "Basic first aid, CPR, and emergency response techniques"
    },
    {
      title: "Entrepreneurship Skills",
      duration: "1 Month",
      description: "Business planning, financial management, and startup strategies"
    },
    {
      title: "Customer Service Excellence",
      duration: "2 Weeks",
      description: "Professional customer service skills and communication techniques"
    },
    {
      title: "Basic Accounting",
      duration: "1 Month",
      description: "Bookkeeping, financial records, and basic accounting principles"
    }
  ];

  const facilities = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "NITA Approved Workshops",
      description: "Fully equipped workshops meeting NITA standards for practical training"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Certified Instructors",
      description: "NITA certified trainers with extensive industry experience"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Assessment Centers",
      description: "Accredited assessment facilities for NITA trade tests and certifications"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Modern Equipment",
      description: "Up-to-date tools and machinery for comprehensive practical training"
    }
  ];

  const benefits = [
    "NITA Recognized Certification",
    "Industry-Relevant Skills",
    "Job Placement Assistance",
    "Flexible Training Schedules",
    "Affordable Fees",
    "Practical Skills Focus"
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600/90 to-red-600/70 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NITA Courses & Short Courses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Skills Development for Employment - Practical Training That Opens Doors to Success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About NITA & Short Courses</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AIRADS College is an accredited NITA training provider offering nationally recognized trade courses 
              and practical short courses. Our programs are designed to equip students with employable skills 
              and industry certifications that are valued by employers across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>NITA Accredited</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All courses approved and recognized by National Industrial Training Authority
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Quick Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fast-track programs designed for immediate skill acquisition and employment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nationally recognized certificates that enhance employment opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NITA Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">NITA Trade Courses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              National Industrial Training Authority approved courses for technical skills development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nitaCourses.map((course, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Modules:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.modules.map((module, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Short Courses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quick skill development programs for immediate employment and career enhancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortCourses.map((course, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Short Course</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our NITA & Short Courses?</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm">
                  <Star className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Training Facilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{facility.icon}</div>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Develop Skills for Success</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our NITA courses and short programs to gain practical skills and certifications that employers value
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply for NITA Course
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Register Short Course
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us: +254 723 555 999 | Email: nita@airads.ac.ke</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NitaCourses;
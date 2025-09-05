import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Stethoscope, 
  Users2, 
  Activity, 
  Award, 
  Clock,
  GraduationCap,
  Briefcase,
  Shield,
  Phone,
  Mail,
  BookOpen
} from 'lucide-react';

const SchoolOfHealthSocial = () => {
  const courses = [
    {
      title: "Diploma in Community Health and Development",
      duration: "2 Years",
      level: "Diploma",
      description: "Comprehensive training in community health promotion, disease prevention, and health education.",
      modules: ["Public Health", "Health Promotion", "Epidemiology", "Community Development"]
    },
    {
      title: "Certificate in Health Records and Information Technology",
      duration: "1 Year",
      level: "Certificate",
      description: "Training in medical records management, health information systems, and data management.",
      modules: ["Medical Records", "Health Information Systems", "Data Management", "Medical Coding"]
    },
    {
      title: "Diploma in Social Work and Community Development",
      duration: "2 Years",
      level: "Diploma",
      description: "Professional training in social work practice, counseling, and community development.",
      modules: ["Social Work Practice", "Counseling Skills", "Community Mobilization", "Human Rights"]
    },
    {
      title: "Certificate in Nutrition and Dietetics",
      duration: "1 Year",
      level: "Certificate",
      description: "Essential knowledge in nutrition science, meal planning, and dietary counseling.",
      modules: ["Nutrition Science", "Meal Planning", "Dietary Counseling", "Food Safety"]
    },
    {
      title: "Certificate in Pharmaceutical Technology",
      duration: "1 Year",
      level: "Certificate",
      description: "Training in pharmaceutical operations, drug dispensing, and pharmacy management.",
      modules: ["Pharmacy Operations", "Drug Knowledge", "Dispensing Practices", "Inventory Management"]
    },
    {
      title: "Diploma in Environmental Health",
      duration: "2 Years",
      level: "Diploma",
      description: "Specialized training in environmental health monitoring, sanitation, and pollution control.",
      modules: ["Environmental Monitoring", "Water Quality", "Waste Management", "Health Inspection"]
    }
  ];

  const facilities = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Health Sciences Laboratory",
      description: "Fully equipped laboratory for practical training in health sciences and medical procedures"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Health Information Center",
      description: "Comprehensive library with medical journals, health publications, and research materials"
    },
    {
      icon: <Users2 className="h-8 w-8 text-primary" />,
      title: "Community Outreach Clinic",
      description: "On-campus clinic for practical training and community health services"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Simulation Training Rooms",
      description: "Mock healthcare environments for practical skills development and assessment"
    }
  ];

  const careerOpportunities = [
    "Community Health Officer", "Health Records Officer", "Social Worker", "Nutritionist",
    "Public Health Inspector", "Health Educator", "Medical Records Clerk", "Pharmacy Technician",
    "Environmental Health Officer", "Community Development Officer", "Health Information Analyst", "Research Assistant"
  ];

  return (
    <div className="min-h-screen bg-background">
       <TopNavbar /> 
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600/90 to-emerald-500/70 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School of Health & Social Sciences
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Empowering Communities Through Health Education - Building Tomorrow's Healthcare Professionals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-emerald-600">
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our School</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The School of Health and Social Sciences at AIRADS College is committed to training competent health 
              professionals and social workers who will serve communities with dedication and expertise. Our programs 
              focus on preventive healthcare, community development, and social welfare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training health professionals who make a real difference in community health and wellbeing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Activity className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Practical Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on training through community outreach programs and healthcare attachments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Professional Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Courses recognized by health regulatory bodies and leading healthcare institutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive health and social sciences programs designed to address community health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{course.level}</Badge>
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
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern facilities designed to provide comprehensive health sciences education
            </p>
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

      {/* Career Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our graduates serve in various healthcare and social service roles across Kenya
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="flex items-center p-3 bg-background rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference in Community Health</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join AIRADS College School of Health and Social Sciences and contribute to building healthier communities across Kenya
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply Online Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us: +254 723 555 999 | Email: health@airads.ac.ke</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolOfHealthSocial;
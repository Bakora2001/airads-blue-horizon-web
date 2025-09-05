import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Film, 
  Mic, 
  Radio, 
  Award, 
  Clock,
  GraduationCap,
  Briefcase,
  Tv,
  Phone,
  Mail,
  Monitor
} from 'lucide-react';

const SchoolOfMedia = () => {
  const courses = [
    {
      title: "Diploma in Journalism and Mass Communication",
      duration: "2 Years",
      level: "Diploma",
      description: "Comprehensive training in journalism, broadcasting, and digital media communication.",
      modules: ["News Writing", "Broadcasting", "Media Ethics", "Digital Journalism"]
    },
    {
      title: "Certificate in Film and Video Production",
      duration: "1 Year",
      level: "Certificate",
      description: "Hands-on training in video production, editing, and cinematography.",
      modules: ["Video Production", "Film Editing", "Camera Operations", "Post-Production"]
    },
    {
      title: "Diploma in Radio and Television Production",
      duration: "2 Years",
      level: "Diploma",
      description: "Professional training in radio and TV production, presentation, and programming.",
      modules: ["Radio Production", "TV Production", "Presenting Skills", "Programme Planning"]
    },
    {
      title: "Certificate in Photography",
      duration: "6 Months",
      level: "Certificate",
      description: "Professional photography skills for commercial, portrait, and event photography.",
      modules: ["Digital Photography", "Studio Lighting", "Photo Editing", "Commercial Photography"]
    },
    {
      title: "Certificate in Graphic Design and Animation",
      duration: "1 Year",
      level: "Certificate",
      description: "Creative training in graphic design, animation, and digital content creation.",
      modules: ["Graphic Design", "2D Animation", "Digital Art", "Brand Design"]
    },
    {
      title: "Short Course in Social Media Management",
      duration: "3 Months",
      level: "Short Course",
      description: "Strategic training in social media marketing and content management.",
      modules: ["Social Media Strategy", "Content Creation", "Digital Marketing", "Analytics"]
    }
  ];

  const facilities = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Photography Studio",
      description: "Professional photography studio with lighting equipment and backdrop systems"
    },
    {
      icon: <Film className="h-8 w-8 text-primary" />,
      title: "Video Production Suite",
      description: "State-of-the-art video production and editing facilities with latest equipment"
    },
    {
      icon: <Radio className="h-8 w-8 text-primary" />,
      title: "Radio Station",
      description: "Fully functional campus radio station for hands-on broadcasting experience"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Digital Media Lab",
      description: "Computer lab equipped with industry-standard software for media production"
    }
  ];

  const careerOpportunities = [
    "Journalist", "TV/Radio Presenter", "Video Producer", "Photographer",
    "Graphic Designer", "Social Media Manager", "News Reporter", "Film Editor",
    "Broadcasting Technician", "Content Creator", "Media Consultant", "Animation Artist"
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600/90 to-purple-600/70 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School of Media Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Shaping Media Excellence - Where Stories Come to Life and Creativity Meets Technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
              The School of Media Studies at AIRADS College prepares students for dynamic careers in the media industry. 
              Our programs combine theoretical knowledge with practical experience, ensuring graduates are ready to 
              excel in journalism, broadcasting, film production, and digital media.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Tv className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Industry Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Curriculum designed with industry input to meet current media landscape demands
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mic className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Practical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on experience through campus radio, TV production, and media projects
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Professional Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strong connections with media houses, production companies, and industry professionals
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
              Cutting-edge media programs that prepare students for the evolving digital media landscape
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-standard facilities that provide real-world media production experience
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
              Diverse career paths in the dynamic and growing media and entertainment industry
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="flex items-center p-3 bg-background rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tell Your Story to the World</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join AIRADS College School of Media Studies and become part of Kenya's next generation of media professionals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply Online Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us: +254 723 555 999 | Email: media@airads.ac.ke</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolOfMedia;
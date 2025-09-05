import MainNavbar from '@/components/MainNavbar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Scissors, 
  Sparkles, 
  Home, // Replaced Mirror with Home (or you could use Bed, Bath, or Square)
  Palette, 
  Award, 
  Clock,
  GraduationCap,
  Briefcase,
  Star,
  Phone,
  Mail,
  Crown
} from 'lucide-react';

const SchoolOfBeautyHairdressing = () => {
  const courses = [
    {
      title: "Diploma in Beauty Therapy and Cosmetology",
      duration: "2 Years",
      level: "Diploma",
      description: "Comprehensive training in beauty treatments, skincare, makeup artistry, and salon management.",
      modules: ["Facial Treatments", "Body Massage", "Makeup Artistry", "Salon Management"]
    },
    {
      title: "Certificate in Hairdressing and Beauty Therapy",
      duration: "1 Year",
      level: "Certificate",
      description: "Essential skills in hair styling, cutting, coloring, and basic beauty treatments.",
      modules: ["Hair Cutting & Styling", "Hair Coloring", "Pedicure & Manicure", "Customer Service"]
    },
    {
      title: "Artisan in Hairdressing",
      duration: "6 Months",
      level: "Artisan",
      description: "Hands-on training in professional hairdressing techniques and salon operations.",
      modules: ["Basic Hair Cutting", "Hair Washing", "Blow Drying", "Salon Etiquette"]
    },
    {
      title: "Certificate in Nail Technology",
      duration: "6 Months",
      level: "Certificate",
      description: "Specialized training in nail care, nail art, and manicure/pedicure services.",
      modules: ["Nail Care", "Nail Art", "Gel & Acrylic Nails", "Nail Health"]
    },
    {
      title: "Short Course in Makeup Artistry",
      duration: "3 Months",
      level: "Short Course",
      description: "Professional makeup techniques for bridal, fashion, and special events.",
      modules: ["Bridal Makeup", "Fashion Makeup", "Special Effects", "Color Theory"]
    },
    {
      title: "Certificate in Barbering",
      duration: "6 Months",
      level: "Certificate",
      description: "Professional training in men's grooming, beard styling, and barbershop management.",
      modules: ["Hair Cutting", "Beard Styling", "Shaving Techniques", "Shop Management"]
    }
  ];

  const facilities = [
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Professional Salon",
      description: "Fully equipped salon with modern styling stations and professional equipment"
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Beauty Treatment Rooms",
      description: "Private treatment rooms for facial therapies, massage, and beauty treatments"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Makeup Studio",
      description: "Professional makeup studio with lighting and equipment for all makeup applications"
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Training Barbershop",
      description: "Modern barbershop facility for comprehensive men's grooming training"
    }
  ];

  const careerOpportunities = [
    "Beauty Therapist", "Hair Stylist", "Makeup Artist", "Salon Manager",
    "Nail Technician", "Barber", "Beauty Consultant", "Spa Therapist",
    "Bridal Makeup Artist", "Fashion Stylist", "Beauty Trainer", "Salon Owner"
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600/90 to-purple-600/70 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School of Beauty & Hair Dressing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Transform Lives Through Beauty - Where Creativity Meets Professional Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-pink-600">
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
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
              The School of Beauty and Hair Dressing at AIRADS College is Kenya's premier destination for beauty education. 
              We combine artistic creativity with technical excellence to produce skilled beauty professionals who excel 
              in the rapidly growing beauty and wellness industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle>Creative Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nurturing creativity and artistic skills while maintaining professional standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle>Industry Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training with latest techniques and equipment used in top salons and spas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle>Professional Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Graduates working in leading salons, spas, and establishing successful beauty businesses
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
              Comprehensive beauty and hairdressing programs designed to meet industry demands and personal aspirations
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional-grade facilities that mirror real salon and spa environments
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
              Diverse career paths in the thriving beauty and wellness industry
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="flex items-center p-3 bg-background rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Apply Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Beauty Career Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join AIRADS College School of Beauty and Hair Dressing and turn your passion for beauty into a rewarding career
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply Online Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us: +254 723 555 999 | Email: beauty@airads.ac.ke</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolOfBeautyHairdressing;
import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award, 
  Briefcase,
  Target,
  GraduationCap,
  Star,
  Download,
  ExternalLink,
  ChevronRight,
  Building,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

const CareerGuide = () => {
  const [visibleStats, setVisibleStats] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStats(prev => prev + 1);
    }, 300);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "13+", label: "Years of Excellence", icon: <Award className="h-8 w-8" /> },
    { number: "90-100%", label: "KNEC Pass Rate", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "6", label: "Campuses Nationwide", icon: <Building className="h-8 w-8" /> },
    { number: "1000+", label: "Graduates Employed", icon: <Users className="h-8 w-8" /> }
  ];

  const careerPaths = [
    {
      category: "Engineering & ICT",
      description: "High-demand technical careers in the digital age",
      careers: [
        {
          title: "Electrical Engineer",
          demand: "Very High",
          salary: "Kshs 45,000 - 120,000",
          description: "Design and maintain electrical systems for buildings, power plants, and industrial facilities."
        },
        {
          title: "Software Developer",
          demand: "Extremely High", 
          salary: "Kshs 50,000 - 150,000",
          description: "Create applications, websites, and software solutions for businesses and organizations."
        },
        {
          title: "Network Administrator",
          demand: "High",
          salary: "Kshs 35,000 - 80,000",
          description: "Manage and maintain computer networks for organizations and businesses."
        }
      ]
    },
    {
      category: "Hospitality & Tourism",
      description: "Exciting opportunities in Kenya's growing tourism sector",
      careers: [
        {
          title: "Hotel Manager",
          demand: "High",
          salary: "Kshs 40,000 - 100,000",
          description: "Oversee daily operations of hotels and hospitality establishments."
        },
        {
          title: "Tour Guide",
          demand: "High",
          salary: "Kshs 25,000 - 60,000",
          description: "Lead tourists through Kenya's beautiful attractions and cultural sites."
        },
        {
          title: "Food & Beverage Manager",
          demand: "Medium",
          salary: "Kshs 30,000 - 75,000",
          description: "Manage restaurant operations and ensure excellent customer service."
        }
      ]
    },
    {
      category: "Health & Social Sciences",
      description: "Make a difference in people's lives and communities",
      careers: [
        {
          title: "Community Health Worker",
          demand: "Very High",
          salary: "Kshs 25,000 - 50,000",
          description: "Provide basic healthcare services and health education in communities."
        },
        {
          title: "Social Worker",
          demand: "High",
          salary: "Kshs 30,000 - 65,000",
          description: "Support individuals and families facing social challenges."
        },
        {
          title: "Nutritionist",
          demand: "Medium",
          salary: "Kshs 35,000 - 70,000",
          description: "Provide dietary advice and create nutrition programs for optimal health."
        }
      ]
    },
    {
      category: "Beauty & Hairdressing",
      description: "Creative careers in the growing beauty industry",
      careers: [
        {
          title: "Salon Owner/Manager",
          demand: "High",
          salary: "Kshs 30,000 - 80,000",
          description: "Run your own beauty salon or manage existing establishments."
        },
        {
          title: "Professional Beautician",
          demand: "High",
          salary: "Kshs 20,000 - 50,000",
          description: "Provide beauty treatments and cosmetic services to clients."
        },
        {
          title: "Hair Stylist",
          demand: "Medium",
          salary: "Kshs 18,000 - 45,000",
          description: "Create beautiful hairstyles and provide hair care services."
        }
      ]
    },
    {
      category: "Media & Journalism",
      description: "Tell stories and shape public opinion in the digital age",
      careers: [
        {
          title: "News Reporter",
          demand: "Medium",
          salary: "Kshs 25,000 - 60,000",
          description: "Research and report news stories for television, radio, or online media."
        },
        {
          title: "Video Editor",
          demand: "High",
          salary: "Kshs 30,000 - 70,000",
          description: "Edit video content for films, TV shows, documentaries, and online content."
        },
        {
          title: "Radio Presenter",
          demand: "Medium",
          salary: "Kshs 20,000 - 55,000",
          description: "Host radio shows and engage audiences through entertaining broadcasts."
        }
      ]
    },
    {
      category: "Business & Management",
      description: "Lead organizations and drive business success",
      careers: [
        {
          title: "Business Manager",
          demand: "High",
          salary: "Kshs 40,000 - 100,000",
          description: "Oversee business operations and drive organizational growth."
        },
        {
          title: "Marketing Specialist",
          demand: "High",
          salary: "Kshs 35,000 - 85,000",
          description: "Develop and implement marketing strategies to promote products and services."
        },
        {
          title: "HR Coordinator",
          demand: "Medium",
          salary: "Kshs 30,000 - 70,000",
          description: "Manage human resources functions and support employee development."
        }
      ]
    }
  ];

  const employmentOpportunities = [
    {
      sector: "Private Companies",
      percentage: 60,
      description: "Work in established businesses across various industries"
    },
    {
      sector: "Self Employment", 
      percentage: 25,
      description: "Start your own business or practice as an independent professional"
    },
    {
      sector: "Government Agencies",
      percentage: 10,
      description: "Serve in various government departments and ministries"
    },
    {
      sector: "NGOs & International Organizations",
      percentage: 5,
      description: "Work with non-profit organizations and international bodies"
    }
  ];

  const successStories = [
    {
      name: "Jane Wanjiku",
      course: "ICT (2019)",
      position: "Software Developer at Safaricom",
      story: "AIRADS gave me the technical foundation I needed. Now I'm developing mobile apps used by millions of Kenyans.",
      image: "👩‍💻"
    },
    {
      name: "David Kiplagat",
      course: "Hospitality Management (2020)",
      position: "Hotel Manager at Sarova Hotels",
      story: "The practical training at AIRADS prepared me for real-world challenges in the hospitality industry.",
      image: "👨‍💼"
    },
    {
      name: "Grace Akinyi",
      course: "Beauty Therapy (2021)",
      position: "Salon Owner (3 Locations)",
      story: "I started with one small salon. AIRADS taught me both the skills and business knowledge to expand.",
      image: "💄"
    }
  ];

  const getDemandColor = (demand) => {
    switch(demand) {
      case "Extremely High": return "bg-green-500";
      case "Very High": return "bg-green-400";
      case "High": return "bg-blue-500";
      case "Medium": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

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
              Your Future Starts Here
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
              Career Guide & Prospectus
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Discover exciting career opportunities and chart your path to success with AIRADS College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-airads-blue to-airads-blue-dark hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Prospectus
              </Button>
              <Button size="lg" variant="outline" className="border-airads-red text-airads-red hover:bg-airads-red hover:text-white">
                <ExternalLink className="mr-2 h-5 w-5" />
                Apply Online Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-white to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Track Record of Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} 
                    className={`text-center hover:shadow-xl transition-all duration-300 border-0 ${
                      index < visibleStats ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="mb-4 text-airads-blue mx-auto w-fit p-3 bg-gradient-to-r from-airads-blue/10 to-airads-red/10 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-airads-blue mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Explore Career Paths
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the exciting career opportunities available to our graduates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>

          <Tabs defaultValue="Engineering & ICT" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 gap-2 h-auto p-2 bg-gradient-to-r from-airads-blue/10 to-airads-red/10">
              {careerPaths.map((path) => (
                <TabsTrigger 
                  key={path.category} 
                  value={path.category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-airads-blue data-[state=active]:to-airads-blue-dark data-[state=active]:text-white p-3 text-sm font-medium"
                >
                  {path.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {careerPaths.map((path) => (
              <TabsContent key={path.category} value={path.category} className="mt-8">
                <div className="mb-8 text-center animate-fade-in">
                  <h3 className="text-2xl font-bold mb-2">{path.category}</h3>
                  <p className="text-muted-foreground">{path.description}</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                  {path.careers.map((career, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-gradient-to-br from-white to-primary/5">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{career.title}</CardTitle>
                          <Badge className={`${getDemandColor(career.demand)} text-white border-0`}>
                            {career.demand}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4 text-airads-blue" />
                          <span className="text-sm font-medium text-airads-blue">{career.salary}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{career.description}</p>
                        <Button size="sm" variant="outline" className="mt-4 w-full border-airads-blue text-airads-blue hover:bg-airads-blue hover:text-white">
                          Learn More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Employment Opportunities */}
      <section className="py-20 px-4 bg-gradient-to-r from-airads-blue/5 to-airads-red/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Employment Opportunities
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Where our graduates find employment after completion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8">Employment Distribution</h3>
              <div className="space-y-6">
                {employmentOpportunities.map((opportunity, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{opportunity.sector}</span>
                      <span className="text-sm text-muted-foreground">{opportunity.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-airads-blue to-airads-red h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${opportunity.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="animate-scale-in border-0 bg-gradient-to-br from-white to-primary/10">
              <CardHeader className="bg-gradient-to-r from-airads-blue to-airads-red text-white">
                <CardTitle className="flex items-center">
                  <Target className="mr-3 h-6 w-6" />
                  High Employability Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-airads-blue mb-2">95%</div>
                  <p className="text-muted-foreground">of our graduates find employment within 6 months</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                    <Clock className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Average job placement: 3-4 months</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                    <Award className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Industry partnerships for internships</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                    <Users className="h-5 w-5 text-airads-blue" />
                    <span className="text-sm">Career counseling & job placement support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Real stories from our successful graduates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-airads-blue to-airads-red mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-0 overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-4xl mb-4">{story.image}</div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <Badge className="w-fit mx-auto bg-airads-blue/10 text-airads-blue border-airads-blue">
                    {story.course}
                  </Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-airads-red mb-3">{story.position}</h4>
                  <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-airads-blue to-airads-red text-white">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of successful professionals who started their careers at AIRADS College. 
              Your future in the industry begins with the right education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-airads-blue hover:bg-gray-100">
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Our Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Download Full Prospectus
              </Button>
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
          <p className="text-gray-400 mb-6">Shaping careers, Building futures</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Badge className="bg-airads-blue/20 text-airads-blue border-airads-blue">Career Guidance</Badge>
            <Badge className="bg-airads-red/20 text-airads-red border-airads-red">Prospectus</Badge>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 AIRADS College. All rights reserved. | A Centre of Excellence Where Quality is Nurtured
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CareerGuide;

import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import CoursesSection from "../components/CoursesSection";
import CampusesSection from "../components/CampusesSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <MainNavbar />
      <HeroSection />
      <WelcomeSection />
      <CoursesSection />
      <CampusesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;

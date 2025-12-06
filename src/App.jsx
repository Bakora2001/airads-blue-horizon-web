import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Campuses from "./pages/Campuses";
import Schools from "./pages/Schools";
import News from "./pages/News";
import Students from "./pages/Students";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; 
import Mission from "./pages/Mission";
import Application from "./pages/Application";
import ApplicationForm from "./pages/ApplicationForm";
import CareerGuide from "./pages/CareerGuide";
import UploadPage from "./pages/Upload";
import Events from "./pages/Events";
import History from "./pages/History";

import Eldoret from "./pages/campuses/Eldoret";
import Bungoma from "./pages/campuses/Bungoma";
import Kericho from "./pages/campuses/Kericho";
import Kisumu from "./pages/campuses/Kisumu";
import Lodwar from "./pages/campuses/Lodwar";
import Maralal from "./pages/campuses/Maralal";
import Nakuru from "./pages/campuses/Nakuru";
import Virtual from "./pages/campuses/Virtual";


import SchoolOfEngineeringICT from "./pages/schools/SchoolOfEngineeringICT";
import SchoolOfHospitalityTourism from "./pages/schools/SchoolOfHospitalityTourism";
import SchoolOfHealthSocial from "./pages/schools/SchoolOfHealthSocial";
import SchoolOfBeautyHairdressing from "./pages/schools/SchoolOfBeautyHairdressing";
import SchoolOfMedia from "./pages/schools/SchoolOfMedia";
import NitaCourses from "./pages/schools/NitaCourses";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/latest" element={<Events />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/history" element={<History />} />

         <Route path="/campuses/eldoret" element={<Eldoret />} />
         <Route path="/campuses/bungoma" element={<Bungoma />} />
         <Route path="/campuses/kericho" element={<Kericho />} />
         <Route path="/campuses/kisumu" element={<Kisumu />} />
         <Route path="/campuses/lodwar" element={<Lodwar />} />
         <Route path="/campuses/maralal" element={<Maralal />} />
         <Route path="/campuses/nakuru" element={<Nakuru />} />
         <Route path="/campuses/virtual" element={<Virtual />} />
       
         
         <Route path="/schools/engineering-ict" element={<SchoolOfEngineeringICT />} />
         <Route path="/schools/hospitality-tourism" element={<SchoolOfHospitalityTourism />} />
          <Route path="/schools/health-social" element={<SchoolOfHealthSocial />} />
          <Route path="/schools/beauty-hairdressing" element={<SchoolOfBeautyHairdressing />} />
          <Route path="/schools/media" element={<SchoolOfMedia />} />
          <Route path="/schools/nita-courses" element={<NitaCourses />} />


          <Route path="/admissions/procedure" element={<Application />} />
          <Route path="/admissions/forms" element={<ApplicationForm />} />
          <Route path="/admissions/career-guide" element={<CareerGuide />} />
          
          {/* Admin Upload Route */}
          {/* Admin Upload Route */}
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/Upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;








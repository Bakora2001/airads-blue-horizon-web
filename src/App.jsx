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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about/mission" element={<Mission />} />
          
          <Route path="/admissions/procedure" element={<Application />} />
          <Route path="/admissions/forms" element={<ApplicationForm />} />
          <Route path="/admissions/career-guide" element={<CareerGuide />} />
          
          {/* Admin Upload Route */}
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import About from "./pages/Company/About.tsx";
import Solutions from "./pages/Solutions";
import WebDesign from "./pages/services/Integration.tsx";
import AppDesign from "./pages/services/Implementation.tsx";
import SoftwareDevelopment from "./pages/services/Application.tsx";
import CloudSolutions from "./pages/services/Migrations.tsx";
import CRM from "./pages/solutions/SAPPrivateCloud.tsx";
import ERP from "./pages/solutions/SuccessFactors.tsx";
import HRMS from "./pages/solutions/SAPPublicCloud.tsx";
import CaseStudies from "./pages/industries/PublicSector.tsx";
import Blog from "./pages/industries/BankFinance.tsx";
import News from "./pages/industries/Energy.tsx";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RiseWithSap from "./pages/solutions/RiseWithSap.tsx";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <ScrollToTop />

                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/solutions" element={<Solutions />} />

                            {/* Services Routes */}
                            <Route path="/services/web-design" element={<WebDesign />} />
                            <Route path="/services/app-design" element={<AppDesign />} />
                            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />

                            {/* Solutions Routes */}
                            <Route path="/solutions/rise-with-sap" element={<RiseWithSap />} />
                            <Route path="/solutions/erp" element={<ERP />} />
                            <Route path="/solutions/hrms" element={<HRMS />} />

                            {/* Industries Routes */}
                            <Route path="/industries/case-studies" element={<CaseStudies />} />
                            <Route path="/industries/blog" element={<Blog />} />
                            <Route path="/industries/news" element={<News />} />

                            {/* Contact Route */}
                            <Route path="/contact" element={<Contact />} />

                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;

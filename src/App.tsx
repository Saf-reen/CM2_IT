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
import Services from "./pages/Services";

// Services Pages
import Implementation from "./pages/services/Implementation";
import Migration from "./pages/services/Migrations";
import Application from "./pages/services/Application";
import Integration from "./pages/services/Integration";
import Rollouts from "./pages/services/Rollouts";
import Training from "./pages/services/Training";
import Testing from "./pages/services/Testing";
import Upgrades from "./pages/services/Upgrades";
import SupportMaint from "./pages/services/SupportMaint";

// Solutions Pages
import SAPPrivateCloud from "./pages/solutions/SAPPrivateCloud";
import SAPPublicCloud from "./pages/solutions/SAPPublicCloud";
import SuccessFactors from "./pages/solutions/SuccessFactors";
import CommerceCloud from "./pages/solutions/CommerceCloud";
import Concur from "./pages/solutions/Concur";
import Ariba from "./pages/solutions/Ariba";
import ManufacturingExecution from "./pages/solutions/ManufacturingExecution";
import ManufacturingLogistics from "./pages/solutions/ManufacturingLogistics";
import DigitalManufacturing from "./pages/solutions/DigitalManufacturing";
import BusinessNetwork from "./pages/solutions/BusinessNetwork";
import Fieldglass from "./pages/solutions/Fieldglass";
import Warehouse from "./pages/solutions/Warehouse";
import ProductLifeCycle from "./pages/solutions/ProductLifeCycle";
import AssetPerformance from "./pages/solutions/AssetPerformance";
import FieldService from "./pages/solutions/FieldService";
import RiseWithSap from "./pages/solutions/RiseWithSap.tsx";

// Industries Pages
import BankFinance from "./pages/industries/BankFinance";
import Dairy from "./pages/industries/Dairy";
import Energy from "./pages/industries/Energy";
import HealthCare from "./pages/industries/HealthCare";
import Manufacturing from "./pages/industries/Manufacturing";
import PublicSector from "./pages/industries/PublicSector";
import Retail from "./pages/industries/Retail";
import Telecom from "./pages/industries/Telecom";
import Textile from "./pages/industries/Textile";
import Travel from "./pages/industries/Travel";
import Industries from "./pages/Industries.tsx";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
                            <Route path="/services" element={<Services />} />

                            {/* Services Routes */}
                            <Route path="/services/implementation" element={<Implementation />} />
                            <Route path="/services/migration" element={<Migration />} />
                            <Route path="/services/development" element={<Application />} />
                            <Route path="/services/integration" element={<Integration />} />
                            <Route path="/services/rollouts" element={<Rollouts />} />
                            <Route path="/services/training" element={<Training />} />
                            <Route path="/services/testing" element={<Testing />} />
                            <Route path="/services/upgrades" element={<Upgrades />} />
                            <Route path="/services/support" element={<SupportMaint />} />

                            {/* Solutions Routes */}
                            <Route path="/solutions/rise-with-sap" element={<RiseWithSap />} />
                            <Route path="/solutions/sap-privatecloud" element={<SAPPrivateCloud />} />
                            <Route path="/solutions/sap-publiccloud" element={<SAPPublicCloud />} />
                            <Route path="/solutions/success-factors" element={<SuccessFactors />} />
                            <Route path="/solutions/commercecloud" element={<CommerceCloud />} />
                            <Route path="/solutions/concur" element={<Concur />} />
                            <Route path="/solutions/ariba" element={<Ariba />} />
                            <Route path="/solutions/manufacturingexecution" element={<ManufacturingExecution />} />
                            <Route path="/solutions/manufacturinglogistics" element={<ManufacturingLogistics />} />
                            <Route path="/solutions/digitalmanufacturing" element={<DigitalManufacturing />} />
                            <Route path="/solutions/businessnetwork" element={<BusinessNetwork />} />
                            <Route path="/solutions/fieldglass" element={<Fieldglass />} />
                            <Route path="/solutions/warehouse" element={<Warehouse />} />
                            <Route path="/solutions/productlifecycle" element={<ProductLifeCycle />} />
                            <Route path="/solutions/assetperformance" element={<AssetPerformance />} />
                            <Route path="/solutions/fieldservice" element={<FieldService />} />

                            {/* Industries Routes */}
                            <Route path="/industries" element={<Industries />} />
                            <Route path="/industries/banking-finance" element={<BankFinance />} />
                            <Route path="/industries/dairy" element={<Dairy />} />
                            <Route path="/industries/energy" element={<Energy />} />
                            <Route path="/industries/healthcare" element={<HealthCare />} />
                            <Route path="/industries/manufacturing" element={<Manufacturing />} />
                            <Route path="/industries/public-sector" element={<PublicSector />} />
                            <Route path="/industries/retail" element={<Retail />} />
                            <Route path="/industries/telecom" element={<Telecom />} />
                            <Route path="/industries/textile" element={<Textile />} />
                            <Route path="/industries/travel" element={<Travel />} />

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

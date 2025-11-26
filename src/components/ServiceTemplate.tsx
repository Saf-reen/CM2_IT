import React from "react";
import {
    CheckCircle,
    Code,
    BarChart3,
    Cpu,
    Network,
    Box,
    Brain,
    Workflow,
    Settings,
    Globe,
    Book,
    RefreshCw,
    TrendingUp,
    Shield,
    Server,
    FileText,
    Zap,
    Clock,
    Database,
    Lock,
    ArrowLeft,
    ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { ServicePageData, sharedCapabilities, techStackItems, sapServices } from "@/data/servicesData";
import servicesBg from "@/assets/services-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceTemplateProps {
    data: ServicePageData;
}

const ServiceTemplate = ({ data }: ServiceTemplateProps) => {
    const [selectedStep, setSelectedStep] = React.useState<number | null>(null);

    const iconMap: { [key: string]: any } = {
        "Application Development": Code,
        "Data & Analytics": BarChart3,
        "Automation": Cpu,
        "Integration": Network,
        "ABAP": Code,
        "SAC": BarChart3,
        "FIORI": Box,
        "RPA": Cpu,
        "CPI": Workflow,
        "AI": Brain,
        "Implementation": Settings,
        "Rollouts": Globe,
        "Training": Book,
        "Migrations": RefreshCw,
        "Upgrades": TrendingUp,
        "Development": Code,
        "Support": Shield,
        "Testing": CheckCircle
    };

    const imageMap: { [key: string]: string } = {
        "Assessment and Planning": "/images/sap/planning_strategy_illustration_1764055737565.png",
        "System Design and Configuration": "/images/sap/system_configuration_illustration_1764055756912.png",
        "Data Migration and Integration": "/images/sap/data_migration_graphic_1764055773365.png",
        "Training and Change Management": "/images/sap/training_people_illustration_1764055790379.png",
        "Testing and Quality Assurance": "/images/sap/qa_testing_illustration_1764055810964.png",
        "Go-Live and Post-Implementation Support": "/images/sap/sap_hero_banner_1764055717393.png",
        "Integration Strategy & Assessment": "/images/sap/planning_strategy_illustration_1764055737565.png",
        "SAP BTP & Cloud Integration": "/images/sap/system_configuration_illustration_1764055756912.png",
        "SAP PI/PO and CPI Migration": "/images/sap/data_migration_graphic_1764055773365.png",
        "Monitoring, Support & Maintenance": "/images/sap/qa_testing_illustration_1764055810964.png",
        "Application Support": "/images/sap/qa_testing_illustration_1764055810964.png",
        "System Maintenance": "/images/sap/system_configuration_illustration_1764055756912.png",
        "Integration Support": "/images/sap/data_migration_graphic_1764055773365.png",
        "Reporting & Governance": "/images/sap/planning_strategy_illustration_1764055737565.png"
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const currentImage = selectedStep !== null ? imageMap[data.processSteps[selectedStep].title] : null;

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <HeroSection
                title={data.heroTitle}
                subtitle={data.heroDescription}
                backgroundImage={data.heroBackgroundImage || "/images/sap/sap_hero_banner_1764055717393.png"}
            />

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            {data.processTitle}
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            {selectedStep === null ? (
                                <motion.div
                                    key="list"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                                >
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={staggerContainer}
                                        className="space-y-4"
                                    >
                                        {data.processSteps.map((step, index) => {
                                            const Icon = iconMap[step.title] || CheckCircle;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    variants={fadeInUp}
                                                    onClick={() => setSelectedStep(index)}
                                                    className="group cursor-pointer"
                                                >
                                                    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                                                        <CardContent className="p-6 flex items-center justify-between">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                                    <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-bold text-primary group-hover:text-primary/80">
                                                                        {step.title}
                                                                    </h3>
                                                                    <p className="text-sm text-muted-foreground">
                                                                        Click to view details
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="hidden lg:flex items-center justify-center"
                                    >
                                        <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                            <img
                                                src="/images/sap/sap_hero_banner_1764055717393.png"
                                                alt="SAP Services"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent flex items-end p-8">
                                                <p className="text-white text-2xl font-bold">
                                                    Select a step to learn more
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="detail"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.button
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        onClick={() => setSelectedStep(null)}
                                        className="flex items-center gap-2 mb-8 text-primary hover:text-primary/80 transition-colors group"
                                    >
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                        <span className="font-semibold">Back to all steps</span>
                                    </motion.button>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Card className="border-none shadow-xl">
                                                <CardContent className="p-8">
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                                                            {selectedStep + 1}
                                                        </div>
                                                        <h3 className="text-3xl font-bold text-primary">
                                                            {data.processSteps[selectedStep].title}
                                                        </h3>
                                                    </div>

                                                    <ul className="space-y-4">
                                                        {data.processSteps[selectedStep].items.map((item, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                                                <span className="text-lg text-muted-foreground leading-relaxed">
                                                                    {item}
                                                                </span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex gap-4 mt-8">
                                                        {selectedStep > 0 && (
                                                            <button
                                                                onClick={() => setSelectedStep(selectedStep - 1)}
                                                                className="px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                                                            >
                                                                Previous
                                                            </button>
                                                        )}
                                                        {selectedStep < data.processSteps.length - 1 && (
                                                            <button
                                                                onClick={() => setSelectedStep(selectedStep + 1)}
                                                                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                                                            >
                                                                Next
                                                            </button>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>

                                        <motion.div
                                            key={selectedStep}
                                            initial={{ x: 50, opacity: 0, scale: 0.95 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]"
                                        >
                                            {currentImage ? (
                                                <img
                                                    src={currentImage}
                                                    alt={data.processSteps[selectedStep].title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                                    <p className="text-primary text-xl font-semibold">
                                                        {data.processSteps[selectedStep].title}
                                                    </p>
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {data.customContent && (
                <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
                    {data.customContent}
                </section>
            )}

            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={servicesBg} alt="Background" className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Future-Ready SAP Capabilities, Today
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {sharedCapabilities.map((capability, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border hover:border-primary">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Zap className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-primary mt-1">{capability.title}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed pl-13">
                                            {capability.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-secondary/5 overflow-hidden">
                <div className="container mx-auto px-4 mb-10">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Drive Innovation with Latest Tech
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>
                </div>

                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                        {[...techStackItems, ...techStackItems].map((tech, index) => {
                            const Icon = iconMap[tech.name] || Code;
                            return (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md border border-border mx-4 min-w-[200px] justify-center"
                                >
                                    <Icon className="w-6 h-6 text-primary" />
                                    <span className="font-bold text-primary">{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4">
                        {[...techStackItems, ...techStackItems].map((tech, index) => {
                            const Icon = iconMap[tech.name] || Code;
                            return (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md border border-border mx-4 min-w-[200px] justify-center"
                                >
                                    <Icon className="w-6 h-6 text-primary" />
                                    <span className="font-bold text-primary">{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Elevate, Innovate, and Thrive with SAP
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
                    >
                        {sapServices.map((service, index) => {
                            const Icon = iconMap[service.name] || Settings;
                            return (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Link
                                        to={service.path}
                                        className="group"
                                    >
                                        <div className="px-6 py-3 rounded-full bg-secondary/10 border border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg flex items-center gap-3 group-hover:scale-105 transform">
                                            <Icon className="w-5 h-5" />
                                            <span className="font-semibold">{service.name}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default ServiceTemplate;

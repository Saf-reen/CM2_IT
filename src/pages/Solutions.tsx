import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Globe,
    Layers,
    Layout,
    Lightbulb,
    Server,
    Shield,
    Smartphone,
    Zap,
    Database,
    Cloud,
    Users,
    Cog,
    FileCheck,
    Rocket,
    Monitor,
    Tablet,
    Watch,
    Tv,
    Wifi,
    BarChart3,
    Settings
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "@/utils/animations";

const Solutions = () => {
    // Client Logo Carousel
    const [clientRef] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    // Tech Stack Carousel
    const [techRef] = useEmblaCarousel({ loop: true, align: "center", dragFree: true }, [Autoplay({ delay: 1500, stopOnInteraction: false })]);

    const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"];
    const techStack = ["WEB", "Android", "IOS", "IOT", "Wearables", "TV"];

    const processSteps = [
        {
            title: "Assessment and Planning",
            icon: BarChart3,
            items: [
                "Business process analysis",
                "Fit-gap analysis",
                "SAP system selection and roadmap creation"
            ]
        },
        {
            title: "System Design and Configuration",
            icon: Settings,
            items: [
                "Detailed system design",
                "Configuration of SAP modules (S/4HANA, FICO, MM, etc.)",
                "Integration with existing systems"
            ]
        },
        {
            title: "Data Migration and Integration",
            icon: Database,
            items: [
                "Data cleansing",
                "Secure data migration",
                "Third-party & legacy system integration"
            ]
        },
        {
            title: "Training and Change Management",
            icon: Users,
            items: [
                "User training programs",
                "Change management strategies",
                "Documentation and knowledge transfer"
            ]
        },
        {
            title: "Testing and Quality Assurance",
            icon: FileCheck,
            items: [
                "Unit, integration, and UAT",
                "Performance optimization",
                "Issue fixing and readiness"
            ]
        },
        {
            title: "Go-Live and Post-Implementation Support",
            icon: Rocket,
            items: [
                "Deployment planning",
                "Real-time monitoring",
                "Ongoing support & maintenance"
            ]
        }
    ];

    const services = [
        {
            number: "01",
            title: "Implementation & Rollouts",
            desc: "Comprehensive SAP implementation services tailored to your business needs",
            hasLearnMore: true,
            icon: Layers
        },
        {
            number: "02",
            title: "Upgrades & Migrations",
            desc: "Seamless migration to latest SAP technologies with minimal disruption",
            hasLearnMore: true,
            icon: ArrowRight
        },
        {
            number: "03",
            title: "Support & Maintenance",
            desc: "24/7 expert support ensuring your SAP systems run smoothly",
            hasLearnMore: true,
            icon: Shield
        },
        {
            number: "04",
            title: "App Dev & Integration",
            desc: "Custom application development and seamless system integration",
            hasLearnMore: true,
            icon: Smartphone
        },
        {
            number: "15+",
            title: "Testing",
            desc: "Quality assurance for SAP systems",
            hasLearnMore: false,
            icon: FileCheck
        },
        {
            number: "23k",
            title: "Training",
            desc: "Make users confident & proficient",
            hasLearnMore: false,
            icon: Lightbulb
        },
    ];

    const solutions = [
        {
            name: "RISE with SAP",
            desc: "Transform your business with RISE with SAP - a comprehensive solution combining S/4HANA Cloud, business process intelligence, and managed services for seamless digital transformation."
        },
        {
            name: "SAP HXM",
            desc: "Revolutionize your workforce management with SAP Human Experience Management (HXM), delivering personalized employee experiences and data-driven HR insights."
        },
        {
            name: "SAP S/4HANA Private Cloud",
            desc: "Experience the power of SAP S/4HANA in a secure, dedicated private cloud environment tailored to your specific business requirements and compliance needs."
        },
        {
            name: "SAP Mobility",
            desc: "Enable your workforce with mobile-first SAP solutions that provide real-time access to critical business data and processes from anywhere, anytime."
        },
        {
            name: "SAP S/4HANA Public Cloud",
            desc: "Leverage the scalability and innovation of SAP S/4HANA Public Cloud with rapid deployment, automatic updates, and best-practice business processes."
        },
        {
            name: "SAP BTP",
            desc: "Build, extend, and integrate intelligent applications with SAP Business Technology Platform - your foundation for innovation and digital transformation."
        },
    ];

    const projects = [
        { category: "Implementation" },
        { category: "Rollouts" },
        { category: "Training" },
        { category: "Migrations" },
        { category: "Upgrades" },
        { category: "Development" },
        { category: "Support" },
        { category: "Integration" },
        { category: "Testing" },
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <HeroSection
                title={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Delivering Impact-Driven SAP Implementations<br />for Sustainable Growth
                    </motion.div>
                }
            />

            {/* 2. PROCESS SECTION (6 STEPS) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Implementation Process</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A comprehensive, proven approach to SAP implementation success
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-4 bg-secondary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                                        <step.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="text-6xl font-bold text-secondary/20 group-hover:text-primary/30 transition-colors">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>

                                <ul className="space-y-3">
                                    {step.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. CLIENT LOGO CAROUSEL */}
            <section className="py-16 border-y border-border bg-slate-50">
                <div className="container mx-auto px-4 mb-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-primary mb-2"
                    >
                        Trusted by Leading Organizations
                    </motion.h2>
                </div>
                <div className="container mx-auto px-4" ref={clientRef}>
                    <div className="flex select-none">
                        {[...clients, ...clients, ...clients].map((client, idx) => (
                            <div key={idx} className="flex-[0_0_auto] px-12">
                                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:shadow-lg border border-border/50">
                                    <span className="text-lg font-bold text-muted-foreground">{client}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DIGITAL FOUNDATION SECTION */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Empowering Your Business with a Strong Digital Foundation
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all" />

                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Lightbulb className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    Digital Innovation Lab
                                </h3>
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed mb-4">
                                    Collaborative Innovation at Scale
                                </p>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed text-sm">
                                    Let your creativity run free with cutting-edge technology
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />

                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Server className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    Digital Foundation
                                </h3>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                                    Expert team + strategies for your digital transformation
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all" />

                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-blue-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Layout className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    Digital Applications
                                </h3>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                                    High-performance apps improving user experience
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto uppercase"
                        >
                            Learn More About Us
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE US - END-TO-END SAP CONSULTING */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">End-to-end SAP Consulting Services</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive SAP expertise to transform your business operations
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="h-14 w-14 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-5xl font-bold text-secondary/20 group-hover:text-primary/30 transition-colors">
                                        {service.number}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors mb-6">
                                    {service.desc}
                                </p>
                                {service.hasLearnMore && (
                                    <button className="text-sm font-bold text-primary group-hover:text-secondary flex items-center gap-2 group-hover:gap-3 transition-all uppercase">
                                        Learn More <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. SAP SOLUTIONS & OFFERINGS */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
                                Empowering Businesses with Tailored SAP Solutions and Expert Services
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Our SAP Solutions and Offerings
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase whitespace-nowrap"
                        >
                            All Services
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {solutions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                className="group relative bg-card p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-border/50"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl" />
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 7. CALL TO ACTION */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-slate-900" />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent animate-pulse" />

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white/50 rounded-full animate-float" />
                    <div className="absolute top-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-float-delayed" />
                    <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" />
                    <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-white/50 rounded-full animate-float-delayed" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Grow Your Business?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our SAP solutions can transform your business operations
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] uppercase"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* 8. CASE STUDIES SECTION */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Introduce Our Projects</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-7xl font-bold text-primary/20">{idx + 1}</div>
                                    </div>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-500 flex items-center justify-center">
                                        <ArrowRight className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.category}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">View Case Study</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 9. TECHNOLOGY INDEX */}
            <section className="py-16 border-y border-border bg-slate-50">
                <div className="container mx-auto px-4 mb-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    >
                        We Deliver Solution with the Goal of Trusting Relationships
                    </motion.h2>
                </div>
                <div className="container mx-auto px-4" ref={techRef}>
                    <div className="flex select-none">
                        {[...techStack, ...techStack, ...techStack].map((tech, idx) => {
                            const icons = {
                                WEB: Monitor,
                                Android: Smartphone,
                                IOS: Smartphone,
                                IOT: Wifi,
                                Wearables: Watch,
                                TV: Tv
                            };
                            const Icon = icons[tech as keyof typeof icons];

                            return (
                                <div key={idx} className="flex-[0_0_auto] px-12">
                                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 border-2 border-primary/20 group-hover:border-primary">
                                            <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                                            {tech}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 10. TRUST STRIP */}
            <section className="py-16 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        We are Trusted in 15+ Countries Worldwide
                    </motion.h2>
                    <motion.div
                        className="flex justify-center items-center gap-8 mt-8 flex-wrap"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {["🇺🇸", "🇬🇧", "🇩🇪", "🇫🇷", "🇮🇳", "🇦🇺", "🇨🇦", "🇯🇵", "🇧🇷", "🇲🇽", "🇸🇬", "🇦🇪", "🇿🇦", "🇰🇷", "🇮🇹"].map((flag, idx) => (
                            <motion.span
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.2 }}
                                className="text-4xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer duration-300"
                            >
                                {flag}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Solutions;

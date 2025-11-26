import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Settings,
    RefreshCw,
    Shield,
    Code,
    Rocket,
    GraduationCap,
    TestTube,
    Network,
    Zap,
    Server,
    Database,
    Cloud,
    Users,
    BarChart3,
    FileCheck,
    Lightbulb,
    Building2,
    ShoppingCart,
    Factory,
    Heart,
    Briefcase,
    Cpu,
    Globe,
    TrendingUp,
    Layers,
    Box,
    Workflow
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/utils/animations";
import { sapServices } from "@/data/servicesData";
import HeroSection from "@/components/HeroSection";

// Counter Animation Component
const CountUpAnimation = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return <span ref={ref}>{String(count).padStart(2, '0')}</span>;
};

const Services = () => {
    const solutions = [
        { name: "SAP Ariba", icon: ShoppingCart },
        { name: "SAP SuccessFactors", icon: Users },
        { name: "SAP S/4HANA", icon: Database },
        { name: "SAP Analytics Cloud", icon: BarChart3 },
        { name: "SAP BTP", icon: Cloud },
        { name: "SAP Fieldglass", icon: Briefcase },
        { name: "SAP Concur", icon: FileCheck },
        { name: "SAP IBP", icon: TrendingUp }
    ];

    const services = [
        { title: "Implementation", icon: Settings, desc: "End-to-end SAP implementation" },
        { title: "Migration", icon: RefreshCw, desc: "Seamless system migration" },
        { title: "Support", icon: Shield, desc: "24/7 expert support" },
        { title: "Development", icon: Code, desc: "Custom application development" },
        { title: "Integration", icon: Network, desc: "System integration services" },
        { title: "Upgrades", icon: TrendingUp, desc: "Version upgrades & enhancements" },
        { title: "Rollouts", icon: Rocket, desc: "Global deployment services" },
        { title: "Training", icon: GraduationCap, desc: "Comprehensive training programs" },
        { title: "Testing", icon: TestTube, desc: "Quality assurance & testing" }
    ];

    const industries = [
        { name: "Banking & Finance", icon: Building2 },
        { name: "Retail", icon: ShoppingCart },
        { name: "Manufacturing", icon: Factory },
        { name: "Healthcare", icon: Heart },
        { name: "Energy & Utilities", icon: Zap },
        { name: "Public Sector", icon: Globe }
    ];

    const consultingServices = [
        {
            number: 1,
            title: "Implementation & Rollouts",
            description: "Comprehensive SAP implementation services with proven methodologies, ensuring smooth deployment across your organization with minimal disruption.",
            icon: Settings,
            image: "/images/sap/planning_strategy_illustration_1764055737565.png"
        },
        {
            number: 2,
            title: "Upgrades & Migrations",
            description: "Seamless migration to latest SAP technologies with expert guidance, data integrity assurance, and optimized performance throughout the transition.",
            icon: RefreshCw,
            image: "/images/sap/data_migration_graphic_1764055773365.png"
        },
        {
            number: 3,
            title: "Support & Maintenance",
            description: "24/7 expert support ensuring your SAP systems run smoothly with proactive monitoring, rapid issue resolution, and continuous optimization.",
            icon: Shield,
            image: "/images/sap/qa_testing_illustration_1764055810964.png"
        },
        {
            number: 4,
            title: "Application Development",
            description: "Custom SAP applications tailored to your unique business needs, leveraging latest technologies and best practices for optimal results.",
            icon: Code,
            image: "/images/sap/system_configuration_illustration_1764055756912.png"
        }
    ];

    const offerings = [
        { title: "RISE with SAP", desc: "Transform your business with comprehensive cloud ERP solution", icon: Cloud },
        { title: "SAP S/4HANA Cloud", desc: "Next-generation intelligent ERP in the cloud", icon: Database },
        { title: "SAP Business Technology Platform", desc: "Innovate and extend your SAP landscape", icon: Cpu },
        { title: "SAP Analytics Cloud", desc: "Business intelligence and planning in one solution", icon: BarChart3 },
        { title: "SAP Integration Suite", desc: "Connect your enterprise landscape seamlessly", icon: Network },
        { title: "SAP Workflow Management", desc: "Digitize and automate business processes", icon: Workflow }
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            {/* Floating Background Shapes */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Hero Section */}
            <HeroSection
                title={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Comprehensive SAP Services<br />Driving Digital Transformation
                    </motion.div>
                }
                subtitle="We deliver comprehensive SAP services that empower organizations to achieve digital transformation, operational excellence, and sustainable growth through innovative solutions and expert guidance."
            />

            {/* 2. SOLUTIONS SECTION */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">SAP Solutions We Support</h2>
                        <p className="text-xl text-muted-foreground">Comprehensive expertise across the entire SAP ecosystem</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <solution.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {solution.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. SERVICES SECTION */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our SAP Services</h2>
                        <p className="text-xl text-muted-foreground">End-to-end services for your SAP journey</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                whileHover={{ y: -10 }}
                                className="group relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/50 overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className="p-4 bg-secondary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-all duration-300"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {service.desc}
                                    </p>
                                </div>

                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. INDUSTRIES SECTION */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Industries We Serve</h2>
                        <p className="text-xl text-muted-foreground">Specialized expertise across diverse sectors</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.8
                                        }
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/30"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <motion.div
                                        className="p-4 bg-primary/10 rounded-full group-hover:bg-primary transition-all duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </motion.div>
                                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                        {industry.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. DIGITAL INNOVATION LAB SECTION */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                        <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                                Digital Innovation Lab
                            </h2>
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                Collaborative Innovation at Scale - Let your creativity run free with cutting-edge technology
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Our Digital Innovation Lab provides a sandbox environment where your team can experiment with
                                emerging technologies, prototype solutions, and accelerate digital transformation initiatives
                                with expert guidance and state-of-the-art tools.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Explore Innovation Lab
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/sap/system_configuration_illustration_1764055756912.png"
                                    alt="Digital Innovation Lab"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. DIGITAL FOUNDATION & APPLICATIONS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={slideInLeft}
                            className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary transition-all duration-300"
                                    whileHover={{ rotate: 15 }}
                                >
                                    <Server className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">Digital Foundation</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Expert team and proven strategies for your digital transformation journey.
                                        Build a robust foundation that scales with your business growth and adapts to changing market demands.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={slideInRight}
                            className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary transition-all duration-300"
                                    whileHover={{ rotate: -15 }}
                                >
                                    <Layers className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">Digital Applications</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        High-performance applications improving user experience and operational efficiency.
                                        Leverage modern technologies to create intuitive, scalable solutions that drive business value.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 7. END-TO-END SAP CONSULTING SERVICES */}
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
                            End-to-End SAP Consulting Services
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive SAP expertise to transform your business operations
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {consultingServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -6 }}
                                className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none">
                                    <CountUpAnimation end={service.number} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary transition-all duration-300">
                                            <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-5xl font-bold text-primary mb-2">
                                                <CountUpAnimation end={service.number} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {service.image && (
                                        <div className="rounded-xl overflow-hidden shadow-md">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 8. TESTING & TRAINING */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                            className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/30"
                        >
                            <motion.div
                                className="p-6 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary transition-all duration-300"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                <TestTube className="w-12 h-12 text-primary group-hover:text-white transition-colors" />
                            </motion.div>

                            <h3 className="text-3xl font-bold text-primary mb-4">Testing Services</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Comprehensive quality assurance and testing services ensuring your SAP systems perform flawlessly.
                            </p>
                            <ul className="space-y-3">
                                {["Functional Testing", "Performance Testing", "Integration Testing", "User Acceptance Testing"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                            className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-secondary/30"
                        >
                            <motion.div
                                className="p-6 bg-secondary/10 rounded-2xl w-fit mb-6 group-hover:bg-secondary transition-all duration-300"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0.5
                                }}
                            >
                                <GraduationCap className="w-12 h-12 text-secondary group-hover:text-white transition-colors" />
                            </motion.div>

                            <h3 className="text-3xl font-bold text-primary mb-4">Training Programs</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Comprehensive training programs to make your users confident and proficient in SAP systems.
                            </p>
                            <ul className="space-y-3">
                                {["End-User Training", "Technical Training", "Custom Workshops", "Knowledge Transfer"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 9. SAP SOLUTIONS & OFFERINGS */}
            <section className="py-24 bg-background relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold text-primary mb-8"
                            >
                                SAP Solutions & Offerings
                            </motion.h2>

                            <div className="space-y-6">
                                {offerings.map((offering, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={slideInLeft}
                                        whileHover={{ x: 10 }}
                                        className="group flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/50"
                                    >
                                        <motion.div
                                            className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <offering.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {offering.title}
                                            </h3>
                                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                                {offering.desc}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/sap/data_migration_graphic_1764055773365.png"
                                    alt="SAP Cloud Architecture"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 10. READY TO GROW YOUR BUSINESS (CTA) */}
            <section className="relative py-32 overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img
                        src="/images/sap/sap_hero_banner_1764055717393.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-slate-900/95" />
                </motion.div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden z-10">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Transform your enterprise with our comprehensive SAP services.
                            Let's discuss how we can help you achieve your digital transformation goals.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-12 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] uppercase group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started Today
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Explore Individual Services */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Explore Our Services</h2>
                        <p className="text-xl text-muted-foreground">Detailed information about each service offering</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {sapServices.map((service, idx) => (
                            <motion.div key={idx} variants={scaleIn}>
                                <Link to={service.path}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                {service.name}
                                            </h3>
                                            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;

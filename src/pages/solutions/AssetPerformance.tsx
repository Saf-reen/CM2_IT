import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    Layers,
    Lightbulb,
    Rocket,
    Users,
    BarChart3,
    Globe,
    Award,
    Target,
    TrendingUp,
    Lock,
    RefreshCw,
    Briefcase,
    Code,
    Activity,
    Cpu,
    Network,
    Zap,
    Check
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroSection from "@/components/HeroSection";
import { motion,useReducedMotion } from "framer-motion";

const AssetPerformance = () => {
    const shouldReduceMotion = useReducedMotion()
    const [servicesRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    const implementationSteps = [
        {
            title: "APM Strategy & Roadmap",
            bullets: [
                "Assess current asset management maturity",
                "Define business goals and KPIs",
                "Develop a phased SAP APM rollout plan",
            ],
        },
        {
            title: "Implementation & Integration",
            bullets: [
                "Configure SAP APM modules (Asset Strategy, Risk & Criticality, Predictive Maintenance, Reliability-Centered Maintenance, Failure Mode Management)",
                "Integrate with SAP EAM/Plant Maintenance and IoT platforms",
                "Set up data models and connectivity to sensors, historians, and external systems",
            ],
        },
        {
            title: "Data Preparation & Governance",
            bullets: [
                "Cleanse and structure asset master data",
                "Develop equipment hierarchy and criticality assessments",
                "Establish governance processes for continuous data qualityand legacy systems",
            ],
        },
        {
            title: "Predictive Analytics & Insights",
            bullets: [
                "Build predictive models for failure detection and performance optimization",
                "Use machine learning and AI to generate actionable recommendations",
                "Develop dashboards and reports for real-time insights",
            ],
        },
        {
            title: "Change Management & User Enablement",
            bullets: [
                "Conduct stakeholder engagement and training",
                "Build user adoption plans and communication strategies",
                "Provide role-based training for planners, reliability engineers, and maintenance teams",
            ],
        },
        {
            title: "Support & Continuous Improvement",
            bullets: [
                "Provide hypercare and post-go-live support",
                "Conduct periodic performance reviews",
                "Continuously refine asset strategies based on evolving business needs",
            ],
        },
    ];
    const trustFactors = [
        { title: "End-to-End SAP Services", icon: Layers, desc: "From planning to execution, we cover every aspect of your SAP journey." },
        { title: "Industry Expertise", icon: Briefcase, desc: "Deep knowledge across various sectors to tailor solutions for your specific needs." },
        { title: "Certified SAP Professionals", icon: Award, desc: "A team of highly skilled and certified experts dedicated to your success." },
        { title: "Rapid Deployment & Methodologies", icon: Rocket, desc: "Accelerated implementation methodologies to get you up and running faster." },
        { title: "Cloud & On-Prem Expertise", icon: Cloud, desc: "Seamless integration and management of hybrid environments." },
        { title: "Innovation-Driven", icon: Lightbulb, desc: "Leveraging the latest technologies to drive continuous improvement." },
        { title: "Global Delivery Model", icon: Globe, desc: "Flexible delivery options ensuring 24/7 support and execution." },
        { title: "Change Management & Training", icon: Users, desc: "Guiding your team through transitions for smooth adoption." },
        { title: "Value Realization & Continuous Improvement", icon: TrendingUp, desc: "Focusing on tangible business outcomes and ROI." },
        { title: "License Advisory & Optimization", icon: Target, desc: "Optimizing your licensing structure for cost-efficiency." },
        { title: "Security & Compliance", icon: Lock, desc: "Ensuring your data is secure and compliant with industry standards." },
    ];

    const techStack = [
        { name: "Application Development", icon: Code },
        { name: "Data & Analytics", icon: BarChart3 },
        { name: "Automation", icon: RefreshCw },
        { name: "Integration", icon: Network },
        { name: "ABAP", icon: Code },
        { name: "SAC", icon: Activity },
        { name: "FIORI", icon: Layers },
        { name: "RPA", icon: Cpu },
        { name: "CPI", icon: Network },
        { name: "AI", icon: Zap },
    ];

    const services = [
        "Implementation",
        "Rollouts",
        "Training",
        "Migrations",
        "Upgrades",
        "Development",
        "Support",
        "Integration",
        "Testing"
    ];

   const fadeInUp = {
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
        visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
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

    const slideIn = (direction) => ({
        hidden: shouldReduceMotion 
            ? { opacity: 0 }
            : {
                opacity: 0,
                x: direction === "left" ? -36 : 36,
                scale: 0.995,
            },
        visible: shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
            },
    });


    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
         {/* 1. HERO SECTION */}
          <HeroSection
            title="Maximize Asset Reliability with SAP APM"
            subtitle="Predict failures, improve maintenance, and boost operational performance with intelligent asset management."
            backgroundImage="https://images.unsplash.com/photo-1623494149133-8c56b7d4e037?auto=format&fit=crop&q=80&w=2070"
            />



            {/* 2. SUB-HEADER SECTION */}
            <section className="py-20 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-primary"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        Delivering Impact-Driven SAP Implementations for Sustainable Growth
                    </motion.h2>
                </div>
            </section>
            <section className="pb-20 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {implementationSteps.map((step, index) => {
                            const direction = index % 2 === 0 ? "left" : "right";
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={slideIn(direction)} // Staggered slide-in animation
                                    className="p-6 rounded-xl bg-white/90 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                                >
                                    <h3 className="font-bold text-lg text-primary mb-3 flex items-center">
                                        <Layers className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                                        {step.title}
                                    </h3>
                                    <ul className="list-inside text-gray-600 space-y-2 mt-2 flex-grow">
                                        {step.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start text-sm">
                                                <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* 3. SERVICES CAROUSEL */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs.</p>
                    </motion.div>

                    <motion.div
                        className="overflow-hidden"
                        ref={servicesRef}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex -ml-4">
                            {services.map((service, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4">
                                    <motion.div
                                        className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center group"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                                            <CheckCircle2 className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{service}</h3>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. TECH STACK GRID */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Powered by cutting-edge SAP technologies.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <tech.icon className="w-10 h-10 text-secondary mb-4" />
                                <span className="font-semibold">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. TRUST FACTORS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Why Trust Us?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">We deliver excellence through our proven expertise and methodologies.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {trustFactors.map((factor, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-secondary transition-colors duration-300">
                                        <factor.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{factor.title}</h3>
                                        <p className="text-gray-600">{factor.desc || "Delivering excellence in every step."}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. CTA SECTION */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join hundreds of successful companies who have modernized their operations with our SAP solutions.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default AssetPerformance;
 
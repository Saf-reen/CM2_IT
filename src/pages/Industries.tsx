import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    CheckCircle, Code, BarChart3, Cpu, Network, Box, Brain, Workflow,
    Settings, Globe, Book, RefreshCw, TrendingUp, Shield, Server,
    FileText, Zap, Clock, Database, Lock, ArrowLeft, ChevronRight,
    Users, TestTube2, GraduationCap, Factory, Banknote, HeartPulse,
    ShoppingCart, Tv, Wifi, Phone, Car, Watch, Laptop, Tablet, Smartphone
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

// Import generated images (using the ones we have, placeholders for others)
// Note: In a real scenario, we would move these to the public folder. 
// For now, I'll reference them by path if they were in public, or use absolute paths for the ones I generated if I could move them.
// Since I can't move files easily, I will assume they are in /images/industries/ or similar.
// I will use the paths returned by the generation tool earlier for the ones that worked.

const Industries = () => {
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

    // Data extracted from CodeVivify
    const services = [
        {
            title: "Implementation & Rollouts",
            icon: Settings,
            description: "Expert guidance for seamless SAP implementation and global rollouts.",
            image: "/images/sap/planning_strategy_illustration_1764055737565.png" // Reusing existing asset
        },
        {
            title: "Upgrades & Migrations",
            icon: RefreshCw,
            description: "Smooth transition to the latest SAP technologies with minimal downtime.",
            image: "/images/sap/data_migration_graphic_1764055773365.png" // Reusing existing asset
        },
        {
            title: "Support & Maintenance",
            icon: Shield,
            description: "24/7 support to ensure your SAP systems run at peak performance.",
            image: "/images/sap/qa_testing_illustration_1764055810964.png" // Reusing existing asset
        },
        {
            title: "App Dev & Integration",
            icon: Code,
            description: "Custom application development and seamless system integration.",
            image: "/images/sap/system_configuration_illustration_1764055756912.png" // Reusing existing asset
        }
    ];

    const offerings = [
        {
            id: "rise-with-sap",
            label: "RISE with SAP",
            title: "RISE with SAP",
            description: "RISE with SAP is aimed at organizations looking for a comprehensive, guided journey to the cloud with a focus on streamlined processes, optimized workflows, and minimized IT complexity.",
            image: "/images/sap/sap_hero_banner_1764055717393.png"
        },
        {
            id: "sap-hxm",
            label: "SAP HXM",
            title: "SAP HXM",
            description: "SAP HXM is SAP's approach to HR management that emphasizes employee experience as central to HR processes and technology. SAP SuccessFactors, a cloud-based platform with various HR functionalities, integrates analytics and feedback to support employee-centric initiatives.",
            image: "/images/sap/training_people_illustration_1764055790379.png"
        },
        {
            id: "sap-btp",
            label: "SAP BTP",
            title: "SAP BTP",
            description: "SAP BTP provides a unified environment where companies can manage and analyze data, build and extend applications, and leverage advanced technologies like artificial intelligence (AI), machine learning (ML), and Internet of Things (IoT).",
            image: "/images/sap/system_configuration_illustration_1764055756912.png"
        },
        {
            id: "sap-mobility",
            label: "SAP Mobility",
            title: "SAP Mobility",
            description: "SAP Mobility is widely used in industries such as manufacturing, retail, logistics, and field service. It provides tools and platforms to develop, deploy, and manage mobile applications that integrate with SAP systems.",
            image: "/images/sap/planning_strategy_illustration_1764055737565.png"
        },
        {
            id: "private-cloud",
            label: "Private Cloud",
            title: "SAP S/4HANA Private Cloud",
            description: "The private cloud model offers dedicated resources for each customer within SAP’s cloud infrastructure or through supported hyperscalers (e.g., AWS, Microsoft Azure, Google Cloud).",
            image: "/images/sap/data_migration_graphic_1764055773365.png"
        },
        {
            id: "public-cloud",
            label: "Public Cloud",
            title: "SAP S/4HANA Public Cloud",
            description: "SAP S/4HANA Public Cloud includes pre-configured solutions for specific industries, such as Manufacturing, Retail, Consumer Goods, and Professional Services.",
            image: "/images/sap/sap_hero_banner_1764055717393.png"
        }
    ];

    const caseStudies = [
        { title: "App for Virtual Reality", category: "Design / Ideas", image: "/images/sap/planning_strategy_illustration_1764055737565.png" },
        { title: "Analysis of Security", category: "Ideas / Technology", image: "/images/sap/qa_testing_illustration_1764055810964.png" },
        { title: "eCommerce Website", category: "Design / Ideas", image: "/images/sap/system_configuration_illustration_1764055756912.png" },
        { title: "Basics Project", category: "Design / Development", image: "/images/sap/data_migration_graphic_1764055773365.png" },
        { title: "Social Media App", category: "Design / Technology", image: "/images/sap/training_people_illustration_1764055790379.png" }
    ];

    return (
        <div className="min-h-screen bg-background overflow-hidden font-sans">
            {/* 1. Hero Section */}
            <HeroSection
                title="Empowering Industries with SAP-Driven Digital Transformation"
                subtitle="Future-ready solutions tailored for your business environment."
                backgroundImage="/images/sap/sap_hero_banner_1764055717393.png"
            // Using existing hero image as fallback since generation quota is full
            />

            {/* 2. Digital Innovation Lab Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.03] -z-10" />
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                            Innovation Hub
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                            Digital Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Lab.</span>
                        </h2>
                        <h3 className="text-2xl font-semibold text-foreground/80 mb-6">
                            Collaborative Innovation at Scale
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Leverage our Innovation Lab to let your creativity run free, play with ideas, and build solutions using the latest cutting-edge technology.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Database className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Digital Foundation</h4>
                                    <p className="text-muted-foreground">With our expert team, cutting-edge technology, and tailored strategies, we guide you every step of the way in your digital transformation journey.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    <Laptop className="w-6 h-6 text-purple-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Digital Applications</h4>
                                    <p className="text-muted-foreground">Our team specializes in building intuitive, high-performance applications that drive innovation and improve user experiences.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                            <img
                                src="/images/sap/system_configuration_illustration_1764055756912.png"
                                alt="Digital Innovation Lab"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-lg">Future-Ready Workspace</p>
                                <p className="text-white/80 text-sm">Where ideas become reality</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Digital Services Section */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Core Digital Services</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Digital Foundation", icon: Database, desc: "Building robust and scalable digital backbones for your enterprise." },
                            { title: "Digital Applications", icon: Laptop, desc: "Crafting modern, user-centric applications to drive business value." },
                            { title: "Innovation at Scale", icon: TrendingUp, desc: "Driving enterprise-wide digital transformation and innovation." }
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-primary group bg-card">
                                    <CardContent className="p-10">
                                        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                                        <p className="text-muted-foreground mb-8 leading-relaxed">{item.desc}</p>
                                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-white border-primary/20">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. SAP Consulting – Why Choose Us */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">End-to-end SAP<br />Consulting Services</h2>
                            <div className="w-24 h-1 bg-primary mt-2 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Comprehensive SAP solutions tailored to your business needs, from implementation to support and innovation.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >
                        {services.map((service, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300">{service.title}</h3>
                                        <p className="text-white/80 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                            {service.description}
                                        </p>
                                        <div className="absolute top-6 right-6 text-white/20 text-6xl font-bold">0{i + 1}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-700 flex items-center gap-8 hover:shadow-md transition-shadow">
                            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                                <TestTube2 className="w-10 h-10" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary mb-2">15+ Testing</h4>
                                <p className="text-muted-foreground">We are committed to ensuring the success of your SAP implementations through rigorous testing.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl shadow-sm border border-purple-100 dark:border-slate-700 flex items-center gap-8 hover:shadow-md transition-shadow">
                            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm text-purple-600 flex-shrink-0">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary mb-2">23k Training</h4>
                                <p className="text-muted-foreground">We help businesses maximize their investment in SAP by ensuring users are proficient.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. SAP Solutions & Offerings */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our SAP Solutions and Offerings</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive range of SAP solutions designed to drive digital transformation.
                        </p>
                    </div>

                    <Tabs defaultValue="rise-with-sap" className="w-full max-w-6xl mx-auto">
                        <TabsList className="flex flex-wrap justify-center mb-12 bg-transparent p-0 gap-3 h-auto">
                            {offerings.map(tab => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white bg-white dark:bg-card shadow-sm border border-border text-primary hover:bg-primary/5 data-[state=active]:hover:bg-primary/90 transition-all text-base font-medium"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {offerings.map((offering) => (
                                    <TabsContent key={offering.id} value={offering.id} className="mt-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Card className="border-none shadow-2xl overflow-hidden bg-card">
                                                <CardContent className="p-0 grid lg:grid-cols-2">
                                                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                                            <Zap className="w-8 h-8 text-primary" />
                                                        </div>
                                                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{offering.title}</h3>
                                                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                                            {offering.description}
                                                        </p>
                                                        <Button className="w-fit" size="lg">
                                                            Learn More <ChevronRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </div>
                                                    <div className="relative h-[300px] lg:h-auto">
                                                        <img
                                                            src={offering.image}
                                                            alt={offering.title}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent lg:from-background lg:to-transparent"></div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </TabsContent>
                                ))}
                            </AnimatePresence>
                        </div>
                    </Tabs>
                </div>
            </section>

            {/* 6. Ready to Grow Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/sap/sap_hero_banner_1764055717393.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
                            Let's discuss how our SAP-driven digital transformation solutions can help you achieve your goals and stay ahead of the competition.
                        </p>
                        <Button size="lg" variant="secondary" className="text-primary font-bold text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                            <Link to="/contact">Contact Us Today</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 7. Latest Case Studies */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">Latest Case Studies</h2>
                        <div className="hidden md:flex gap-2">
                            {/* Custom nav buttons could go here */}
                        </div>
                    </div>

                    <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {caseStudies.map((study, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-full"
                                    >
                                        <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-none bg-secondary/5">
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={study.image}
                                                    alt={study.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Button variant="secondary" className="rounded-full">View Project</Button>
                                                </div>
                                            </div>
                                            <CardContent className="p-8">
                                                <p className="text-sm font-semibold text-primary/60 mb-3 uppercase tracking-wider">{study.category}</p>
                                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                                                <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                                    Read Case Study <ChevronRight className="w-4 h-4 ml-1" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4 mt-10">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* 8. Technology Index */}
            <section className="py-20 bg-secondary/5 border-y border-border">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10"
                    >
                        {[
                            { icon: Globe, label: "Web" },
                            { icon: Smartphone, label: "Android" },
                            { icon: Tablet, label: "iOS" },
                            { icon: Wifi, label: "IoT" },
                            { icon: Watch, label: "Wearables" },
                            { icon: Tv, label: "TV" }
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
                            >
                                <div className="p-4 rounded-full bg-background shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                                    <tech.icon className="w-8 h-8" />
                                </div>
                                <span className="font-semibold text-sm tracking-wide">{tech.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 9. Our Clients */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Clients</h2>
                    <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
                        We are trusted in 15+ countries worldwide by leading enterprises.
                    </p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center max-w-6xl mx-auto opacity-70"
                    >
                        {/* Using placeholders for client logos as requested */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 transform cursor-pointer"
                            >
                                <div className="h-12 bg-foreground/10 rounded w-full animate-pulse"></div>
                                {/* <img src={`/images/clients/logo_${i}.png`} alt={`Client ${i}`} className="h-12 mx-auto object-contain" /> */}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Industries;

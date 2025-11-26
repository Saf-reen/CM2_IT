import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/utils/animations";
import { Link } from "react-router-dom";

export interface FeatureItem {
    title: string;
    icon: LucideIcon | React.ComponentType<any>;
    description?: string;
    value?: string;
    label?: string;
}

export interface IndustryData {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    introTitle: string;
    introText: string;
    introText2?: string;
    introImage: string;
    coreFeaturesTitle: string;
    coreFeaturesSubtitle: string;
    coreFeatures: FeatureItem[];
    secondaryFeaturesTitle: string;
    secondaryFeatures: string[];
    secondaryImage: string;
    statsTitle: string;
    statsSubtitle: string;
    statsFeatures: string[];
    carouselTitle: string;
    carouselItems: { title: string; description: string; image: string }[];
    transformationTitle: string;
    transformationPillars: FeatureItem[];
    techIconsTitle: string;
    techIcons: { name: string; icon: LucideIcon | React.ComponentType<any> }[];
}

interface IndustryTemplateProps {
    data: IndustryData;
    relatedIndustries: { name: string; icon: LucideIcon | React.ComponentType<any>; image: string; path: string }[];
}

const IndustryTemplate: React.FC<IndustryTemplateProps> = ({ data, relatedIndustries }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                >
                    <img
                        src={data.heroImage}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {data.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {data.subtitle}
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all">
                            Explore Solutions
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full transition-all">
                            Get Consultation
                        </Button>
                    </motion.div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* 2. INTRO SECTION */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-primary mb-6">{data.introTitle}</h2>
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                {data.introText}
                            </p>
                            {data.introText2 && (
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {data.introText2}
                                </p>
                            )}
                        </motion.div>
                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={data.introImage}
                                    alt={data.introTitle}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                            </div>
                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3.1 CORE SOLUTIONS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{data.coreFeaturesTitle}</h2>
                        <p className="text-xl text-muted-foreground">{data.coreFeaturesSubtitle}</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {data.coreFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10, rotateX: 5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 group"
                            >
                                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3.2 SECONDARY SECTION (Risk & Compliance / etc) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{data.secondaryFeaturesTitle}</h2>
                            <div className="space-y-6">
                                {data.secondaryFeatures.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                        whileHover={{ x: 10 }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                                        <span className="text-lg font-medium text-foreground">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={data.secondaryImage}
                                    alt={data.secondaryFeaturesTitle}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3.3 STATS / PLANNING */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.statsTitle}</h2>
                        <p className="text-xl text-white/70">{data.statsSubtitle}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.statsFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                            >
                                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                                <p className="text-lg text-white/90 leading-relaxed">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.4 CAROUSEL SECTION */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT — IMAGE DISPLAY */}
                        <motion.div
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <Card className="overflow-hidden border-0 shadow-xl w-full max-w-2xl">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                    <img
                                        src={data.carouselItems[activeIndex].image}
                                        alt={data.carouselItems[activeIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* RIGHT — THEORY LIST */}
                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                {data.carouselTitle}
                            </h2>

                            {data.carouselItems.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className="mb-8 cursor-pointer transition-all duration-300 group"
                                >
                                    <h3 className={`text-xl font-semibold mb-2 group-hover:text-primary`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:text-primary/80">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3.5 TRANSFORMATION PILLARS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{data.transformationTitle}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.transformationPillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group"
                            >
                                <div className="p-4 bg-primary/5 rounded-full inline-flex group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                                    <pillar.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="font-bold text-foreground text-xl mb-3">{pillar.title}</h3>
                                <p className="text-muted-foreground">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECH ICONS */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center text-primary mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {data.techIconsTitle}
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {data.techIcons.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -10, scale: 1.1 }}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:bg-primary transition-all duration-300">
                                    <tech.icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. INDUSTRY GRID */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Industries</h2>
                        <p className="text-xl text-white/70">Specialized expertise across diverse sectors</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {relatedIndustries.map((industry, idx) => (
                            <Link to={industry.path} key={idx}>
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={industry.image}
                                        alt={industry.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                                        <div className="mb-4 p-3 bg-white/10 backdrop-blur-md rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <industry.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1">{industry.name}</h3>
                                        <div className="w-8 h-1 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryTemplate;

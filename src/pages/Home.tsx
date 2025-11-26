import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Layers, Layout, Lightbulb, Server, Shield, Smartphone, Zap, Factory, Pill, Users, Cog, Database } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "@/utils/animations";
import CTASection from "@/components/CTASection";

const Home = () => {
  // Hero Carousel
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroApi) return;
    heroApi.on("select", () => setCurrentSlide(heroApi.selectedScrollSnap()));
  }, [heroApi]);

  const heroSlides = [
    {
      image: hero1,
      title: "Digital Innovation Lab",
      subtitle: "Collaborative Innovation at Scale",
    },
    {
      image: hero2,
      title: "Digital Foundation",
      subtitle: "Guiding your digital transformation journey",
    },
    {
      image: hero3,
      title: "Digital Applications",
      subtitle: "Intuitive, high-performance applications",
    },
  ];

  // Services Carousel
  const [servicesRef] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const services = [
    { title: "Implementation", desc: "Simplify, Transform, Scale", icon: Layers },
    { title: "Migrations", desc: "Transform, migrate, optimize SAP", icon: ArrowRight },
    { title: "Support", desc: "Comprehensive SAP Support", icon: Shield },
    { title: "App Dev", desc: "Driving Innovation with SAP", icon: Smartphone },
    { title: "Integrations", desc: "Connect Applications", icon: Globe },
    { title: "Upgrades", desc: "Future-ready SAP Solutions", icon: Zap },
    { title: "Testing", desc: "Reliable SAP QA", icon: CheckCircle2 },
    { title: "Training", desc: "Learn. Adapt. Innovate.", icon: Lightbulb },
  ];

  // Tech Stack Carousel
  const [techRef] = useEmblaCarousel({ loop: true, align: "center", dragFree: true }, [Autoplay({ delay: 1500, stopOnInteraction: false })]);

  const techStack = ["ABAP", "FIORI", "CPI", "SAC", "RAP", "AI"];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden" ref={heroRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
                style={{ backgroundImage: `url(${slide.image})`, transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className={`max-w-3xl space-y-6 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-2xl md:text-3xl font-light text-secondary tracking-wider uppercase"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-5xl md:text-7xl font-bold text-white leading-tight"
                    >
                      {slide.subtitle}
                    </motion.h1>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                      LEARN MORE ABOUT US
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
              onClick={() => heroApi?.scrollTo(idx)}
            />
          ))}
        </div>
      </section>

      {/* 2. THREE FEATURE CARDS */}
      <section className="py-20 -mt-28 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Digital Innovation Lab", desc: "Leverage our Innovation Lab to let your creativity run free, play with ideas, and build solutions using the latest cutting-edge technology.", icon: Lightbulb },
              { title: "Digital Foundation", desc: "With our expert team, cutting-edge technology, and tailored strategies, we guide you every step of the way in your digital transformation journey.", icon: Server },
              { title: "Digital Applications", desc: "Our team specializes in building intuitive, high-performance applications that drive innovation and improve user experiences.", icon: Layout },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-card p-8 rounded-2xl shadow-xl hover:bg-primary transition-all duration-500 border border-border/50"
              >
                <div className="h-14 w-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <card.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-white transition-colors">{card.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SAP CONSULTING SERVICES CAROUSEL */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-center text-primary">SAP Consulting for Smarter, Faster Business Operations</h2>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">From implementation to innovation, we deliver end-to-end SAP services that streamline operations, boost agility, and enable digital transformation</p>
          </motion.div>
        </div>
        <motion.div
          className="overflow-hidden"
          ref={servicesRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex">
            {services.map((service, idx) => (
              <div key={idx} className="flex-[0_0_85%] md:flex-[0_0_30%] pl-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`h-full p-8 rounded-2xl border border-border transition-all duration-300 hover:shadow-lg group cursor-pointer hover:bg-primary ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <service.icon className="w-10 h-10 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <span className="text-6xl font-bold text-slate-100 -mt-4 -mr-4 group-hover:text-white/20 transition-colors">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-white/80 transition-colors">{service.desc}</p>
                  <button className="text-sm font-bold text-primary group-hover:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    LEARN MORE <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. SAP SOLUTIONS GRID */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Comprehensive SAP Solutions for a Future-Ready Enterprise</h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              All Solutions
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "RISE with SAP", desc: "Transform, Integrate, Innovate." },
              { name: "SuccessFactors", desc: "Talent, Performance, Learning, Engagement." },
              { name: "S/4 HANA Private Cloud", desc: "Tailored, Flexible, Efficient, Optimized" },
              { name: "Commerce Cloud", desc: "Innovative, scalable, seamless, customer-centric." },
              { name: "S/4 HANA Public Cloud", desc: "Innovative, Scalable, Efficient, Secure" },
              { name: "SAP Concur", desc: "Streamlining travel, expenses, reimbursements" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="group relative bg-card p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 preserve-3d hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection />

      {/* 6. TRANSFORMATION STATEMENT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-relaxed">
              Transforming Challenges into Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              We empower businesses with SAP to boost efficiency, enhance supply chains, drive transformation, solve challenges, optimize processes, and accelerate growth.
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              variants={staggerContainer}
            >
              {[
                { title: "Unlocking Manufacturing Potential", category: "Implementation", icon: Factory },
                { title: "Optimizing Pharma Processes", category: "Migration", icon: Pill },
                { title: "Transforming Workforce Management", category: "HXM", icon: Users },
                { title: "Business Process Automation", category: "AppDev", icon: Cog },
                { title: "Transforming Data with SAP MDG", category: "Data Management", icon: Database },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. TECH STACK CAROUSEL */}
      <section className="py-16 border-y border-border bg-white">
        <div className="container mx-auto px-4 mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-2"
          >
            Driving Business Success as Your Trusted Partner in SAP and Technology Innovation
          </motion.h2>
        </div>
        <div className="container mx-auto px-4" ref={techRef}>
          <div className="flex select-none">
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex-[0_0_auto] px-12">
                <span className="text-2xl md:text-4xl font-bold text-muted-foreground hover:text-primary transition-colors cursor-default">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL TRUST STATEMENT */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary mb-16 max-w-4xl mx-auto leading-tight"
          >
            Globally trusted, empowering businesses with innovative solutions and unparalleled expertise.
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-16 md:gap-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Partner 1: Sricom, Inc */}
            <motion.div
              variants={fadeIn}
              className="group flex items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Shield className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Sricom, Inc</span>
            </motion.div>

            {/* Partner 2: Austere Tech */}
            <motion.div
              variants={fadeIn}
              className="group flex items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Layers className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Austere Tech</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;

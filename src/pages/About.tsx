import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  Users,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Cloud,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, fadeIn } from "@/utils/animations";
import HeroSection from "@/components/HeroSection";

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const strengths = [
    { title: "End-to-End SAP Services", icon: Globe },
    { title: "Industry Expertise", icon: BarChart3 },
    { title: "Certified SAP Professionals", icon: Award },
    { title: "Rapid Deployment & Methodologies", icon: Zap },
    { title: "Cloud & On-Prem Expertise", icon: Cloud },
    { title: "Innovation-Driven", icon: Lightbulb },
    { title: "Global Delivery Model", icon: Globe },
    { title: "Change Management & Training", icon: Users },
    { title: "Value Realization", icon: Target },
    { title: "License Advisory", icon: Shield },
    { title: "Security & Compliance", icon: Shield },
    { title: "Continuous Improvement", icon: BarChart3 },
  ];

  const leaders = [
    { name: "Joseph Antony", role: "Founder, CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Preeth Veer", role: "Co-Founder, COO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Vijay Joseph", role: "CMO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Sriniva Kumar", role: "Head PMO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  ];

  const values = [
    { title: "Customer-First", icon: Users, desc: "Your success is our priority" },
    { title: "Transparent Delivery", icon: CheckCircle2, desc: "Clear communication always" },
    { title: "Best Practices", icon: Award, desc: "Industry leading standards" },
    { title: "Long-Term Partnership", icon: Globe, desc: "Growing together with you" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* 1. ORIGINAL HERO SECTION */}
      <HeroSection
        title={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.div>
        }
        subtitle="Empowering businesses through technology"
        backgroundImage="https://images.unsplash.com/photo-1632923943199-522ffd5e9602?auto=format&fit=crop&q=80&w=2070"
      />

      {/* 2. INNOVATION PARTNER SECTION (Formerly Hero) */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-secondary/10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-5" />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="absolute bottom-40 right-40 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-muted-foreground rounded-full animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Innovation Partner</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Partner for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Software Innovation
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering enterprises with cutting-edge SAP solutions and digital transformation strategies that drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
                >
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                  alt="Digital Innovation"
                  className="rounded-2xl shadow-2xl border border-border"
                />
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 bg-card p-6 rounded-xl shadow-xl max-w-xs border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">SAP Certified</p>
                      <p className="text-sm text-muted-foreground">Excellence in Delivery</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-4xl font-bold text-foreground mb-8 relative inline-block">
                Who We Are
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full" />
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We specialize in delivering comprehensive SAP solutions tailored to drive business transformation and innovation. With years of expertise in SAP implementation, support, and enhancement, we empower organizations to optimize their processes, improve efficiency, and achieve measurable results.
                </p>
                <p>
                  Our team of certified SAP professionals brings a blend of technical expertise, industry knowledge, and a passion for problem-solving. From small enterprises to large global corporations, we partner with businesses across diverse industries to design and deploy customized SAP solutions that align with their unique objectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={targetRef}
              style={{ opacity, scale }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20 text-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-card p-10 rounded-2xl shadow-lg border border-border relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a trusted leader in SAP services, enabling businesses to unlock their full potential through innovative technology and strategic insights.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-card p-10 rounded-2xl shadow-lg border border-border relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Simplify complex operations",
                    "Drive sustainable growth",
                    "Adapt seamlessly to evolving market dynamics"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. KEY STRENGTHS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence in every engagement, value in every delivery
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. LEADERSHIP SECTION */}
      {/*<section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by visionaries with decades of industry experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex gap-4 text-white">
                      <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
                      <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
                      <Mail className="w-5 h-5 cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* 7. TEAM COMPOSITION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Drive Innovation and Excellence with the Latest Tech Trends
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We hire and build your own remote dedicated development teams tailored to your specific needs.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Functional Consultants", value: 50, color: "bg-primary" },
                  { label: "Technical Consultants", value: 40, color: "bg-secondary" },
                  { label: "Project Management", value: 10, color: "bg-muted-foreground" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-foreground">{stat.label}</span>
                      <span className="font-bold text-foreground">{stat.value}%</span>
                    </div>
                    <div className="h-3 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" className="rounded-2xl shadow-lg mt-12" alt="Team work" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500" className="rounded-2xl shadow-lg" alt="Meeting" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. OUR VALUES (OPTIONAL) */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-primary-foreground/80">The principles that guide our every action</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary-foreground/10 p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-primary-foreground/80">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 10 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2070"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Business with SAP?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-secondary hover:text-primary transition-all shadow-2xl"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

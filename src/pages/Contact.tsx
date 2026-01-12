import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  Linkedin,
  ArrowRight,
  Globe,
  Send
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, fadeIn } from "@/utils/animations";
import HeroSection from "@/components/HeroSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent support issues, our dedicated support channels offer faster response times."
    },
    {
      question: "Do you offer global SAP consulting services?",
      answer: "Yes, we provide SAP consulting and support services to clients globally, leveraging our remote delivery models and strategic partnerships."
    },
    {
      question: "Do you support both Cloud and On-Premise SAP environments?",
      answer: "Absolutely. Our team has extensive experience with both SAP S/4HANA Cloud and On-Premise solutions, as well as hybrid landscapes."
    },
    {
      question: "What is your engagement model?",
      answer: "We offer flexible engagement models including fixed-price projects, time and materials, and dedicated resource augmentation to suit your specific needs."
    },
    {
      question: "How does your delivery process work?",
      answer: "We follow a structured delivery methodology involving discovery, planning, execution, testing, and deployment, ensuring transparency and quality at every step."
    }
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
            Contact Us
          </motion.div>
        }
        subtitle="Let's discuss how we can help your business grow"
        backgroundImage="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=2070"
      />

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <Card className="border border-border shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="h-12 bg-secondary/5 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="h-12 bg-secondary/5 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        className="min-h-[150px] bg-secondary/5 border-border focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-8 relative"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535025183041-0991a977e25b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-[0.03] rounded-3xl -z-10" />

              <div className="grid gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: ["hr@cm2itsolutions.com"],
                    color: "text-blue-500",
                    bg: "bg-blue-500/10"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: ["+91 76759-69278"],
                    color: "text-green-500",
                    bg: "bg-green-500/10"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: ["First Floor, 1-121/63","Survey No. 63 Part Hotel Sitara Grand Backside", "Miyapur, Telangana 500049"],
                    color: "text-purple-500",
                    bg: "bg-purple-500/10"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 flex items-start gap-5">
                        <div className={`p-4 rounded-xl ${item.bg} ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                          {item.content.map((line, i) => (
                            <p key={i} className="text-muted-foreground font-medium">{line}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-border h-[400px] md:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.280746844092!2d78.3542804!3d17.4941067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9398a74e6225%3A0x9ab33bfbaff07f32!2sSria%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768236329231!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. SUPPORT & AVAILABILITY SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Clock,
                title: "Working Hours",
                desc: "Monday to Friday",
                sub: "9 AM to 6 PM (EST)"
              },
              {
                icon: MessageSquare,
                title: "Response Time",
                desc: "Quick Support",
                sub: "Replies within 24 hours"
              },
              {
                icon: Headphones,
                title: "Support Channels",
                desc: "Multi-channel Support",
                sub: "Email, Phone, Remote"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-medium">{item.desc}</p>
                <p className="text-primary font-semibold mt-2">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SOCIAL / CONNECT SECTION */}
      <section className="py-12 bg-secondary/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-8">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hr@onfocussoftware.com" },
              { icon: Phone, label: "Phone", href: "tel:+14808866824" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-background rounded-2xl shadow-md flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-lg transition-all border border-border"
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and support
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Discuss Your SAP Requirements?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-primary text-xl font-bold rounded-full hover:bg-secondary transition-all shadow-2xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

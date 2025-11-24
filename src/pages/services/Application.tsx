import { Check, Code2, GitBranch, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

const SoftwareDevelopment = () => {
  const features = [
    "Custom Software Solutions",
    "Agile Development Process",
    "Scalable Architecture",
    "Quality Assurance Testing",
    "Ongoing Support & Maintenance",
    "Integration Capabilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Development
          </motion.div>
        }
        subtitle="Building robust, scalable solutions for your business"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <Card className="border-2 border-primary mb-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Enterprise Software Development
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our software development services deliver custom solutions tailored to your
                    unique business requirements. We build scalable, secure, and maintainable
                    software that grows with your business. From initial concept to deployment and
                    beyond, we're with you every step of the way.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Using modern technologies and best practices, our experienced development team
                    creates software that solves real business problems. We follow agile methodologies
                    to ensure flexibility, transparency, and rapid delivery of high-quality solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-2 hover:border-primary transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Clean Code</h3>
                    <p className="text-muted-foreground">
                      Well-documented, maintainable codebases
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-2 hover:border-primary transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                      <GitBranch className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Agile Process</h3>
                    <p className="text-muted-foreground">
                      Iterative development with regular updates
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-2 hover:border-primary transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Security First</h3>
                    <p className="text-muted-foreground">
                      Built-in security best practices
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-1 bg-primary rounded-full mt-1">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;

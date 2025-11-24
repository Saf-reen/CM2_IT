import { Check, Cloud, Server, Scaling } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const CloudSolutions = () => {
  const features = [
    "Cloud Infrastructure Design",
    "Migration Services",
    "DevOps Implementation",
    "Auto-Scaling Solutions",
    "Disaster Recovery",
    "Cost Optimization",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Cloud Solutions"
        subtitle="Scalable, secure, and cost-effective cloud infrastructure"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Enterprise Cloud Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Transform your business with our comprehensive cloud solutions. We help
                  organizations migrate to the cloud, optimize existing infrastructure, and
                  leverage cloud-native technologies to achieve greater agility, scalability,
                  and cost efficiency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our cloud experts work with leading platforms including AWS, Azure, and Google
                  Cloud to design and implement solutions that meet your specific needs. From
                  initial planning to ongoing management, we ensure your cloud infrastructure
                  is secure, reliable, and optimized for performance.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Multi-Cloud</h3>
                  <p className="text-muted-foreground">
                    Support for AWS, Azure, and GCP
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Robust and reliable cloud architecture
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Scaling className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Scalability</h3>
                  <p className="text-muted-foreground">
                    Automatic scaling based on demand
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features List */}
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-fade-in">
                      <div className="p-1 bg-primary rounded-full mt-1">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-12 text-center animate-fade-in-up">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Get Cloud Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;

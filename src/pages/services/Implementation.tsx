import { Check, Monitor, Layout, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const AppDesign = () => {
  const features = [
    "Native iOS and Android Design",
    "Intuitive User Interfaces",
    "Engaging User Experiences",
    "Cross-Platform Compatibility",
    "Performance Optimization",
    "App Store Guidelines Compliance",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="App Design"
        subtitle="Crafting beautiful mobile experiences for iOS and Android"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Mobile App Design Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our mobile app design services focus on creating engaging, intuitive experiences
                  that users love. We understand that mobile apps require a unique approach,
                  balancing functionality with simplicity to deliver seamless interactions on
                  smaller screens.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need a native iOS app, Android app, or cross-platform solution, our
                  design team has the expertise to bring your vision to life. We follow platform-
                  specific guidelines while maintaining your brand's unique identity.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Platform Native</h3>
                  <p className="text-muted-foreground">
                    Designs that feel native to iOS and Android
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Layout className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">User-Centric</h3>
                  <p className="text-muted-foreground">
                    Intuitive interfaces for better engagement
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Modern UI</h3>
                  <p className="text-muted-foreground">
                    Latest design trends and animations
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
                <Link to="/contact">Start Your App Design Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDesign;

import { Check, Palette, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const WebDesign = () => {
  const features = [
    "Responsive Design for All Devices",
    "Modern UI/UX Principles",
    "SEO-Optimized Structure",
    "Fast Loading Times",
    "Custom Design Systems",
    "Accessibility Compliance",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Web Design"
        subtitle="Creating stunning, user-friendly websites that convert"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Professional Web Design Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our web design services combine aesthetics with functionality to create websites
                  that not only look beautiful but also deliver exceptional user experiences. We
                  understand that your website is often the first impression customers have of your
                  business, and we're committed to making it count.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From concept to launch, our team works closely with you to understand your brand,
                  goals, and target audience. We employ the latest design trends and technologies
                  to ensure your website stands out in today's competitive digital landscape.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Custom Design</h3>
                  <p className="text-muted-foreground">
                    Unique designs tailored to your brand identity
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Mobile-First</h3>
                  <p className="text-muted-foreground">
                    Optimized for all devices and screen sizes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Lightning-fast load times for better UX
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
                <Link to="/contact">Get Started with Web Design</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;

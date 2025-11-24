import { Check, Users, BarChart, MessageCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const CRM = () => {
  const features = [
    "Contact Management",
    "Sales Pipeline Tracking",
    "Lead Management",
    "Customer Analytics",
    "Email Integration",
    "Mobile Access",
    "Custom Reports",
    "Third-Party Integrations",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="CRM Solution"
        subtitle="Streamline customer relationships and boost sales"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Customer Relationship Management
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our CRM solution is designed to help businesses manage customer interactions,
                  streamline sales processes, and improve customer satisfaction. With powerful
                  features and an intuitive interface, you can track leads, manage contacts,
                  and close deals more efficiently.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Built with scalability in mind, our CRM grows with your business. Whether
                  you're a small startup or an enterprise organization, our solution adapts
                  to your needs with customizable workflows and comprehensive analytics.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Contacts</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <BarChart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Analytics</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Communication</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Growth</h3>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
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
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;

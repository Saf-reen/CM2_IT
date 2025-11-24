import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Award } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Building2,
      title: "Fortune 500 Digital Transformation",
      client: "Global Manufacturing Corp",
      challenge: "Legacy systems causing operational inefficiencies",
      solution: "Implemented cloud-based ERP with custom integrations",
      results: ["40% reduction in operational costs", "3x faster processing times", "98% system uptime"],
    },
    {
      icon: TrendingUp,
      title: "E-commerce Platform Scaling",
      client: "RetailTech Solutions",
      challenge: "Platform couldn't handle rapid growth",
      solution: "Rebuilt architecture with microservices and auto-scaling",
      results: ["10x traffic capacity", "99.99% availability", "50% faster page loads"],
    },
    {
      icon: Award,
      title: "Healthcare CRM Implementation",
      client: "MedCare Network",
      challenge: "Fragmented patient data across multiple systems",
      solution: "Unified CRM with HIPAA-compliant data integration",
      results: ["Single source of truth", "60% faster patient onboarding", "Enhanced data security"],
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Case Studies"
        subtitle="Real success stories from our clients"
      />

      {/* Case Studies List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2 border-primary animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-secondary rounded-full flex-shrink-0">
                      <study.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-primary mb-2">{study.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{study.client}</p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="font-semibold text-primary mb-2">Challenge</h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-2">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-2">Results</h3>
                          <ul className="space-y-1">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm">
                                • {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Write Your Success Story?
            </h3>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

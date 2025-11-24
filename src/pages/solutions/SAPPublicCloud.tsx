import { Check, UserCheck, Calendar, FileText, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const HRMS = () => {
  const features = [
    "Employee Database Management",
    "Attendance Tracking",
    "Payroll Processing",
    "Leave Management",
    "Performance Reviews",
    "Recruitment Module",
    "Training & Development",
    "Employee Self-Service Portal",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="HRMS Solution"
        subtitle="Complete human resource management system"
      />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Human Resource Management System
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our HRMS solution simplifies and automates all aspects of human resource
                  management. From recruitment to retirement, manage your entire workforce
                  efficiently with our comprehensive platform. Streamline HR processes, improve
                  employee engagement, and make data-driven decisions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With intuitive interfaces for both HR professionals and employees, our HRMS
                  reduces administrative burden while providing powerful tools for talent
                  management, payroll processing, and compliance tracking.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <UserCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Employees</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Scheduling</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Payroll</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Performance</h3>
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
                <Link to="/contact">See HRMS in Action</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRMS;

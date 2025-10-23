import { Target, Eye, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section changes*/}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 73, 89, 0.85), rgba(56, 73, 89, 0.85)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90">Empowering businesses through technology</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 animate-slide-in-left">
              <div className="p-4 bg-primary rounded-full">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
            </div>
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At OnFocus Software Inc, our mission is to deliver innovative, reliable, and
                  scalable technology solutions that drive business growth and digital transformation.
                  We are committed to understanding our clients' unique challenges and providing
                  tailored solutions that exceed expectations. Through continuous innovation,
                  exceptional service, and a customer-centric approach, we aim to be the trusted
                  technology partner for businesses worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 animate-slide-in-right">
              <div className="p-4 bg-primary rounded-full">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
            </div>
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a future where technology seamlessly integrates with business operations,
                  creating efficiency, innovation, and growth opportunities. Our goal is to become a
                  global leader in IT solutions, recognized for our technical excellence, creative
                  problem-solving, and unwavering commitment to client success. We strive to build
                  lasting partnerships and contribute to the digital evolution of industries worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 animate-slide-in-left">
              <div className="p-4 bg-primary rounded-full">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold text-primary">The Brand Story</h2>
            </div>
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OnFocus Software Inc was founded with a vision to bridge the gap between
                  technology and business objectives. What started as a small team of passionate
                  developers has grown into a full-service technology company serving clients across
                  various industries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey has been marked by continuous learning, adaptation, and innovation.
                  We've evolved from building simple websites to developing complex enterprise
                  solutions, always staying ahead of technological trends. Our commitment to excellence
                  and client satisfaction has been the cornerstone of our growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to offer a comprehensive suite of services including web and app
                  design, software development, cloud solutions, and enterprise products. Each project
                  we undertake is a testament to our dedication to quality, innovation, and results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The People Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 animate-slide-in-right">
              <div className="p-4 bg-primary rounded-full">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold text-primary">The People</h2>
            </div>
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Behind every successful project is a team of talented, dedicated professionals.
                  At OnFocus Software Inc, we take pride in our diverse team of experts who
                  bring creativity, technical expertise, and passion to every challenge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-secondary/20 rounded-lg animate-fade-in">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-lg animate-fade-in">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-lg animate-fade-in">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

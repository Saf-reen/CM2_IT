import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Let's discuss how we can help your business grow
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-2 border-primary animate-scale-in">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[150px]"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in">
                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground">hr@onfocussoftware.com</p>
                      {/* <p className="text-muted-foreground">hr@onfocussoftware.com</p> */}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground">+1 (646) 359-1901</p>
                      {/* <p className="text-muted-foreground">+1 (555) 765-4321</p> */}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Office</h3>
                      <p className="text-muted-foreground">545 Metro Place South Suite, 100</p>
                      <p className="text-muted-foreground">Dublin, OH 43017</p>
                      <p className="text-muted-foreground">USA</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border-2 border-primary">
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg overflow-hidden">
                      <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.212310483609!2d-83.13238690000001!3d40.0929791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883893252959b263%3A0x2ade6a99b698cde2!2s545%20Metro%20Pl%20S%20Ste%2C%20100%2C%20Dublin%2C%20OH%2043017%2C%20USA!5e0!3m2!1sen!2sin!4v1760960253669!5m2!1sen!2sin"
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

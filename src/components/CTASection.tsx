import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
}

const CTASection = ({
    title = "Ready to Grow Your Business?",
    description = "Partner with CM2 to transform your enterprise with world-class solutions. Let's build a future-ready digital ecosystem together.",
    buttonText = "Contact Us",
    buttonLink = "/contact",
    className = ""
}: CTASectionProps) => {
    return (
        <section className={`py-24 bg-gradient-to-br from-primary via-primary/95 to-slate-900 text-white relative overflow-hidden ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        {description}
                    </p>
                    <Button
                        size="lg"
                        asChild
                        className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 group"
                    >
                        <Link to={buttonLink} className="flex items-center gap-2">
                            {buttonText}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

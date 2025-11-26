import React from "react";

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    backgroundImage?: string;
    height?: 'h-60' | 'default';
}

const HeroSection = ({
    title,
    subtitle,
    children,
    className = "",
    backgroundImage,
    height = 'default'
}: HeroSectionProps) => {
    const heightClass = 'min-h-[60vh] md:min-h-[80vh]';

    return (
        <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Image with Overlay */}
            {backgroundImage ? (
                <div className="absolute inset-0">
                    <img
                        src={backgroundImage}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-slate-900/90" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-slate-900" />
            )}

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-spin-slow" />
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/30 rounded-lg rotate-12 animate-float" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center py-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
                    {title}
                </h1>

                {subtitle && (
                    <div className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
                        {subtitle}
                    </div>
                )}

                <div className="w-24 h-1 bg-secondary mx-auto mb-6 md:mb-8 animate-scale-in" />

                {children && (
                    <div className="animate-fade-in-up delay-200">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Cloud Computing in 2025",
      excerpt: "Explore emerging trends in cloud technology and how they're reshaping business operations.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Cloud Technology",
    },
    {
      title: "Best Practices for Web Design in 2024",
      excerpt: "Learn the latest design principles and techniques for creating engaging user experiences.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Design",
    },
    {
      title: "AI and Machine Learning: Transforming Business",
      excerpt: "How artificial intelligence is revolutionizing industries and creating new opportunities.",
      author: "Michael Chen",
      date: "March 5, 2024",
      category: "Technology",
    },
    {
      title: "Cybersecurity in the Digital Age",
      excerpt: "Essential strategies for protecting your business from evolving cyber threats.",
      author: "Emily Davis",
      date: "February 28, 2024",
      category: "Security",
    },
    {
      title: "Mobile-First Development Strategy",
      excerpt: "Why mobile-first approach is crucial for modern application development.",
      author: "David Wilson",
      date: "February 22, 2024",
      category: "Development",
    },
    {
      title: "Scaling Your SaaS Product",
      excerpt: "Proven strategies for growing your software-as-a-service business sustainably.",
      author: "Lisa Anderson",
      date: "February 15, 2024",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blog
          </motion.div>
        }
        subtitle="Industries, tips, and industry trends"
      />

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {posts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-secondary-foreground bg-secondary px-3 py-1 rounded-full inline-block mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import  logo  from "@/assets/logo.png";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const services = [
    { name: "Web Design", path: "/services/web-design" },
    { name: "App Design", path: "/services/app-design" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
  ];

  const products = [
    { name: "CRM", path: "/products/crm" },
    { name: "ERP", path: "/products/erp" },
    { name: "HRMS", path: "/products/hrms" },
  ];

  const insights = [
    { name: "Case Studies", path: "/insights/case-studies" },
    { name: "Blog", path: "/insights/blog" },
    { name: "News & Updates", path: "/insights/news" },
    
  ];

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="onFocus Software Inc" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-white transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-white transition-colors font-medium">About Us</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center space-x-1 text-muted-foreground hover:text-white transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.name}
                    </Link>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center space-x-1 text-muted-foreground hover:text-white transition-colors font-medium"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {product.name}
                    </Link>
                ))}
              </div>
            </div>

            {/* Insights Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("insights")}
                className="flex items-center space-x-1 text-muted-foreground hover:text-white transition-colors font-medium"
              >
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {insights.map((insight) => (
                  <Link
                    key={insight.path}
                    to={insight.path}
                    className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {insight.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-muted-foreground hover:text-white transition-colors font-medium">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-primary border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-muted-foreground hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="px-4 py-2 text-muted-foreground hover:text-white transition-colors">About Us</Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "services" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {services.map((service) => (
                      <Link key={service.path} to={service.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "products" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {products.map((product) => (
                      <Link key={product.path} to={product.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{product.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Insights Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("insights")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Insights</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "insights" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "insights" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {insights.map((insight) => (
                      <Link key={insight.path} to={insight.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{insight.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="px-4 py-2 text-muted-foreground hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
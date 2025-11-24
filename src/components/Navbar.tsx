import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
    { name: "Implementation", path: "/services/web-design" },
    { name: "Migrations", path: "/services/app-design" },
    { name: "Application Development", path: "/services/software-development" },
    { name: "Integration", path: "/services/cloud-solutions" },
    { name: "Rollouts", path: "/services/web-design" },
    { name: "Upgrades", path: "/services/app-design" },
    { name: "Support & Maintenance", path: "/services/software-development" },
    { name: "Testing", path: "/services/cloud-solutions" },
    { name: "Training", path: "/services/cloud-solutions" },
  ];

  const solutions = [
    { name: "Rise with SAP", path: "/solutions/rise-with-sap" },
    { name: "SAP S/4 HANA Private Cloud", path: "/solutions/erp" },
    { name: "SAP S/4 HANA Public Cloud", path: "/solutions/hrms" },
    { name: "SAP Success Factors", path: "/solutions/crm" },
    { name: "SAP Commerce Cloud", path: "/solutions/erp" },
    { name: "SAP Concur", path: "/solutions/hrms" },
    { name: "SAP Ariba", path: "/solutions/crm" },
    { name: "SAP Manufacturing Execution", path: "/solutions/erp" },
    { name: "SAP Manufacturing Logistics", path: "/solutions/hrms" },
    { name: "SAP Digital Manufacturing", path: "/solutions/crm" },
    { name: "SAP Business Network for Logistics", path: "/solutions/erp" },
    { name: "SAP Fieldglass", path: "/solutions/hrms" },
    { name: "SAP Extended Warehouse Management", path: "/solutions/crm" },
    { name: "SAP Product Lifecycle", path: "/solutions/erp" },
    { name: "SAP Asset Performance Management", path: "/solutions/hrms" },
    { name: "SAP Field Service Management", path: "/solutions/crm" },
  ];

  const industries = [
    { name: "Banking & Finance", path: "/industries/case-studies" },
    { name: "Public Sector", path: "/industries/blog" },
    { name: "Energy & Utilities", path: "/industries/news" },
    { name: "Healthcare", path: "/industries/case-studies" },
    { name: "Dairy", path: "/industries/blog" },
    { name: "Textile", path: "/industries/news" },
    { name: "Manufacturing", path: "/industries/case-studies" },
    { name: "Retail", path: "/industries/blog" },
    { name: "Travel", path: "/industries/news" },
    { name: "Telecom", path: "/industries/case-studies" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Approach", path: "/about" },
    { name: "Careers", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // split array into columns where first column has 6 items and subsequent columns have up to 5 items
  const splitIntoColumns = <T,>(arr: T[]): T[][] => {
    if (arr.length <= 5) return [arr];
    const cols: T[][] = [];
    cols.push(arr.slice(0, 6));
    const rest = arr.slice(6);
    for (let i = 0; i < rest.length; i += 5) {
      cols.push(rest.slice(i, i + 5));
    }
    return cols.slice(0, 3); // cap at 3 columns
  };

  // helper to detect active route for top-level links
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="onFocus Software Inc Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">

            {/* Solutions Dropdown */}
            <div className="group relative h-full flex items-center">
              <Link
                to="/solutions"
                className={`relative flex items-center space-x-1 transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-white' : 'text-primary-foreground hover:text-primary-foreground/90'} ${isActive('/solutions') ? 'underline decoration-2 decoration-current underline-offset-4' : ''}`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
                <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded transition-opacity ${isActive('/solutions') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} aria-hidden />
              </Link>
              <div className="absolute top-full right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="w-max bg-card rounded shadow-lg overflow-hidden">
                  <div className="p-6">
                    {(() => {
                      const cols = splitIntoColumns(solutions);
                      const colCount = cols.length;
                      return (
                        <div className={`grid ${colCount === 1 ? 'grid-cols-1' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-x-12`}>
                          {cols.map((col, idx) => (
                            <div key={idx} className="flex flex-col space-y-1">
                              {col.map((s) => (
                                <Link key={s.path + s.name} to={s.path} className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-white transition-colors rounded">{s.name}</Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="group relative h-full flex items-center">
              <Link
                to="/services"
                className={`relative flex items-center space-x-1 transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-white' : 'text-primary-foreground hover:text-primary-foreground/90'} ${isActive('/services') ? 'underline decoration-2 decoration-current underline-offset-4' : ''}`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
                <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded transition-opacity ${isActive('/services') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} aria-hidden />
              </Link>
              <div className="absolute top-full right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="w-max bg-card rounded shadow-lg overflow-hidden">
                  <div className="p-6">
                    {(() => {
                      const cols = splitIntoColumns(services);
                      const colCount = cols.length;
                      return (
                        <div className={`grid ${colCount === 1 ? 'grid-cols-1' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-x-12`}>
                          {cols.map((col, idx) => (
                            <div key={idx} className="flex flex-col space-y-1">
                              {col.map((service) => (
                                <Link
                                  key={service.path + service.name}
                                  to={service.path}
                                  className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-white transition-colors rounded"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="group relative h-full flex items-center">
              <Link
                to="/industries"
                className={`relative flex items-center space-x-1 transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-white' : 'text-primary-foreground hover:text-primary-foreground/90'} ${isActive('/industries') ? 'underline decoration-2 decoration-current underline-offset-4' : ''}`}
              >
                <span>Industries </span>
                <ChevronDown className="w-4 h-4" />
                <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded transition-opacity ${isActive('/industries') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} aria-hidden />
              </Link>
              <div className="absolute top-full right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="w-max bg-card rounded shadow-lg overflow-hidden">
                  <div className="p-6">
                    {(() => {
                      const cols = splitIntoColumns(industries);
                      const colCount = cols.length;
                      return (
                        <div className={`grid ${colCount === 1 ? 'grid-cols-1' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-x-12`}>
                          {cols.map((col, idx) => (
                            <div key={idx} className="flex flex-col space-y-1">
                              {col.map((ind) => (
                                <Link key={ind.path + ind.name} to={ind.path} className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-white transition-colors rounded">{ind.name}</Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="group relative h-full flex items-center">
              <Link
                to="/about"
                className={`relative flex items-center space-x-1 transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-white' : 'text-primary-foreground hover:text-primary-foreground/90'} ${isActive('/about') ? 'underline decoration-2 decoration-current underline-offset-4' : ''}`}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
                <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded transition-opacity ${isActive('/about') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} aria-hidden />
              </Link>
              <div className="absolute top-full right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="w-max bg-card rounded shadow-lg overflow-hidden">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-y-2">
                      {company.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-white transition-colors rounded"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-muted-foreground hover:text-white' : 'text-primary-foreground hover:text-primary-foreground/90'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-primary border-t border-border animate-fade-in max-h-[calc(100vh_-_5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "solutions" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {solutions.map((product) => (
                      <Link key={product.path} to={product.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{product.name}</Link>
                    ))}
                  </div>
                )}
              </div>

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

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("industries")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "industries" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "industries" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {industries.map((insight) => (
                      <Link key={insight.path} to={insight.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{insight.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Company Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("company")}
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "company" && (
                  <div className="pl-8 space-y-2 mt-2 animate-fade-in">
                    {company.map((item) => (
                      <Link key={item.path} to={item.path} className="block px-4 py-2 text-muted-foreground hover:text-white transition-colors">{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
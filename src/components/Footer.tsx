import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/logo.png" alt="onFocus Software Logo" className="h-10" />
            <p className="text-sm opacity-90">
              Delivering innovative technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solutions*/}
           <div className="space-y-4">
              <h4 className="text-lg font-semibold">Solutions</h4>
              <ul className="space-y-2">
                <li><Link to="/solutions/rise-with-sap" className="text-sm hover:text-secondary transition-colors">Rise with SAP</Link></li>
                <li><Link to="/solutions/sap-privatecloud" className="text-sm hover:text-secondary transition-colors">SAP S/4 HANA Private Cloud</Link></li>
                <li><Link to="/solutions/sap-publiccloud" className="text-sm hover:text-secondary transition-colors">SAP S/4 HANA Public Cloud</Link></li>
                <li><Link to="/solutions/commercecloud" className="text-sm hover:text-secondary transition-colors">SAP Commerce Cloud</Link></li>
                <li><Link to="/solutions/success-factors" className="text-sm hover:text-secondary transition-colors">SAP SuccessFactors</Link></li>
                <li><Link to="/solutions/ariba" className="text-sm hover:text-secondary transition-colors">SAP Ariba</Link></li>
                <li><Link to="/solutions/concur" className="text-sm hover:text-secondary transition-colors">SAP Concur</Link></li>
                <li><Link to="/solutions/manufacturingexecution" className="text-sm hover:text-secondary transition-colors">SAP Manufacturing Execution</Link></li>
                <li><Link to="/solutions/manufacturinglogistics" className="text-sm hover:text-secondary transition-colors">SAP Manufacturing Logistics</Link></li>
                <li><Link to="/solutions/digitalmanufacturing" className="text-sm hover:text-secondary transition-colors">SAP  Digital Manufacturing </Link></li>
                <li><Link to="/solutions/businessnetwork" className="text-sm hover:text-secondary transition-colors">SAP Business Network for Logistics</Link></li>
                <li><Link to="/solutions/fieldglass" className="text-sm hover:text-secondary transition-colors">SAP Fieldglass</Link></li>
                <li><Link to="/solutions/warehouse" className="text-sm hover:text-secondary transition-colors">SAP Extended Warehouse Management</Link></li>
                <li><Link to="/solutions/productlifecycle" className="text-sm hover:text-secondary transition-colors">SAP Product Lifecycle Management</Link></li>
                <li><Link to="/solutions/assetperformance" className="text-sm hover:text-secondary transition-colors">SAP Asset Performance Management</Link></li>
                <li><Link to="/solutions/fieldservice" className="text-sm hover:text-secondary transition-colors">SAP Field Service Management</Link></li>
              </ul>
            </div>
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/implementation" className="text-sm hover:text-secondary transition-colors">Implementations</Link></li>
                <li><Link to="/services/migration" className="text-sm hover:text-secondary transition-colors">Migrations</Link></li>
                <li><Link to="/services/development" className="text-sm hover:text-secondary transition-colors">Application Development</Link></li>
                <li><Link to="/services/integration" className="text-sm hover:text-secondary transition-colors">Integrations</Link></li>
                <li><Link to="/services/rollouts" className="text-sm hover:text-secondary transition-colors">Rollouts</Link></li>
                <li><Link to="/services/upgrades" className="text-sm hover:text-secondary transition-colors">Upgrades</Link></li>
                <li><Link to="/services/support" className="text-sm hover:text-secondary transition-colors">Support & Maintenance</Link></li>
                <li><Link to="/services/testing" className="text-sm hover:text-secondary transition-colors">Testing</Link></li>
                <li><Link to="/services/training" className="text-sm hover:text-secondary transition-colors">Training</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Industries</h4>
              <ul className="space-y-2">
                <li><Link to="/industries/banking-finance" className="text-sm hover:text-secondary transition-colors">Banking & Finance</Link></li>
                <li><Link to="/industries/public-sector" className="text-sm hover:text-secondary transition-colors">Public Sector</Link></li>
                <li><Link to="/industries/energy" className="text-sm hover:text-secondary transition-colors">Energy & Utilities</Link></li>
                <li><Link to="/industries/healthcare" className="text-sm hover:text-secondary transition-colors">Healthcare</Link></li>
                <li><Link to="/industries/dairy" className="text-sm hover:text-secondary transition-colors">Dairy</Link></li>
                <li><Link to="/industries/textile" className="text-sm hover:text-secondary transition-colors">Textile</Link></li>
                <li><Link to="/industries/manufacturing" className="text-sm hover:text-secondary transition-colors">Manufacturing</Link></li>
                <li><Link to="/industries/retail" className="text-sm hover:text-secondary transition-colors">Retail</Link></li>
                <li><Link to="/industries/travel" className="text-sm hover:text-secondary transition-colors">Travel</Link></li>
                <li><Link to="/industries/telecom" className="text-sm hover:text-secondary transition-colors">Telecom</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Email: hr@onfocussoftware.com</p>
                <p>Phone: +1 (480) 886-6824</p>
                <p>Address: 545 Metro Place South Suite, 100, Dublin, OH 43017</p>
              </div>
            </div>
          </div>
       </div>
          

          

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} onFocus Software Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

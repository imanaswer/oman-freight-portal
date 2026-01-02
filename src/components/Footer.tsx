import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="14"
                  width="24"
                  height="12"
                  rx="2"
                  className="fill-primary-foreground"
                />
                <path
                  d="M26 14L38 20L26 26V14Z"
                  className="fill-steel-light"
                />
                <rect
                  x="6"
                  y="18"
                  width="16"
                  height="4"
                  rx="1"
                  className="fill-primary"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-wider text-primary-foreground">
                  FAST SHIPPING
                </span>
                <span className="text-xs font-medium tracking-widest text-steel-light">
                  & LOGISTICS
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              International freight forwarding from Oman to the world. Your trusted logistics partner.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services#air" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Air Freight
              </Link>
              <Link to="/services#ocean" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Ocean Freight
              </Link>
              <Link to="/services#land" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Land Transportation
              </Link>
              <Link to="/services#warehousing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Warehousing
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">
              Contact Us
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="mailto:info@fastshipping.om" className="hover:text-primary-foreground transition-colors">
                info@fastshipping.om
              </a>
              <a href="tel:+96812345678" className="hover:text-primary-foreground transition-colors">
                +968 1234 5678
              </a>
              <p>Muscat, Sultanate of Oman</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {currentYear} FAST SHIPPING & LOGISTICS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

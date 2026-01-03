import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo"; // Assumes Logo is in the same directory or adjust import path
import { Button } from "@/components/ui/button";

// --- COMPONENTS ---

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className="group flex items-center gap-2 w-fit">
      <motion.span 
        className="h-[2px] w-0 bg-primary group-hover:w-3 transition-all duration-300"
      />
      <span className="text-muted-foreground/80 hover:text-white transition-colors duration-300 text-sm tracking-wide">
        {children}
      </span>
    </Link>
  );
};

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a13] relative overflow-hidden border-t border-white/5 pt-20 pb-10">
      
      {/* 1. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
         <h1 className="text-[15vw] font-black text-white leading-none tracking-tighter text-center select-none">
            LOGISTICS
         </h1>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* COLUMN 1: BRAND (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Logo className="scale-100 origin-left" />
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              International freight forwarding from Oman to the world. We engineer comprehensive logistics solutions with precision, speed, and reliability.
            </p>
            <div className="flex gap-4">
               <SocialButton icon={Facebook} href="#" />
               <SocialButton icon={Twitter} href="#" />
               <SocialButton icon={Instagram} href="#" />
               <SocialButton icon={Linkedin} href="#" />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </nav>
          </div>

          {/* COLUMN 3: SERVICES (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Services</h4>
            <nav className="flex flex-col gap-4">
              <FooterLink to="/services#air">Air Freight</FooterLink>
              <FooterLink to="/services#ocean">Ocean Freight</FooterLink>
              <FooterLink to="/services#land">Land Transport</FooterLink>
              <FooterLink to="/services#customs">Customs</FooterLink>
            </nav>
          </div>

          {/* COLUMN 4: NEWSLETTER (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest shipping rates and logistics news.
            </p>
            
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
               <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
                  />
                  <Button 
                    size="icon" 
                    className="absolute right-1 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg"
                  >
                     <ArrowRight className="w-4 h-4" />
                  </Button>
               </div>
            </form>

            <div className="pt-4 flex flex-col gap-3">
               <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Muscat, Sultanate of Oman</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+96812345678" className="hover:text-white transition-colors">+968 1234 5678</a>
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60 text-center md:text-left">
            © {currentYear} FAST SHIPPING & LOGISTICS. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground/60">
             <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
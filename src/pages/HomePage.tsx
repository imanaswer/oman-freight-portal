import { useRef, MouseEvent } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useMotionTemplate 
} from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

// Assumed Asset Imports - Keep yours if they are different
import heroImage from "@/assets/hero-port.jpg";
import airFreightImage from "@/assets/air-freight.jpg";
import oceanFreightImage from "@/assets/ocean-freight.jpg";
import landTransportImage from "@/assets/land-transport.jpg";

// --- DATA ---
const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services connecting Oman to destinations worldwide.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "FCL and LCL shipping solutions for cost-effective international sea cargo.",
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Comprehensive road freight services across the GCC region and beyond.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities and professional packing services.",
  },
  {
    icon: Package,
    title: "Customs Clearance",
    description: "Expert customs brokerage for smooth import and export compliance.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete freight documentation support for international shipments.",
  },
];

const featuredServices = [
  {
    number: "01",
    title: "Air Freight",
    description: "Swift air cargo solutions for time-critical shipments.",
    image: airFreightImage,
    link: "/services#air",
  },
  {
    number: "02",
    title: "Ocean Freight",
    description: "Optimized shipping routes with lowest possible costs.",
    image: oceanFreightImage,
    link: "/services#ocean",
  },
  {
    number: "03",
    title: "Land Transport",
    description: "Comprehensive road freight across the GCC.",
    image: landTransportImage,
    link: "/services#land",
  },
];

// --- COMPONENTS ---

// 1. Spotlight Card
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-border/50 bg-card/40 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary-rgb), 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 2. Reveal Title
const RevealTitle = ({ text, className="" }: { text: string, className?: string }) => {
  return (
    <h1 className={`${className} overflow-hidden`}>
      <span className="sr-only">{text}</span>
      <span className="block overflow-hidden" aria-hidden="true">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.03, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="inline-block origin-bottom"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </h1>
  );
};

// 3. Marquee
const Marquee = ({ text, reverse = false }: { text: string; reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap bg-olive text-white py-4 select-none">
      <motion.div
        className="flex gap-8 text-2xl font-bold uppercase tracking-widest"
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-4">
            {text} <Globe className="w-5 h-5 opacity-50" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// 4. Parallax Image
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className="overflow-hidden h-full w-full rounded-2xl relative group min-h-[250px]">
      <motion.div style={{ y, scale }} className="h-[120%] w-full -mt-[10%]">
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </motion.div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
    </div>
  );
};

// --- MAIN PAGE ---

const HomePage = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="overflow-x-hidden bg-background">
      
      {/* 1. HERO SECTION */}
      {/* FIX: Use min-h-screen to ensure full height but allow scrolling if content overflows */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20 pb-10">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-6xl">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="flex items-center gap-4 mb-4 md:mb-6"
             >
                <div className="h-[2px] w-12 md:w-20 bg-olive"></div>
                <span className="text-olive text-xs md:text-base font-bold tracking-[0.3em] uppercase">Global Logistics</span>
             </motion.div>

             <div className="mb-6 md:mb-8">
               {/* FIX: Reduced mobile font size (text-4xl) to prevent 'Expectations' from cutting off */}
               <RevealTitle 
                 text="Beyond Borders" 
                 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.95] mb-1"
               />
               <RevealTitle 
                 text="Beyond Expectations" 
                 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tighter leading-[0.95]" 
               />
             </div>

             <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1 }}
               // FIX: Reduced bottom margin (mb-8) to pull buttons up
               className="text-base md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-12 font-light leading-relaxed"
             >
               Comprehensive air, sea, and land logistics solutions. We handle your freight with precision.
             </motion.p>

             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.2 }}
               className="flex flex-col sm:flex-row gap-4"
            >
                {/* FIX: Adjusted button height for mobile (h-12) */}
                <Button size="lg" className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-full bg-white text-black hover:bg-slate-200 transition-all" asChild>
                   <Link to="/services">
                      Our Services <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                   </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md" asChild>
                   <Link to="/contact">Contact Us</Link>
                </Button>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <section className="relative z-20 -rotate-1 bg-olive border-y-4 border-black/10">
         <Marquee text="FAST • RELIABLE • SECURE • GLOBAL •" />
      </section>

      {/* 3. FEATURED SHOWCASE */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
             <div className="max-w-2xl">
                <span className="text-olive font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Masters of <br/>Movement</h2>
             </div>
             <p className="text-muted-foreground max-w-sm text-base md:text-lg">
                End-to-end logistics solutions tailored to your business requirements.
             </p>
          </AnimatedSection>

          <div className="space-y-16 md:space-y-32">
            {featuredServices.map((service, index) => (
               <AnimatedSection key={service.title}>
                  <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                     <div className="flex-1 space-y-6 md:space-y-8 w-full">
                        <span className="text-6xl md:text-9xl font-black text-foreground/5 block leading-none -mb-6 md:-mb-10 select-none">{service.number}</span>
                        <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                        <ul className="space-y-3">
                           {["Real-time Tracking", "Customs Handling", "Express Delivery"].map((item) => (
                              <li key={item} className="flex items-center gap-3 text-foreground/80 font-medium">
                                 <CheckCircle className="w-5 h-5 text-olive" /> {item}
                              </li>
                           ))}
                        </ul>
                        <Button variant="link" className="p-0 text-lg text-olive hover:text-olive-light" asChild>
                           <Link to={service.link}>Learn More <ArrowRight className="w-5 h-5 ml-2" /></Link>
                        </Button>
                     </div>
                     
                     <div className="flex-1 w-full aspect-square md:aspect-[4/3]">
                        <ParallaxImage src={service.image} alt={service.title} />
                     </div>
                  </div>
               </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-16 md:py-32 bg-[#0a0f1c] text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent)] opacity-40"></div>
        
        <div className="container-custom relative z-10">
            <div className="text-left max-w-3xl mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Comprehensive Logistics</h2>
              <p className="text-slate-400 text-lg">Everything you need to move anything, anywhere.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                  <Link 
                    key={service.title} 
                    to="/services" 
                    className="group block rounded-2xl p-8 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm">{service.description}</p>
                    
                    <div className="flex items-center text-sm font-bold text-white/50 uppercase tracking-wider group-hover:text-white transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
              ))}
            </div>
        </div>
      </section>

      {/* 5. STATS */}
      <section className="py-16 md:py-24 bg-olive text-white">
         <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
               {[
                  { value: "15+", label: "Years Experience" },
                  { value: "50+", label: "Countries Served" },
                  { value: "10k+", label: "Shipments" },
                  { value: "24/7", label: "Support" },
               ].map((stat, i) => (
                  <AnimatedSection delay={i * 0.1} key={i}>
                     <div className="px-2">
                        <div className="text-4xl md:text-6xl font-black mb-2">{stat.value}</div>
                        <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
                     </div>
                  </AnimatedSection>
               ))}
            </div>
         </div>
      </section>

      {/* 6. CTA */}
      <section className="h-[60vh] md:h-[80vh] relative flex items-center justify-center overflow-hidden bg-background">
         <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         </div>

         <div className="container-custom relative z-10 text-center px-4">
            <AnimatedSection>
               <h2 className="text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter">
                  READY TO <br /> SHIP?
               </h2>
               <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 md:mb-12">
                  Let's move your business forward.
               </p>
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-16 md:h-20 px-10 md:px-16 text-lg md:text-xl rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-2xl" asChild>
                     <Link to="/contact">
                        Get Started <ArrowRight className="ml-3 w-6 h-6" />
                     </Link>
                  </Button>
               </motion.div>
            </AnimatedSection>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
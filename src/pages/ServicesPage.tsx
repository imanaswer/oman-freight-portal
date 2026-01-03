import { useState, useEffect, useRef, ReactNode } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useInView, 
  useMotionValue, 
  AnimatePresence 
} from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight, Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Images (Assumed imports)
import airFreightImage from "@/assets/air-freight.jpg";
import oceanFreightImage from "@/assets/ocean-freight.jpg";
import landTransportImage from "@/assets/land-transport.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import packingImage from "@/assets/packing.jpg";

// --- Data ---
const services = [
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    subtitle: "Speed & Precision",
    description: "Fast and reliable air cargo services for time-sensitive shipments. We ensure your goods fly safely with expedited handling.",
    image: airFreightImage,
    details: ["Express & Standard Options", "Door-to-Door Service", "Charter Cargo", "Temperature Controlled", "Dangerous Goods", "Real-time Tracking"],
  },
  {
    id: "ocean",
    icon: Ship,
    title: "Ocean Freight",
    subtitle: "Global Reach",
    description: "Cost-effective sea freight for all cargo volumes. Connecting Oman to major global ports with optimized routing.",
    image: oceanFreightImage,
    details: ["FCL & LCL Services", "Breakbulk & RoRo", "Reefer Shipping", "Port-to-Port", "Multi-port Routing", "Customs Handling"],
  },
  {
    id: "land",
    icon: Truck,
    title: "Land Transport",
    subtitle: "Regional Network",
    description: "Reliable road freight across the GCC and beyond. From single pallets to full truckloads, we handle it all.",
    image: landTransportImage,
    details: ["Full Truck Load (FTL)", "Groupage (LTL)", "Cross-border Logistics", "GCC Coverage", "GPS Fleet Tracking", "Heavy Lift Transport"],
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    subtitle: "Secure Storage",
    description: "State-of-the-art storage solutions for your inventory needs with 24/7 security monitoring and inventory management.",
    image: warehouseImage,
    details: ["Short & Long-term", "Climate Controlled", "Inventory Management", "Pick & Pack", "Order Fulfillment", "Distribution Hub"],
  },
  {
    id: "packing",
    icon: Package,
    title: "Packing",
    subtitle: "Safe Handling",
    description: "Professional industrial packing services ensuring your cargo withstands the journey, no matter how fragile.",
    image: packingImage,
    details: ["Export Quality Materials", "Custom Crating", "Palletization", "Fragile Handling", "Industrial Equipment", "Relocation Support"],
  },
  {
    id: "customs",
    icon: FileText,
    title: "Customs",
    subtitle: "Compliance",
    description: "Expert customs brokerage and documentation to navigate complex regulations smoothly and avoid delays.",
    image: null,
    details: ["Import/Export Clearance", "Tariff Classification", "Compliance Consulting", "Certificate of Origin", "Bill of Lading", "Letter of Credit"],
  },
];

// --- Premium Utilities ---

// 1. Page Preloader
const Preloader = () => {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      className="fixed inset-0 w-full bg-[#0a0f1c] z-[100] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white text-4xl font-bold tracking-tighter"
      >
        FAST SHIPPING & LOGISTICS
      </motion.div>
    </motion.div>
  );
};

// 2. Infinite Marquee
const Marquee = ({ text, direction = "left" }: { text: string; direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none absolute top-1/2 -translate-y-1/2 w-full">
      <motion.div
        className="flex gap-20 text-[15rem] font-black uppercase text-white leading-none"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

// 3. Character Reveal Animation
const SplitText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + i * 0.02, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// 4. Magnetic Button
const MagneticButton = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    x.set((clientX - center.x) * 0.5);
    y.set((clientY - center.y) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Section Components ---

const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Advanced Parallax
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <section id={service.id} ref={ref} className="py-32 relative scroll-mt-20 overflow-hidden">
      {/* Decorative Line */}
      <motion.div 
        style={{ scaleX: isInView ? 1 : 0 }} 
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left" 
      />

      <div className="container-custom relative z-10">
      
        <div className={`grid lg:grid-cols-2 gap-20 items-center ${!isEven ? '' : ''}`}>
          
          {/* Content Side */}
          <motion.div 
            style={{ y: yText }}
            className={`${!isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-16 h-16 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center text-white relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform rounded-full" />
                <service.icon className="w-6 h-6 relative z-10" />
              </motion.div>
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block text-sm font-bold text-olive tracking-[0.2em] uppercase"
                >
                  {service.subtitle}
                </motion.span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[0.9]">
              <SplitText text={service.title} />
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-lg"
            >
              {service.description}
            </motion.p>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.6 }}
               className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-10 hover:bg-card/50 transition-colors"
            >
              <h3 className="text-sm font-bold text-foreground mb-6 flex items-center gap-2 uppercase tracking-wide">
                <Check className="w-4 h-4 text-olive" /> Service Inclusions
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {service.details.map((detail, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-olive/40 group-hover:bg-olive transition-all duration-300 group-hover:scale-150" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <MagneticButton>
              <Button size="lg" className="rounded-full px-8 h-14 text-base bg-foreground text-background hover:bg-foreground/90 transition-all" asChild>
                <Link to="/contact">
                  Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Image Side */}
          <div className={`${!isEven ? "lg:order-1" : "lg:order-2"}`}>
            <motion.div 
              style={{ opacity }}
              className="relative aspect-[4/5] md:aspect-square"
            >
               {/* Background Blobs for Atmosphere */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                 transition={{ duration: 10, repeat: Infinity }}
                 className="absolute -top-10 -right-10 w-64 h-64 bg-olive/10 rounded-full blur-[80px] -z-10" 
               />

               {service.image ? (
                  <div className="w-full h-full relative group rounded-[2rem] overflow-hidden">
                     {/* Image Parallax Container */}
                     <motion.div style={{ scale: scaleImage, y: yImage }} className="w-full h-full">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                     </motion.div>
                     
                     {/* Glass Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-80 z-10" />
                     
                     {/* Floating 3D Badge */}
                     <motion.div 
                       className="absolute bottom-8 right-8 z-30 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl"
                       initial={{ y: 50, opacity: 0 }}
                       animate={isInView ? { y: 0, opacity: 1 } : {}}
                       transition={{ delay: 0.8, type: "spring" }}
                       whileHover={{ scale: 1.05 }}
                     >
                       <div className="flex items-center gap-3 text-white">
                          <Globe className="w-5 h-5 text-olive" />
                          <div>
                            <span className="block text-[10px] uppercase text-white/50 tracking-widest">Coverage</span>
                            <span className="text-sm font-bold tracking-wider">WORLDWIDE</span>
                          </div>
                       </div>
                     </motion.div>
                  </div>
               ) : (
                  // Fallback for Customs
                  <div className="w-full h-full bg-[#0a0f1c] rounded-[2rem] relative overflow-hidden flex items-center justify-center border border-white/5">
                     <Marquee text="CLEARANCE • CUSTOMS •" direction="right" />
                     <service.icon className="w-32 h-32 text-white/5 relative z-10" />
                  </div>
               )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Quick Nav (Floating Pill) ---
const QuickNav = () => {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
       setVisible(latest > 300);
    });
  }, [scrollY]);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 400;
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActive(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 hidden lg:flex bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl p-1.5 gap-1"
        >
          {services.map((s) => (
            <a 
              key={s.id}
              href={`#${s.id}`}
              className="relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors duration-300 group"
            >
              {active === s.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${active === s.id ? "text-black" : "text-white/60 group-hover:text-white"}`}>
                {s.title}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- Main Page ---
const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-background min-h-screen relative selection:bg-olive selection:text-white">
      <Preloader />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-olive origin-left z-[70]" style={{ scaleX }} />
      
      <QuickNav />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a0f1c] text-white">

        {/* Background Marquees */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none">
           <div className="rotate-[-5deg] scale-110">
              <Marquee text="LOGISTICS • FREIGHT • CARGO •" direction="left" />
           </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="inline-block overflow-hidden mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                Global Supply Chain Solutions
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.95]">
              <span className="block">
                <motion.span>BEYOND</motion.span>
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                <motion.span>BORDERS</motion.span>
              </span>
            </h1>

            
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              <SplitText text="Precision logistics for the modern world." delay={0.5} />
              <br />
              <SplitText text="We move the impossible." delay={0.8} />
            </p>


            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 }}
               className="flex justify-center gap-6"
            >
               <MagneticButton>
                 <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    Explore Services
                 </Button>
               </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
           <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <div className="relative py-20 bg-background">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* --- CTA SECTION --- */}
      <section className="h-[80vh] relative overflow-hidden bg-[#0a0f1c] flex items-center justify-center">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
              READY TO <br /> <span className="text-olive">SHIP?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <MagneticButton>
                <Button size="lg" className="h-20 px-12 text-xl rounded-full bg-white text-black hover:scale-105 transition-transform duration-300" asChild>
                  <a href="mailto:info@fastshipping.om">
                    Start a Project
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
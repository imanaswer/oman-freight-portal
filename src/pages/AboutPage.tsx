import { useEffect, useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useInView, 
  useMotionValue, 
  animate
} from "framer-motion";
import { CheckCircle, Globe, Shield, Users, ArrowRight, Anchor, Truck, Plane } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import warehouseImage from "@/assets/warehouse.jpg";
import heroPortImage from "@/assets/hero-port.jpg";

// --- Data ---
const values = [
  {
    icon: Shield,
    title: "Unwavering Reliability",
    description: "We don't just promise; we deliver. Consistent, dependable service that forms the backbone of your supply chain.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "An extensive network of strategic partners and agents across major trade routes, bridging Oman to the world.",
  },
  {
    icon: Users,
    title: "Client-Centric DNA",
    description: "You aren't just a tracking number. We provide personalized attention and tailored solutions for every partner.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Shipments Monthly" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const capabilities = [
  "International air freight forwarding",
  "Ocean freight (FCL & LCL)",
  "Cross-border road transportation",
  "Customs brokerage services",
  "Warehousing and distribution",
  "Project cargo handling",
  "Documentation and compliance",
  "Supply chain consulting",
];

// --- Sub-Components ---

// 1. Animated Counter
const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span className="flex items-baseline justify-center">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

// 2. Reveal Image (Curtain Effect)
const RevealImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* The Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.4, filter: "blur(10px)" }}
        animate={isInView ? { scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, ease: "circOut" }}
      />
      {/* The Curtain */}
      <motion.div
        className="absolute inset-0 bg-secondary z-10"
        initial={{ scaleX: 1, originX: 0 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.8, ease: "circInOut" }}
      />
    </div>
  );
};

// --- Main Page ---

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <article ref={containerRef} className="relative bg-background overflow-hidden selection:bg-olive selection:text-white">
      {/* Global Noise Overlay for Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 1. Hero Section with Parallax */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroPortImage}
            alt="Global logistics port"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4" // Added px-4 for safety on small screens
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-olive mx-auto mb-8"
            />
            <span className="inline-block text-xs md:text-sm font-bold tracking-[0.3em] text-white/70 uppercase mb-4 md:mb-6">
              About Fast Shipping & Logistics
            </span>
            
            {/* FIX: Reduced text size on mobile (text-4xl) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
              <span className="block text-white">Architects of</span>
              <span className="block text-olive-light">
                Global Trade
              </span>
            </h1>

            {/* FIX: Reduced text size on mobile (text-lg) */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              We are a trusted name in international freight forwarding, providing comprehensive logistics solutions from the Sultanate of Oman to destinations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section (Floating Glass) */}
      <section className="relative -mt-20 z-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // FIX: Reduced padding on mobile (p-6)
          className="bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl p-6 md:p-12"
        >
          {/* FIX: Removed divide-x on mobile to look cleaner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:divide-x divide-border/50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 md:px-4">
                {/* FIX: Smaller stats on mobile */}
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-[10px] md:text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Company Story (Split Layout) */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/30 rounded-full blur-[100px] -z-10" />
        
        <div className="container-custom">
          {/* FIX: Reduced gap on mobile */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-olive font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              {/* FIX: Smaller headings for mobile */}
              <h2 className="mb-6 md:mb-8 text-3xl md:text-5xl leading-tight">Bridging Distances, <br/>Connecting Markets.</h2>
              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Established in Muscat, <strong className="text-primary font-semibold">FAST SHIPPING & LOGISTICS</strong> has built a reputation for excellence
                  in the freight forwarding industry. We specialize in connecting businesses in Oman
                  with markets around the globe through reliable air, sea, and land transportation services.
                </p>
                <p>
                  Our team of experienced logistics professionals understands the complexities of
                  international trade. We navigate customs regulations, coordinate multi-modal shipments,
                  and ensure your cargo arrives safely and on schedule.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   <div className="flex flex-col gap-1 items-center p-3 md:p-4 bg-secondary/50 rounded-xl min-w-[80px] md:min-w-[100px]">
                      <Plane className="w-5 h-5 md:w-6 md:h-6 text-olive" />
                      <span className="text-[10px] md:text-xs font-bold uppercase">Air</span>
                   </div>
                   <div className="flex flex-col gap-1 items-center p-3 md:p-4 bg-secondary/50 rounded-xl min-w-[80px] md:min-w-[100px]">
                      <Anchor className="w-5 h-5 md:w-6 md:h-6 text-olive" />
                      <span className="text-[10px] md:text-xs font-bold uppercase">Sea</span>
                   </div>
                   <div className="flex flex-col gap-1 items-center p-3 md:p-4 bg-secondary/50 rounded-xl min-w-[80px] md:min-w-[100px]">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-olive" />
                      <span className="text-[10px] md:text-xs font-bold uppercase">Land</span>
                   </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative group mt-8 lg:mt-0">
                {/* Back Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-olive/20 to-transparent rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Main Image with Reveal */}
                <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <RevealImage 
                    src={warehouseImage}
                    alt="Our modern warehouse facility"
                    // FIX: Smaller image height on mobile (300px) vs desktop (500px)
                    className="h-[300px] md:h-[500px]"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Values (3D Cards) */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b,transparent)] opacity-40"></div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
            <span className="inline-block text-sm font-bold tracking-widest text-olive-light uppercase mb-4">
              Our Values
            </span>
            <h2 className="mb-4 md:mb-6 text-white text-3xl md:text-5xl">What Drives Us Forward</h2>
            <p className="text-white/70 text-base md:text-lg">
              Our core values guide every decision we make and every shipment we handle.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -15 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-olive to-olive-light flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-olive-light transition-colors">{value.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Approach & Capabilities (Interactive Grid) */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          {/* FIX: Reduced gap on mobile */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
            
            {/* Left: Approach */}
            <AnimatedSection>
              <h2 className="mb-6 md:mb-8 text-3xl md:text-4xl">Our Approach</h2>
              <div className="space-y-6 md:space-y-8">
                 {[
                    { title: "Tailored Solutions", desc: "Every business has unique logistics requirements. We take the time to understand yours." },
                    { title: "Strict Compliance", desc: "We stay current with international trade regulations to ensure smooth clearance." },
                    { title: "Personalized Support", desc: "You'll have a dedicated point of contact who understands your shipment inside and out." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                          <CheckCircle className="w-5 h-5 text-olive" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                          <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </AnimatedSection>

            {/* Right: Capabilities Grid */}
            <AnimatedSection delay={0.2}>
               {/* FIX: Reduced padding on mobile */}
               <div className="bg-card border border-border rounded-3xl p-6 lg:p-10 shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Our Capabilities</h3>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {capabilities.map((capability, index) => (
                      <motion.div
                        key={capability}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5, backgroundColor: "var(--secondary)" }}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-default transition-colors duration-200"
                      >
                        <ArrowRight className="w-4 h-4 text-olive flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground/90">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;
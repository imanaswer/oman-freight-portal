import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceShowcaseProps {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

const ServiceShowcase = ({
  number,
  title,
  description,
  image,
  link,
  reverse = false,
}: ServiceShowcaseProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  // Parallax Effect for Image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]); // Subtle zoom on scroll

  return (
    // FIX: Reduced padding on mobile (py-12) -> Normal on desktop (md:py-24)
    <section ref={containerRef} className="py-12 md:py-24 relative overflow-hidden">
      {/* FIX: 1 Column on mobile (grid-cols-1) -> 2 Columns on Desktop (lg:grid-cols-2) */}
      <div className={`container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        
        {/* --- CONTENT SIDE --- */}
        <div className={`relative ${reverse ? "lg:order-2 pl-0 lg:pl-10" : "pr-0 lg:pr-10"}`}>
          
          {/* FIX: Hidden on mobile to prevent overlap (hidden md:block) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute -top-32 -left-12 z-0 pointer-events-none select-none"
          >
            <motion.span 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[15rem] md:text-[18rem] font-black leading-none block"
              style={{
                // THE FIX: Hollow Outline Style
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)", // 20% opacity white stroke
                color: "transparent" 
              }}
            >
               {number}
            </motion.span>
          </motion.div>

          {/* FIX: Reduced top padding on mobile (pt-0) */}
          <div className="relative z-10 pt-0 md:pt-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex items-center gap-4 mb-4 md:mb-6"
             >
                {/* Glowing Line Accent */}
                <div className="h-[2px] w-12 bg-primary shadow-[0_0_15px_var(--primary)]"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Service {number}</span>
             </motion.div>

             <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.3 }}
               // FIX: Responsive font size (text-3xl -> text-6xl)
               className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white tracking-tighter"
             >
               {title}
             </motion.h3>

             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light max-w-lg"
             >
               {description}
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.5 }}
             >
               <Button variant="outline" size="lg" asChild className="group rounded-full px-8 h-14 border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl backdrop-blur-md">
                 <Link to={link}>
                   <span className="font-bold">Explore Details</span>
                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
             </motion.div>
          </div>
        </div>

        {/* --- IMAGE SIDE (With Curtain Reveal) --- */}
        <div className={`${reverse ? "lg:order-1" : ""} relative group z-10 mt-8 lg:mt-0`}>
           {/* Decorative Border Ring */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 border border-white/10 rounded-[2rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"
           />

           {/* FIX: Height adjusted for mobile (h-[300px]) -> Desktop (md:h-[600px]) */}
           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[300px] md:h-[600px] border border-white/5">
              {/* Curtain (The Reveal) */}
              <motion.div 
                 initial={{ height: "100%" }}
                 animate={isInView ? { height: "0%" } : {}}
                 transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                 className="absolute inset-0 bg-[#0f172a] z-20 bottom-0 w-full"
              />
              
              {/* Parallax Image */}
              <motion.div style={{ y, scale }} className="h-[120%] w-full -mt-[10%]">
                 <img
                   src={image}
                   alt={title}
                   className="w-full h-full object-cover filter grayscale-[10%] contrast-110 group-hover:grayscale-0 transition-all duration-700"
                 />
              </motion.div>

              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40 pointer-events-none" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceShowcase;
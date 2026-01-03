import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // --- 1. MOUSE TRACKING LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left;
    const yPos = clientY - top;

    // For Spotlight (Position relative to card)
    x.set(xPos);
    y.set(yPos);
  }

  // --- 2. 3D TILT TRANSFORM ---
  const rotateX = useTransform(mouseY, [0, 400], [2, -2]); // Subtle tilt
  const rotateY = useTransform(mouseX, [0, 300], [-2, 2]);

  return (
    <motion.div
      style={{ perspective: 1000 }} // Needed for 3D
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full" // Ensures height consistency in grids
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        // FIX: Reduced padding on mobile (p-6) -> Standard on desktop (md:p-8)
        className="group relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 overflow-hidden transition-colors duration-500 hover:shadow-2xl hover:shadow-primary/5"
      >
        
        {/* --- A. SPOTLIGHT EFFECT (Follows Mouse) --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`
            ),
          }}
        />

        {/* --- B. CONTENT (Z-Index needed to sit above glow) --- */}
        <div className="relative z-10 flex flex-col h-full">
          {/* FIX: Smaller icon container on mobile */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-500" />
          </div>
          
          {/* FIX: Smaller font sizes on mobile */}
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-500">
            {description}
          </p>
        </div>

        {/* --- C. BORDER SHINE --- */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-500" />
        
      </motion.article>
    </motion.div>
  );
};

export default ServiceCard;
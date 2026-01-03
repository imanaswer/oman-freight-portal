import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "full" | "100%";
  stagger?: boolean; // New: Cascade effect for children
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  width = "100%",
  stagger = false
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  // Premium Animation Variant
  // Combines Fade + Slide + Blur + Subtle Scale
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.95, 
      filter: "blur(10px)" // The "Expensive" touch
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom "Luxurious" Easing
        delay: delay,
        // If stagger is true, stagger children
        ...(stagger && {
            staggerChildren: 0.1,
            delayChildren: delay
        })
      }
    }
  };

  return (
    <div ref={ref} style={{ width, position: "relative" }}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
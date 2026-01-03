import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`group relative flex items-center gap-3 select-none ${className}`}>
      {/* --- LOGO SYMBOL --- */}
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        whileHover="hover"
        initial="initial"
        animate="animate"
      >
        {/* 1. Backdrop Glow (Ambient Light) */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 overflow-visible"
        >
          {/* Defs for Gradients */}
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>

          {/* Part 1: The Container/Box (Draws in) */}
          <motion.path
            d="M8 8H32V32H8V8Z" 
            stroke="url(#logo-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 0.3, transition: { duration: 1, ease: "easeInOut" } },
              hover: { opacity: 0.8, scale: 1.1, strokeWidth: 1, transition: { duration: 0.3 } }
            }}
          />

          {/* Part 2: The "Fast" Arrow (The Core Symbol) */}
          {/* Abstract 'F' + Forward Arrow shape */}
          <motion.path
            d="M14 20H26M26 20L22 16M26 20L22 24"
            stroke="url(#logo-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              initial: { pathLength: 0, x: -10, opacity: 0 },
              animate: { pathLength: 1, x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8, type: "spring" } },
              hover: { x: 5, transition: { type: "spring", stiffness: 300, damping: 10 } }
            }}
          />
          
          {/* Part 3: Speed Lines (Only on Hover) */}
          <motion.path
            d="M12 14H16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0, opacity: 0 }}
            variants={{
              hover: { scaleX: 1, opacity: 0.8, x: -2, transition: { duration: 0.2 } }
            }}
          />
           <motion.path
            d="M12 26H18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ scaleX: 0, opacity: 0 }}
            variants={{
              hover: { scaleX: 1, opacity: 0.5, x: -4, transition: { duration: 0.3, delay: 0.1 } }
            }}
          />
        </svg>

        {/* Glint Effect (Shine passing through) */}
        <motion.div
          className="absolute inset-0 bg-white/30 skew-x-12 w-1 h-full"
          initial={{ left: "-50%", opacity: 0 }}
          variants={{
            hover: { 
              left: "150%", 
              opacity: [0, 1, 0],
              transition: { duration: 0.6, ease: "easeInOut" } 
            }
          }}
        />
      </motion.div>

      {/* --- WORDMARK --- */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center overflow-hidden">
          <motion.span 
            className="text-lg font-black tracking-tight text-white"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
          >
            FAST
          </motion.span>
          <motion.span 
            className="text-lg font-bold tracking-tight text-primary ml-1"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
          >
            SHIPPING
          </motion.span>
        </div>
        
        <motion.span 
          className="text-[0.6rem] font-medium tracking-[0.25em] text-muted-foreground uppercase"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          & Logistics
        </motion.span>
      </div>
    </Link>
  );
};

export default Logo;
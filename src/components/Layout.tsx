import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll Reset on Route Change (Crucial for SPA feel)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* --- 1. GLOBAL AMBIENT BACKGROUND (Fixed) --- */}
      {/* This creates the "expensive" atmosphere that persists across pages */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* A. Grain/Noise Texture (Prevents color banding & adds tactility) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* B. Floating "Lava Lamp" Blobs */}
        <motion.div 
           animate={{ 
             scale: [1, 1.1, 1], 
             opacity: [0.3, 0.5, 0.3],
             rotate: [0, 45, 0] 
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px]"
        />
        
        <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2], 
             opacity: [0.2, 0.4, 0.2],
             x: [0, 100, 0] 
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-emerald-500/5 rounded-full blur-[120px]"
        />
        
        <motion.div 
           animate={{ 
             opacity: [0.1, 0.3, 0.1], 
             y: [0, -50, 0] 
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px]"
        />
      </div>

      {/* --- 2. CINEMATIC VIGNETTE --- */}
      {/* Darkens the corners slightly to focus eyes on content */}
      <div className="fixed inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.2)_100%)]" />

      {/* --- 3. HEADER (High Z-Index) --- */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* --- 4. MAIN CONTENT --- */}
      <main className="flex-1 relative z-10 flex flex-col pt-20">
         {/* We wrap Outlet in a generic motion div for smoothness, 
             though App.tsx handles specific page transitions */}
         <motion.div
            key="layout-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col"
         >
            <Outlet />
         </motion.div>
      </main>

      {/* --- 5. FOOTER --- */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock, Copy, Check, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

// --- DATA ---
const contactMethods = [
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    subtitle: "Quotes & Inquiries",
    value: "info@fastshipping.om",
    action: "mailto:info@fastshipping.om",
    copyable: true,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Instant Support",
    value: "+968 1234 5678",
    action: "https://wa.me/96812345678",
    external: true,
    copyable: false,
  },
  {
    id: "phone",
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon-Thu, 8am-5pm",
    value: "+968 1234 5678",
    action: "tel:+96812345678",
    copyable: true,
  },
  {
    id: "office",
    icon: MapPin,
    title: "Visit HQ",
    subtitle: "Muscat, Oman",
    value: "Get Directions",
    action: "#", 
    external: true,
    copyable: false,
  },
];

// --- UTILITIES ---

// 1. Spotlight Card (Enhanced with noise and border glow)
const SpotlightCard = ({ children, className = "", onClick, active = false }: { children: React.ReactNode; className?: string, onClick?: () => void, active?: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border overflow-hidden rounded-xl transition-all duration-300 ${active ? "bg-secondary/40 border-primary/50" : "bg-card/30 border-white/5 hover:border-white/10"} ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`
          ),
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 2. 3D Tilt Card (Refined physics)
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    const { clientX, clientY } = event;
    x.set((clientX - cx) / 40); // Reduced sensitivity for classier feel
    y.set((clientY - cy) / 40);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useTransform(mouseY, (value) => value * -1),
        rotateY: useTransform(mouseX, (value) => value),
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      {children}
    </motion.div>
  );
};

// 3. Text Reveal (From previous Home Page)
const RevealTitle = ({ text }: { text: string }) => (
  <span className="inline-block overflow-hidden">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.03, ease: "backOut" }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

// --- MAIN PAGE ---

const ContactPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <article className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      {/* Global Grain Texture */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#0a0f1c] overflow-hidden border-b border-white/5">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Open for Business</span>
               </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              <RevealTitle text="Get in Touch" />
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              Our global team is ready to optimize your supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN INTERFACE --- */}
      <section className="section-padding relative -mt-20 z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT: Contact Grid */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                   Contact Channels
                   <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <SpotlightCard 
                       key={method.id}
                       className="p-6 cursor-pointer"
                       onClick={() => {
                          if (method.copyable) handleCopy(method.value, method.id);
                          else if (method.external) window.open(method.action, '_blank');
                          else window.location.href = method.action;
                       }}
                    >
                      <div className="flex flex-col h-full justify-between gap-4">
                        <div className="flex justify-between items-start">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/5 text-white shadow-inner">
                              <method.icon className="w-5 h-5" />
                           </div>
                           {method.copyable && (
                              <div className="text-muted-foreground/50 hover:text-primary transition-colors">
                                 {copiedId === method.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                              </div>
                           )}
                        </div>
                        
                        <div>
                           <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                           <p className="text-sm text-muted-foreground mb-3">{method.subtitle}</p>
                           <div className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded w-fit border border-primary/20">
                              {method.value}
                           </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>

                {/* Hours Block */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-secondary/50 to-secondary/30 border border-white/5 backdrop-blur-md flex items-center gap-6">
                   <div className="p-3 bg-[#0a0f1c] rounded-full border border-white/10 shadow-lg">
                      <Clock className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Operating Hours</h4>
                      <p className="text-muted-foreground text-sm">Sunday – Thursday <span className="text-white/60 mx-2">•</span> 8:00 AM – 5:00 PM</p>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: The Quote "Portal" */}
            <div className="lg:col-span-5 h-full min-h-[500px]">
               <TiltCard>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="h-full rounded-3xl relative overflow-hidden flex flex-col p-1 border border-white/10 bg-[#0a0f1c] shadow-2xl"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* Interior Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-[#0a0f1c] to-[#0a0f1c] z-0"></div>
                    
                    {/* Animated Glow Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px]"></div>

                    <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-8 lg:p-12">
                       
                       <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] border border-white/20">
                          <Send className="w-10 h-10 text-white fill-white/20" />
                       </div>

                       <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
                       <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                          Need a shipping rate? Send us your cargo details and destination. We provide comprehensive quotes within 24 hours.
                       </p>

                       <div className="w-full space-y-4">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                             <Button size="lg" className="w-full h-14 text-base font-bold shadow-lg bg-white text-black hover:bg-white/90" asChild>
                                <a href="mailto:info@fastshipping.om?subject=Quote%20Request">
                                   <Mail className="w-5 h-5 mr-2" />
                                   Email Request
                                </a>
                             </Button>
                          </motion.div>

                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                             <Button size="lg" variant="outline" className="w-full h-14 text-base font-bold border-white/10 text-white hover:bg-white/5 hover:text-white hover:border-white/20 backdrop-blur-md" asChild>
                                <a
                                   href="https://wa.me/96812345678"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                   <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                                   WhatsApp Chat
                                </a>
                             </Button>
                          </motion.div>
                       </div>
                    </div>

                    {/* Bottom Aesthetic Detail */}
                    <div className="p-4 bg-white/5 border-t border-white/5 text-center">
                       <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Secure Communication Channel</p>
                    </div>
                  </motion.div>
               </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP VISUALIZATION --- */}
      <section className="py-20 relative overflow-hidden">
         <div className="container-custom relative z-10">
            <AnimatedSection>
               <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f172a] h-[300px] flex items-center justify-center group">
                  {/* Faux Map Background Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center mix-blend-overlay grayscale group-hover:scale-105 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>

                  {/* Pulsing Location Dot */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                     <div className="relative">
                        <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_var(--primary)] relative z-10"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/30 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                     </div>
                     <div className="text-center">
                        <h3 className="text-xl font-bold text-white">Muscat Headquarters</h3>
                        <p className="text-sm text-muted-foreground">Sultanate of Oman</p>
                     </div>
                  </div>
               </div>
            </AnimatedSection>
         </div>
      </section>
    </article>
  );
};

export default ContactPage;
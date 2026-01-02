import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services connecting Oman to destinations worldwide with competitive rates.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "FCL and LCL shipping solutions for cost-effective international sea cargo transportation.",
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Comprehensive road freight services across the GCC region and beyond.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Packing",
    description: "Secure storage facilities and professional packing services for all cargo types.",
  },
  {
    icon: Package,
    title: "Customs Clearance",
    description: "Expert customs brokerage and documentation services for smooth import and export.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete freight documentation and compliance support for international shipments.",
  },
];

const whyChooseUs = [
  {
    title: "Established Expertise",
    description: "Years of experience in international freight forwarding and logistics operations.",
  },
  {
    title: "Global Network",
    description: "Strong partnerships with carriers and agents across major trade routes worldwide.",
  },
  {
    title: "Personalized Service",
    description: "Dedicated account management and customized solutions for your specific needs.",
  },
  {
    title: "End-to-End Handling",
    description: "Complete logistics support from pickup to final delivery, all under one roof.",
  },
];

const HomePage = () => {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[85vh] flex items-center">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-wider text-steel-light uppercase mb-6"
            >
              International Freight Forwarding
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary-foreground text-balance mb-6"
            >
              From Oman to the World
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
            >
              Comprehensive air, sea, and land logistics solutions. We handle your freight with precision, 
              ensuring reliable delivery and complete peace of mind.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@fastshipping.om">
                  Email Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <a
                  href="https://wa.me/96812345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light opacity-90" />
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background" id="services-overview">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-steel uppercase mb-4">
              What We Offer
            </span>
            <h2 className="mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              End-to-end logistics solutions tailored to your business requirements. 
              From air to ocean to land, we've got you covered.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-medium tracking-wider text-steel uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="mb-6">Your Trusted Logistics Partner</h2>
              <p className="text-muted-foreground mb-8">
                With extensive experience in international freight forwarding, we understand the complexities 
                of global trade. Our commitment to reliability, compliance, and customer satisfaction sets us apart.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle className="w-5 h-5 text-steel flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-10">
                <h3 className="text-2xl font-semibold mb-4">Ready to Ship?</h3>
                <p className="text-muted-foreground mb-8">
                  Get in touch with our team to discuss your logistics requirements. 
                  We're here to help you move your cargo efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="flex-1">
                    <a href="mailto:info@fastshipping.om">
                      Email Us
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="flex-1">
                    <a
                      href="https://wa.me/96812345678"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-primary-foreground mb-4">Let's Move Your Cargo</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Whether you're shipping by air, sea, or land, we have the expertise 
              and network to deliver your goods safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default HomePage;

import { motion, Variants } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

import airFreightImage from "@/assets/air-freight.jpg";
import oceanFreightImage from "@/assets/ocean-freight.jpg";
import landTransportImage from "@/assets/land-transport.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import packingImage from "@/assets/packing.jpg";

const services = [
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments.",
    image: airFreightImage,
    details: [
      "Express and standard air freight options",
      "Door-to-door and airport-to-airport services",
      "Consolidated and charter cargo",
      "Temperature-controlled shipments",
      "Dangerous goods handling",
      "Real-time tracking and updates",
    ],
  },
  {
    id: "ocean",
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight for all cargo volumes.",
    image: oceanFreightImage,
    details: [
      "Full Container Load (FCL) services",
      "Less than Container Load (LCL) consolidation",
      "Breakbulk and RoRo cargo",
      "Reefer container shipping",
      "Port-to-port and door-to-door options",
      "Multi-port routing and transshipment",
    ],
  },
  {
    id: "land",
    icon: Truck,
    title: "Land Transportation",
    description: "Reliable road freight across the GCC and beyond.",
    image: landTransportImage,
    details: [
      "Full truck load (FTL) services",
      "Part load and groupage options",
      "Cross-border transportation",
      "GCC-wide coverage",
      "Temperature-controlled trucks",
      "GPS tracking on all vehicles",
    ],
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Storage",
    description: "Secure storage solutions for your inventory needs.",
    image: warehouseImage,
    details: [
      "Short and long-term storage",
      "Climate-controlled facilities",
      "Inventory management systems",
      "Pick and pack services",
      "Order fulfillment",
      "Distribution management",
    ],
  },
  {
    id: "packing",
    icon: Package,
    title: "Packing & Removal",
    description: "Professional packing services for safe cargo handling.",
    image: packingImage,
    details: [
      "Export-quality packing materials",
      "Custom crating and boxing",
      "Palletization services",
      "Fragile goods handling",
      "Industrial equipment packing",
      "Removal and relocation support",
    ],
  },
  {
    id: "customs",
    icon: FileText,
    title: "Customs & Documentation",
    description: "Expert customs clearance and trade documentation.",
    image: null,
    details: [
      "Import and export customs clearance",
      "Tariff classification assistance",
      "Trade compliance consulting",
      "Certificate of origin",
      "Bill of lading preparation",
      "Letter of credit documentation",
    ],
  },
];

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const ServicesPage = () => {
  return (
    <article>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider text-steel-light uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-primary-foreground mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From air to ocean to land, we provide end-to-end freight forwarding services
              tailored to your business requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <motion.div
                  id={service.id}
                  className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-2xl bg-olive-light flex items-center justify-center mb-6"
                    >
                      <service.icon className="w-8 h-8 text-olive" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-secondary rounded-xl p-6 mb-8"
                    >
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-steel mb-4">
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        {service.details.map((detail) => (
                          <motion.li
                            key={detail}
                            variants={listItemVariants}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <span className="text-foreground group-hover:text-olive transition-colors">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <Button variant="outline" asChild className="group">
                      <Link to="/contact">
                        Request a Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {service.image ? (
                      <>
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10" />
                        <div className="absolute -inset-2 bg-primary/5 rounded-2xl -z-10" />
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-72 md:h-96 object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                      </>
                    ) : (
                      <div className="bg-secondary rounded-2xl h-72 md:h-96 flex items-center justify-center">
                        <service.icon className="w-24 h-24 text-muted-foreground/20" />
                      </div>
                    )}
                  </motion.div>
                </motion.div>

                {index < services.length - 1 && (
                  <div className="border-b border-border mt-20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-steel-light/20 rounded-full blur-3xl"
        />

        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-primary-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Every business has unique logistics requirements. Contact us to discuss
              how we can tailor our services to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <a href="mailto:info@fastshipping.om">
                  Email Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default ServicesPage;

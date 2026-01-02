import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const services = [
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments.",
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
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div
                  id={service.id}
                  className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-steel" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Request a Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-8">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-steel mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="border-b border-border mt-20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-primary-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Every business has unique logistics requirements. Contact us to discuss 
              how we can tailor our services to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default ServicesPage;

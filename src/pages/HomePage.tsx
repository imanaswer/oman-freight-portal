import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Warehouse, Package, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceShowcase from "@/components/ServiceShowcase";

import heroImage from "@/assets/hero-port.jpg";
import airFreightImage from "@/assets/air-freight.jpg";
import oceanFreightImage from "@/assets/ocean-freight.jpg";
import landTransportImage from "@/assets/land-transport.jpg";

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

const featuredServices = [
  {
    number: "01",
    title: "Air Freight",
    description: "Swift air cargo solutions for time-critical shipments. We ensure your goods reach their destination with speed and precision.",
    image: airFreightImage,
    link: "/services#air",
  },
  {
    number: "02",
    title: "Ocean Freight",
    description: "Our expert team optimizes shipping routes and estimates the lowest possible cost by adhering to strict confirmative with timing and delivery.",
    image: oceanFreightImage,
    link: "/services#ocean",
  },
  {
    number: "03",
    title: "Land Transport",
    description: "Trained personnel who are well acquainted with the technical possibilities and exact legal regulations offer comprehensive road freight.",
    image: landTransportImage,
    link: "/services#land",
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const HomePage = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <article>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="Container port at twilight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </motion.div>

        <div className="container-custom relative z-10 py-32">
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
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services Showcase */}
      <section className="section-padding bg-olive-light/30">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-sm font-medium tracking-wider text-olive uppercase mb-4">
              Our Core Services
            </span>
            <h2 className="mb-4">What We Deliver</h2>
            <p className="text-muted-foreground">
              End-to-end logistics solutions tailored to your business requirements.
              From air to ocean to land, we've got you covered.
            </p>
          </AnimatedSection>

          <div className="space-y-32">
            {featuredServices.map((service, index) => (
              <ServiceShowcase
                key={service.title}
                number={service.number}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-background" id="services-overview">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-steel uppercase mb-4">
              Complete Solutions
            </span>
            <h2 className="mb-4">All Our Services</h2>
            <p className="text-muted-foreground">
              Discover our full range of logistics and freight forwarding services.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-steel/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-steel/10 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-steel" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.article>
            ))}
          </motion.div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-olive-light flex items-center justify-center flex-shrink-0 group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-olive group-hover:text-olive-light transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-10 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">Ready to Ship?</h3>
                <p className="text-muted-foreground mb-8">
                  Get in touch with our team to discuss your logistics requirements.
                  We're here to help you move your cargo efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="flex-1 group">
                    <a href="mailto:info@fastshipping.om">
                      Email Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-steel-light/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-steel-light/20 rounded-full blur-3xl"
        />

        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-primary-foreground mb-4">Let's Move Your Cargo</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Whether you're shipping by air, sea, or land, we have the expertise
              and network to deliver your goods safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

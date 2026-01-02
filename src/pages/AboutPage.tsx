import { motion, Variants } from "framer-motion";
import { CheckCircle, Globe, Shield, Users, Target, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import warehouseImage from "@/assets/warehouse.jpg";
import heroPortImage from "@/assets/hero-port.jpg";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent, dependable service you can count on for every shipment.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Extensive network of partners and agents across major trade routes.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Personalized attention and tailored solutions for every customer.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "1000+", label: "Shipments Monthly" },
  { value: "98%", label: "Client Satisfaction" },
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
    transition: { duration: 0.5 },
  },
};

const AboutPage = () => {
  return (
    <article>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroPortImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider text-steel-light uppercase mb-4">
              About Us
            </span>
            <h1 className="text-primary-foreground mb-6">
              Delivering Excellence in Global Logistics
            </h1>
            <p className="text-lg text-primary-foreground/80">
              FAST SHIPPING & LOGISTICS is a trusted name in international freight forwarding,
              providing comprehensive logistics solutions from the Sultanate of Oman to destinations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-olive-light/30 py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.span
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="block text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in Muscat, FAST SHIPPING & LOGISTICS has built a reputation for excellence
                  in the freight forwarding industry. We specialize in connecting businesses in Oman
                  with markets around the globe through reliable air, sea, and land transportation services.
                </p>
                <p>
                  Our team of experienced logistics professionals understands the complexities of
                  international trade. We navigate customs regulations, coordinate multi-modal shipments,
                  and ensure your cargo arrives safely and on schedule.
                </p>
                <p>
                  From small packages to full container loads, we handle every shipment with the same
                  level of care and attention to detail. Our commitment to quality service has earned
                  us the trust of businesses across diverse industries.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-olive/10 rounded-3xl -z-10" />
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <motion.img
                    src={warehouseImage}
                    alt="Our warehouse facility"
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="lg:order-2">
              <h2 className="mb-6">Our Approach</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe in building lasting partnerships with our clients. Every business has
                  unique logistics requirements, and we take the time to understand yours. Our solutions
                  are tailored to optimize your supply chain efficiency while maintaining cost-effectiveness.
                </p>
                <p>
                  Compliance is at the core of our operations. We stay current with international trade
                  regulations, customs procedures, and documentation requirements to ensure smooth
                  clearance and delivery of your goods.
                </p>
                <p>
                  From the initial quote to final delivery, you'll have a dedicated point of contact
                  who understands your shipment inside and out. This personalized approach allows us
                  to address concerns promptly and keep you informed at every stage.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[Target, Award, Globe, Shield].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="bg-card border border-border rounded-2xl p-8 flex items-center justify-center"
                  >
                    <Icon className="w-12 h-12 text-olive" />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-olive uppercase mb-4">
              Our Values
            </span>
            <h2 className="mb-4">What Drives Us</h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every shipment we handle.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-olive/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-olive-light flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="w-8 h-8 text-olive" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-olive-light/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Our Capabilities</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                "International air freight forwarding",
                "Ocean freight (FCL & LCL)",
                "Cross-border road transportation",
                "Customs brokerage services",
                "Warehousing and distribution",
                "Project cargo handling",
                "Documentation and compliance",
                "Supply chain consulting",
              ].map((capability, index) => (
                <motion.div
                  key={capability}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border hover:border-olive/30 transition-colors group"
                >
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{capability}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;

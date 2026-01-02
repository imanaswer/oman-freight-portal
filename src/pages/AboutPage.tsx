import { motion } from "framer-motion";
import { CheckCircle, Globe, Shield, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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

const AboutPage = () => {
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

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-wider text-steel uppercase mb-4">
              Our Values
            </span>
            <h2 className="mb-4">What Drives Us</h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every shipment we handle.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-steel" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Our Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-6">
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-steel flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;

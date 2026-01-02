import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us your inquiry anytime",
    value: "info@fastshipping.om",
    href: "mailto:info@fastshipping.om",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us for quick responses",
    value: "+968 1234 5678",
    href: "https://wa.me/96812345678",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call during business hours",
    value: "+968 1234 5678",
    href: "tel:+96812345678",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our headquarters",
    value: "Muscat, Sultanate of Oman",
    href: null,
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
    transition: { duration: 0.5 },
  },
};

const ContactPage = () => {
  return (
    <article>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel-light/20 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium tracking-wider text-steel-light uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to discuss your logistics requirements? Our team is here to help you
              find the right solution for your cargo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="mb-8">How to Reach Us</h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.title}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-xl bg-olive-light flex items-center justify-center flex-shrink-0 group-hover:bg-olive transition-colors"
                    >
                      <method.icon className="w-6 h-6 text-olive group-hover:text-olive-light transition-colors" />
                    </motion.div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.external ? "_blank" : undefined}
                          rel={method.external ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-olive transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{method.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 p-6 bg-olive-light/30 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-olive" />
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-olive">
                    Business Hours
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Sunday – Thursday: 8:00 AM – 5:00 PM<br />
                  Friday – Saturday: Closed
                </p>
              </motion.div>
            </AnimatedSection>

            {/* CTA Card */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-20 h-20 rounded-2xl bg-olive-light flex items-center justify-center mx-auto mb-8"
                >
                  <Mail className="w-10 h-10 text-olive" />
                </motion.div>

                <h2 className="text-2xl font-semibold mb-4 text-center">Request a Quote</h2>
                <p className="text-muted-foreground mb-8 text-center">
                  Tell us about your shipment and we'll provide you with a competitive quote.
                  Include details about origin, destination, cargo type, and dimensions for
                  the most accurate estimate.
                </p>

                <div className="space-y-4">
                  <Button size="lg" className="w-full group" asChild>
                    <a href="mailto:info@fastshipping.om?subject=Quote%20Request">
                      <Mail className="w-4 h-4 mr-2" />
                      Email for Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href="https://wa.me/96812345678?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20shipping."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Quote
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 text-center">
                  We typically respond within 24 business hours.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-olive-light/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Working Together</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're shipping a single pallet or managing a complex supply chain,
                we're ready to support your logistics needs. Reach out today and let's discuss
                how we can help your business grow.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <a href="mailto:info@fastshipping.om">
                  Send an Email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/96812345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start WhatsApp Chat
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
};

export default ContactPage;

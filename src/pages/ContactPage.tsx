import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const ContactPage = () => {
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
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">Send us your inquiry anytime</p>
                    <a 
                      href="mailto:info@fastshipping.om" 
                      className="text-primary hover:text-steel transition-colors font-medium"
                    >
                      info@fastshipping.om
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Chat with us for quick responses</p>
                    <a 
                      href="https://wa.me/96812345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-steel transition-colors font-medium"
                    >
                      +968 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">Call during business hours</p>
                    <a 
                      href="tel:+96812345678"
                      className="text-primary hover:text-steel transition-colors font-medium"
                    >
                      +968 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Muscat, Sultanate of Oman
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-lg">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-steel mb-2">
                  Business Hours
                </h3>
                <p className="text-muted-foreground">
                  Sunday – Thursday: 8:00 AM – 5:00 PM<br />
                  Friday – Saturday: Closed
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Card */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-10 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your shipment and we'll provide you with a competitive quote. 
                  Include details about origin, destination, cargo type, and dimensions for 
                  the most accurate estimate.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <a href="mailto:info@fastshipping.om?subject=Quote%20Request">
                      <Mail className="w-4 h-4 mr-2" />
                      Email for Quote
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

                <p className="text-sm text-muted-foreground mt-8">
                  We typically respond within 24 business hours.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Working Together</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're shipping a single pallet or managing a complex supply chain, 
              we're ready to support your logistics needs. Reach out today and let's discuss 
              how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:info@fastshipping.om">
                  Send an Email
                  <ArrowRight className="w-4 h-4 ml-2" />
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

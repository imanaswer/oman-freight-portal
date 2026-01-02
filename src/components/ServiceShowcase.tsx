import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceShowcaseProps {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

const ServiceShowcase = ({
  number,
  title,
  description,
  image,
  link,
  reverse = false,
}: ServiceShowcaseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-olive-light -translate-x-2 -translate-y-2" />
            <span className="relative text-5xl font-light text-olive">{number}</span>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <Button variant="outline" size="lg" asChild className="group">
          <Link to={link}>
            Explore More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        {/* Frame decoration */}
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10" />
        <div className="absolute -inset-2 bg-primary/5 rounded-2xl -z-10" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-80 md:h-96 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceShowcase;

import { motion } from "framer-motion";
import { Droplets, Home, Layers, BrickWall, Pipette, Calendar, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Emergency Leak Repairs",
    description: "Fast response to stop water damage. We arrive, assess, and protect your home immediately.",
    highlight: "Same-day service",
    featured: true,
  },
  {
    icon: Home,
    title: "Complete Roof Replacements",
    description: "Full roof installations built to last 40+ years. Premium materials, expert craftsmanship.",
    highlight: "40-year warranty",
  },
  {
    icon: Layers,
    title: "EPDM & Flat Roof Specialists",
    description: "Modern rubber roofing solutions perfect for extensions and garages. Leak-proof guarantee.",
    highlight: "Industry specialists",
    featured: true,
  },
  {
    icon: BrickWall,
    title: "Chimney Repairs & Repointing",
    description: "Expert brickwork and flashing repairs. Prevent water ingress and structural damage.",
    highlight: "Built to last",
  },
  {
    icon: Pipette,
    title: "Guttering & Fascias",
    description: "Complete drainage solutions. Keep water away from your foundations and walls.",
    highlight: "Full system install",
  },
  {
    icon: Calendar,
    title: "Roof Maintenance Plans",
    description: "Annual inspections to catch problems early. Save money and extend your roof's life.",
    highlight: "Prevent costly repairs",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-poppins text-sm font-medium text-primary mb-4 block">HOME PROTECTION SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Built to Last. <span className="text-primary">Guaranteed.</span>
          </h2>
          <p className="text-lg md:text-xl font-roboto text-muted-foreground">
            From emergency repairs to complete replacements, Kevin delivers honest, no-nonsense roofing solutions for Doncaster homeowners.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-elevated ${
                service.featured
                  ? "border-primary/30 bg-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 right-6 bg-accent text-accent-foreground px-3 py-1 rounded-full font-poppins text-xs font-semibold">
                  Specialist
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-primary text-primary-foreground" : "bg-primary/10"
              }`}>
                <service.icon className={`h-7 w-7 ${service.featured ? "" : "text-primary"}`} />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-roboto text-muted-foreground mb-4">{service.description}</p>

              {/* Highlight */}
              <div className="flex items-center gap-2 text-success">
                <Shield className="h-4 w-4" />
                <span className="font-poppins text-sm font-medium">{service.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-10 py-6"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

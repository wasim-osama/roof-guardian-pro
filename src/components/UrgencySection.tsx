import { motion } from "framer-motion";
import { Phone, Clock, Shield, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "You Call",
    description: "Priority booking within 24 hours",
    highlight: "Same-day available",
  },
  {
    icon: Clock,
    number: "2",
    title: "Kevin Assesses",
    description: "Same-day temporary protection if needed",
    highlight: "No hidden costs",
  },
  {
    icon: Wrench,
    number: "3",
    title: "Permanent Fix",
    description: "Built-to-last solution with guarantee",
    highlight: "Lifetime warranty options",
  },
];

export const UrgencySection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted" id="emergency">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-accent" />
            <span className="font-poppins text-sm font-medium text-accent">Fast Leak Triage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Roof Emergency? <span className="text-primary">Don't Panic.</span>
          </h2>
          <p className="text-lg md:text-xl font-roboto text-muted-foreground">
            Our Fast Leak Triage system gets Kevin to your door within 24 hours. We stop the damage first, then build you a permanent solution.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-elevated h-full border border-border hover:border-primary/30 transition-colors">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="font-roboto text-muted-foreground mb-4">{step.description}</p>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  <span className="font-poppins text-xs font-medium">{step.highlight}</span>
                </div>
              </div>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
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
            className="bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold text-lg px-10 py-6 animate-pulse-glow"
            asChild
          >
            <a href="#booking" className="flex items-center gap-2">
              Get Priority Booking Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <p className="font-roboto text-sm text-muted-foreground mt-4">
            Or call Kevin directly: <a href="tel:07746237030" className="text-primary font-medium hover:underline">07746 237030</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { User, Phone, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-muted" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Placeholder for Kevin's photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                  <User className="h-20 w-20 text-secondary-foreground/40" />
                </div>
                <p className="font-poppins text-lg text-foreground/60">Photo of Kevin coming soon</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-elevated"
            >
              <div className="font-montserrat font-extrabold text-4xl">8+</div>
              <div className="font-poppins text-sm font-medium">Years Serving<br />Doncaster</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg font-poppins font-medium text-primary mb-4">MEET THE HEART OF KH ROOFING</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
                Kevin Hepworth — <span className="text-primary">Owner & Lead Roofer</span>
              </h2>
              <p className="text-lg font-roboto text-muted-foreground leading-relaxed mb-6">
                The story of KH Roofing and its fearless leader, Kevin Hepworth, is one of ambition, craftsmanship, and community impact. Kevin's hands-on leadership has created more than a company; it's established a trusted name in Doncaster roofing.
              </p>
              <p className="text-lg font-roboto text-muted-foreground leading-relaxed">
                At KH Roofing, every customer is treated like family. This culture of personal care and attention to detail has set us apart as one of the most trusted roofing specialists in the region, with a legacy of excellence at its foundation.
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">OUR MISSION</h3>
                  <p className="font-roboto text-muted-foreground leading-relaxed">
                    Our mission is to protect every property and improve every life we touch. We promise to always leave things better than we found them, delivering excellence, care, and a lasting impact on every project.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-bold px-8"
              asChild
            >
              <a href="tel:07746237030" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Talk to Kevin Directly
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

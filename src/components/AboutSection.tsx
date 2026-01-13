import { motion } from "framer-motion";
import { User, Award, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  "8+ years serving Doncaster",
  "Every job personally overseen",
  "No subcontractors, no surprises",
  "Honest, fixed-price quotes",
  "Local knowledge, local trust",
];

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-secondary-foreground/10 rounded-2xl aspect-[4/3] overflow-hidden">
              {/* Placeholder for Kevin's photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                  <User className="h-16 w-16 text-primary-foreground/60" />
                </div>
                <p className="font-poppins text-sm text-secondary-foreground/60">Photo of Kevin coming soon</p>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card text-card-foreground rounded-xl p-6 shadow-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-2xl text-foreground">200+</div>
                  <div className="font-poppins text-sm text-muted-foreground">5-Star Reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="font-poppins text-sm font-medium text-accent mb-4 block">MEET YOUR ROOFER</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                Kevin Hepworth — <span className="text-primary-foreground/80">Your Roofer, Not a Salesman</span>
              </h2>
              <p className="text-lg font-roboto text-secondary-foreground/80 leading-relaxed">
                When you call KH Roofing, you get Kevin. Not a call centre, not a salesman, not a subcontractor you've never met. Just a local tradesman who takes pride in protecting Doncaster homes.
              </p>
            </div>

            <p className="text-lg font-roboto text-secondary-foreground/80 leading-relaxed">
              After 8 years in the trade, I've seen every roofing problem imaginable — and I've learned that honest, straightforward communication matters just as much as quality workmanship. That's why I personally handle every quote, oversee every job, and stand behind every repair.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="font-poppins text-base font-medium">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold"
                asChild
              >
                <a href="tel:07746237030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Talk to Kevin Directly
                </a>
              </Button>
              <div className="flex items-center gap-2 text-secondary-foreground/60">
                <MapPin className="h-5 w-5" />
                <span className="font-roboto">Serving all Doncaster postcodes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

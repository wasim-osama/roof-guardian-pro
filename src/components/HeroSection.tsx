import { motion } from "framer-motion";
import { Shield, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Shield, label: "NFRC Approved" },
  { icon: Award, label: "Fully Insured" },
  { icon: CheckCircle, label: "200+ 5-Star Reviews" },
];

const kevinPromises = [
  "We arrive on time",
  "We protect your home",
  "We guarantee our work",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero text-primary-foreground pt-20 md:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2"
            >
              <Clock className="h-4 w-4 text-accent-foreground" />
              <span className="font-poppins text-sm font-medium">Emergency? We can be there today</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
              Leaky Roof?{" "}
              <span className="text-accent-foreground">Get a Fast Fix Today.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl font-roboto text-primary-foreground/90 max-w-xl">
              Doncaster's trusted, owner-led roofing specialists delivering honest, no-nonsense repairs... protecting homes for generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold text-lg px-8 py-6 animate-pulse-glow"
                asChild
              >
                <a href="#booking" className="flex items-center gap-2">
                  Book Fast Leak Triage
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-poppins font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Book Free Assessment</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <badge.icon className="h-5 w-5 text-accent-foreground" />
                  <span className="font-poppins text-sm font-medium text-primary-foreground/90">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Kevin's Promise Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-montserrat font-bold text-2xl text-accent-foreground">KH</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl">Kevin's Promise</h3>
                  <p className="font-roboto text-primary-foreground/80">Owner-led, quality guaranteed</p>
                </div>
              </div>

              <div className="space-y-4">
                {kevinPromises.map((promise, index) => (
                  <motion.div
                    key={promise}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="font-poppins text-lg font-medium">{promise}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="font-roboto text-sm text-primary-foreground/80">
                  "Every job I personally oversee. No subcontractors, no surprises."
                </p>
                <p className="font-poppins font-medium mt-2">— Kevin Hepworth, Owner</p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-xl p-4 shadow-elevated"
            >
              <div className="font-montserrat font-bold text-3xl text-primary">8+</div>
              <div className="font-poppins text-sm text-muted-foreground">Years Serving Doncaster</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

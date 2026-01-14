import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Shield, Award, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const trustBadges = [
  { icon: Shield, label: "NFRC Approved" },
  { icon: Award, label: "Fully Insured" },
];

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        address: formData.address.trim() || null,
        source: "fast_triage",
        urgency: "standard",
      });
      if (error) throw error;
      toast.success("Quote request received! Kevin will call you within 24 hours.");
      setFormData({ name: "", phone: "", email: "", address: "" });
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-secondary overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--secondary) / 0.95) 0%, hsl(var(--secondary) / 0.85) 50%, hsl(var(--secondary) / 0.7) 100%), 
            url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-secondary-foreground"
          >
            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-montserrat text-lg md:text-xl font-semibold text-action tracking-wider">
                KH ROOFING
              </h2>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-[1.1] tracking-tight">
              BUILT TO{" "}
              <span className="text-action">LAST</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl font-roboto text-secondary-foreground/90 max-w-lg leading-relaxed">
              WHERE EXPERTISE & TRUST LAY THE FOUNDATION OF EVERY ROOF WE TOUCH
            </p>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Reviews Badge */}
              <div className="flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-secondary-foreground/20">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <span className="font-poppins text-sm font-medium">Based on 200+ Reviews</span>
              </div>

              {/* Certifications */}
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-secondary-foreground/20">
                  <badge.icon className="h-5 w-5 text-action" />
                  <span className="font-poppins text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-elevated border border-border">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                  FREE ROOF ESTIMATE
                </h3>
                <p className="font-roboto text-muted-foreground">
                  Get an accurate quote in 24 hours or less
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Name:" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                  required
                />
                <Input 
                  placeholder="Phone Number:" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                  required
                />
                <Input 
                  placeholder="Email:" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                />
                <Input 
                  placeholder="Address of property with roof:" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-bold text-lg h-14"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Get My Estimate Now"
                  )}
                </Button>
              </form>

              {/* Trust indicators below form */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="font-roboto">Free Quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="font-roboto">No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="font-roboto">24hr Response</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

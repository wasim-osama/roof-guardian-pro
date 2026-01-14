import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        issue_description: formData.message.trim() || null,
        source: "standard_assessment",
        urgency: "standard",
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success("Message received! Kevin will contact you shortly.");
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background" id="booking">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="max-w-lg mx-auto bg-card rounded-2xl p-10 shadow-elevated border border-success/30"
          >
            <CheckCircle className="h-20 w-20 text-success mx-auto mb-6" />
            <h3 className="font-montserrat font-bold text-3xl text-foreground mb-4">Message Received!</h3>
            <p className="font-roboto text-muted-foreground text-lg">
              Kevin will call you within 24 hours to discuss your roofing needs. For urgent matters, call{" "}
              <a href="tel:07746237030" className="text-primary font-semibold">07746 237030</a> now.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background" id="booking">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
                PROUDLY SERVING DONCASTER & BEYOND
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Ready to get started? Fill out the form or contact us directly. We're here to help protect your home.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-muted-foreground text-sm">Phone Number:</p>
                  <a href="tel:07746237030" className="font-montserrat font-bold text-xl text-foreground hover:text-primary transition-colors">
                    (07746) 237030
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-muted-foreground text-sm">Email:</p>
                  <a href="mailto:info@khroofing.co.uk" className="font-montserrat font-bold text-xl text-foreground hover:text-primary transition-colors">
                    info@khroofing.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-muted-foreground text-sm">Location:</p>
                  <p className="font-montserrat font-bold text-xl text-foreground">
                    Doncaster, South Yorkshire
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-muted-foreground text-sm">Hours of Operation:</p>
                  <p className="font-montserrat font-bold text-xl text-foreground">
                    Mon-Sat: 8AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                <p className="font-roboto text-muted-foreground">Map integration coming soon</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                Get A Free Quote Estimate
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted border-border h-12 font-roboto"
                    required
                  />
                  <Input 
                    placeholder="Phone Number *" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted border-border h-12 font-roboto"
                    required
                  />
                </div>
                <Input 
                  placeholder="Email Address" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                />
                <Input 
                  placeholder="Property Address" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-muted border-border h-12 font-roboto"
                />
                <Textarea 
                  placeholder="Tell us about your roofing needs..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border font-roboto min-h-[120px]"
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
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

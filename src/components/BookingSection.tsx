import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, AlertTriangle, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "", postcode: "", issue: "", urgency: "standard" as "emergency" | "urgent" | "standard",
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
        postcode: formData.postcode.trim() || null,
        issue_description: formData.issue.trim() || null,
        source: formData.urgency === "emergency" ? "fast_triage" : "standard_assessment",
        urgency: formData.urgency,
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success("Booking request received! Kevin will call you shortly.");
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-28 bg-background" id="booking">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto bg-card rounded-2xl p-8 shadow-elevated border border-success/30">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">Booking Received!</h3>
            <p className="font-roboto text-muted-foreground">Kevin will call you within 2 hours to confirm your appointment. For emergencies, call <a href="tel:07746237030" className="text-primary font-medium">07746 237030</a> now.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-background" id="booking">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-poppins text-sm font-medium text-primary mb-4 block">BOOK YOUR APPOINTMENT</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Get Kevin on Your Doorstep</h2>
          <p className="text-lg font-roboto text-muted-foreground">Fill out the form below and Kevin will call you to confirm your appointment.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-elevated border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Urgency Toggle */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "emergency", label: "Emergency", icon: AlertTriangle, desc: "Same day" },
                { value: "urgent", label: "Urgent", icon: Clock, desc: "Within 48h" },
                { value: "standard", label: "Standard", icon: Calendar, desc: "This week" },
              ].map((opt) => (
                <button key={opt.value} type="button" onClick={() => setFormData({ ...formData, urgency: opt.value as typeof formData.urgency })}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${formData.urgency === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                  <opt.icon className={`h-5 w-5 mx-auto mb-2 ${formData.urgency === opt.value ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="font-poppins font-semibold text-sm">{opt.label}</div>
                  <div className="font-roboto text-xs text-muted-foreground">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-muted" />
              <Input placeholder="Phone number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="bg-muted" />
            </div>
            <Input placeholder="Email (optional)" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-muted" />
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="bg-muted" />
              <Input placeholder="Postcode" value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} className="bg-muted" />
            </div>
            <Textarea placeholder="Describe your roofing issue..." value={formData.issue} onChange={(e) => setFormData({ ...formData, issue: e.target.value })} className="bg-muted min-h-[100px]" />

            <Button type="submit" size="lg" className="w-full bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold text-lg py-6" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : formData.urgency === "emergency" ? "Request Fast Leak Triage" : "Book Free Assessment"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

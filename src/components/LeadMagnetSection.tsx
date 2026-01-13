import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email: email.trim(),
          name: name.trim() || null,
          source: "roof_checklist",
        });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already subscribed! Check your email for the checklist.");
        } else {
          throw error;
        }
      } else {
        toast.success("Success! Check your email for the Roof Health Checklist.");
        setEmail("");
        setName("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const checklistItems = [
    "5 warning signs your roof needs attention",
    "DIY inspection tips (safely from the ground)",
    "When to call a professional",
    "Seasonal maintenance schedule",
    "Cost-saving preventive measures",
  ];

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2">
              <FileText className="h-4 w-4" />
              <span className="font-poppins text-sm font-medium">Free Download</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
              Is Your Roof at Risk?{" "}
              <span className="text-accent-foreground">Find Out in 2 Minutes</span>
            </h2>

            <p className="text-lg font-roboto text-primary-foreground/80">
              Get Kevin's exclusive Roof Health Checklist — the same one he uses during professional inspections. Catch problems early and save yourself thousands.
            </p>

            {/* Checklist Items */}
            <div className="space-y-3">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="font-poppins text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-2xl p-8 shadow-elevated"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground">
                Get Your Free Checklist
              </h3>
              <p className="font-roboto text-muted-foreground mt-2">
                Enter your details below and we'll send it straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-muted border-border font-roboto"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted border-border font-roboto"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Send Me the Checklist"
                )}
              </Button>
            </form>

            <p className="font-roboto text-xs text-muted-foreground text-center mt-4">
              No spam, ever. Just helpful roofing tips from Kevin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

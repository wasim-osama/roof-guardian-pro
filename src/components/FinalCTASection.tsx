import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-cta text-accent-foreground" id="contact">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl font-roboto text-accent-foreground/90 mb-10">Don't wait for a small problem to become a big one. Get Kevin's expert eyes on your roof today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-action hover:bg-action/90 text-action-foreground font-poppins font-semibold text-lg px-10 py-6" asChild>
              <a href="#booking" className="flex items-center gap-2"><Calendar className="h-5 w-5" />Book Fast Leak Triage<ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-poppins font-semibold text-lg px-10 py-6" asChild>
              <a href="#booking">Schedule Free Assessment</a>
            </Button>
          </div>

          <p className="font-roboto text-lg">Or call Kevin directly: <a href="tel:07746237030" className="inline-flex items-center gap-2 font-poppins font-bold text-xl hover:underline"><Phone className="h-5 w-5" />07746 237030</a></p>
        </motion.div>
      </div>
    </section>
  );
};

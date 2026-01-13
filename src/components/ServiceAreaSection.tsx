import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Doncaster Town Centre",
  "Adwick-le-Street",
  "Thorne",
  "Bentley",
  "Armthorpe",
  "Rossington",
  "Hatfield",
  "Mexborough",
  "Conisbrough",
  "Tickhill",
  "Bawtry",
  "Edenthorpe",
];

export const ServiceAreaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-muted rounded-2xl aspect-square overflow-hidden relative">
              {/* Stylized Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-action/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-12 w-12 text-primary" />
                  </div>
                  <p className="font-montserrat font-bold text-xl text-foreground">Doncaster & Surrounds</p>
                  <p className="font-roboto text-muted-foreground mt-2">15-mile coverage radius</p>
                </div>
              </div>
              
              {/* Decorative circles representing coverage */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-48 h-48 rounded-full border-2 border-primary/10" />
                <div className="absolute w-64 h-64 rounded-full border-2 border-primary/5" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="font-poppins text-sm font-medium text-primary mb-4 block">SERVICE AREA</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Serving All of <span className="text-primary">Doncaster</span> & Surrounding Towns
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Kevin serves Doncaster and a 15-mile radius, covering all major towns and villages. Fast response times guaranteed for emergency call-outs across the area.
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="font-poppins text-sm font-medium text-foreground">{area}</span>
                </motion.div>
              ))}
            </div>

            <p className="font-roboto text-muted-foreground">
              Don't see your area? <a href="tel:07746237030" className="text-primary font-medium hover:underline">Call Kevin</a> — we likely cover it!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

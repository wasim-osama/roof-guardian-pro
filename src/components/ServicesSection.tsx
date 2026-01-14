import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "ROOFING",
    description: "Protect your home with a roof built to last and designed to impress. At KH Roofing, we know how important it is to have a roof you can count on — day in & day out.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "FLAT ROOFS & EPDM",
    description: "Give your extension or garage a waterproof solution that stands the test of time. We specialize in EPDM rubber roofing that offers unmatched durability.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "GUTTERS & FASCIAS",
    description: "Keep your home safe and sound with guttering you can trust. We install seamless systems that work hard to protect your home from water damage.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CHIMNEY REPAIRS",
    description: "Expert chimney repairs and repointing that protect your home from water ingress and structural damage. Built to withstand the elements.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=800&auto=format&fit=crop",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-muted" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            COMPLETE HOME SOLUTIONS
          </h2>
          <p className="text-xl font-montserrat font-semibold text-primary mb-6">
            ONE TRUSTED TEAM
          </p>
          <p className="text-lg font-roboto text-muted-foreground">
            WE'VE GOT YOUR HOME COVERED FROM TOP TO BOTTOM
          </p>
        </motion.div>

        {/* Services Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-secondary-foreground">
                <h3 className="font-montserrat font-bold text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="font-roboto text-secondary-foreground/80 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <a 
                  href="#booking"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-action hover:text-action/80 transition-colors"
                >
                  LEARN MORE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Text */}
        <div className="overflow-hidden py-8 bg-primary rounded-xl">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span className="font-montserrat font-bold text-xl text-primary-foreground">TURNING VISION INTO REALITY</span>
                <span className="text-primary-foreground/50">★</span>
                <span className="font-montserrat font-bold text-xl text-primary-foreground">PROTECTING YOUR PEACE OF MIND</span>
                <span className="text-primary-foreground/50">★</span>
                <span className="font-montserrat font-bold text-xl text-primary-foreground">BUILDING DREAMS, ONE ROOF AT A TIME</span>
                <span className="text-primary-foreground/50">★</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

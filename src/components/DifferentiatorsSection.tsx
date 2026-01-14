import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "CONFIDENCE YOU CAN TRUST",
    description: "Our team ensures high-quality craft and delivers exceptional results that stand the test of time. From consultation to completion, we exceed expectations every step of the way.",
  },
  {
    icon: Clock,
    title: "RELIABILITY YOU DESERVE",
    description: "We show up when we say we will, communicate clearly throughout the project, and deliver on every promise. No surprises, no excuses — just dependable service.",
  },
  {
    icon: Award,
    title: "CONSISTENCY IN EXCELLENCE",
    description: "Every project receives the same level of care and attention, regardless of size. Our standards never slip because your home deserves nothing less than the best.",
  },
];

export const DifferentiatorsSection = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4">
            EXCELLENCE IN EVERY DETAIL
          </h2>
          <p className="text-xl font-poppins font-medium text-action">
            IS WHAT SETS US APART
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-action/20 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-10 w-10 text-action" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl mb-4">
                {item.title}
              </h3>
              <p className="font-roboto text-secondary-foreground/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

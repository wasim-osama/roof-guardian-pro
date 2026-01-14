import { motion } from "framer-motion";
import { Search, Ear, Target, Hammer, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    letter: "C",
    title: "CONSULTATION",
    description: "We start with a comprehensive consultation and inspection of your home. We identify and document any damages using detailed photo reports to show your roof's condition clearly.",
  },
  {
    icon: Ear,
    letter: "L",
    title: "LISTEN",
    description: "Your goals matter to us. We take the time to actively listen and understand what you're looking to achieve, ensuring every decision aligns with your needs.",
  },
  {
    icon: Target,
    letter: "A",
    title: "ALIGN",
    description: "Once we've captured your vision, we present the most customized solutions for your goals, style, and budget. No pressure, just options.",
  },
  {
    icon: Hammer,
    letter: "S",
    title: "SUPERIOR INSTALL",
    description: "Our expert team delivers a flawless roof installation using only premium materials. Every detail is handled carefully to ensure an incredible roof that stands the test of time.",
  },
  {
    icon: ThumbsUp,
    letter: "S",
    title: "SATISFACTION",
    description: "We conclude with a final walk-through to review the work and ensure every detail meets your expectations. Your 100% satisfaction is our promise.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-background" id="process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg font-poppins font-medium text-primary mb-4">
            INDUSTRY-LEADING: BEST-IN-CLASS PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            EXPERIENCE <span className="text-primary">CLASS</span>, BUILT TO LAST
          </h2>
          <p className="text-lg font-roboto text-muted-foreground">
            We don't just offer roofing services; we deliver an experience that redefines excellence. Our "Best in Class Process" is designed for your satisfaction, ensuring every step is seamless, efficient, and tailored to your needs.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center group"
            >
              {/* Letter Circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                  <span className="font-montserrat font-extrabold text-3xl text-primary-foreground">
                    {step.letter}
                  </span>
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2" />
                )}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-roboto text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

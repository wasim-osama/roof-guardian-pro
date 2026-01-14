import { motion } from "framer-motion";

const stats = [
  { number: "200+", label: "TRUSTED REVIEWS" },
  { number: "500+", label: "PROJECTS COMPLETED" },
  { number: "8+", label: "YEARS EXPERIENCE" },
  { number: "100%", label: "SATISFACTION GUARANTEED" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
            OUR IMPACT BY NUMBERS
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-montserrat font-extrabold text-5xl md:text-6xl mb-2">
                {stat.number}
              </div>
              <div className="font-poppins font-medium text-sm text-primary-foreground/80 tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

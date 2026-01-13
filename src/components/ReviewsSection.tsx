import { motion } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    location: "Adwick, Doncaster",
    rating: 5,
    text: "Had a leak during the heavy rains last month. Kevin was here within 4 hours, stopped the leak same day, and came back to do a full repair the following week. Can't recommend him enough!",
    problem: "Emergency Leak Repair",
    date: "December 2025",
  },
  {
    name: "David & Michelle Roberts",
    location: "Thorne, Doncaster",
    rating: 5,
    text: "We needed our entire flat roof replacing on the extension. Kevin explained everything clearly, no jargon, fair price. Three years on and not a single issue. That's quality.",
    problem: "EPDM Flat Roof Installation",
    date: "November 2025",
  },
  {
    name: "John Wilson",
    location: "Bentley, Doncaster",
    rating: 5,
    text: "Our chimney was in a right state — pointing gone, flashing loose, the lot. Kevin did a brilliant job. You can tell he takes pride in his work. Proper tradesman.",
    problem: "Chimney Repair & Repointing",
    date: "October 2025",
  },
  {
    name: "Cheryl Young",
    location: "Armthorpe, Doncaster",
    rating: 5,
    text: "Kevin arrived when he said he would (rare these days!), gave me an honest assessment, and the price he quoted was the price I paid. No surprises. Will definitely use again.",
    problem: "Roof Assessment & Minor Repairs",
    date: "September 2025",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-poppins text-sm font-medium text-primary mb-4 block">VERIFIED HOMEOWNER STORIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Trusted by <span className="text-primary">200+ Doncaster Families</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-warning text-warning" />
            ))}
            <span className="font-montserrat font-bold text-xl text-foreground ml-2">4.9</span>
          </div>
          <p className="text-lg font-roboto text-muted-foreground">
            Real reviews from real Doncaster homeowners. Every story starts with a problem — we make sure it ends with peace of mind.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-elevated border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

              {/* Problem Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 mb-4">
                <span className="font-poppins text-xs font-semibold">{review.problem}</span>
              </div>

              {/* Review Text */}
              <p className="font-roboto text-foreground/90 text-base leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between border-t border-border pt-6">
                <div>
                  <div className="font-poppins font-semibold text-foreground">{review.name}</div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-3 w-3" />
                    <span className="font-roboto">{review.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="font-roboto text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-roboto text-muted-foreground">
            View all our reviews on{" "}
            <a href="#" className="text-primary font-medium hover:underline">Google</a>
            {" "}and{" "}
            <a href="#" className="text-primary font-medium hover:underline">Checkatrade</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

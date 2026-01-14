import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    location: "Adwick, Doncaster",
    text: "I met Kevin when my roof sprung a leak during heavy rain. He was here within hours and has always been a great honest individual since that day. When we needed our extension roof done, there wasn't anyone else we were going to go through.",
  },
  {
    name: "David Roberts",
    location: "Thorne, Doncaster",
    text: "Kevin was awesome to work with! He walked us through every step of the process, answered our questions thoroughly and explained everything in plain English. No jargon, no pressure — just honest advice.",
  },
  {
    name: "John Wilson",
    location: "Bentley, Doncaster",
    text: "We couldn't be happier with everything Kevin at KH Roofing did for us. He was extremely professional and explained the process so we could understand the steps it would take to get a new roof. The crew that installed the new roof were brilliant.",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-24 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        {/* Google Rating Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-elevated border border-border mb-8">
            <div className="font-montserrat font-extrabold text-4xl text-foreground">4.9</div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="font-roboto text-sm text-muted-foreground">200+ Reviews on Google</span>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-elevated border border-border"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-roboto text-foreground/90 leading-relaxed mb-6">
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
                <div className="text-xs font-roboto text-muted-foreground">
                  BASED ON GOOGLE REVIEWS
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

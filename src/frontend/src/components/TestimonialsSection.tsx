import { Quote } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Nexara didn't just give us a strategy deck — they rolled up their sleeves and executed alongside us. Within 9 months we'd grown revenue by 140% and expanded into two new markets.",
    name: "Catherine Harlow",
    role: "CEO, Vantara Health",
    initials: "CH",
    color: "bg-gold-500",
  },
  {
    quote:
      "The clarity they brought to our go-to-market was transformative. We went from chasing every opportunity to owning a defensible niche. Our conversion rate tripled in one quarter.",
    name: "David Osei-Mensah",
    role: "Founder & CTO, Stackline",
    initials: "DO",
    color: "bg-charcoal-600",
  },
  {
    quote:
      "I've worked with half a dozen consultancies over my career. Nexara is the first that felt like a genuine partner. They push back when you're wrong, which is exactly what you need.",
    name: "Marta Jiménez",
    role: "VP Growth, Lumio Retail",
    initials: "MJ",
    color: "bg-gold-700",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="badge"
            eyebrow="Client Love"
            title="Don't Take Our Word for It"
            darkMode={true}
            align="center"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-gold-400 flex-shrink-0"
                strokeWidth={1.5}
              />

              {/* Quote text */}
              <p className="text-white/80 text-base leading-relaxed font-body flex-1">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-sm font-bold text-white">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-white/50 text-xs font-body">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

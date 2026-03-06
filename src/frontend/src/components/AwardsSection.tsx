import { Award, Gem, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";

const awards = [
  {
    Icon: Trophy,
    name: "Best Growth Agency",
    org: "Inc. 5000",
    year: "2025",
    color: "text-gold-400",
    bg: "bg-gold-500/12",
  },
  {
    Icon: Star,
    name: "Top Consulting Firm",
    org: "Clutch Global",
    year: "2025",
    color: "text-amber-300",
    bg: "bg-amber-400/10",
  },
  {
    Icon: Award,
    name: "Excellence in Strategy",
    org: "Forbes Council",
    year: "2024",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    Icon: Gem,
    name: "Innovation Leader",
    org: "Deloitte Fast 500",
    year: "2024",
    color: "text-gold-300",
    bg: "bg-gold-400/10",
  },
];

export default function AwardsSection() {
  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-gold-400 tracking-widest uppercase mb-3">
            Recognition
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
            Industry-Recognised{" "}
            <span className="font-display italic text-gold-400">
              Excellence
            </span>
          </h2>
        </motion.div>

        {/* Awards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {awards.map((award, i) => {
            const Icon = award.Icon;
            return (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/8 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${award.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon size={26} className={award.color} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white text-base leading-tight mb-1">
                    {award.name}
                  </h3>
                  <p className="text-gold-400/80 text-sm font-body font-medium">
                    {award.org}
                  </p>
                  <p className="text-white/35 text-xs font-body mt-0.5">
                    {award.year}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "motion/react";

const stats = [
  { value: 500, suffix: "+", label: "Clients Worldwide", isNumeric: true },
  { value: 12, suffix: "", label: "Years Experience", isNumeric: true },
  { value: 98, suffix: "%", label: "Satisfaction Rate", isNumeric: true },
  { value: 3, suffix: "×", label: "Average ROI", isNumeric: true },
];

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      className="flex flex-col items-center text-center"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <span className="font-display text-5xl md:text-6xl font-bold text-gold-400 leading-none tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-white/55 text-sm font-body mt-2 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 section-dark border-y border-white/8">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="py-10 px-6 lg:px-10 flex flex-col items-center"
            >
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

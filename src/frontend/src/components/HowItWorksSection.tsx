import { ClipboardList, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery Call",
    description:
      "We listen first and diagnose your challenges. No templates, no assumptions — just honest exploration of where you are and where you want to go.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Strategic Blueprint",
    description:
      "A custom roadmap built around your goals, your resources, and your market. Clear priorities, measurable milestones, defined ownership.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution & Support",
    description:
      "Embedded delivery with senior oversight. We work inside your business — attending standups, shipping alongside your team, removing blockers.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Measure & Optimize",
    description:
      "Continuous tracking, transparent reporting, and rapid iteration. We double down on what works and cut what doesn't — every single sprint.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-widest uppercase mb-3">
            Our Process
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            How We{" "}
            <span className="font-display italic text-gold-500">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Four disciplined steps that turn ambition into outcomes. Every
            engagement follows this sequence — no shortcuts.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {/* Connecting dotted line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, oklch(0.62 0.14 68 / 0.35) 0px, oklch(0.62 0.14 68 / 0.35) 6px, transparent 6px, transparent 14px)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                data-ocid={`how_it_works.item.${i + 1}`}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number badge */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-gold-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.65 0.16 68) 0%, oklch(0.55 0.12 55) 100%)",
                  }}
                >
                  <span className="font-display font-black text-charcoal-900 text-xl leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-gold-500"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

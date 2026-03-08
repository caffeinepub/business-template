import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Compass,
  HeadphonesIcon,
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Compass,
    title: "Strategic Planning",
    description:
      "We craft long-horizon strategies that align your mission, resources, and market position to create lasting competitive advantage.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Unlock new revenue streams, optimize pricing, and accelerate sales cycles using proven frameworks honed across 500+ engagements.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Turn raw data into actionable intelligence. Our dashboards surface the metrics that matter and spotlight hidden opportunities.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "A senior advisor on call whenever you need them. Real answers, real accountability — not a ticket queue.",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description:
      "From visual identity to UX systems, we craft brand experiences that command trust and convert attention into loyalty.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Multi-channel campaigns built on intent data. We connect your message with audiences ready to act, not just browse.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function FeaturesSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Background image — very subtle, tinted warm */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/features-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        {/* Gradient edges — blend into bg seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      {/* Lighter dot grid — differentiated from Blog section */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 pointer-events-none" />
      {/* Subtle warm tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="underline"
            eyebrow="What We Offer"
            title="Powerful Features"
            subtitle="Six core competencies, one integrated team. We work as an extension of your business — not a vendor."
            darkMode={false}
            align="center"
          />
        </div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const ocid = `features.item.${i + 1}` as const;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                data-ocid={ocid}
                className="group relative p-7 rounded-2xl border border-border bg-card hover:border-gold-500/40 transition-all duration-300"
                style={{
                  boxShadow: "none",
                }}
                whileHover={{
                  boxShadow: "0 4px 24px oklch(0.62 0.14 68 / 0.18)",
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-all duration-300 group-hover:scale-110">
                  <Icon
                    size={22}
                    className="text-gold-500"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="font-sans font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gold-500/0 group-hover:bg-gold-500/40 transition-colors duration-300 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            data-ocid="features.view_all_button"
            className="border-gold-500/50 text-gold-600 hover:bg-gold-500/10 hover:border-gold-500 hover:text-gold-500 font-semibold px-8 transition-all duration-200"
            onClick={() => handleScroll("#contact")}
          >
            View All Services →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description:
      "For early-stage companies establishing their growth foundations.",
    features: [
      "Monthly strategy session (2hr)",
      "Market positioning analysis",
      "Quarterly growth roadmap",
      "Email & Slack support",
      "Access to resource library",
      "1 active project track",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$7,500",
    period: "/month",
    description:
      "For scaling companies ready to accelerate growth and execution.",
    features: [
      "Weekly strategy sessions (90min)",
      "Full GTM strategy & execution",
      "Revenue optimization program",
      "Dedicated senior advisor",
      "Weekly performance reporting",
      "Up to 4 active project tracks",
      "Brand & design sprint access",
      "Priority support (4hr response)",
    ],
    cta: "Start with Pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For organizations that need comprehensive, deeply integrated partnership.",
    features: [
      "Unlimited strategy sessions",
      "Embedded team integration",
      "M&A and capital strategy",
      "Board-level advisory access",
      "Dedicated project management",
      "Unlimited project tracks",
      "Full creative & brand team",
      "24/7 executive support",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-500 tracking-widest uppercase mb-3">
            Pricing
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            Transparent Pricing,
            <span className="font-display italic text-gold-500">
              {" "}
              Real Results
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Every plan includes a 30-day money-back guarantee. No lock-in
            contracts — cancel anytime.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              data-ocid={`pricing.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl flex flex-col ${
                plan.highlighted
                  ? "gradient-dark shadow-gold border-2 border-gold-500/60"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-gold text-charcoal-900 font-bold px-4 py-1 text-xs tracking-wide">
                    <Zap size={11} className="mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <h3
                    className={`font-sans font-bold text-xl mb-2 ${
                      plan.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span
                      className={`font-display text-4xl font-bold leading-none ${
                        plan.highlighted ? "text-gold-400" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm pb-1 ${
                          plan.highlighted
                            ? "text-white/50"
                            : "text-muted-foreground"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed font-body ${
                      plan.highlighted
                        ? "text-white/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-gold-400" : "text-gold-500"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm font-body ${
                          plan.highlighted
                            ? "text-white/75"
                            : "text-foreground/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  data-ocid={`pricing.primary_button.${i + 1}`}
                  className={`w-full font-semibold py-5 h-auto ${
                    plan.highlighted
                      ? "gradient-gold text-charcoal-900 hover:opacity-90 shadow-gold-sm"
                      : "border-2 border-gold-500/40 text-foreground bg-transparent hover:bg-gold-500/8 hover:border-gold-500"
                  }`}
                  onClick={() => handleScroll("#contact")}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8 font-body"
        >
          All prices in USD. Annual billing available at 15% discount. Need
          something bespoke?{" "}
          <button
            type="button"
            className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
            onClick={() => handleScroll("#contact")}
          >
            Let's talk.
          </button>
        </motion.p>
      </div>
    </section>
  );
}

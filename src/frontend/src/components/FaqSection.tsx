import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Most engagements kick off within 5–7 business days of signing. We run a structured onboarding sprint to get aligned fast.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — our Starter plan is designed for early-stage companies. We've helped dozens of startups find product-market fit and build scalable growth engines.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across technology, healthcare, professional services, retail, and financial services. Our frameworks are industry-agnostic but we tailor execution deeply.",
  },
  {
    q: "Can we cancel anytime?",
    a: "Absolutely. All plans are month-to-month with no lock-in. We earn your business every month.",
  },
  {
    q: "Do you offer project-based work instead of retainers?",
    a: "Yes — we offer scoped project engagements for specific initiatives like a GTM launch or brand refresh. Talk to us about your needs.",
  },
  {
    q: "What does 'embedded execution' mean?",
    a: "It means our team works inside your business, not just advising from the outside. We attend your standups, work in your tools, and ship alongside your team.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-widest uppercase mb-3">
            FAQs
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            Frequently Asked{" "}
            <span className="font-display italic text-gold-500">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Everything you need to know before getting started. Can't find what
            you're looking for?{" "}
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
            >
              Just ask us.
            </button>
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i + 1}`}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-gold-500/40 transition-colors duration-200 data-[state=open]:border-gold-500/60 data-[state=open]:shadow-gold-sm"
              >
                <AccordionTrigger className="font-sans font-semibold text-base text-foreground hover:no-underline hover:text-gold-500 py-5 [&[data-state=open]]:text-gold-500 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

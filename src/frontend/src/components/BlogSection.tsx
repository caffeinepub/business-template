import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "The 5 Growth Levers Every Mid-Market Company Overlooks",
    excerpt:
      "Most executives focus on the obvious channels — paid ads, direct sales, referrals. But the companies growing 3× faster are quietly pulling five underutilised levers that rarely appear in boardroom decks.",
    date: "February 18, 2026",
    readTime: "7 min read",
    category: "Strategy",
    categoryColor: "oklch(0.62 0.14 68)",
    categoryBg: "oklch(0.62 0.14 68 / 0.12)",
  },
  {
    title: "How Data Analytics Transformed a $40M Retail Brand in 90 Days",
    excerpt:
      "When Helix Retail came to us with stagnant conversion rates and bloated ad spend, we rebuilt their attribution model from the ground up. Ninety days later, ROAS improved by 140% and CAC dropped by a third.",
    date: "January 29, 2026",
    readTime: "9 min read",
    category: "Case Study",
    categoryColor: "oklch(0.65 0.15 160)",
    categoryBg: "oklch(0.65 0.15 160 / 0.1)",
  },
  {
    title: "Why Your Brand Strategy Is Costing You Enterprise Deals",
    excerpt:
      "Enterprise buyers don't just evaluate products — they evaluate the companies behind them. A poorly positioned brand signals risk, and risk kills deals before they start. Here's how to close that gap.",
    date: "January 12, 2026",
    readTime: "6 min read",
    category: "Branding",
    categoryColor: "oklch(0.68 0.16 290)",
    categoryBg: "oklch(0.68 0.16 290 / 0.1)",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-24 lg:py-32 section-warm overflow-hidden"
    >
      {/* Subtle diagonal stripe — visually distinct from Features dot-grid */}
      <div
        className="absolute inset-0 bg-stripe-diagonal opacity-[0.4] pointer-events-none"
        aria-hidden="true"
      />
      {/* Warm gold tint vignette top */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold-500/[0.04] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            variant="split"
            eyebrow="Insights & Ideas"
            title="From the"
            highlight="Nexara Blog"
            subtitle="Practical thinking on growth strategy, brand, and execution — no fluff, no filler."
            darkMode={false}
            align="left"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              data-ocid={`blog.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-gold-400/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Category band */}
              <div
                className="h-1 w-full"
                style={{ background: post.categoryColor }}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border-0"
                    style={{
                      background: post.categoryBg,
                      color: post.categoryColor,
                    }}
                  >
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Clock size={11} strokeWidth={2} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-foreground text-xl leading-snug mb-3 group-hover:text-gold-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/65 text-sm font-body leading-relaxed mb-5 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Calendar size={11} strokeWidth={2} />
                    {post.date}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    data-ocid={`blog.read_more.button.${i + 1}`}
                    className="text-gold-600 hover:text-gold-700 hover:bg-gold-500/8 text-xs font-semibold gap-1 px-2 h-7 transition-all"
                  >
                    Read More
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

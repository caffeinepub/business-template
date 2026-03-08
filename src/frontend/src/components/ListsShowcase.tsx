import { motion } from "motion/react";
import {
  BorderAccentList,
  CheckIconList,
  Checklist,
  DecimalList,
  DescriptionList,
  DiscList,
  FeatureList,
  GoldCounterList,
  StepList,
  TagList,
} from "./ListStyles";
import SectionHeading from "./SectionHeading";

/* ─── Animation variants ─────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ─── Card wrapper ───────────────────────────────────────────────────────── */

function ListCard({
  title,
  description,
  ocid,
  children,
}: {
  title: string;
  description: string;
  ocid: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardVariants}
      data-ocid={ocid}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-400/20 transition-colors duration-300"
    >
      {/* Card header */}
      <div>
        <p className="font-sans font-semibold text-white text-sm leading-tight mb-1">
          {title}
        </p>
        <p className="font-body text-white/45 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* List content */}
      <div className="flex-1">{children}</div>
    </motion.div>
  );
}

/* ─── ListsShowcase ──────────────────────────────────────────────────────── */

export default function ListsShowcase() {
  return (
    <section
      id="lists"
      data-ocid="lists.section"
      className="py-24 lg:py-32 section-dark"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="badge"
            eyebrow="Design System"
            title="List Styles"
            highlight="Styles"
            subtitle="Ten HTML list patterns — from simple disc bullets to rich step flows — designed for polished, readable business interfaces."
            darkMode={true}
            align="center"
          />
        </div>

        {/* Grid of list style cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* 1. Disc List */}
          <ListCard
            title="Disc List"
            description="Classic bullet list with custom gold dot markers. Ideal for simple feature or benefit rundowns."
            ocid="lists.item.1"
          >
            <DiscList />
          </ListCard>

          {/* 2. Check Icon List */}
          <ListCard
            title="Check Icon List"
            description="SVG circle-check icons replace default bullets. Use for inclusions, guarantees, or deliverables."
            ocid="lists.item.2"
          >
            <CheckIconList />
          </ListCard>

          {/* 3. Border Accent List */}
          <ListCard
            title="Border Accent List"
            description="Left gold border per item — no markers, generous spacing. Great for editorial callouts."
            ocid="lists.item.3"
          >
            <BorderAccentList />
          </ListCard>

          {/* 4. Decimal List */}
          <ListCard
            title="Decimal List"
            description="Ordered list with styled two-digit gold counters. Perfect for ranked items or priority lists."
            ocid="lists.item.4"
          >
            <DecimalList />
          </ListCard>

          {/* 5. Gold Counter List */}
          <ListCard
            title="Gold Counter List"
            description="Large circular gold badge beside each item. Great for a short, impactful process overview."
            ocid="lists.item.5"
          >
            <GoldCounterList />
          </ListCard>

          {/* 6. Step List */}
          <ListCard
            title="Step List"
            description="Numbered steps with title + description and a vertical connector line between them."
            ocid="lists.item.6"
          >
            <StepList />
          </ListCard>

          {/* 7. Description List */}
          <ListCard
            title="Description List"
            description="Term–definition pairs in a card with alternating row backgrounds. Ideal for key stats or specs."
            ocid="lists.item.7"
          >
            <DescriptionList />
          </ListCard>

          {/* 8. Checklist */}
          <ListCard
            title="Checklist"
            description="Mixed done / pending items with filled or hollow circle indicators. Use for project status or onboarding."
            ocid="lists.item.8"
          >
            <Checklist />
          </ListCard>

          {/* 9. Feature List */}
          <ListCard
            title="Feature List"
            description="Icon + label + short description rows with gold icon backgrounds. Use in pricing cards or sidebars."
            ocid="lists.item.9"
          >
            <FeatureList />
          </ListCard>

          {/* 10. Tag List */}
          <ListCard
            title="Tag / Pill List"
            description="Inline wrapping flex list of styled pill badges in gold tints. Perfect for services, skills, or categories."
            ocid="lists.item.10"
          >
            <TagList />
          </ListCard>
        </motion.div>
      </div>
    </section>
  );
}

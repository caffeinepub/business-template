import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import {
  ActionTooltip,
  ColorSwatchPopover,
  DirectionalTooltips,
  ImageTooltip,
  KeyboardShortcutTooltip,
  NestedTooltip,
  PopoverCard,
  ProgressTooltip,
  RichTooltip,
  StatusBadgeTooltip,
} from "./TooltipStyles";

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

function TooltipCard({
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
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-400/20 transition-colors duration-300 overflow-visible"
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

      {/* Tooltip content */}
      <div className="flex-1 overflow-visible">{children}</div>
    </motion.div>
  );
}

/* ─── TooltipsShowcase ───────────────────────────────────────────────────── */

export default function TooltipsShowcase() {
  return (
    <section
      id="tooltips"
      data-ocid="tooltips.section"
      className="py-24 lg:py-32 section-dark"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="badge"
            eyebrow="Design System"
            title="Tooltip & Popover Styles"
            highlight="Popover"
            subtitle="Ten interactive JavaScript tooltip and popover patterns — from simple directional tips to rich action menus and nested overlays."
            darkMode={true}
            align="center"
          />
        </div>

        {/* Grid of tooltip style cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ overflow: "visible" }}
        >
          {/* 1. Directional Tooltips */}
          <TooltipCard
            title="Directional Tooltips"
            description="Four directional placements: top, bottom, left, right — each with a gold arrow pointer."
            ocid="tooltips.item.1"
          >
            <DirectionalTooltips />
          </TooltipCard>

          {/* 2. Rich Tooltip */}
          <TooltipCard
            title="Rich Tooltip"
            description="Enhanced tooltip with an icon, bold title, and descriptive body copy."
            ocid="tooltips.item.2"
          >
            <RichTooltip />
          </TooltipCard>

          {/* 3. Image Tooltip */}
          <TooltipCard
            title="Image Tooltip"
            description="Hover a link to preview an image thumbnail inside the tooltip."
            ocid="tooltips.item.3"
          >
            <ImageTooltip />
          </TooltipCard>

          {/* 4. Action Tooltip */}
          <TooltipCard
            title="Action Tooltip"
            description="Hover reveals a floating action menu with Edit, Duplicate, and Delete options."
            ocid="tooltips.item.4"
          >
            <ActionTooltip />
          </TooltipCard>

          {/* 5. Status Badge Tooltip */}
          <TooltipCard
            title="Status Badge Tooltip"
            description="Hover status pills to reveal contextual status explanations."
            ocid="tooltips.item.5"
          >
            <StatusBadgeTooltip />
          </TooltipCard>

          {/* 6. Keyboard Shortcut Tooltip */}
          <TooltipCard
            title="Keyboard Shortcut Tooltip"
            description="Tooltip displays a styled keyboard shortcut keycap badge."
            ocid="tooltips.item.6"
          >
            <KeyboardShortcutTooltip />
          </TooltipCard>

          {/* 7. Popover Card */}
          <TooltipCard
            title="Popover Card"
            description="Click-triggered floating card with stats and a close button."
            ocid="tooltips.item.7"
          >
            <PopoverCard />
          </TooltipCard>

          {/* 8. Color Swatch Popover */}
          <TooltipCard
            title="Color Swatch Popover"
            description="Click a color swatch to inspect its name, hex code, and preview."
            ocid="tooltips.item.8"
          >
            <ColorSwatchPopover />
          </TooltipCard>

          {/* 9. Progress Tooltip */}
          <TooltipCard
            title="Progress Tooltip"
            description="Hover a progress bar to reveal the percentage and milestone count."
            ocid="tooltips.item.9"
          >
            <ProgressTooltip />
          </TooltipCard>

          {/* 10. Nested Tooltip */}
          <TooltipCard
            title="Nested Tooltip"
            description="A tooltip that contains a nested second-level tooltip inside it."
            ocid="tooltips.item.10"
          >
            <NestedTooltip />
          </TooltipCard>
        </motion.div>
      </div>
    </section>
  );
}

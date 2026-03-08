import {
  Briefcase,
  CheckCircle,
  Flame,
  Globe,
  Star,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────── *
 * 1. Default Pill
 * ─────────────────────────────────────────────────────────────────────────── */

export function DefaultPill() {
  const tags = ["Strategy", "Growth", "Finance", "Operations", "Analytics"];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-semibold"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 2. Outlined Tags
 * ─────────────────────────────────────────────────────────────────────────── */

export function OutlinedTags() {
  const tags = ["SaaS", "B2B", "Enterprise", "API-First", "SOC2"];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-3 py-1 rounded-full border border-white/25 text-white/65 text-xs font-semibold bg-transparent"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 3. Gold Gradient Tags
 * ─────────────────────────────────────────────────────────────────────────── */

export function GoldGradientTags() {
  const tags = ["Premium", "Pro", "VIP", "Elite"];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-3 py-1 rounded-full gradient-gold text-charcoal-900 text-xs font-bold shadow-gold-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 4. Status Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const statuses = [
  {
    label: "Success",
    classes: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  },
  {
    label: "Warning",
    classes: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  },
  {
    label: "Error",
    classes: "bg-red-500/15 text-red-400 border border-red-500/25",
  },
  {
    label: "Info",
    classes: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  },
];

export function StatusTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((s) => (
        <span
          key={s.label}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${s.classes}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {s.label}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 5. Dismissible Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const initialDismissible = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer",
  "Vite",
];

export function DismissibleTags() {
  const [tags, setTags] = useState(initialDismissible);

  return (
    <div className="flex flex-wrap gap-2 min-h-[2rem]">
      <AnimatePresence>
        {tags.length === 0 ? (
          <motion.span
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-white/35 font-body italic self-center"
          >
            All tags dismissed — refresh to reset.
          </motion.span>
        ) : (
          tags.map((tag, idx) => (
            <motion.span
              key={tag}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75, transition: { duration: 0.15 } }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/75 text-xs font-semibold"
            >
              {tag}
              <button
                type="button"
                data-ocid={`tags.dismiss.button.${idx + 1}`}
                onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
                className="text-white/40 hover:text-white/90 transition-colors ml-0.5"
                aria-label={`Remove ${tag}`}
              >
                <X size={11} />
              </button>
            </motion.span>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 6. Icon + Label Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const iconTags = [
  { icon: Star, label: "Featured", color: "text-gold-400" },
  { icon: Zap, label: "Fast", color: "text-amber-400" },
  { icon: CheckCircle, label: "Verified", color: "text-emerald-400" },
  { icon: Flame, label: "Trending", color: "text-orange-400" },
  { icon: Globe, label: "Global", color: "text-blue-400" },
];

export function IconLabelTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {iconTags.map(({ icon: Icon, label, color }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 border border-white/12 text-xs font-semibold text-white/75"
        >
          <Icon className={color} size={12} />
          {label}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 7. Avatar Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const avatarTags = [
  { initials: "AC", name: "Alex Chen", color: "bg-blue-500" },
  { initials: "JM", name: "Julia M.", color: "bg-violet-500" },
  { initials: "RS", name: "Ryan S.", color: "bg-emerald-500" },
  { initials: "NP", name: "Nina P.", color: "bg-rose-500" },
];

export function AvatarTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {avatarTags.map((a) => (
        <span
          key={a.name}
          className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/8 border border-white/12"
        >
          <span
            className={`w-5 h-5 rounded-full ${a.color} flex items-center justify-center text-[9px] font-bold text-white shrink-0`}
          >
            {a.initials}
          </span>
          <span className="text-xs font-semibold text-white/75">{a.name}</span>
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 8. Counter Badge
 * ─────────────────────────────────────────────────────────────────────────── */

const counterButtons = [
  { label: "Messages", count: 12, icon: "💬" },
  { label: "Alerts", count: 3, icon: "🔔" },
  { label: "Tasks", count: 28, icon: "✓" },
];

export function CounterBadge() {
  return (
    <div className="flex flex-wrap gap-3">
      {counterButtons.map((btn) => (
        <button
          key={btn.label}
          type="button"
          data-ocid={`tags.${btn.label.toLowerCase()}.button`}
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/8 border border-white/15 text-white/75 text-sm font-semibold hover:bg-white/12 transition-colors"
        >
          <span>{btn.icon}</span>
          {btn.label}
          <span className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1.5 rounded-full gradient-gold text-charcoal-900 text-[10px] font-bold flex items-center justify-center shadow-gold-sm">
            {btn.count}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 9. Dot Indicator Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const dots = [
  { label: "Active Clients", dot: "bg-emerald-400" },
  { label: "In Review", dot: "bg-amber-400" },
  { label: "Closed Deals", dot: "bg-white/30" },
  { label: "High Priority", dot: "bg-red-400" },
];

export function DotIndicatorTags() {
  return (
    <div className="flex flex-col gap-2">
      {dots.map((d) => (
        <span key={d.label} className="flex items-center gap-2.5">
          <span className={`w-2 h-2 rounded-full ${d.dot} shrink-0`} />
          <span className="text-sm font-body text-white/70">{d.label}</span>
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 10. Tag Group (Stacked / Overlapping)
 * ─────────────────────────────────────────────────────────────────────────── */

const stackColors = [
  "bg-gold-400 text-charcoal-900",
  "bg-amber-500 text-charcoal-900",
  "bg-white/20 text-white",
  "bg-white/12 text-white/75",
  "bg-white/8 text-white/55",
];
const stackLabels = ["Design", "Dev", "Strategy", "Marketing", "Operations"];

export function StackedTagGroup() {
  return (
    <div className="flex items-center">
      {stackLabels.map((label, i) => (
        <span
          key={label}
          style={{
            marginLeft: i === 0 ? 0 : "-0.5rem",
            zIndex: stackLabels.length - i,
          }}
          className={`relative inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border border-white/10 ${stackColors[i]} shadow-sm`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 11. Animated Entry Tags
 * ─────────────────────────────────────────────────────────────────────────── */

const animatedTags = [
  "Leadership",
  "Innovation",
  "Scalability",
  "Performance",
  "Trust",
  "Excellence",
];

export function AnimatedEntryTags() {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {animatedTags.map((tag, idx) => (
        <motion.span
          key={tag}
          variants={{
            hidden: { opacity: 0, scale: 0.7, y: 8 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          style={{ zIndex: animatedTags.length - idx }}
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
            idx % 3 === 0
              ? "gradient-gold text-charcoal-900"
              : idx % 3 === 1
                ? "bg-white/12 border border-white/20 text-white/75"
                : "border border-white/15 text-white/55"
          }`}
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 12. Theme Variants (Dark / Light comparison)
 * ─────────────────────────────────────────────────────────────────────────── */

const themeTagSet = ["Product", "Design", "Launch"];

export function ThemeVariantTags() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Dark */}
      <div className="rounded-xl p-3 bg-charcoal-900 border border-white/10 space-y-2">
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
          Dark
        </p>
        <div className="flex flex-col gap-1.5">
          {themeTagSet.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-white/75 text-xs font-semibold w-fit"
            >
              <Briefcase size={10} className="text-gold-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Light */}
      <div className="rounded-xl p-3 bg-gold-50 border border-gold-200/60 space-y-2">
        <p className="text-[10px] font-bold text-gold-700/60 uppercase tracking-widest mb-2">
          Light
        </p>
        <div className="flex flex-col gap-1.5">
          {themeTagSet.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-700 border border-gold-500/25 text-xs font-semibold w-fit"
            >
              <Briefcase size={10} className="text-gold-600" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import {
  ArrowRight,
  BarChart2,
  CheckCircle,
  Globe,
  Headphones,
  Layers,
  Lock,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

/* ─── Shared Types ───────────────────────────────────────────────────────── */

interface BaseListProps {
  className?: string;
}

/* ─── 1. Disc List ───────────────────────────────────────────────────────── */

interface DiscListProps extends BaseListProps {
  items?: string[];
}

const defaultDiscItems = [
  "Increase revenue with data-driven strategies",
  "Streamline operations and reduce overhead costs",
  "Build lasting client relationships through trust",
  "Scale your team efficiently across global markets",
  "Leverage AI insights for competitive advantage",
];

export function DiscList({
  items = defaultDiscItems,
  className = "",
}: DiscListProps) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-white/80 font-body text-sm leading-relaxed"
        >
          <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── 2. Check Icon List ─────────────────────────────────────────────────── */

interface CheckIconListProps extends BaseListProps {
  items?: string[];
}

const defaultCheckItems = [
  "24/7 dedicated account management team",
  "Quarterly performance reviews & reporting",
  "Custom onboarding and migration support",
  "SLA-backed 99.9% uptime guarantee",
  "GDPR and SOC 2 Type II compliant",
];

export function CheckIconList({
  items = defaultCheckItems,
  className = "",
}: CheckIconListProps) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg
            className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-400"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 8l2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white/80 font-body text-sm leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ─── 3. Border Accent List ──────────────────────────────────────────────── */

interface BorderAccentListProps extends BaseListProps {
  items?: string[];
}

const defaultBorderItems = [
  "Enterprise-grade security infrastructure",
  "Real-time analytics dashboard access",
  "White-label solutions for agencies",
  "API integrations with 200+ platforms",
];

export function BorderAccentList({
  items = defaultBorderItems,
  className = "",
}: BorderAccentListProps) {
  return (
    <ul className={`space-y-3 list-none ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="pl-4 border-l-2 border-gold-400 text-white/80 font-body text-sm leading-relaxed py-0.5"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── 4. Decimal List ────────────────────────────────────────────────────── */

interface DecimalListProps extends BaseListProps {
  items?: string[];
}

const defaultDecimalItems = [
  "Conduct a comprehensive business audit",
  "Define strategic growth objectives",
  "Deploy targeted marketing campaigns",
  "Monitor KPIs and iterate rapidly",
  "Scale successful initiatives globally",
];

export function DecimalList({
  items = defaultDecimalItems,
  className = "",
}: DecimalListProps) {
  return (
    <ol className={`space-y-2.5 ${className}`}>
      {items.map((item, idx) => (
        <li key={item} className="flex items-start gap-3">
          <span className="font-display font-bold text-gold-400 text-sm tabular-nums w-5 flex-shrink-0 pt-0.5">
            {String(idx + 1).padStart(2, "0")}.
          </span>
          <span className="text-white/80 font-body text-sm leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ─── 5. Gold Counter List ───────────────────────────────────────────────── */

interface GoldCounterListProps extends BaseListProps {
  items?: string[];
}

const defaultCounterItems = [
  "Discovery & strategy session",
  "Custom solution architecture",
  "Phased implementation rollout",
  "Training & change management",
];

export function GoldCounterList({
  items = defaultCounterItems,
  className = "",
}: GoldCounterListProps) {
  return (
    <ol className={`space-y-4 list-none ${className}`}>
      {items.map((item, idx) => (
        <li key={item} className="flex items-center gap-4">
          <span className="w-9 h-9 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 font-display font-bold text-charcoal-900 text-sm shadow-gold-sm">
            {idx + 1}
          </span>
          <span className="text-white/85 font-body text-sm leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ─── 6. Step List ───────────────────────────────────────────────────────── */

interface StepItem {
  title: string;
  description: string;
}

interface StepListProps extends BaseListProps {
  items?: StepItem[];
}

const defaultStepItems: StepItem[] = [
  {
    title: "Initial Consultation",
    description:
      "We assess your current position and map out growth opportunities.",
  },
  {
    title: "Strategy Development",
    description:
      "Our team crafts a tailored roadmap aligned to your business goals.",
  },
  {
    title: "Execution & Launch",
    description:
      "We implement campaigns with precision, tracking every metric.",
  },
  {
    title: "Optimise & Scale",
    description:
      "Continuous refinement ensures sustained, compounding returns.",
  },
];

export function StepList({
  items = defaultStepItems,
  className = "",
}: StepListProps) {
  return (
    <ol className={`space-y-5 list-none ${className}`}>
      {items.map((item, idx) => (
        <li key={item.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 font-display font-bold text-charcoal-900 text-xs shadow-gold-sm">
              {idx + 1}
            </span>
            {idx < items.length - 1 && (
              <span className="w-px flex-1 mt-2 bg-gold-400/25" />
            )}
          </div>
          <div className="pb-4">
            <p className="font-sans font-semibold text-white text-sm leading-snug mb-1">
              {item.title}
            </p>
            <p className="font-body text-white/55 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ─── 7. Description List ────────────────────────────────────────────────── */

interface DescriptionItem {
  term: string;
  definition: string;
}

interface DescriptionListProps extends BaseListProps {
  items?: DescriptionItem[];
}

const defaultDescriptionItems: DescriptionItem[] = [
  { term: "Founded", definition: "2012 — San Francisco, CA" },
  { term: "Clients", definition: "500+ across 40 countries" },
  { term: "Revenue Growth", definition: "Average 140% YoY for clients" },
  { term: "Team Size", definition: "120 specialists worldwide" },
  { term: "Rating", definition: "4.9 / 5.0 on G2 Crowd" },
];

export function DescriptionList({
  items = defaultDescriptionItems,
  className = "",
}: DescriptionListProps) {
  return (
    <dl
      className={`rounded-xl overflow-hidden border border-white/10 ${className}`}
    >
      {items.map((item, idx) => (
        <div
          key={item.term}
          className={`flex items-baseline gap-4 px-4 py-2.5 ${
            idx % 2 === 0 ? "bg-white/5" : "bg-transparent"
          }`}
        >
          <dt className="font-sans font-semibold text-gold-400 text-xs uppercase tracking-wide w-28 flex-shrink-0">
            {item.term}
          </dt>
          <dd className="font-body text-white/75 text-sm">{item.definition}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ─── 8. Checklist ───────────────────────────────────────────────────────── */

interface ChecklistItem {
  label: string;
  done: boolean;
}

interface ChecklistProps extends BaseListProps {
  items?: ChecklistItem[];
}

const defaultChecklistItems: ChecklistItem[] = [
  { label: "Brand identity guidelines finalised", done: true },
  { label: "Website redesign approved", done: true },
  { label: "Q3 campaign assets delivered", done: true },
  { label: "CRM integration testing", done: false },
  { label: "Launch email sequence drafted", done: false },
];

export function Checklist({
  items = defaultChecklistItems,
  className = "",
}: ChecklistProps) {
  return (
    <ul className={`space-y-2.5 list-none ${className}`}>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3">
          {item.done ? (
            <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
          ) : (
            <span className="w-4 h-4 rounded-full border border-white/25 flex-shrink-0" />
          )}
          <span
            className={`font-body text-sm leading-snug ${
              item.done
                ? "text-white/80 line-through decoration-white/30"
                : "text-white/55"
            }`}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ─── 9. Feature List ────────────────────────────────────────────────────── */

interface FeatureItem {
  icon: React.ReactNode;
  label: string;
  description: string;
}

interface FeatureListProps extends BaseListProps {
  items?: FeatureItem[];
}

const defaultFeatureItems: FeatureItem[] = [
  {
    icon: <Rocket className="w-4 h-4" />,
    label: "Fast Deployment",
    description: "Go live in days, not months",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    label: "Enterprise Security",
    description: "SOC 2 & ISO 27001 certified",
  },
  {
    icon: <BarChart2 className="w-4 h-4" />,
    label: "Real-Time Analytics",
    description: "Live dashboards & alerts",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Global CDN",
    description: "99.9% uptime, 150+ PoPs",
  },
  {
    icon: <Headphones className="w-4 h-4" />,
    label: "Priority Support",
    description: "24/7 dedicated account team",
  },
];

export function FeatureList({
  items = defaultFeatureItems,
  className = "",
}: FeatureListProps) {
  return (
    <ul className={`space-y-3 list-none ${className}`}>
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3.5">
          <span className="mt-0.5 w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-400/20 flex items-center justify-center flex-shrink-0 text-gold-400">
            {item.icon}
          </span>
          <div>
            <p className="font-sans font-semibold text-white text-sm leading-snug">
              {item.label}
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed mt-0.5">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ─── 10. Tag List ───────────────────────────────────────────────────────── */

interface TagListProps extends BaseListProps {
  items?: string[];
}

const defaultTagItems = [
  "Strategy",
  "Branding",
  "Digital Marketing",
  "SEO",
  "Content",
  "Analytics",
  "CRM",
  "Automation",
  "E-commerce",
  "UX Design",
  "Consulting",
  "Growth",
];

export function TagList({
  items = defaultTagItems,
  className = "",
}: TagListProps) {
  const goldShades = [
    "bg-gold-500/15 text-gold-300 border-gold-400/25",
    "bg-gold-400/10 text-gold-400 border-gold-500/20",
    "bg-gold-600/15 text-gold-200 border-gold-500/25",
  ];

  return (
    <ul className={`flex flex-wrap gap-2 list-none ${className}`}>
      {items.map((tag, idx) => (
        <li key={tag}>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-semibold border ${goldShades[idx % goldShades.length]}`}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Default export: composite showcase of all variants ─────────────────── */

export default function ListStyles() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
          Disc List
        </p>
        <DiscList />
      </div>
      <div>
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
          Check Icon List
        </p>
        <CheckIconList />
      </div>
      <div>
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
          Border Accent List
        </p>
        <BorderAccentList />
      </div>
      <div>
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
          Step List
        </p>
        <StepList />
      </div>
      <div>
        <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
          Tag List
        </p>
        <TagList />
      </div>
    </div>
  );
}

// Re-export icons used in FeatureList for external use
export { ArrowRight, Layers, Lock, Zap };

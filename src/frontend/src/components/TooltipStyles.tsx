import {
  Copy,
  Edit2,
  Info,
  MoreHorizontal,
  Search,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/* ─── Shared tooltip motion variants ─────────────────────────────────────── */

const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.92, y: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -4,
    transition: { duration: 0.13, ease: "easeIn" as const },
  },
};

const tooltipVariantsDown = {
  hidden: { opacity: 0, scale: 0.92, y: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 4,
    transition: { duration: 0.13, ease: "easeIn" as const },
  },
};

const tooltipVariantsLeft = {
  hidden: { opacity: 0, scale: 0.92, x: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    x: -4,
    transition: { duration: 0.13, ease: "easeIn" as const },
  },
};

const tooltipVariantsRight = {
  hidden: { opacity: 0, scale: 0.92, x: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    x: 4,
    transition: { duration: 0.13, ease: "easeIn" as const },
  },
};

/* ─── 1. Directional Tooltips ────────────────────────────────────────────── */

function DirectionalTip({
  direction,
}: {
  direction: "top" | "bottom" | "left" | "right";
}) {
  const [show, setShow] = useState(false);

  const arrowClasses: Record<string, string> = {
    top: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 gradient-gold",
    bottom:
      "absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 gradient-gold",
    left: "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 gradient-gold",
    right:
      "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 gradient-gold",
  };

  const tooltipPosition: Record<string, string> = {
    top: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5",
    bottom: "absolute top-full left-1/2 -translate-x-1/2 mt-2.5",
    left: "absolute right-full top-1/2 -translate-y-1/2 mr-2.5",
    right: "absolute left-full top-1/2 -translate-y-1/2 ml-2.5",
  };

  const variants =
    direction === "top"
      ? tooltipVariants
      : direction === "bottom"
        ? tooltipVariantsDown
        : direction === "left"
          ? tooltipVariantsLeft
          : tooltipVariantsRight;

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-xs font-sans font-semibold hover:bg-white/15 hover:text-white transition-all capitalize"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {direction}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${tooltipPosition[direction]} z-50 whitespace-nowrap`}
          >
            <div className="relative gradient-gold text-charcoal-900 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-gold-sm">
              Tooltip {direction}
              <span className={arrowClasses[direction]} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DirectionalTooltips() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center py-4">
      {(["top", "bottom", "left", "right"] as const).map((dir) => (
        <DirectionalTip key={dir} direction={dir} />
      ))}
    </div>
  );
}

/* ─── 2. Rich Tooltip ────────────────────────────────────────────────────── */

export function RichTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center py-4">
      <div className="relative inline-block">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-gold text-charcoal-900 text-sm font-semibold shadow-gold-sm hover:opacity-90 transition-opacity"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Sparkles className="w-4 h-4" />
          Hover for Insight
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-56"
            >
              <div className="bg-charcoal-800 border border-gold-400/30 rounded-xl shadow-gold p-4">
                <div className="border-t-2 border-gold-400 -mx-4 -mt-4 mb-3 rounded-t-xl" />
                <div className="flex items-start gap-2.5 mb-2">
                  <Info className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <p className="font-sans font-bold text-white text-sm leading-snug">
                    Pro Insight
                  </p>
                </div>
                <p className="font-body text-white/65 text-xs leading-relaxed">
                  Leveraging data-driven strategies can increase conversion
                  rates by up to 3× within the first quarter.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── 3. Image Tooltip ───────────────────────────────────────────────────── */

export function ImageTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center py-6">
      <div className="relative inline-block">
        <button
          type="button"
          className="text-gold-400 font-sans font-semibold text-sm underline underline-offset-4 decoration-gold-400/50 hover:decoration-gold-400 transition-all"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          View Project
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-48"
            >
              <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold overflow-hidden">
                {/* Preview image placeholder */}
                <div className="w-full h-24 gradient-gold flex items-center justify-center">
                  <span className="font-display font-bold text-charcoal-900 text-sm">
                    Project Preview
                  </span>
                </div>
                <div className="px-3 py-2">
                  <p className="font-sans font-semibold text-white text-xs">
                    Meridian Capital Rebrand
                  </p>
                  <p className="font-body text-white/50 text-xs mt-0.5">
                    Strategy · Branding · Digital
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── 4. Action Tooltip ──────────────────────────────────────────────────── */

export function ActionTooltip() {
  const [show, setShow] = useState(false);
  const [flash, setFlash] = useState("");

  const handleAction = (label: string) => {
    setFlash(label);
    setTimeout(() => setFlash(""), 1200);
    setShow(false);
  };

  return (
    <div className="flex justify-center items-center py-4 gap-4">
      <div className="relative inline-block">
        <button
          type="button"
          className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white/75 hover:bg-white/15 hover:text-white transition-all"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          aria-label="More options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-40"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleAction("Edit")}
                  className="flex items-center gap-2.5 w-full px-3.5 py-2.5 text-white/80 hover:bg-white/8 hover:text-white text-xs font-sans transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5 text-gold-400" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleAction("Duplicate")}
                  className="flex items-center gap-2.5 w-full px-3.5 py-2.5 text-white/80 hover:bg-white/8 hover:text-white text-xs font-sans transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-gold-400" />
                  Duplicate
                </button>
                <div className="h-px bg-white/8 mx-2" />
                <button
                  type="button"
                  onClick={() => handleAction("Delete")}
                  className="flex items-center gap-2.5 w-full px-3.5 py-2.5 text-red-400 hover:bg-red-500/10 text-xs font-sans transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {flash && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs font-sans text-gold-400"
          >
            {flash} clicked
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── 5. Status Badge Tooltip ────────────────────────────────────────────── */

const statuses = [
  {
    label: "Active",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    message: "Service is running normally with 99.9% uptime.",
  },
  {
    label: "Pending",
    color: "bg-gold-500/20 text-gold-400 border-gold-500/30",
    message: "Awaiting approval — expected within 24 hours.",
  },
  {
    label: "Error",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    message: "Connection failed. Check logs for error code E-502.",
  },
];

export function StatusBadgeTooltip() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center py-4">
      {statuses.map((s, i) => (
        <div key={s.label} className="relative inline-block">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default ${s.color}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
            {s.label}
          </span>
          <AnimatePresence>
            {hovered === i && (
              <motion.div
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-52"
              >
                <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold px-3.5 py-2.5">
                  <p className="font-body text-white/80 text-xs leading-relaxed">
                    {s.message}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── 6. Keyboard Shortcut Tooltip ──────────────────────────────────────── */

export function KeyboardShortcutTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center py-4">
      <div className="relative inline-block">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-sans font-semibold hover:bg-white/15 transition-all"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Search className="w-4 h-4 text-gold-400" />
          Search
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-44"
            >
              <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold px-3.5 py-2.5">
                <p className="font-sans text-white/80 text-xs mb-2">
                  Quick search
                </p>
                <div className="flex items-center gap-1.5">
                  <kbd className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-charcoal-900 border border-white/20 text-white/70 font-mono text-xs shadow-sm">
                    ⌘
                  </kbd>
                  <kbd className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-charcoal-900 border border-white/20 text-white/70 font-mono text-xs shadow-sm">
                    K
                  </kbd>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── 7. Popover Card ────────────────────────────────────────────────────── */

const popoverVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 8,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const stats = [
  { icon: "💼", label: "Active Projects", value: "12" },
  { icon: "📈", label: "Revenue Growth", value: "+140%" },
  { icon: "⭐", label: "Client Rating", value: "4.9/5" },
];

export function PopoverCard() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="flex justify-center py-4">
      <div ref={ref} className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2 rounded-xl gradient-gold text-charcoal-900 text-sm font-semibold shadow-gold-sm hover:opacity-90 transition-opacity"
        >
          Show Details
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={popoverVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64"
            >
              <div className="bg-charcoal-800 border border-white/15 rounded-2xl shadow-gold overflow-hidden">
                <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/10">
                  <p className="font-sans font-bold text-white text-sm">
                    Account Summary
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="px-4 py-3 space-y-3">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="text-base">{s.icon}</span>
                      <span className="font-body text-white/60 text-xs flex-1">
                        {s.label}
                      </span>
                      <span className="font-sans font-bold text-gold-400 text-sm">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── 8. Color Swatch Popover ────────────────────────────────────────────── */

const swatches = [
  { name: "Gold", hex: "#D4A843", bg: "bg-gold-400" },
  { name: "Charcoal", hex: "#1A1A2E", bg: "bg-charcoal-900" },
  { name: "White", hex: "#F8F8F8", bg: "bg-white" },
  { name: "Amber", hex: "#F59E0B", bg: "bg-amber-500" },
  { name: "Red", hex: "#EF4444", bg: "bg-red-500" },
];

export function ColorSwatchPopover() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === null) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [active]);

  return (
    <div
      ref={ref}
      className="flex flex-wrap gap-3 justify-center items-center py-4"
    >
      {swatches.map((swatch, i) => (
        <div key={swatch.name} className="relative">
          <button
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            className={`w-9 h-9 rounded-full border-2 transition-all shadow-md ${swatch.bg} ${
              active === i
                ? "border-gold-400 scale-110 shadow-gold-sm"
                : "border-white/20 hover:scale-105"
            }`}
            aria-label={swatch.name}
          />
          <AnimatePresence>
            {active === i && (
              <motion.div
                variants={popoverVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-40"
              >
                <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold p-3">
                  <div
                    className={`w-full h-10 rounded-lg mb-2.5 ${swatch.bg} border border-white/10`}
                  />
                  <p className="font-sans font-bold text-white text-xs">
                    {swatch.name}
                  </p>
                  <p className="font-mono text-gold-400 text-xs mt-0.5">
                    {swatch.hex}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── 9. Progress Tooltip ────────────────────────────────────────────────── */

export function ProgressTooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="py-6 px-2">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans text-xs font-semibold text-white/60">
          Project Progress
        </span>
        <span className="font-sans text-xs font-bold text-gold-400">80%</span>
      </div>
      <div
        className="relative h-3 bg-white/10 rounded-full cursor-pointer overflow-visible"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {/* Progress fill */}
        <div className="h-full w-4/5 gradient-gold rounded-full shadow-gold-sm" />

        {/* Tooltip */}
        <AnimatePresence>
          {show && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 whitespace-nowrap"
            >
              <div className="relative bg-charcoal-800 border border-gold-400/30 rounded-xl shadow-gold px-3.5 py-2">
                <p className="font-sans font-semibold text-white text-xs">
                  80% Complete
                </p>
                <p className="font-body text-gold-400 text-xs mt-0.5">
                  4 of 5 milestones
                </p>
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-charcoal-800 border-r border-b border-gold-400/30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-between mt-1.5">
        {[1, 2, 3, 4, 5].map((m) => (
          <span
            key={m}
            className={`text-[10px] font-mono ${m <= 4 ? "text-gold-400" : "text-white/30"}`}
          >
            M{m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── 10. Nested Tooltip ─────────────────────────────────────────────────── */

export function NestedTooltip() {
  const [level1, setLevel1] = useState(false);
  const [level2, setLevel2] = useState(false);

  return (
    <div className="flex justify-center py-4">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-sans font-semibold hover:bg-white/15 transition-all"
          onMouseEnter={() => setLevel1(true)}
          onMouseLeave={() => {
            setLevel1(false);
            setLevel2(false);
          }}
        >
          Hover Me
        </button>
        <AnimatePresence>
          {level1 && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-56"
              onMouseEnter={() => setLevel1(true)}
              onMouseLeave={() => {
                setLevel1(false);
                setLevel2(false);
              }}
            >
              <div className="bg-charcoal-800 border border-white/15 rounded-xl shadow-gold px-4 py-3">
                <p className="font-body text-white/80 text-xs leading-relaxed">
                  This is level 1{" "}
                  <span
                    className="relative inline-block text-gold-400 underline underline-offset-2 decoration-gold-400/50 cursor-default"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setLevel2(true);
                    }}
                    onMouseLeave={() => setLevel2(false)}
                  >
                    and this too
                    <AnimatePresence>
                      {level2 && (
                        <motion.span
                          variants={tooltipVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-[60] whitespace-nowrap pointer-events-none"
                        >
                          <span className="inline-block gradient-gold text-charcoal-900 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-gold-sm">
                            Level 2 tooltip!
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "split" | "underline" | "outlined" | "badge";
  outlineText?: string;
  darkMode?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  variant = "default",
  outlineText,
  darkMode = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";
  const titleColor = darkMode ? "text-white" : "text-charcoal-900";
  const subtitleColor = darkMode ? "text-white/60" : "text-charcoal-600";
  const eyebrowColor = darkMode ? "text-gold-400" : "text-gold-600";

  const renderHighlightedTitle = (
    titleText: string,
    highlightText?: string,
  ) => {
    if (!highlightText) {
      return <span>{titleText}</span>;
    }
    const idx = titleText.indexOf(highlightText);
    if (idx === -1) {
      return (
        <>
          <span>{titleText}</span>
          <span
            className={`font-display italic ${darkMode ? "text-gold-400" : "text-gold-500"}`}
          >
            {" "}
            {highlightText}
          </span>
        </>
      );
    }
    const before = titleText.slice(0, idx);
    const after = titleText.slice(idx + highlightText.length);
    return (
      <>
        {before && <span>{before}</span>}
        <span
          className={`font-display italic ${darkMode ? "text-gold-400" : "text-gold-500"}`}
        >
          {highlightText}
        </span>
        {after && <span>{after}</span>}
      </>
    );
  };

  if (variant === "default") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className={`flex flex-col ${alignClass} ${className}`}
      >
        {eyebrow && (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full border ${
              darkMode
                ? "border-gold-400/30 bg-gold-500/10 text-gold-400"
                : "border-gold-500/40 bg-gold-500/8 text-gold-600"
            } text-xs font-semibold tracking-widest uppercase mb-4`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-display text-4xl lg:text-5xl font-bold leading-tight mb-5 ${titleColor}`}
        >
          {renderHighlightedTitle(title, highlight)}
        </h2>
        {subtitle && (
          <p
            className={`text-lg max-w-2xl font-body leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  if (variant === "split") {
    const splitLines = title.split("|");
    const firstLine = splitLines[0]?.trim() ?? title;
    const secondLine = splitLines[1]?.trim() ?? highlight;
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className={`flex flex-col ${alignClass} ${className}`}
      >
        {eyebrow && (
          <span
            className={`text-sm font-semibold tracking-widest uppercase mb-4 ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-display font-bold leading-tight mb-5 ${titleColor}`}
        >
          <span className="block text-4xl lg:text-5xl">{firstLine}</span>
          {secondLine && (
            <span
              className={`block text-4xl lg:text-5xl font-display italic ${
                darkMode ? "text-gold-400" : "text-gold-500"
              }`}
            >
              {secondLine}
            </span>
          )}
        </h2>
        {subtitle && (
          <p
            className={`text-lg max-w-2xl font-body leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  if (variant === "underline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className={`flex flex-col ${alignClass} ${className}`}
      >
        {eyebrow && (
          <span
            className={`text-sm font-semibold tracking-widest uppercase mb-4 ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-display text-4xl lg:text-5xl font-bold leading-tight mb-5 ${titleColor}`}
        >
          <UnderlineTitle
            title={title}
            highlight={highlight}
            darkMode={darkMode}
          />
        </h2>
        {subtitle && (
          <p
            className={`text-lg max-w-2xl font-body leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  if (variant === "outlined") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className={`flex flex-col ${alignClass} relative ${className}`}
      >
        {eyebrow && (
          <span
            className={`text-sm font-semibold tracking-widest uppercase mb-4 ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        )}
        {/* Ghost outlined text */}
        {(outlineText ?? title) && (
          <span
            aria-hidden="true"
            className={`absolute -top-8 ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"} font-display font-black text-[5rem] lg:text-[7rem] leading-none whitespace-nowrap select-none pointer-events-none ${darkMode ? "text-stroke-white" : "text-stroke-gold"}`}
          >
            {outlineText ?? title.toUpperCase()}
          </span>
        )}
        <h2
          className={`relative z-10 font-display text-4xl lg:text-5xl font-bold leading-tight mb-5 ${titleColor}`}
        >
          {renderHighlightedTitle(title, highlight)}
        </h2>
        {subtitle && (
          <p
            className={`relative z-10 text-lg max-w-2xl font-body leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  if (variant === "badge") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className={`flex flex-col ${alignClass} ${className}`}
      >
        {eyebrow && (
          <span
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 ${
              darkMode
                ? "gradient-gold text-charcoal-900"
                : "bg-gold-500 text-charcoal-900"
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-display text-4xl lg:text-5xl font-bold leading-tight mb-5 ${titleColor}`}
        >
          {renderHighlightedTitle(title, highlight)}
        </h2>
        {subtitle && (
          <p
            className={`text-lg max-w-2xl font-body leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  return null;
}

// Separate component to handle underline animation trigger on viewport entry
function UnderlineTitle({
  title,
  highlight,
  darkMode,
}: {
  title: string;
  highlight?: string;
  darkMode: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-underline-draw");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!highlight) {
    return (
      <span className="relative inline-block">
        {title}
        <span
          ref={ref}
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${darkMode ? "from-gold-400 to-gold-600" : "from-gold-500 to-gold-700"} animate-underline-draw`}
          style={{ width: 0 }}
        />
      </span>
    );
  }

  const idx = title.indexOf(highlight);
  if (idx === -1) {
    return (
      <>
        <span className="relative inline-block">
          {title}
          <span
            ref={ref}
            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${darkMode ? "from-gold-400 to-gold-600" : "from-gold-500 to-gold-700"} animate-underline-draw`}
            style={{ width: 0 }}
          />
        </span>
        <span
          className={`font-display italic ${darkMode ? "text-gold-400" : "text-gold-500"}`}
        >
          {" "}
          {highlight}
        </span>
      </>
    );
  }

  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);
  return (
    <>
      {before && <span>{before}</span>}
      <span className="relative inline-block">
        <span
          className={`font-display italic ${darkMode ? "text-gold-400" : "text-gold-500"}`}
        >
          {highlight}
        </span>
        <span
          ref={ref}
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${darkMode ? "from-gold-400 to-gold-600" : "from-gold-500 to-gold-700"} animate-underline-draw`}
          style={{ width: 0 }}
        />
      </span>
      {after && <span>{after}</span>}
    </>
  );
}

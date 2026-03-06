import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import type { ReactNode } from "react";

type ParagraphVariant =
  | "lead"
  | "body"
  | "caption"
  | "blockquote"
  | "pull-quote"
  | "callout";

type ParagraphStylesProps = {
  variant?: ParagraphVariant;
  children: ReactNode;
  className?: string;
  /** For blockquote and pull-quote: attribution line */
  author?: string;
  /** For callout: optional icon override (defaults to Info) */
  icon?: ReactNode;
  /** For caption: italic style toggle */
  italic?: boolean;
};

export default function ParagraphStyles({
  variant = "body",
  children,
  className,
  author,
  icon,
  italic = true,
}: ParagraphStylesProps) {
  // ── Lead ───────────────────────────────────────────────────────────────────
  if (variant === "lead") {
    return (
      <p
        className={cn(
          "text-xl md:text-2xl font-semibold leading-relaxed",
          "pl-5 border-l-4 border-gold-500",
          "text-foreground/85 font-body",
          className,
        )}
      >
        {children}
      </p>
    );
  }

  // ── Body ───────────────────────────────────────────────────────────────────
  if (variant === "body") {
    return (
      <p
        className={cn(
          "text-base leading-relaxed text-muted-foreground font-body",
          className,
        )}
      >
        {children}
      </p>
    );
  }

  // ── Caption ────────────────────────────────────────────────────────────────
  if (variant === "caption") {
    return (
      <p
        className={cn(
          "text-sm leading-relaxed text-muted-foreground font-body",
          italic && "italic",
          className,
        )}
      >
        {children}
      </p>
    );
  }

  // ── Blockquote ─────────────────────────────────────────────────────────────
  if (variant === "blockquote") {
    return (
      <figure className={cn("not-prose", className)}>
        <blockquote
          className={cn(
            "relative pl-6 pr-6 py-5",
            "border-l-4 border-gold-500",
            "bg-gold-500/5 rounded-r-2xl",
            "italic text-lg leading-relaxed text-foreground/80 font-body",
          )}
        >
          <span
            aria-hidden="true"
            className="absolute -top-2 left-4 font-display text-5xl text-gold-500/30 leading-none select-none"
          >
            "
          </span>
          {children}
        </blockquote>
        {author && (
          <figcaption className="mt-3 pl-6 text-sm text-muted-foreground font-body">
            — {author}
          </figcaption>
        )}
      </figure>
    );
  }

  // ── Pull Quote ─────────────────────────────────────────────────────────────
  if (variant === "pull-quote") {
    return (
      <figure className={cn("not-prose text-center px-4 py-2", className)}>
        <div className="relative inline-block">
          {/* Opening decorative quote */}
          <span
            aria-hidden="true"
            className="font-display text-7xl text-gold-400/25 leading-none select-none absolute -top-6 -left-4"
          >
            "
          </span>

          <blockquote className="font-display text-3xl md:text-4xl font-bold italic text-gold-500 leading-snug relative z-10">
            {children}
          </blockquote>

          {/* Closing decorative quote */}
          <span
            aria-hidden="true"
            className="font-display text-7xl text-gold-400/25 leading-none select-none absolute -bottom-10 -right-4"
          >
            "
          </span>
        </div>

        {author && (
          <figcaption className="mt-8 text-sm text-muted-foreground font-body italic">
            — {author}
          </figcaption>
        )}
      </figure>
    );
  }

  // ── Callout ────────────────────────────────────────────────────────────────
  if (variant === "callout") {
    return (
      <div
        className={cn(
          "flex gap-4 px-5 py-4 rounded-xl",
          "bg-gold-500/8 border border-gold-500/25",
          "text-foreground/80",
          className,
        )}
      >
        <div className="flex-shrink-0 mt-0.5 text-gold-500">
          {icon ?? <Info size={18} strokeWidth={2} />}
        </div>
        <p className="text-base leading-relaxed font-body">{children}</p>
      </div>
    );
  }

  // Fallback
  return (
    <p className={cn("text-base leading-relaxed font-body", className)}>
      {children}
    </p>
  );
}

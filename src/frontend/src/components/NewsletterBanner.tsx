import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "newsletter_dismissed";

export default function NewsletterBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check if already dismissed
    if (localStorage.getItem(STORAGE_KEY) === "true") return;

    setDismissed(false);

    // Show after 5s
    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
    // Remove from DOM after slide-down transition
    setTimeout(() => setDismissed(true), 500);
  };

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    // Auto-dismiss after 2s
    setTimeout(() => {
      handleDismiss();
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubscribe();
  };

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Newsletter signup"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900 border-t border-gold-500/30 shadow-[0_-8px_32px_oklch(0_0_0/0.4)] transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p className="font-sans font-semibold text-white text-sm sm:text-base leading-snug">
              Stay ahead of the curve
            </p>
            <p className="text-white/50 text-xs sm:text-sm font-body mt-0.5">
              Get weekly insights on strategy, growth, and market trends.
            </p>
          </div>

          {/* Input + button or success message */}
          {submitted ? (
            <div
              data-ocid="newsletter.success_state"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold-500/15 border border-gold-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
              <span className="text-gold-300 text-sm font-medium">
                You're in! Check your inbox.
              </span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                data-ocid="newsletter.input"
                className="bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:border-gold-500/60 focus:ring-gold-500/30 h-9 text-sm min-w-[200px]"
              />
              <Button
                onClick={handleSubscribe}
                data-ocid="newsletter.submit_button"
                className="gradient-gold text-charcoal-900 font-semibold h-9 px-5 text-sm hover:opacity-90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={handleDismiss}
            data-ocid="newsletter.close_button"
            aria-label="Dismiss newsletter banner"
            className="absolute top-3 right-4 sm:relative sm:top-auto sm:right-auto p-1.5 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

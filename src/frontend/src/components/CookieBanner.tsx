import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="bg-charcoal-900/96 backdrop-blur-xl border border-white/12 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
              <Cookie size={18} className="text-gold-400" strokeWidth={1.75} />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-0.5">
                We use cookies
              </p>
              <p className="text-white/55 text-xs font-body leading-relaxed">
                We use cookies to improve your experience, analyse traffic, and
                personalise content. You can manage your preferences at any
                time.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <Button
                variant="ghost"
                size="sm"
                data-ocid="cookie.cancel_button"
                onClick={handleDecline}
                className="flex-1 sm:flex-none text-white/60 hover:text-white hover:bg-white/10 border border-white/15 text-xs h-8 px-4"
              >
                Decline
              </Button>
              <Button
                size="sm"
                data-ocid="cookie.accept_button"
                onClick={handleAccept}
                className="flex-1 sm:flex-none gradient-gold text-charcoal-900 font-bold text-xs h-8 px-4 hover:opacity-90 transition-opacity shadow-gold-sm"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

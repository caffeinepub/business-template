import { useEffect, useState } from "react";

const SESSION_KEY = "nexara_loaded";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Skip on subsequent mounts (same session)
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setHidden(true);
      return;
    }

    // Mark as loaded so refresh doesn't show it again in the same session
    sessionStorage.setItem(SESSION_KEY, "true");

    // Start exit after 1200ms
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1200);

    // Fully unmount after 1900ms (1200 + 700ms transition)
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 1900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <output
      aria-label="Loading Nexara"
      className={`fixed inset-0 z-[9999] bg-charcoal-950 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Pulsing rings */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outermost ring — animate-ping */}
        <div
          className="absolute w-32 h-32 rounded-full border border-gold-500/20 animate-ping"
          style={{ animationDuration: "2s" }}
          aria-hidden="true"
        />
        {/* Middle ring */}
        <div
          className="absolute w-20 h-20 rounded-full border border-gold-500/30 animate-ping"
          style={{ animationDuration: "1.4s", animationDelay: "0.3s" }}
          aria-hidden="true"
        />
        {/* Logo mark */}
        <div className="relative z-10 w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
          <span className="font-display font-black text-charcoal-900 text-2xl leading-none">
            N
          </span>
        </div>
      </div>

      {/* Brand name */}
      <span className="font-sans font-bold text-2xl text-white tracking-tight">
        Nexara
      </span>

      {/* Tagline */}
      <p className="text-white/35 text-sm font-body mt-1.5 tracking-wide">
        Building your future
      </p>
    </output>
  );
}

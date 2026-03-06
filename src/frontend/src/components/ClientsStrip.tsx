export default function ClientsStrip() {
  const companies = [
    "ATHOS",
    "MERIDIAN",
    "VANTA",
    "COREX",
    "LUMIS",
    "ORBIO",
    "KLINE",
    "DATRIX",
  ];

  // Duplicate for seamless infinite loop — use suffix to distinguish copies
  const allCompanies = [
    ...companies.map((c) => ({ name: c, key: `a-${c}` })),
    ...companies.map((c) => ({ name: c, key: `b-${c}` })),
  ];

  return (
    <section className="py-12 bg-charcoal-950 border-y border-white/5 overflow-hidden">
      {/* Label */}
      <p className="text-center text-xs font-sans font-medium tracking-widest uppercase text-white/30 mb-8">
        Trusted by Industry Leaders
      </p>

      {/* Marquee container with fade edges */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, oklch(0 0 0) 12%, oklch(0 0 0) 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, oklch(0 0 0) 12%, oklch(0 0 0) 88%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {allCompanies.map((company) => (
            <div
              key={company.key}
              className="flex-shrink-0 mx-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03]"
            >
              <span className="font-sans font-bold tracking-widest text-xs uppercase text-white/30 whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

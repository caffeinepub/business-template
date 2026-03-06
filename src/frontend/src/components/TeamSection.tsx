import { Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Sarah Whitmore",
    role: "CEO & Co-Founder",
    bio: "Former McKinsey partner. 18 years driving transformation for Fortune 500 leaders.",
    fullBio:
      "Sarah led global transformation programs at McKinsey for 12 years before co-founding Nexara. She's helped more than 80 companies redesign their strategy and operating model. She believes great consulting is 10% insight and 90% execution.",
    image: "/assets/generated/team-sarah.dim_400x400.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Holt",
    role: "Chief Strategy Officer",
    bio: "Ex-Bain. Specialist in GTM strategy and revenue model innovation across SaaS and fintech.",
    fullBio:
      "Marcus spent 8 years at Bain advising SaaS and fintech scale-ups on go-to-market and pricing. He has led more than 40 revenue model transformations and holds an MBA from INSEAD. He obsesses over unit economics.",
    image: "/assets/generated/team-marcus.dim_400x400.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Nair",
    role: "Head of Analytics",
    bio: "Data scientist turned strategist. Built analytics functions at two unicorn startups.",
    fullBio:
      "Priya started as a PhD data scientist and crossed over to strategy after seeing too many brilliant insights gather dust. She built the analytics infrastructure at two unicorns before joining Nexara to make data actually change decisions.",
    image: "/assets/generated/team-priya.dim_400x400.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Okafor",
    role: "VP Client Success",
    bio: "15 years building enterprise relationships and delivering measurable outcomes clients rave about.",
    fullBio:
      "James has spent 15 years inside high-stakes enterprise relationships across three continents. His clients consistently describe him as the person who makes the impossible feel straightforward. He believes great client success is about radical transparency.",
    image: "/assets/generated/team-james.dim_400x400.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 section-mid">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="default"
            eyebrow="The Team"
            title="The People Behind Your Growth"
            highlight="Your Growth"
            subtitle="Senior practitioners, not junior associates. You get expertise and accountability at every level."
            darkMode={false}
            align="center"
          />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              data-ocid={`team.item.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-gold-500/40 hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

                {/* Social links overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gold-500/40 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gold-500/40 transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter size={14} />
                  </a>
                </div>

                {/* Bio overlay — slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10">
                  <div className="bg-charcoal-900/92 backdrop-blur-sm p-5 border-t border-white/10">
                    <p className="text-white text-xs leading-relaxed font-body">
                      {member.fullBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-sans font-semibold text-base text-foreground mb-0.5">
                  {member.name}
                </h3>
                <div className="text-gold-500 text-xs font-semibold tracking-wide mb-2 uppercase">
                  {member.role}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

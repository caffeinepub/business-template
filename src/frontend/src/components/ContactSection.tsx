import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nexara.co",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) 555-0199",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "350 Fifth Avenue, New York, NY 10118",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    mutate(
      { name: name.trim(), email: email.trim(), message: message.trim() },
      {
        onSuccess: () => {
          toast.success("Message sent! We'll be in touch within 24 hours.");
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section id="contact" className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-400 tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Let's Start a
            <span className="font-display italic text-gold-400">
              {" "}
              Conversation
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-body mb-5">
            Tell us about your business goals. A senior advisor will respond
            within 24 hours.
          </p>

          {/* Response time badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Zap size={13} className="text-gold-400 flex-shrink-0" />
            <span className="text-white/70 text-xs font-body">
              Avg. response time: under 24 hours
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={18}
                        className="text-gold-400"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-body uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability note */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                  Taking New Clients
                </span>
              </div>
              <p className="text-white/65 text-sm font-body leading-relaxed">
                We're currently accepting new engagements for Q2 2026. Limited
                spots available — reach out today to secure yours.
              </p>
            </div>
          </motion.div>

          {/* Form — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              {/* Success state */}
              {isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <CheckCircle
                    size={48}
                    className="text-emerald-400"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-white text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 text-sm font-body">
                      Thanks for reaching out. We'll be in touch within 24
                      hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-2 border-white/25 text-white hover:bg-white/10 hover:text-white"
                    onClick={reset}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}

              {/* Error state */}
              {isError && !isSuccess && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-500/15 border border-red-500/30 mb-6"
                >
                  <AlertCircle
                    size={18}
                    className="text-red-400 flex-shrink-0"
                  />
                  <p className="text-red-300 text-sm font-body">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              {/* Form */}
              {!isSuccess && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-name"
                        className="text-white/80 text-sm"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="contact-name"
                        data-ocid="contact.input"
                        type="text"
                        placeholder="Jane Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        className="bg-white/8 border-white/20 text-white placeholder:text-white/35 focus:border-gold-400/60 focus:ring-gold-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="text-white/80 text-sm"
                      >
                        Work Email
                      </Label>
                      <Input
                        id="contact-email"
                        data-ocid="contact.email_input"
                        type="email"
                        placeholder="jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        className="bg-white/8 border-white/20 text-white placeholder:text-white/35 focus:border-gold-400/60 focus:ring-gold-400/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-message"
                      className="text-white/80 text-sm"
                    >
                      How Can We Help?
                    </Label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.textarea"
                      placeholder="Tell us about your biggest growth challenge, your timeline, and what success looks like for you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="bg-white/8 border-white/20 text-white placeholder:text-white/35 focus:border-gold-400/60 focus:ring-gold-400/20 resize-none"
                    />
                  </div>

                  {/* Loading state indicator */}
                  {isPending && (
                    <div
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2 text-gold-400 text-sm"
                    >
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending your message...</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full gradient-gold text-charcoal-900 font-bold py-5 h-auto hover:opacity-90 transition-opacity shadow-gold-sm disabled:opacity-60"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-center text-white/40 text-xs font-body">
                    By submitting, you agree to our Privacy Policy. No spam,
                    ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

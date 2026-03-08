import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  CloudUpload,
  Mail,
  Search,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────── *
 * Shared helpers
 * ─────────────────────────────────────────────────────────────────────────── */

const inputBase =
  "w-full rounded-lg border border-white/15 bg-white/6 px-3 py-2.5 text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/20 focus:bg-white/10";

/* ─────────────────────────────────────────────────────────────────────────── *
 * 1. Default Input
 * ─────────────────────────────────────────────────────────────────────────── */

export function DefaultInput() {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor="form-default"
        className="block text-xs font-semibold text-white/70 tracking-wider uppercase"
      >
        Full Name
      </label>
      <input
        id="form-default"
        data-ocid="form.default.input"
        type="text"
        placeholder="e.g. Alexandra Chen"
        className={inputBase}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 2. Floating Label Input
 * ─────────────────────────────────────────────────────────────────────────── */

export function FloatingLabelInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isFloated = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id="form-floating"
        data-ocid="form.floating.input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=""
        className={`${inputBase} pt-5 pb-2`}
      />
      <label
        htmlFor="form-floating"
        className={`pointer-events-none absolute left-3 font-body transition-all duration-200 ${
          isFloated
            ? "top-1.5 text-[10px] font-semibold tracking-wider uppercase text-gold-400"
            : "top-1/2 -translate-y-1/2 text-sm text-white/40"
        }`}
      >
        Email Address
      </label>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 3. Inline Label Input
 * ─────────────────────────────────────────────────────────────────────────── */

export function InlineLabelInput() {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="form-inline"
        className="shrink-0 text-sm font-semibold text-white/70 w-20"
      >
        Website
      </label>
      <input
        id="form-inline"
        data-ocid="form.inline.input"
        type="url"
        placeholder="https://yoursite.com"
        className={`${inputBase} flex-1`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 4. Input with Prefix Icon
 * ─────────────────────────────────────────────────────────────────────────── */

export function PrefixIconInput() {
  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          size={15}
        />
        <input
          data-ocid="form.search.input"
          type="search"
          placeholder="Search clients, deals…"
          className={`${inputBase} pl-9`}
        />
      </div>
      {/* Mail */}
      <div className="relative">
        <Mail
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          size={15}
        />
        <input
          data-ocid="form.email.input"
          type="email"
          placeholder="you@company.com"
          className={`${inputBase} pl-9`}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 5. Input with Suffix Action
 * ─────────────────────────────────────────────────────────────────────────── */

export function SuffixActionInput() {
  return (
    <div className="flex rounded-lg overflow-hidden border border-white/15 focus-within:border-gold-400/60 focus-within:ring-2 focus-within:ring-gold-400/20 transition-all duration-200">
      <input
        data-ocid="form.suffix.input"
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-white/6 px-3 py-2.5 text-sm text-white placeholder-white/35 outline-none"
      />
      <button
        type="button"
        data-ocid="form.suffix.submit_button"
        className="px-4 py-2.5 gradient-gold text-charcoal-900 text-sm font-semibold shrink-0 hover:opacity-90 transition-opacity"
      >
        Subscribe
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 6. Input Group (Side-by-side)
 * ─────────────────────────────────────────────────────────────────────────── */

export function InputGroup() {
  return (
    <div className="flex rounded-lg overflow-hidden border border-white/15 focus-within:border-gold-400/60 transition-all duration-200">
      <input
        data-ocid="form.firstname.input"
        type="text"
        placeholder="First name"
        className="flex-1 bg-white/6 px-3 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:bg-white/10 transition-colors"
      />
      <div className="w-px bg-white/12 shrink-0" />
      <input
        data-ocid="form.lastname.input"
        type="text"
        placeholder="Last name"
        className="flex-1 bg-white/6 px-3 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:bg-white/10 transition-colors"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 7. Textarea with Character Counter
 * ─────────────────────────────────────────────────────────────────────────── */

const MAX_CHARS = 300;

export function TextareaWithCounter() {
  const [value, setValue] = useState("");
  const remaining = MAX_CHARS - value.length;
  const isNearLimit = remaining <= 50;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor="form-textarea"
        className="block text-xs font-semibold text-white/70 tracking-wider uppercase"
      >
        Project Brief
      </label>
      <textarea
        id="form-textarea"
        data-ocid="form.textarea.input"
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, MAX_CHARS))}
        placeholder="Describe your project goals and timeline…"
        className={`${inputBase} resize-none`}
      />
      <p
        className={`text-right text-xs font-body transition-colors ${
          isNearLimit ? "text-amber-400" : "text-white/35"
        }`}
      >
        {value.length} / {MAX_CHARS} chars
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 8. Styled Select
 * ─────────────────────────────────────────────────────────────────────────── */

export function StyledSelect() {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor="form-select"
        className="block text-xs font-semibold text-white/70 tracking-wider uppercase"
      >
        Industry
      </label>
      <div className="relative">
        <select
          id="form-select"
          data-ocid="form.industry.select"
          defaultValue=""
          className={`${inputBase} appearance-none pr-9 cursor-pointer`}
        >
          <option value="" disabled>
            Select your industry
          </option>
          <option value="finance">Financial Services</option>
          <option value="healthcare">Healthcare & Life Sciences</option>
          <option value="tech">Technology & SaaS</option>
          <option value="retail">Retail & E-commerce</option>
          <option value="realestate">Real Estate</option>
          <option value="manufacturing">Manufacturing</option>
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
          size={15}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 9. Checkbox Group
 * ─────────────────────────────────────────────────────────────────────────── */

const checkboxItems = [
  { id: "cb-analytics", label: "Advanced Analytics" },
  { id: "cb-api", label: "API Access & Integrations" },
  { id: "cb-support", label: "Dedicated Support" },
];

export function CheckboxGroup() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    "cb-analytics": true,
    "cb-api": false,
    "cb-support": true,
  });

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-white/70 tracking-wider uppercase">
        Add-ons
      </p>
      {checkboxItems.map((item, idx) => (
        <label
          key={item.id}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative shrink-0">
            <input
              id={item.id}
              data-ocid={`form.checkbox.${idx + 1}`}
              type="checkbox"
              checked={checked[item.id]}
              onChange={(e) =>
                setChecked((prev) => ({
                  ...prev,
                  [item.id]: e.target.checked,
                }))
              }
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                checked[item.id]
                  ? "border-gold-400 bg-gold-400/20"
                  : "border-white/25 bg-transparent group-hover:border-white/40"
              }`}
            >
              {checked[item.id] && (
                <motion.svg
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  viewBox="0 0 10 8"
                  className="w-2.5 h-2 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <title>Checked</title>
                  <path d="M1 4L3.5 6.5L9 1" />
                </motion.svg>
              )}
            </div>
          </div>
          <span
            className={`text-sm font-body transition-colors ${
              checked[item.id] ? "text-white" : "text-white/55"
            }`}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 10. Radio Group (Pill)
 * ─────────────────────────────────────────────────────────────────────────── */

const plans = ["Starter", "Growth", "Enterprise"];

export function RadioGroupPill() {
  const [selected, setSelected] = useState("Growth");

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-white/70 tracking-wider uppercase">
        Plan Type
      </p>
      <div className="flex flex-wrap gap-2">
        {plans.map((plan, idx) => (
          <button
            key={plan}
            type="button"
            data-ocid={`form.plan.radio.${idx + 1}`}
            onClick={() => setSelected(plan)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              selected === plan
                ? "gradient-gold text-charcoal-900 border-transparent shadow-gold-sm"
                : "border-white/20 text-white/60 hover:border-white/40 hover:text-white bg-transparent"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 11. Toggle Switch
 * ─────────────────────────────────────────────────────────────────────────── */

export function ToggleSwitch() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="space-y-3">
      {[
        { label: "Email Notifications", key: "email" },
        { label: "Two-Factor Auth", key: "2fa" },
      ].map((item, idx) => {
        const isOn = idx === 0 ? enabled : !enabled;
        return (
          <div key={item.key} className="flex items-center justify-between">
            <span className="text-sm font-body text-white/75">
              {item.label}
            </span>
            <button
              type="button"
              data-ocid={`form.toggle.${idx + 1}`}
              role="switch"
              aria-checked={isOn}
              onClick={() => setEnabled((p) => !p)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold-400/50 ${
                isOn ? "bg-gold-400" : "bg-white/15"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 12. Range Slider
 * ─────────────────────────────────────────────────────────────────────────── */

export function RangeSlider() {
  const [value, setValue] = useState(65);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <label
          htmlFor="form-range"
          className="text-xs font-semibold text-white/70 tracking-wider uppercase"
        >
          Budget
        </label>
        <span className="text-lg font-display font-bold text-gold-400">
          ${(value * 1000).toLocaleString()}
        </span>
      </div>
      <input
        id="form-range"
        data-ocid="form.budget.input"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{ accentColor: "oklch(0.72 0.18 65)" }}
      />
      <div className="flex justify-between text-xs text-white/35 font-body">
        <span>$0</span>
        <span>$50K</span>
        <span>$100K</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 13. File Upload Zone
 * ─────────────────────────────────────────────────────────────────────────── */

export function FileUploadZone() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => setFileName(file.name);

  return (
    <div className="space-y-2">
      <button
        type="button"
        data-ocid="form.dropzone"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
        onClick={() => inputRef.current?.click()}
        className={`w-full flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 cursor-pointer transition-all duration-200 ${
          dragging
            ? "border-gold-400 bg-gold-400/8"
            : "border-white/18 hover:border-gold-400/40 hover:bg-white/4"
        }`}
      >
        <CloudUpload
          className={`${dragging ? "text-gold-400" : "text-white/35"} transition-colors`}
          size={28}
        />
        {fileName ? (
          <p className="text-sm text-gold-400 font-semibold truncate max-w-full px-2">
            {fileName}
          </p>
        ) : (
          <>
            <p className="text-sm text-white/60 font-body text-center">
              Drag & drop or{" "}
              <span className="text-gold-400 font-semibold">browse</span>
            </p>
            <p className="text-xs text-white/30">PDF, DOCX, PNG up to 10 MB</p>
          </>
        )}
      </button>
      <input
        ref={inputRef}
        data-ocid="form.upload_button"
        type="file"
        accept=".pdf,.docx,.png,.jpg"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 14. Validation States
 * ─────────────────────────────────────────────────────────────────────────── */

export function ValidationStates() {
  return (
    <div className="space-y-4">
      {/* Success */}
      <div className="space-y-1">
        <div className="relative">
          <input
            data-ocid="form.success.input"
            type="email"
            readOnly
            value="alex@nexara.io"
            className={`${inputBase} pr-9 border-emerald-500/50 bg-emerald-500/6`}
          />
          <CheckCircle
            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400"
            size={15}
          />
        </div>
        <p className="text-xs text-emerald-400 font-body pl-1">
          Email verified — looks great!
        </p>
      </div>

      {/* Error */}
      <div className="space-y-1">
        <div className="relative">
          <input
            data-ocid="form.error.input"
            type="text"
            readOnly
            value="1234"
            className={`${inputBase} pr-9 border-red-500/50 bg-red-500/6`}
          />
          <AlertCircle
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400"
            size={15}
          />
        </div>
        <p
          data-ocid="form.error_state"
          className="text-xs text-red-400 font-body pl-1"
        >
          Phone number must be 10 digits or more.
        </p>
      </div>

      {/* Warning */}
      <div className="space-y-1">
        <div className="relative">
          <input
            data-ocid="form.warning.input"
            type="password"
            readOnly
            value="pass123"
            className={`${inputBase} pr-9 border-amber-500/50 bg-amber-500/6`}
          />
          <AlertTriangle
            className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400"
            size={15}
          />
        </div>
        <p className="text-xs text-amber-400 font-body pl-1">
          Weak password — add symbols for better security.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── *
 * 15. Full Contact Card
 * ─────────────────────────────────────────────────────────────────────────── */

export function FullContactCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const reset = () => {
    setForm({ name: "", email: "", company: "", message: "" });
    setSubmitted(false);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          data-ocid="form.contact.success_state"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="flex flex-col items-center gap-4 py-6 text-center"
        >
          <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-gold">
            <CheckCircle className="text-charcoal-900" size={28} />
          </div>
          <div>
            <p className="font-display font-bold text-white text-lg">
              Message Sent!
            </p>
            <p className="text-sm text-white/55 font-body mt-1">
              We'll get back to you within 24 hours.
            </p>
          </div>
          <button
            type="button"
            data-ocid="form.contact.secondary_button"
            onClick={reset}
            className="text-xs text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          data-ocid="form.contact.panel"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-white/60 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                id="contact-name"
                data-ocid="form.contact.name.input"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your name"
                className={inputBase}
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-white/60 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                id="contact-email"
                data-ocid="form.contact.email.input"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="you@company.com"
                className={inputBase}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="contact-company"
              className="block text-xs font-semibold text-white/60 uppercase tracking-wider"
            >
              Company
            </label>
            <input
              id="contact-company"
              data-ocid="form.contact.company.input"
              type="text"
              value={form.company}
              onChange={(e) =>
                setForm((p) => ({ ...p, company: e.target.value }))
              }
              placeholder="Acme Corp"
              className={inputBase}
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-white/60 uppercase tracking-wider"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              data-ocid="form.contact.message.textarea"
              rows={3}
              required
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              placeholder="Tell us about your project…"
              className={`${inputBase} resize-none`}
            />
          </div>
          <button
            type="submit"
            data-ocid="form.contact.submit_button"
            disabled={loading}
            className="w-full py-2.5 rounded-lg gradient-gold text-charcoal-900 font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

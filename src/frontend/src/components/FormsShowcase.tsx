import { motion } from "motion/react";
import {
  CheckboxGroup,
  DefaultInput,
  FileUploadZone,
  FloatingLabelInput,
  FullContactCard,
  InlineLabelInput,
  InputGroup,
  PrefixIconInput,
  RadioGroupPill,
  RangeSlider,
  StyledSelect,
  SuffixActionInput,
  TextareaWithCounter,
  ToggleSwitch,
  ValidationStates,
} from "./FormStyles";
import SectionHeading from "./SectionHeading";
import {
  AnimatedEntryTags,
  AvatarTags,
  CounterBadge,
  DefaultPill,
  DismissibleTags,
  DotIndicatorTags,
  GoldGradientTags,
  IconLabelTags,
  OutlinedTags,
  StackedTagGroup,
  StatusTags,
  ThemeVariantTags,
} from "./TagStyles";

/* ─── Animation variants ─────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ─── Showcase card wrapper ──────────────────────────────────────────────── */

function ShowcaseCard({
  title,
  description,
  ocid,
  children,
  tall = false,
}: {
  title: string;
  description: string;
  ocid: string;
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      data-ocid={ocid}
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-400/20 transition-colors duration-300 ${tall ? "lg:row-span-2" : ""}`}
    >
      <div>
        <p className="font-sans font-semibold text-white text-sm leading-tight mb-1">
          {title}
        </p>
        <p className="font-body text-white/45 text-xs leading-relaxed">
          {description}
        </p>
      </div>
      <div className="h-px bg-white/8" />
      <div className="flex-1">{children}</div>
    </motion.div>
  );
}

/* ─── Sub-section heading ────────────────────────────────────────────────── */

function SubHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1 bg-white/10" />
      <span className="px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-400 text-xs font-bold tracking-widest uppercase">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

/* ─── FormsShowcase ──────────────────────────────────────────────────────── */

export default function FormsShowcase() {
  return (
    <section
      id="forms"
      data-ocid="forms.section"
      className="py-24 lg:py-32 section-dark"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="badge"
            eyebrow="Design System"
            title="Forms & Tags"
            highlight="Tags"
            subtitle="Production-ready form elements and badge components for business interfaces."
            darkMode={true}
            align="center"
          />
        </div>

        {/* ── Form Elements ──────────────────────────────────────────────── */}
        <SubHeading label="Form Elements" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {/* 1 */}
          <ShowcaseCard
            title="Default Input"
            description="Standard text field with gold focus ring and label above."
            ocid="forms.item.1"
          >
            <DefaultInput />
          </ShowcaseCard>

          {/* 2 */}
          <ShowcaseCard
            title="Floating Label Input"
            description="Label animates up on focus or when the field is filled."
            ocid="forms.item.2"
          >
            <FloatingLabelInput />
          </ShowcaseCard>

          {/* 3 */}
          <ShowcaseCard
            title="Inline Label Input"
            description="Label and input placed side by side horizontally."
            ocid="forms.item.3"
          >
            <InlineLabelInput />
          </ShowcaseCard>

          {/* 4 */}
          <ShowcaseCard
            title="Input with Prefix Icon"
            description="Search and mail icons inset on the left of the input field."
            ocid="forms.item.4"
          >
            <PrefixIconInput />
          </ShowcaseCard>

          {/* 5 */}
          <ShowcaseCard
            title="Input with Suffix Action"
            description="Input and CTA button joined in a single pill container."
            ocid="forms.item.5"
          >
            <SuffixActionInput />
          </ShowcaseCard>

          {/* 6 */}
          <ShowcaseCard
            title="Input Group"
            description="Two inputs sharing a single border container — First and Last name."
            ocid="forms.item.6"
          >
            <InputGroup />
          </ShowcaseCard>

          {/* 7 */}
          <ShowcaseCard
            title="Textarea + Counter"
            description="Resizable textarea with a live character counter capping at 300."
            ocid="forms.item.7"
          >
            <TextareaWithCounter />
          </ShowcaseCard>

          {/* 8 */}
          <ShowcaseCard
            title="Styled Select"
            description="Native select with custom gold focus ring and chevron icon."
            ocid="forms.item.8"
          >
            <StyledSelect />
          </ShowcaseCard>

          {/* 9 */}
          <ShowcaseCard
            title="Checkbox Group"
            description="Three checkbox items with animated gold check marks."
            ocid="forms.item.9"
          >
            <CheckboxGroup />
          </ShowcaseCard>

          {/* 10 */}
          <ShowcaseCard
            title="Radio Group — Pill"
            description="Plan selector with pill-style radio buttons; active state uses gold gradient."
            ocid="forms.item.10"
          >
            <RadioGroupPill />
          </ShowcaseCard>

          {/* 11 */}
          <ShowcaseCard
            title="Toggle Switch"
            description="Animated CSS toggle with on/off state for settings controls."
            ocid="forms.item.11"
          >
            <ToggleSwitch />
          </ShowcaseCard>

          {/* 12 */}
          <ShowcaseCard
            title="Range Slider"
            description="Budget slider with live value update and gold accent color."
            ocid="forms.item.12"
          >
            <RangeSlider />
          </ShowcaseCard>

          {/* 13 */}
          <ShowcaseCard
            title="File Upload Zone"
            description="Drag-and-drop zone with dashed border, cloud icon, and file browser."
            ocid="forms.item.13"
          >
            <FileUploadZone />
          </ShowcaseCard>

          {/* 14 */}
          <ShowcaseCard
            title="Validation States"
            description="Success, error, and warning input states with helper text and icons."
            ocid="forms.item.14"
          >
            <ValidationStates />
          </ShowcaseCard>

          {/* 15 */}
          <ShowcaseCard
            title="Full Contact Card"
            description="Multi-field form with name, email, company, message, and a success state."
            ocid="forms.item.15"
          >
            <FullContactCard />
          </ShowcaseCard>
        </motion.div>

        {/* ── Tags & Badges ───────────────────────────────────────────────── */}
        <SubHeading label="Tags & Badges" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* 1 */}
          <ShowcaseCard
            title="Default Pill"
            description="Muted filled pill tags for category and topic labelling."
            ocid="tags.item.1"
          >
            <DefaultPill />
          </ShowcaseCard>

          {/* 2 */}
          <ShowcaseCard
            title="Outlined Tags"
            description="Transparent fill with border-only treatment for a lighter look."
            ocid="tags.item.2"
          >
            <OutlinedTags />
          </ShowcaseCard>

          {/* 3 */}
          <ShowcaseCard
            title="Gold Gradient Tags"
            description="Premium highlight tags using the gold gradient system."
            ocid="tags.item.3"
          >
            <GoldGradientTags />
          </ShowcaseCard>

          {/* 4 */}
          <ShowcaseCard
            title="Status Tags"
            description="Four semantic status chips: Success, Warning, Error, and Info."
            ocid="tags.item.4"
          >
            <StatusTags />
          </ShowcaseCard>

          {/* 5 */}
          <ShowcaseCard
            title="Dismissible Tags"
            description="Tags with an × button that removes them from the DOM on click."
            ocid="tags.item.5"
          >
            <DismissibleTags />
          </ShowcaseCard>

          {/* 6 */}
          <ShowcaseCard
            title="Icon + Label Tags"
            description="Small lucide icons paired with label text for feature/status chips."
            ocid="tags.item.6"
          >
            <IconLabelTags />
          </ShowcaseCard>

          {/* 7 */}
          <ShowcaseCard
            title="Avatar Tags"
            description="Coloured initials circle plus name — great for assignee or member tags."
            ocid="tags.item.7"
          >
            <AvatarTags />
          </ShowcaseCard>

          {/* 8 */}
          <ShowcaseCard
            title="Counter Badge"
            description="Notification bubbles overlapping button corners for inbox counts."
            ocid="tags.item.8"
          >
            <CounterBadge />
          </ShowcaseCard>

          {/* 9 */}
          <ShowcaseCard
            title="Dot Indicator"
            description="Coloured dot with label text for status lists and legend items."
            ocid="tags.item.9"
          >
            <DotIndicatorTags />
          </ShowcaseCard>

          {/* 10 */}
          <ShowcaseCard
            title="Tag Group — Stacked"
            description="Five overlapping tags with negative margin for a layered visual."
            ocid="tags.item.10"
          >
            <StackedTagGroup />
          </ShowcaseCard>

          {/* 11 */}
          <ShowcaseCard
            title="Animated Entry"
            description="Tags that spring in with a scale animation on scroll into view."
            ocid="tags.item.11"
          >
            <AnimatedEntryTags />
          </ShowcaseCard>

          {/* 12 */}
          <ShowcaseCard
            title="Theme Variants"
            description="Dark and light side-by-side comparison of the same tag set."
            ocid="tags.item.12"
          >
            <ThemeVariantTags />
          </ShowcaseCard>
        </motion.div>
      </div>
    </section>
  );
}

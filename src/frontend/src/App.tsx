import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AwardsSection from "./components/AwardsSection";
import BackToTopButton from "./components/BackToTopButton";
import BlogSection from "./components/BlogSection";
import ClientsStrip from "./components/ClientsStrip";
import ContactSection from "./components/ContactSection";
import CookieBanner from "./components/CookieBanner";
import FaqSection from "./components/FaqSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeadingsShowcase from "./components/HeadingsShowcase";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import NavBar from "./components/NavBar";
import NewsletterBanner from "./components/NewsletterBanner";
import PageLoader from "./components/PageLoader";
import PartnersSection from "./components/PartnersSection";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import ScrollProgressBar from "./components/ScrollProgressBar";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TypographySection from "./components/TypographySection";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <PageLoader />
      <Toaster position="top-right" richColors />
      <ScrollProgressBar />
      <BackToTopButton />
      <NavBar />
      <main>
        <HeroSection />
        <StatsSection />
        <ClientsStrip />
        <FeaturesSection />
        <PortfolioSection />
        <PartnersSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
        <AwardsSection />
        <PricingSection />
        <FaqSection />
        <HeadingsShowcase />
        <TypographySection />
        <BlogSection />
        <TeamSection />
        <ContactSection />
      </main>
      <FooterSection />
      <NewsletterBanner />
      <CookieBanner />
    </div>
  );
}

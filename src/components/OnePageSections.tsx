
import React from "react";
import HeroSection from "./HeroSection";
import StemverseStatement from "./StemverseStatement";
import QuickIntro from "./QuickIntro";
import ProgramsShowcase from "./ProgramsShowcase";
import WhyStemverse from "./WhyStemverse";
import HowItWorksTimeline from "./HowItWorksTimeline";
import ShowcaseCarousel from "./ShowcaseCarousel";
import FeaturedHighlight from "./FeaturedHighlight";
import ResourcesSection from "./ResourcesSection";
import JoinFamilyCallout from "./JoinFamilyCallout";
import NewsletterSignup from "./NewsletterSignup";
import LandingFooter from "./LandingFooter";

// Main home page structure using new modern, professional sections.
// All major sections (hero, showcase, why, etc) are now separated for clean structure.

const OnePageSections = () => (
  <div className="bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
    <HeroSection />
    <StemverseStatement />
    <QuickIntro />
    <ProgramsShowcase />
    <WhyStemverse />
    <HowItWorksTimeline />
    <ShowcaseCarousel />
    <FeaturedHighlight />
    <ResourcesSection />
    <JoinFamilyCallout />
    <NewsletterSignup />
    <LandingFooter />
  </div>
);

export default OnePageSections;


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
  <div className="bg-background min-h-screen relative">
    {/* Cosmic background overlay */}
    <div className="fixed inset-0 bg-gradient-to-br from-space-purple/10 via-transparent to-space-blue/10 pointer-events-none"></div>
    
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

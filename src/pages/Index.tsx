
// STEMverse Profile Home Page

import ProfileHero from "../components/ProfileHero";
import AboutCard from "../components/AboutCard";
import TeamSection from "../components/TeamSection";
import ContactCard from "../components/ContactCard";

const Index = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-background">
      <ProfileHero />
      <AboutCard />
      <TeamSection />
      <ContactCard />
    </main>
  );
};

export default Index;

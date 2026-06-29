import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import InternshipsSection from "./InternshipsSection";
import EducationSection from "./EducationSection";
import LanguagesSection from "./LanguagesSection";
import MotivationSection from "./MotivationSection";
import VideosSection from "./VideosSection";
import ContactSection from "./ContactSection";

const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <InternshipsSection />
        <EducationSection />
        <LanguagesSection />
        <MotivationSection />
        <VideosSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default PortfolioLayout;
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ResearchSection from "@/components/research-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

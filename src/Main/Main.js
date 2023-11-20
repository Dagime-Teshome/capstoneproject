import { HeroSection } from "./Hero Section/HeroSection";
import { SpecialsSection } from "./SpecialsSection/SpecialsSection";
import { Testimonials } from "./Testmonials/Testmonials";
import { AboutSection } from "./AboutSection/AboutSection";

export function Main() {
  return (
    <main>
      <div className="hero_container">
        <HeroSection />
        <div className="invisi_div"></div>
        <SpecialsSection />
        <Testimonials />
        <AboutSection />
      </div>
    </main>
  );
}

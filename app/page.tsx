import Header         from "./components/Header";
import HeroSection     from "./components/HeroSection";
import MarqueeStrip    from "./components/MarqueeStrip";
import AboutSection    from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ScheduleSection from "./components/ScheduleSection";
import RunningSection  from "./components/RunningSection";
import BetterFCSection from "./components/BetterFCSection";
import SocialProofSection from "./components/SocialProofSection";
import GallerySection  from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import VideoSection    from "./components/VideoSection";
import FAQSection      from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer          from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ActivitiesSection />
        <ScheduleSection />
        <RunningSection />
        <BetterFCSection />
        <SocialProofSection />
        <GallerySection />
        <LocationSection />
        <VideoSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

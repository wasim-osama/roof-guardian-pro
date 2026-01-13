import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UrgencySection } from "@/components/UrgencySection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";
import { BookingSection } from "@/components/BookingSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UrgencySection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <LeadMagnetSection />
      <BookingSection />
      <FinalCTASection />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;

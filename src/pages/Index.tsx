import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <AboutSection />
      <DifferentiatorsSection />
      <ReviewsSection />
      <GallerySection />
      <BookingSection />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;

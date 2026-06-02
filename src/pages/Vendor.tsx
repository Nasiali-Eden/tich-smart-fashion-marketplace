import Navbar from "@/components/Navbar";
import VendorHeroSection from "@/components/VendorHeroSection";
import SocialProof from "@/components/SocialProof";
import WhyUsSection from "@/components/WhyUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import VendorCTA from "@/components/VendorCTA";
import Footer from "@/components/Footer";

const Vendor = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VendorHeroSection />
      <SocialProof />
      <WhyUsSection />
      <FeaturesSection />
      <HowItWorks defaultTab="vendor" />
      <Testimonials />
      <FAQSection />
      <VendorCTA />
      <Footer />
    </div>
  );
};

export default Vendor;

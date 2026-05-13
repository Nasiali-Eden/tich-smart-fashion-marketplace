import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import WhyUsSection from "@/components/WhyUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CustomerBenefitsSection from "@/components/CustomerBenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <CustomerBenefitsSection />
      <WhyUsSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

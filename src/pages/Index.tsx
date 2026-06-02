import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomerBenefitsSection from "@/components/CustomerBenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CustomerBenefitsSection />
      <HowItWorks defaultTab="buyer" />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

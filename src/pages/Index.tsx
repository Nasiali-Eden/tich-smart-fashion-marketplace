import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomerBenefitsSection from "@/components/CustomerBenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import SellerStrip from "@/components/SellerStrip";
// import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CustomerBenefitsSection />

      {/* Shared backdrop: workbench photo runs continuously from "How It Works"
          down through the "Your Style Awaits" CTA */}
      <div className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/discover-bg-2.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.7]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/82 via-navy/55 to-navy/88" />
        </div>
        <div className="relative z-10">
          <HowItWorks audience="customer" bare />
          {/* <FAQSection /> */}
          <FinalCTA bare />
        </div>
      </div>

      {/* Shared backdrop: the vendor photo runs continuously behind the
          "Want to be a seller?" strip and down through the footer */}
      <div className="relative overflow-hidden bg-navy-dark">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/vendor-top.png"
            alt=""
            className="h-full w-full object-cover object-[center_top]"
            loading="lazy"
          />
          {/* One continuous darkening so the strip + footer read as a single image */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/65 to-navy/90" />
        </div>
        <div className="relative z-10">
          <SellerStrip bare />
          <Footer bare />
        </div>
      </div>
    </div>
  );
};

export default Index;

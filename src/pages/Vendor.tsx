import Navbar from "@/components/Navbar";
import VendorHeroSection from "@/components/VendorHeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
// import FAQSection from "@/components/FAQSection";
import VendorCTA from "@/components/VendorCTA";
import CustomerStrip from "@/components/CustomerStrip";
import Footer from "@/components/Footer";

const Vendor = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VendorHeroSection />
      <WhyUsSection />
      <FeaturesSection />

      {/* Shared backdrop: the workbench photo runs full width/height behind
          "How It Works" and down through "What We're Building for You" */}
      <div className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/discover-bg-2.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.6]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy/92" />
        </div>
        <div className="relative z-10">
          <HowItWorks audience="vendor" bare />
          <Testimonials bare />
        </div>
      </div>

      {/* <FAQSection /> */}
      <VendorCTA />

      {/* Shared backdrop: the vendor photo runs continuously behind the
          "Looking to buy?" strip and down through the footer */}
      <div className="relative overflow-hidden bg-navy-dark">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/vendor-bottom.png"
            alt=""
            className="h-full w-full object-cover object-[center_top]"
            loading="lazy"
          />
          {/* One continuous darkening so the strip + footer read as a single image */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/65 to-navy/90" />
        </div>
        <div className="relative z-10">
          <CustomerStrip bare />
          <Footer bare />
        </div>
      </div>
    </div>
  );
};

export default Vendor;

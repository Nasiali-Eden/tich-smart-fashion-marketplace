import { motion } from "framer-motion";
import { BarChart3, ShoppingBag } from "lucide-react";

const VendorHeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:py-0 md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Other/ab.png"
          alt="Fashion Vendor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/75 to-[#001F3F]/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
              For Fashion Vendors
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-[52px] lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-5">
              <span className="text-white">Power Your</span>
              <br />
              <span className="text-white">Fashion</span>
              <br />
              <span className="text-accent-red">Business.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/75 max-w-[490px] mb-10 leading-relaxed">
              The structured marketplace to list your items, reach thousands of buyers, and grow your sales — right from your phone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#for-vendors"
                className="inline-flex items-center justify-center gap-2.5 bg-accent-red text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] btn-glow transition-all duration-300 hover:opacity-90"
              >
                <BarChart3 size={17} strokeWidth={2.2} />
                Start Selling
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-white hover:text-[#001F3F] transition-all duration-300"
              >
                <ShoppingBag size={17} strokeWidth={2.2} />
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VendorHeroSection;

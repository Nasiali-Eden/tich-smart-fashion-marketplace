import { motion } from "framer-motion";
import { BarChart3, ShoppingBag, Sparkles } from "lucide-react";

const VendorHeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:py-0 md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Other/aaa.png"
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
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-8">
              <Sparkles size={11} strokeWidth={2.5} className="shrink-0" />
              African Fashion Marketplace
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-[52px] lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-5 text-white">
              Reach Millions
              <br />
              with Your
              <br />
              <span className="italic">Products.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/75 max-w-[490px] mb-10 leading-relaxed">
              Elevate your brand's visibility and connect with shoppers worldwide. Our vendor page is your gateway to an audience of millions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#for-vendors"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-navy px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-soft-white transition-all duration-300"
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

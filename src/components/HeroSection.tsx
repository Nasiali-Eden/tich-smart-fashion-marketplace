import { motion } from "framer-motion";
import { Check, ShoppingBag, Store } from "lucide-react";

const trustBadges = ["Free to join", "Structured listings"];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:py-0 md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Fading Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Other/aa.png"
          alt="African Fashion"
          className="w-full h-full object-cover object-[center_30%] md:object-[center_20%]"
        />
        {/* Gradient overlay: white on the left (for text), transparent on the right (for image subject) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-white/90 md:via-white/40 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-red text-xs font-semibold tracking-wider uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
              African Fashion Marketplace
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-[52px] lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-5">
              <span className="text-[#001F3F]">Discover Fashion</span>
              <br />
              <span className="text-accent-red">That Fits Your Style —</span>
              <br />
              <span className="text-accent-red">and Your Size.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-[490px] mb-10 leading-relaxed">
              Shop curated styles from verified vendors, or list your clothing
              and reach thousands of buyers — structured, secure, and
              mobile-first.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#for-buyers"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground text-foreground px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-foreground hover:text-white transition-all duration-300"
              >
                <ShoppingBag size={17} strokeWidth={2.2} />
                How to Buy
              </a>
              <a
                href="#for-vendors"
                className="inline-flex items-center justify-center gap-2.5 bg-accent-red text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] btn-glow transition-all duration-300 hover:opacity-90"
              >
                <Store size={17} strokeWidth={2.2} />
                How to Sell
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <Check size={14} className="text-accent-red shrink-0" strokeWidth={2.5} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

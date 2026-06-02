import { motion } from "framer-motion";
import { ArrowRight, Store } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:py-0 md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Fading Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Other/aa.png"
          alt="Fashion"
          className="w-full h-full object-cover object-[center_30%] md:object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-white/90 md:via-white/40 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
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
              <span className="text-[#001F3F]">Explore the</span>
              <br />
              <span className="text-[#001F3F]">World of</span>
              <br />
              <span className="text-accent-red">Fashion.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-[490px] mb-10 leading-relaxed">
              Step into a new world of fashion and find pieces that perfectly express your style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#discover"
                className="inline-flex items-center justify-center gap-2.5 bg-accent-red text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] btn-glow transition-all duration-300 hover:opacity-90"
              >
                <ArrowRight size={17} strokeWidth={2.2} />
                Discover Now
              </a>
              <Link
                to="/vendor"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground text-foreground px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-foreground hover:text-white transition-all duration-300"
              >
                <Store size={17} strokeWidth={2.2} />
                For Vendors
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-navy/8 border border-navy/12 text-navy text-[11px] font-bold tracking-[0.12em] uppercase mb-8">
              <Sparkles size={11} strokeWidth={2.5} className="shrink-0" />
              African Fashion Marketplace
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-[52px] lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-5 text-navy">
              Explore the
              <br />
              World of
              <br />
              <span className="italic">Fashion.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-[490px] mb-10 leading-relaxed">
              Step into a new world of fashion and find pieces that perfectly express your style.
            </p>

            {/* CTA */}
            <a
              href="#discover"
              className="inline-flex items-center gap-3 bg-navy text-white px-9 py-4 rounded-full font-semibold text-[15px] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Discover Now
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

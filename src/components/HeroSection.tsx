import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-navy pt-28 pb-20 md:py-0 md:min-h-screen flex items-center relative overflow-hidden">
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,36,68,1)_0%,_rgba(11,31,59,1)_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-soft-white text-sm mb-6">
              🚀 Built for African Fashion Commerce
            </span>

            <h1 className="text-4xl md:text-[56px] font-extrabold text-soft-white leading-[1.1] mb-6">
              Sell Clothing Smarter.{" "}
              <span className="block">Grow Your Fashion Business.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-custom max-w-[480px] mb-8">
              A structured marketplace where vendors list, manage, and sell
              clothing — no chaos, no confusion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#download"
                className="bg-accent-red text-soft-white px-7 py-3.5 rounded-lg font-semibold text-center btn-glow transition-all duration-300"
              >
                Download App
              </a>
              <a
                href="#for-vendors"
                className="border border-white/30 text-soft-white px-7 py-3.5 rounded-lg font-semibold text-center hover:bg-white/100 hover:text-foreground transition-all duration-300"
              >
                Start Selling
              </a>
            </div>

            <p className="text-sm text-slate-dark-custom">
              ✓ Free to join &nbsp; ✓ Structured listings &nbsp; ✓ M-Pesa ready
            </p>
          </motion.div>

          {/* Right — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[560px] bg-navy-dark rounded-[40px] border-4 border-white/10 p-3 shadow-2xl">
                <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#1a2f50] to-[#0d1b33] flex flex-col items-center justify-center gap-4 overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">👗</span>
                  </div>
                  <div className="w-32 h-3 bg-white/10 rounded-full" />
                  <div className="w-24 h-3 bg-white/10 rounded-full" />
                  <div className="grid grid-cols-2 gap-3 mt-4 px-4 w-full">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/10" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-8 top-20 bg-card rounded-xl shadow-card px-4 py-3 animate-float border border-border">
                <p className="text-sm font-semibold text-foreground">Order Received ✓</p>
                <p className="text-xs text-muted-foreground">Dress — KSh 1,200</p>
              </div>

              <div className="absolute -left-8 bottom-32 bg-card rounded-xl shadow-card px-4 py-3 animate-float-delayed border border-border">
                <p className="text-sm font-semibold text-foreground">New Sale 🛍️</p>
                <p className="text-xs text-muted-foreground">+KSh 3,500 today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

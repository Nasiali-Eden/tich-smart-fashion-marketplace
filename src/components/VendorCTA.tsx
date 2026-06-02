import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VendorCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="download" className="bg-navy py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(230,57,70,0.08)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-soft-white text-sm mb-6">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-[48px] font-bold text-soft-white leading-tight mb-5">
            Start Selling Your Fashion Today.
          </h2>
          <p className="text-lg md:text-xl text-slate-custom mb-8 max-w-lg mx-auto">
            Join hundreds of vendors building their clothing business on a platform that actually works.
            M-Pesa payments are already live — the app is coming soon on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-accent-red text-soft-white px-8 py-3.5 rounded-lg font-semibold btn-glow transition-all duration-300"
            >
              Download App
            </a>
          </div>

          <p className="text-slate-dark-custom text-xs mt-8">
            Built for Kenya &nbsp;|&nbsp; iOS &amp; Android — Coming Soon &nbsp;|&nbsp; M-Pesa Ready
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VendorCTA;

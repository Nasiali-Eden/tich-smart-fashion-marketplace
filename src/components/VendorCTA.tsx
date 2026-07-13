import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AppStoreButtons from "@/components/AppStoreButtons";

const VendorCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="download" className="bg-navy py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(0,31,63,0.4)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          
          <h2 className="text-3xl md:text-[48px] font-bold text-soft-white leading-tight mb-5">
            Join Today
          </h2>
          <p className="text-lg md:text-xl text-slate-custom mb-10 max-w-lg mx-auto">
           To grow your reach and scale your business effortlessly.
          </p>

          <AppStoreButtons variant="dark" />

          <p className="text-slate-dark-custom text-xs mt-8">
            Built for Kenya &nbsp;|&nbsp; iOS &amp; Android, Coming Soon &nbsp;|&nbsp; M-Pesa Ready
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VendorCTA;

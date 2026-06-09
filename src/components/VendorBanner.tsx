import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VendorBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-section-light py-14">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-navy rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-2">
              For Vendors
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Are you a fashion vendor?
              <br />
              <span className="text-white/70 font-normal text-xl">
                List your products and reach millions of shoppers.
              </span>
            </h3>
          </div>

          <Link
            to="/vendor"
            className="inline-flex items-center gap-2.5 bg-white text-navy px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-soft-white hover:shadow-lg transition-all duration-200 shrink-0"
          >
            Start Selling
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VendorBanner;

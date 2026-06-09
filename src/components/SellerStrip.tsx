import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SellerStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="bg-white h-[25vw] min-h-[160px] max-h-[260px] flex items-center border-y border-navy/8">
      <div className="container mx-auto px-6 md:px-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-navy/50 text-xs font-semibold uppercase tracking-widest mb-1.5">
              For Vendors
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              Want to be a seller?
            </h3>
          </div>

          <Link
            to="/vendor"
            className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shrink-0"
          >
            Start Selling
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SellerStrip;

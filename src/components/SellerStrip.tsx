import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SellerStrip = ({ bare = false }: { bare?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      className={`relative flex h-[25vw] min-h-[180px] max-h-[280px] items-center overflow-hidden ${
        bare ? "" : "border-y border-navy/8 bg-white"
      }`}
    >
      {/* Standalone only: own photo + light scrim. On a shared backdrop the
          wrapper supplies the continuous image and darkening. */}
      {!bare && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/vendor-top.png"
            alt=""
            className="h-full w-full scale-105 object-cover object-[70%_22%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-white/90 md:via-white/40 md:to-transparent" />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 md:px-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3
              className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
                bare ? "text-soft-white drop-shadow-lg" : "text-navy"
              }`}
            >
              Want to be a seller?
            </h3>
          </div>

          <Link
            to="/vendor"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-[15px] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shrink-0 ${
              bare ? "bg-white text-navy" : "bg-navy text-white"
            }`}
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

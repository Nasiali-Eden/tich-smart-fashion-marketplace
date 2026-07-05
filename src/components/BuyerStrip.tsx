import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BuyerStrip = ({ bare = false }: { bare?: boolean }) => {
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
            src="/images/Other/vendor-bottom.png"
            alt=""
            className="h-full w-full scale-105 object-cover object-[40%_30%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent md:from-white/90 md:via-white/40 md:to-transparent" />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 md:px-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-end justify-between gap-6 text-right sm:flex-row sm:items-center"
        >
          <Link
            to="/#discover"
            className={`group order-2 inline-flex shrink-0 items-center gap-3 rounded-full px-8 py-4 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:order-1 ${
              bare ? "bg-white text-navy" : "bg-navy text-white"
            }`}
          >
            Discover Fashion
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <div className="order-1 sm:order-2">
            <h3
              className={`text-2xl font-bold leading-tight md:text-3xl lg:text-4xl ${
                bare ? "text-soft-white drop-shadow-lg" : "text-navy"
              }`}
            >
              Looking to buy?
            </h3>
            <p className={`mt-1 text-sm md:text-base ${bare ? "text-white/85" : "text-navy/70"}`}>
              Here's how to shop on Tich.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyerStrip;

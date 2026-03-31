import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, UploadCloud, ShoppingBag } from "lucide-react";

const steps = [
  { num: "01", icon: UserPlus, title: "Create Your Vendor Profile", body: "Sign up in minutes. Add your store name, categories you sell, and your contact details." },
  { num: "02", icon: UploadCloud, title: "Upload Your Clothing", body: "Use the structured upload system to add your products with sizes, photos, and prices." },
  { num: "03", icon: ShoppingBag, title: "Receive Orders & Grow", body: "Buyers discover your store. You get notified, confirm orders, and grow your sales." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="bg-navy py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-[40px] font-bold text-soft-white mt-3">
            Up and running in minutes.
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Desktop dashed line */}
          <div className="hidden md:block absolute top-[60px] left-[16.66%] right-[16.66%] h-0.5 border-t-2 border-dashed border-accent/40" />

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Mobile vertical line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-accent/40" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex md:flex-col items-start md:items-center text-center gap-4 md:gap-0 pl-14 md:pl-0">
                <div className="absolute left-3 md:static w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent-red flex items-center justify-center text-soft-white font-bold text-sm md:text-base shrink-0 z-10">
                  {step.num}
                </div>
                <div className="md:mt-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 hidden md:flex">
                    <step.icon className="text-soft-white" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-soft-white mb-2 text-left md:text-center">{step.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed text-left md:text-center">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

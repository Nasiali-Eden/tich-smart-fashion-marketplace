import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ShoppingBag, Wallet, Bell } from "lucide-react";

const promises = [
  {
    icon: ShoppingBag,
    title: "A marketplace that makes sense",
    body: "Every listing will be structured with categories, sizes, pricing, and photos — so buyers can find exactly what they need.",
  },
  {
    icon: Bell,
    title: "Real-time order management",
    body: "The moment a buyer places an order, you'll know. Manage fulfillment, track status, and communicate — all from one clean vendor dashboard.",
  },
  {
    icon: Wallet,
    title: "Payments you can trust",
    body: "M-Pesa integration is already live. Every transaction is traceable and secure, so both vendors and buyers transact with complete confidence.",
  },
  {
    icon: Rocket,
    title: "Built for where fashion actually happens",
    body: "This is not a copy-paste of a Western marketplace. Tich is designed from the ground up for African fashion vendors — the categories, the sizes, the payment rails, the workflow.",
  },
];

const Testimonials = ({ bare = false }: { bare?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className={`py-20 md:py-28 ${bare ? "" : "bg-navy"}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-accent-red text-sm font-bold uppercase tracking-widest">
              Developer Note
            </span>
            <h2 className="text-3xl md:text-[40px] font-bold text-soft-white mt-3">
              What We're Building for You
            </h2>
            <p className="text-slate-custom mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Tich has been built with one goal: to give fashion vendors in Africa a proper, 
              professional home to run their business. Here's our commitment.
            </p>
          </div>

          {/* Promise cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promises.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-soft-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-custom text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Sign-off */}
          <div className="text-center mt-12">
            <div className="inline-block border border-white/10 rounded-xl px-6 py-4 bg-white/5">
              <p className="text-slate-custom text-sm italic">
                "We're not done yet — but we're close. Join the waitlist and be part of the launch."
              </p>
              <p className="text-soft-white font-semibold text-sm mt-2">— The Tich Team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

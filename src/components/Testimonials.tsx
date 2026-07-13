import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ShoppingBag, Wallet, Bell } from "lucide-react";

const promises = [
  {
    icon: ShoppingBag,
    title: "A marketplace that makes sense",
    body: "Every listing will be structured with categories, sizes, pricing, and photos, so customers can find exactly what they need.",
  },
  {
    icon: Bell,
    title: "Real-time order management",
    body: "The moment a customer places an order, you'll know. Manage fulfillment, track status, and communicate, all from one clean vendor dashboard.",
  },
  {
    icon: Wallet,
    title: "Payments you can trust",
    body: "M-Pesa integration is already live. Every transaction is traceable and secure, so both vendors and customers transact with complete confidence.",
  },
  {
    icon: Rocket,
    title: "Built for where fashion actually happens",
    body: "Tich provides the tools and platform to connect your store with millions of engaged shoppers. Expand beyond your current audience and tap into a global marketplace",
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
              Tich has been built to give you a proper, 
              professional home to run your business. Here's our commitment.
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
          
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

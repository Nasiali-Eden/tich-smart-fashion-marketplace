import { motion } from "framer-motion";
import { Store, ShieldCheck, BarChart3, Smartphone } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const cards = [
  {
    icon: Store,
    title: "Structured Listings That Work",
    body: "Stop selling through messy DMs. Upload clothes with proper categories, sizes, and pricing — all in one place.",
    large: true,
  },
  {
    icon: ShieldCheck,
    title: "Trusted Transactions",
    body: "Buyers and sellers transact with confidence. No more payment confusion.",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Vendor Dashboard",
    body: "Track your orders, sales, and inventory from one clean dashboard.",
    large: false,
  },
  {
    icon: Smartphone,
    title: "Mobile-First. Always.",
    body: "Designed for the way vendors actually work — from their phone, on the go.",
    large: true,
  },
];

const WhyUsSection = () => {
  return (
    <section id="for-vendors" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
            Why Vendors Choose Tich
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {cards.map((card, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.1}
              className={`${card.large ? "md:col-span-7" : "md:col-span-5"} bg-card border border-border rounded-xl p-8 shadow-card card-hover`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <card.icon className="text-accent-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.body}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

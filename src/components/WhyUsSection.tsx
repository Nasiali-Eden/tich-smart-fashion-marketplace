import { motion, useInView } from "framer-motion";
import {
  Store,
  ShieldCheck,
  BarChart3,
  Smartphone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

interface CardData {
  icon: LucideIcon;
  title: string;
  body: string;
}

const cards: CardData[] = [
  {
    icon: Store,
    title: "Structured Listings That Work",
    body: "Stop selling through messy DMs. Upload clothes with proper categories, sizes, and pricing — all in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Transactions",
    body: "Buyers and sellers transact with confidence. No more payment confusion.",
  },
  {
    icon: BarChart3,
    title: "Vendor Dashboard",
    body: "Track your orders, sales, and inventory from one clean dashboard.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First. Always.",
    body: "Designed for the way vendors actually work — from their phone, on the go.",
  },
];

const AnimatedCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const PremiumCard = ({
  card,
  index,
}: {
  card: CardData;
  index: number;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 320, damping: 24 }}
    className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl overflow-hidden cursor-default transition-shadow duration-300 h-full flex flex-col"
  >
    {/* Animated top accent stripe */}
    <div className="absolute top-0 left-0 h-[3px] bg-accent-red w-1/3 group-hover:w-full transition-[width] duration-500 ease-out" />

    {/* Watermark number */}
    <span className="absolute top-3 right-5 text-[80px] font-black leading-none select-none pointer-events-none text-foreground/[0.04]">
      {String(index + 1).padStart(2, "0")}
    </span>

    {/* Icon ring */}
    <div className="w-11 h-11 rounded-full border-2 border-accent/25 flex items-center justify-center mb-6 mt-1 group-hover:border-accent-red/60 transition-colors duration-300 shrink-0">
      <card.icon size={20} className="text-accent-red" strokeWidth={2} />
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
      {card.title}
    </h3>

    {/* Body */}
    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
      {card.body}
    </p>
  </motion.div>
);

const WhyUsSection = () => {
  return (
    <section id="for-vendors" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image with Reduced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Other/ab.png"
          alt="Vendors Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
            Why Vendors Choose Tich
          </h2>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <AnimatedCard key={i} delay={i * 0.08}>
              <PremiumCard card={card} index={i} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    badge: "Smart Listings",
    title: "Upload clothes the structured way",
    body: "Add categories, subcategories, sizes (XS–3XL + custom metrics), condition, and pricing. No guesswork — just clean data.",
    cta: "See how it works →",
    screen: "listing",
  },
  {
    badge: "Order Management",
    title: "Never miss an order again",
    body: "Get instant notifications when a buyer places an order. Manage fulfillment, track status, and keep your customers happy.",
    cta: "Learn more →",
    screen: "orders",
  },
  {
    badge: "Secure Payments",
    title: "Payments built for Kenya",
    body: "M-Pesa integration coming soon. Structured, traceable, and secure — so both vendors and buyers can transact with confidence.",
    cta: "Join the waitlist →",
    screen: "payments",
  },
];

const PhoneMockup = ({ type }: { type: string }) => (
  <div className="w-[260px] h-[480px] mx-auto bg-navy-dark rounded-[36px] border-4 border-white/10 p-2.5 shadow-xl">
    <div className="w-full h-full rounded-[26px] bg-gradient-to-br from-[#1a2f50] to-[#0d1b33] flex flex-col p-5 gap-3">
      <div className="w-20 h-2.5 bg-white/10 rounded-full" />
      <div className="w-14 h-2.5 bg-white/10 rounded-full" />
      {type === "listing" && (
        <div className="mt-3 space-y-3">
          {["Category", "Size", "Price", "Condition"].map((label) => (
            <div key={label} className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-[10px] text-white/40 mb-1">{label}</div>
              <div className="w-full h-2 bg-white/10 rounded-full" />
            </div>
          ))}
        </div>
      )}
      {type === "orders" && (
        <div className="mt-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="w-full h-2 bg-white/10 rounded-full" />
                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      )}
      {type === "payments" && (
        <div className="mt-3 space-y-3">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-white/30 text-[10px] mb-1">Total Revenue</div>
            <div className="w-24 h-4 bg-white/10 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-full h-2 bg-white/10 rounded-full mb-1" />
                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const FeatureRow = ({ feat, index }: { feat: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className={`${!imageLeft ? "md:order-2" : ""}`}>
        <PhoneMockup type={feat.screen} />
      </div>
      <div className={`${!imageLeft ? "md:order-1" : ""}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-red text-xs font-semibold mb-4">
          {feat.badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{feat.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{feat.body}</p>
        <a href="#" className="text-accent-red font-semibold text-sm hover:underline">
          {feat.cta}
        </a>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-section-light py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">Features</span>
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
            Everything a Vendor Needs to Succeed
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feat, i) => (
            <FeatureRow key={i} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

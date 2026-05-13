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
    body: "M-Pesa integration is live. Structured, traceable, and secure — so both vendors and buyers transact with full confidence.",
    cta: "Join the waitlist →",
    screen: "payments",
  },
];

const screenshotMap: Record<string, string> = {
  listing: "/images/Screenshots/2.png",
  orders: "/images/Screenshots/3.png",
  payments: "/images/Screenshots/4.png",
};

const screenshotAlt: Record<string, string> = {
  listing: "Tich app new post listing screen",
  orders: "Tich app order management screen",
  payments: "Tich app wallet and earnings screen",
};

const PhoneMockup = ({ type }: { type: string }) => (
  <div className="flex justify-center">
    <img
      src={screenshotMap[type]}
      alt={screenshotAlt[type]}
      className="w-[340px] drop-shadow-xl"
    />
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

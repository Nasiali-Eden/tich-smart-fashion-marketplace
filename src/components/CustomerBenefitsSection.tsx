import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Star, Bell, Package, type LucideIcon } from "lucide-react";

interface CustomerFeature {
  badge: string;
  title: string;
  body: string;
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
}

const customerFeatures: CustomerFeature[] = [
  {
    badge: "Easy Shopping",
    title: "Seamless Shopping Experience",
    body: "Browse the latest trends, timeless classics, and everything in between—all at your fingertips. Shopping has never been this easy.",
    icon: ShoppingBag,
    imageUrl: "/images/Other/a2.png",
    imageAlt: "Fashion shopping experience",
  },
  {
    badge: "Style Confidence",
    title: "Look and Feel Your Best",
    body: "Find styles that match your unique personality, crafted by talented designers. Just a tap away.",
    icon: Star,
    imageUrl:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Stylish confident woman in fashion outfit",
  },
  {
    badge: "Personalized Updates",
    title: "Stay In the Know",
    body: "Follow your favorite stores, get exclusive offers, and stay updated on new arrivals with personalized recommendations.",
    icon: Bell,
    imageUrl:
      "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Person receiving fashion notifications on phone",
  },
  {
    badge: "Doorstep Delivery",
    title: "Convenience Delivered",
    body: "Enjoy the simplicity of having your favorite items delivered straight to your doorstep, wherever you are.",
    icon: Package,
    imageUrl:
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Fashion package delivered to doorstep",
  },
];

const FashionImageCard = ({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) => (
  <div className="flex justify-center">
    <div className="relative w-[300px] md:w-[340px] rounded-3xl overflow-hidden shadow-xl">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-[440px] object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

const CustomerFeatureRow = ({
  feat,
  index,
}: {
  feat: CustomerFeature;
  index: number;
}) => {
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
      {/* Image column */}
      <div className={!imageLeft ? "md:order-2" : ""}>
        <FashionImageCard imageUrl={feat.imageUrl} imageAlt={feat.imageAlt} />
      </div>

      {/* Text column */}
      <div className={!imageLeft ? "md:order-1" : ""}>
        {/* Icon */}
        <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
          <feat.icon size={20} className="text-accent-red" strokeWidth={2} />
        </div>

        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-accent/10 text-accent-red">
          {feat.badge}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {feat.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{feat.body}</p>
      </div>
    </motion.div>
  );
};

const CustomerBenefitsSection = () => {
  return (
    <section id="discover" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">
            For You
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
            Discover Fashion That Fits You
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Unleash your style with the latest trends.
          </p>
        </div>

        {/* Feature rows */}
        <div className="space-y-20">
          {customerFeatures.map((feat, i) => (
            <CustomerFeatureRow key={i} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerBenefitsSection;

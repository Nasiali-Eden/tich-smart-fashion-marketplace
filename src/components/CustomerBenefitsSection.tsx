import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SlidersHorizontal, Heart, Palette, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CustomerFeature {
  badge: string;
  title: string;
  body: string;
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
  comingSoon?: boolean;
}

const customerFeatures: CustomerFeature[] = [
  {
    badge: "Personalized Access",
    title: "Shop by your size.",
    body: "Browse curated collections filtered to your exact measurements. Every listing on Tich is structured with precise size data — so you only see what fits.",
    icon: SlidersHorizontal,
    imageUrl:
      "https://images.pexels.com/photos/33970684/pexels-photo-33970684.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Woman in white dress with smartphone — photo by Vui Studio on Pexels",
    comingSoon: false,
  },
  {
    badge: "Vendor Updates",
    title: "Follow your favorites.",
    body: "Stay connected with the vendors you love. Follow boutiques and independent sellers to get notified the moment they drop new inventory.",
    icon: Heart,
    imageUrl:
      "https://images.pexels.com/photos/17293347/pexels-photo-17293347.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Modern clothing store with neutral garments on hanging racks — photo by Pew Nguyen on Pexels",
    comingSoon: false,
  },
  {
    badge: "Coming Soon",
    title: "Discover the creators.",
    body: "Meet the designers and artisans behind the brands you love. Explore their stories, browse their full collections, and connect directly with the talent shaping African fashion.",
    icon: Palette,
    imageUrl:
      "https://images.pexels.com/photos/7148007/pexels-photo-7148007.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Fashion designer working with fabric on mannequin in atelier — photo by Michael Burrows on Pexels",
    comingSoon: true,
  },
];

const FashionImageCard = ({
  imageUrl,
  imageAlt,
  comingSoon,
}: {
  imageUrl: string;
  imageAlt: string;
  comingSoon?: boolean;
}) => (
  <div className="flex justify-center">
    <div className="relative w-[300px] md:w-[340px] rounded-3xl overflow-hidden shadow-xl">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-[440px] object-cover"
        loading="lazy"
      />
      {comingSoon && (
        <div className="absolute inset-0 bg-foreground/55 backdrop-blur-[3px] flex items-center justify-center">
          <span className="bg-white text-foreground text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
            Coming Soon
          </span>
        </div>
      )}
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
        <FashionImageCard
          imageUrl={feat.imageUrl}
          imageAlt={feat.imageAlt}
          comingSoon={feat.comingSoon}
        />
      </div>

      {/* Text column */}
      <div className={!imageLeft ? "md:order-1" : ""}>
        {/* Icon */}
        <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
          <feat.icon size={20} className="text-accent-red" strokeWidth={2} />
        </div>

        {/* Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            feat.comingSoon
              ? "bg-muted text-muted-foreground border border-border"
              : "bg-accent/10 text-accent-red"
          }`}
        >
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
    <section id="for-buyers" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-sm font-bold uppercase tracking-widest">
            For Buyers
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
            Everything You Need to Find Your Style
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Tich is built for buyers who know what they want — filtered by
            size, curated by taste.
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

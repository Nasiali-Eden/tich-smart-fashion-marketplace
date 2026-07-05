import { motion } from "framer-motion";
import { ShoppingBag, Star, Bell, Package, Check, type LucideIcon } from "lucide-react";

interface CustomerFeature {
  badge: string;
  title: string;
  body: string;
  points: string[];
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
}

const customerFeatures: CustomerFeature[] = [
  {
    badge: "Easy Shopping",
    title: "Seamless Shopping",
    body: "Browse the latest trends, timeless classics, and everything in between—all at your fingertips.",
    points: [
      "Thousands of styles from trusted local designers",
      "Smart filters for size, colour, and occasion",
      "Save favourites and pick up right where you left off",
    ],
    icon: ShoppingBag,
    imageUrl: "/images/Other/card-1-heritage.png",
    imageAlt: "Woman in elegant African wax-print dress and headwrap",
  },
  {
    badge: "Style Confidence",
    title: "Look Your Best",
    body: "Find styles that match your unique personality, crafted by talented designers. Just a tap away.",
    points: [
      "Curated edits tailored to your taste",
      "Original pieces from independent creators",
      "Mix-and-match ideas for every wardrobe",
    ],
    icon: Star,
    imageUrl: "/images/Other/card-2-street.png",
    imageAlt: "Confident woman in modern streetwear with print bomber and denim",
  },
  {
    badge: "Personalized",
    title: "Stay In the Know",
    body: "Follow your favorite stores, get exclusive offers, and stay updated on new arrivals.",
    points: [
      "Instant alerts on new drops and restocks",
      "Member-only discounts and early access",
      "A feed that learns what you love",
    ],
    icon: Bell,
    imageUrl: "/images/Other/card-3-smart.png",
    imageAlt: "Man in tailored navy suit checking fashion updates on his phone",
  },
  {
    badge: "Doorstep Delivery",
    title: "Convenience Delivered",
    body: "Enjoy having your favorite items delivered straight to your doorstep, wherever you are.",
    points: [
      "Fast, fully tracked delivery to your door",
      "Hassle-free returns right inside the app",
      "Secure checkout with multiple payment options",
    ],
    icon: Package,
    imageUrl: "/images/Other/card-4-formal.png",
    imageAlt: "Well-dressed woman in formal wear receiving a fashion parcel",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FeatureCard = ({ feat }: { feat: CustomerFeature }) => (
  <motion.div
    variants={cardVariants}
    className="group flex items-stretch overflow-hidden rounded-2xl bg-white/25 text-left shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
  >
    {/* Image — fixed-width 4:5 portrait so the whole figure shows without making wide cards too tall */}
    <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden sm:w-52 md:w-60 lg:w-72">
      <img
        src={feat.imageUrl}
        alt={feat.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      {/* Icon chip */}
      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/85 shadow-sm backdrop-blur">
        <feat.icon size={18} className="text-accent-red" strokeWidth={2} />
      </div>
    </div>

    {/* Text */}
    <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-10">
      <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-red">
        {feat.badge}
      </span>
      <h3 className="mb-2 text-xl font-bold text-navy md:text-2xl">{feat.title}</h3>
      <p className="max-w-2xl text-sm leading-relaxed text-navy/70 md:text-base">{feat.body}</p>

      {/* Highlights */}
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
        {feat.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-navy/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-red/10">
              <Check size={13} className="text-accent-red" strokeWidth={2.5} />
            </span>
            <span className="leading-snug">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CustomerBenefitsSection = () => {
  return (
    <section
      id="discover"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      {/* Full-width photo backdrop — height follows the content */}
      <div className="absolute inset-0">
        <img
          src="/images/Other/discover-bg-3.png"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        {/* Light readability scrim — kept low so the backdrop stays visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/15 to-white/45" />
      </div>

      {/* Content — full container width up to normal page padding */}
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-red">
            For You
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy drop-shadow-sm md:text-[44px]">
            Discover Fashion That Fits You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/75">
            Unleash your style with the latest trends.
          </p>
        </div>

        {/* Cards — full-width, stacked one per row at every width */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col gap-5 md:gap-6"
        >
          {customerFeatures.map((feat, i) => (
            <FeatureCard key={i} feat={feat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerBenefitsSection;

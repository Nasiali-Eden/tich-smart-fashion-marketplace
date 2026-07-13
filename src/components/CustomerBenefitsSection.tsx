import { motion } from "framer-motion";
import { ShoppingBag, Star, Bell, Package, Check, ArrowRight, type LucideIcon } from "lucide-react";

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
    body: "Browse the latest trends, timeless classics, and everything in between, all at your fingertips.",
    points: [
      "Thousands of styles from trusted local designers",
      "Find the right look for any occasion",
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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FeatureCard = ({ feat, index }: { feat: CustomerFeature; index: number }) => {
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden shadow-[0_30px_70px_-30px_rgba(10,25,47,0.6)] transition-transform duration-500 hover:-translate-y-1.5 lg:h-full lg:min-h-0"
    >
      {/* The photo is the card - copy sits on top of it */}
      <img
        src={feat.imageUrl}
        alt={feat.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Scrim: opaque at the base so the copy reads, clear at the top so the photo shows */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 via-45% to-navy/10" />

      {/* Oversized ghost numeral */}
      <span
        className="pointer-events-none absolute right-4 top-3 select-none text-[64px] font-bold leading-none tracking-tighter text-white/10 xl:text-[76px]"
        aria-hidden
      >
        {numeral}
      </span>

      {/* Icon chip */}
      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur">
        <feat.icon size={16} className="text-accent-red" strokeWidth={1.75} />
      </div>

      {/* Copy — overlaid on the photo */}
      <div className="relative z-10 p-5 xl:p-6">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-6 bg-accent-red" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/90">
            {feat.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-tight text-white xl:text-xl">{feat.title}</h3>

        <p className="mt-2 text-xs leading-relaxed text-white/70 xl:text-[13px]">{feat.body}</p>

        <ul className="mt-4 grid gap-2">
          {feat.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-white/85">
              <span className="mt-[2px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent-red">
                <Check size={9} className="text-white" strokeWidth={3} />
              </span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className="mt-5 inline-flex w-fit items-center gap-2 border-b border-white/30 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-accent-red hover:text-accent-red"
        >
          Explore
          <ArrowRight
            size={13}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.article>
  );
};

const CustomerBenefitsSection = () => {
  return (
    // On desktop the section is locked to bgg.png's own 16:9 ratio, so the
    // backdrop fills it exactly - no crop, no stretch - and the content is laid
    // out to fit inside that height. Below lg the band would be too short for the
    // cards, so the section falls back to growing with its content.
    <section
      id="discover"
      className="relative w-full overflow-hidden py-16 lg:aspect-[1672/941] lg:py-0"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy">
        <img
          src="/images/Other/bgg.png"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/60 to-navy/80" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 lg:py-10">
        {/* Header */}
        <div className="mb-8 max-w-2xl lg:mb-7">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-accent-red" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-red">
              For You
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] text-white lg:text-[40px]">
            Discover Fashion That Fits You
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            Unleash your style with the latest trends.
          </p>
        </div>

        {/* Cards - one row of four inside the band on desktop, 2 x 2 on tablet, stacked on mobile */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid min-h-0 gap-5 sm:grid-cols-2 lg:flex-1 lg:grid-cols-4 lg:gap-6"
        >
          {customerFeatures.map((feat, i) => (
            <FeatureCard key={i} feat={feat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerBenefitsSection;

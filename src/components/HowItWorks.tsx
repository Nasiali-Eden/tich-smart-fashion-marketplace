import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, UploadCloud, ShoppingBag, Ruler, Search, Heart } from "lucide-react";

const vendorSteps = [
  { num: "01", icon: UserPlus, title: "Create Vendor Profile", body: "Sign up in minutes. Add your store name, categories you sell, and your contact details." },
  { num: "02", icon: UploadCloud, title: "Upload Your Clothing", body: "Use the structured upload system to add your products with sizes, photos, and prices." },
  { num: "03", icon: ShoppingBag, title: "Receive Orders & Grow", body: "Customers discover your store. You get notified, confirm orders, and grow your sales." },
];

const customerSteps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    body: "Begin your fashion journey by setting up your personal profile in just a few simple steps.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Choose Your Sizes",
    body: "Save your size preferences once to make browsing seamless, enjoy perfectly matched items every time. Have a loved one? Add their profiles too and surprise them with a thoughtful gift.",
  },
  {
    num: "03",
    icon: Search,
    title: "Browse & Follow",
    body: "Discover your favorite stores and follow them for updates. Explore unique pieces curated for you and get inspired by the fashion that sparks your creativity.",
  },
];

type Audience = "customer" | "vendor";

const HowItWorks = ({
  audience = "customer",
  bare = false,
}: {
  audience?: Audience;
  bare?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = audience === "customer" ? customerSteps : vendorSteps;

  return (
    <section
      id="how-it-works"
      className={`relative overflow-hidden py-20 md:py-28 ${bare ? "" : "bg-navy"}`}
    >
      {!bare && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Other/discover-bg-2.png"
            alt=""
            className="h-full w-full scale-110 object-cover object-center opacity-[0.7]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/82 via-navy/48 to-navy/84" />
          {/* Seam: solid navy at top (receives For You's navy hand-off) and bottom (into Final CTA) */}
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-navy via-navy to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-[40px] font-bold text-soft-white mt-3">
            Get Started in Minutes
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            key={audience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-5 md:gap-6 relative"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="glass-dark group relative flex items-start gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 md:flex-col md:items-start md:p-6"
              >
                {/* Big watermark number */}
                <span className="pointer-events-none absolute right-4 top-2 text-2xl md:text-3xl font-extrabold leading-none text-white/[0.1] select-none">
                  {step.num}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 md:h-12 md:w-12">
                  <step.icon className="text-soft-white" size={22} />
                </div>
                <div className="md:mt-5">
                  <h3 className="text-lg font-bold text-soft-white mb-2">{step.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

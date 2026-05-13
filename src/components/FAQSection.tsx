import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Plus, Minus } from "lucide-react";

type TabKey = "vendor" | "buyer";

const vendorFaqs = [
  {
    q: "Is the app free to use as a vendor?",
    a: "Yes — creating your vendor profile and listing your clothing is completely free. We only take a small transaction fee when you make a sale.",
  },
  {
    q: "What types of clothing can I list?",
    a: "All categories — men's, women's, kids', accessories, shoes, traditional wear, and more. The app has a structured category system so buyers can filter exactly what they're looking for.",
  },
  {
    q: "How do payments work?",
    a: "M-Pesa integration is already live on the platform. Payments are structured, traceable, and secure — vendors receive earnings directly through the app.",
  },
  {
    q: "How do I manage my orders?",
    a: "The app includes a full order management dashboard. You'll get instant notifications for new orders, can track fulfillment status, and communicate with buyers — all in one place.",
  },
  {
    q: "Is my store data secure?",
    a: "Absolutely. Your listings, orders, and customer data are protected and only visible to you.",
  },
  {
    q: "When will the app launch on iOS and Android?",
    a: "We are launching very soon on both iOS and Android. Join the waitlist today to be among the first vendors to go live.",
  },
];

const buyerFaqs = [
  {
    q: "How do I browse and discover clothing?",
    a: "Use the Feed to browse all listings, or use the Explore tab to search by category, size, price range, and more. The structured listing system means you find exactly what you're looking for.",
  },
  {
    q: "What categories of clothing are available?",
    a: "You'll find men's, women's, kids', accessories, shoes, traditional wear, and much more — all organized with clear categories and subcategories.",
  },
  {
    q: "How do I pay for items?",
    a: "M-Pesa integration is already live. Payments are secure and traceable — no more sending money blind to a vendor you don't know.",
  },
  {
    q: "Can I save items I like?",
    a: "Yes. Use the Saved tab to bookmark listings you're interested in, and come back to them anytime.",
  },
  {
    q: "Is my personal information secure?",
    a: "Yes. Your data, purchase history, and contact details are protected and never shared without your consent.",
  },
  {
    q: "When can I download the app?",
    a: "The app is launching very soon on both iOS and Android. Join the waitlist to get notified the moment it's available.",
  },
];

const FAQItem = ({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  open: number | null;
  onToggle: (i: number) => void;
}) => (
  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
    <button
      onClick={() => onToggle(index)}
      className="w-full flex items-center justify-between p-5 text-left"
    >
      <span className="font-semibold text-foreground text-[15px] pr-4">{faq.q}</span>
      {open === index ? (
        <Minus size={18} className="text-accent-red shrink-0" />
      ) : (
        <Plus size={18} className="text-accent-red shrink-0" />
      )}
    </button>
    <AnimatePresence>
      {open === index && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState<TabKey>("vendor");
  const [openVendor, setOpenVendor] = useState<number | null>(null);
  const [openBuyer, setOpenBuyer] = useState<number | null>(null);

  const currentFaqs = activeTab === "vendor" ? vendorFaqs : buyerFaqs;
  const openIndex = activeTab === "vendor" ? openVendor : openBuyer;
  const setOpen = activeTab === "vendor" ? setOpenVendor : setOpenBuyer;

  return (
    <section className="bg-section-light py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="text-accent-red text-sm font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">
              Questions? We've got answers.
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Select your role to see relevant questions.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-xl bg-card border border-border p-1.5 mb-8 shadow-card">
            {(["vendor", "buyer"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-navy text-soft-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "vendor" ? "I'm a Vendor" : "I'm a Buyer"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {currentFaqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openIndex}
                  onToggle={(idx) => setOpen(openIndex === idx ? null : idx)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

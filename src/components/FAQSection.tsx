import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Is the app free to use for vendors?", a: "Yes — creating your vendor profile and listing your clothing is completely free. We only take a small transaction fee when you make a sale." },
  { q: "What types of clothing can I sell?", a: "All categories — men's, women's, kids', accessories, shoes, traditional wear, and more. The app has a structured category system so buyers can filter exactly what they're looking for." },
  { q: "How do I receive payments?", a: "We are building M-Pesa integration (coming soon). In the meantime, vendors and buyers coordinate payment through the order flow in the app." },
  { q: "Can buyers also use the app?", a: "Yes. Buyers browse listings, filter by category and size, and contact vendors directly through the platform." },
  { q: "Is my store data secure?", a: "Absolutely. Your listings, orders, and customer data are protected and only visible to you." },
  { q: "When will the app be available?", a: "We are launching soon. Join the vendor waitlist today to be among the first to go live." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-section-light py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-14">
            <span className="text-accent-red text-sm font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">Questions? We've got answers.</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-foreground text-[15px] pr-4">{faq.q}</span>
                  {open === i ? (
                    <Minus size={18} className="text-accent-red shrink-0" />
                  ) : (
                    <Plus size={18} className="text-accent-red shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {open === i && (
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

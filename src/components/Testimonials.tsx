import { useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { initials: "AN", quote: "Finally an app that understands how clothing vendors actually work. The upload system is a game changer.", name: "Amina N.", role: "Nairobi Fashion Vendor" },
  { initials: "JK", quote: "I used to sell through WhatsApp groups. Now my listings are organized and buyers trust me more.", name: "James K.", role: "Online Boutique Owner" },
  { initials: "FW", quote: "The vendor dashboard gives me a clear view of everything. I know exactly what's selling.", name: "Fatuma W.", role: "Clothes Reseller, Mombasa" },
  { initials: "BM", quote: "I love that it's structured. Buyers can actually find what they're looking for instead of scrolling forever.", name: "Brian M.", role: "Wholesale Vendor" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((idx: number) => {
    setActive(idx);
    scrollRef.current?.scrollTo({ left: idx * 340, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollTo((active + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [active, scrollTo]);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-14">
            <span className="text-accent-red text-sm font-bold uppercase tracking-widest">What Vendors Say</span>
            <h2 className="text-3xl md:text-[40px] font-bold text-foreground mt-3">Trusted by Fashion Vendors</h2>
          </div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[320px] bg-card border border-border rounded-xl p-6 shadow-card snap-start shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-accent-red flex items-center justify-center text-soft-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-accent-red w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

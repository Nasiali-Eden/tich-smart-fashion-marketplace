const pills = [
  "WhatsApp Sellers",
  "Instagram Vendors",
  "Market Traders",
  "Fashion Boutiques",
  "Online Stores",
  "Wholesale Dealers",
];

const SocialProof = () => {
  return (
    <section className="bg-navy-light py-5 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center gap-4">
        <span className="text-slate-dark-custom text-[13px] whitespace-nowrap shrink-0">
          Designed for vendors on:
        </span>
        <div className="overflow-hidden flex-1 w-full">
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {[...pills, ...pills].map((pill, i) => (
              <span
                key={i}
                className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-soft-white text-[13px] shrink-0"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

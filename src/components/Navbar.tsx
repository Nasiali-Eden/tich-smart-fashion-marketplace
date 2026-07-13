import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import tichLogo from "@/assets/tich-logo-full.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isVendor = location.pathname === "/vendor";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isVendor
            ? "bg-navy"
            : "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={tichLogo}
            alt="Tich"
            className={`h-12 md:h-14 brightness-0 transition-all duration-300 ${isVendor ? "invert" : ""}`}
          />
        </a>

        {/* Download App - customer page only, desktop */}
        {!isVendor && (
          <div className="hidden md:block">
            <a
              href="#download"
              className="bg-navy text-white px-5 py-2.5 rounded-xl text-sm font-semibold btn-glow transition-all duration-300"
            >
              Download App
            </a>
          </div>
        )}

        {/* Mobile hamburger - customer page only */}
        {!isVendor && (
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile menu - customer page only */}
      {!isVendor && (
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-border/60 overflow-hidden"
            >
              <div className="px-6 py-5">
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-navy text-white px-5 py-3 rounded-xl text-sm font-semibold text-center btn-glow transition-all"
                >
                  Download App
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;

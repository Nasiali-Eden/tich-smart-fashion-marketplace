import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import tichLogo from "@/assets/tich-logo-full.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isVendor = location.pathname === "/vendor";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-sm border-b border-border/60 bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={tichLogo} alt="Tich" className="h-10 brightness-0" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-[15px] font-medium relative transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-red after:transition-transform after:duration-300 ${
              !isVendor
                ? "text-accent-red after:scale-x-100 after:origin-left"
                : "text-foreground/70 hover:text-foreground after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
            }`}
          >
            For Customers
          </Link>
          <Link
            to="/vendor"
            className={`text-[15px] font-medium relative transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-red after:transition-transform after:duration-300 ${
              isVendor
                ? "text-accent-red after:scale-x-100 after:origin-left"
                : "text-foreground/70 hover:text-foreground after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
            }`}
          >
            For Vendors
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#download"
            className="bg-accent-red text-white px-5 py-2.5 rounded-xl text-sm font-semibold btn-glow transition-all duration-300"
          >
            Download App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border/60 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors ${
                  !isVendor ? "text-accent-red" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                For Customers
              </Link>
              <Link
                to="/vendor"
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors ${
                  isVendor ? "text-accent-red" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                For Vendors
              </Link>
              <div className="pt-3">
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-accent-red text-white px-5 py-3 rounded-xl text-sm font-semibold text-center btn-glow transition-all"
                >
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

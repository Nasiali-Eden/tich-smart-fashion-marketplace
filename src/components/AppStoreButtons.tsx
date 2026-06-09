const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.18 23.76c.3.17.64.24.99.2L15.48 12 11.65 8.17 3.18 23.76zm17.64-11.1L17.8 11 13.97 12l3.83 1-.98.57 1.62.93c.59.34.95.97.95 1.65 0 .68-.36 1.31-.95 1.65l-1.62.93.98.57-3.83 1 3.83-1.66 3.02-1.74c.62-.36.99-1.01.99-1.72 0-.71-.37-1.36-.99-1.72zm-17.21-10c-.4-.23-.86-.26-1.28-.1l11.34 11.34L17.5 9.97 3.61 2.66z" />
  </svg>
);

interface AppStoreButtonsProps {
  /** "dark" = on navy background → white buttons; "light" = on white background → navy buttons */
  variant?: "dark" | "light";
}

const AppStoreButtons = ({ variant = "dark" }: AppStoreButtonsProps) => {
  const isDark = variant === "dark";

  const appStoreClass = isDark
    ? "inline-flex items-center gap-3 bg-white text-navy px-5 py-3.5 rounded-2xl hover:bg-soft-white transition-colors duration-200"
    : "inline-flex items-center gap-3 bg-navy text-white px-5 py-3.5 rounded-2xl hover:bg-navy-dark transition-colors duration-200";

  const googlePlayClass = isDark
    ? "inline-flex items-center gap-3 bg-white/10 border border-white/25 text-white px-5 py-3.5 rounded-2xl hover:bg-white/20 transition-colors duration-200"
    : "inline-flex items-center gap-3 border-2 border-navy text-navy px-5 py-3.5 rounded-2xl hover:bg-navy hover:text-white transition-colors duration-200";

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      {/* App Store */}
      <a href="#" className={appStoreClass} aria-label="Download on the App Store">
        <AppleIcon className="w-7 h-7 shrink-0" />
        <div className="text-left leading-none">
          <p className="text-[10px] font-medium opacity-60 tracking-wide mb-1">Download on the</p>
          <p className="text-[15px] font-bold">App Store</p>
        </div>
      </a>

      {/* Google Play */}
      <a href="#" className={googlePlayClass} aria-label="Get it on Google Play">
        <GooglePlayIcon className="w-6 h-6 shrink-0" />
        <div className="text-left leading-none">
          <p className="text-[10px] font-medium opacity-60 tracking-wide mb-1">Get it on</p>
          <p className="text-[15px] font-bold">Google Play</p>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;

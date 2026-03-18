import { useState, useEffect } from "react";
import logoMelasmart from "@/assets/logo-melasmart.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_12px_hsl(0_0%_0%/0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-center">
            <img
              src={logoMelasmart}
              alt="MelaSmart"
              className={`object-contain transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

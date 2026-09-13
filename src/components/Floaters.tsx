"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/content/site";

export function Floaters() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsappHref}
        className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white lg:bottom-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        aria-label="WhatsApp Amir Fayyaz"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.72 14.08c-.24.67-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.83-.11-.42-.14-.97-.32-1.67-.62-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.26-1.67-1.26-3.19 0-1.52.8-2.27 1.08-2.58.28-.31.61-.39.81-.39h.58c.19 0 .44-.07.69.53.26.62.88 2.14.96 2.3.08.15.13.34.03.54-.1.2-.15.34-.3.52-.15.18-.31.4-.45.54-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.32 2.36 1.47.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.58.34.07.13.07.74-.17 1.41z" />
        </svg>
      </a>
      {showTop && (
        <button
          type="button"
          className="fixed right-6 bottom-6 z-40 grid h-11 w-11 place-items-center border border-gold/50 bg-bg text-gold"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "https://riwayatcaterers.com/storage/2025/07/Riwayat-Full-Highlight-1.mp4";

export function EventVideo() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    videoRef.current?.play().catch(() => {});
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden md:min-h-[520px]">
        <Image
          src="/images/food/table-hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/45" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative z-10 grid h-[101px] w-[101px] place-items-center rounded-full border border-gold bg-bg/30 text-[11px] tracking-[0.32em] text-ink uppercase backdrop-blur-[2px]"
          aria-label="Play event video"
        >
          Play
        </button>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Event highlight"
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-[11px] tracking-[0.2em] text-ink uppercase"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <video
            ref={videoRef}
            className="max-h-[85vh] w-full max-w-5xl"
            src={VIDEO_SRC}
            controls
            autoPlay
            playsInline
            poster="/images/food/table-hero.jpg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

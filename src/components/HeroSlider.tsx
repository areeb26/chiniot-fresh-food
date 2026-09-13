"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/images/food/table-hero.jpg",
    alt: "Set dining table",
    lines: ["Serving Flavor", "Creating Memories"],
    href: "/about",
    cta: "More Info",
  },
  {
    image: "/images/food/scoop.jpg",
    alt: "Buffet service",
    lines: ["Elegant and Quality", "Catering"],
    href: "/menu",
    cta: "More Info",
  },
];

const DURATION = 7000;

function SplitLine({ text, lineDelay }: { text: string; lineDelay: number }) {
  let offset = 0;
  return (
    <span className="block">
      {text.split(" ").map((word) => {
        const start = offset;
        offset += word.length + 1;
        return (
          <span key={`${word}-${start}`} className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0">
            {word.split("").map((ch, ci) => (
              <span
                key={`${ch}-${ci}`}
                className="hero-char inline-block"
                style={{ animationDelay: `${lineDelay + (start + ci) * 28}ms` }}
              >
                {ch}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), DURATION);
    return () => window.clearInterval(id);
  }, [go, paused, index]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured catering"
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div className={`absolute inset-0 ${i === index ? "hero-ken" : ""}`}>
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-bg/55" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 pt-24 pb-28 lg:px-16">
        <h1 key={index} className="font-display w-full max-w-6xl text-[clamp(2.35rem,4.6vw,4.5rem)] leading-[0.95] tracking-[0.04em] text-ink uppercase">
          <span className="sr-only">{slide.lines.join(" ")}</span>
          <span aria-hidden>
            {slide.lines.map((line, li) => (
              <SplitLine key={line} text={line} lineDelay={li * 280} />
            ))}
          </span>
        </h1>
        <div key={`cta-${index}`} className="hero-cta mt-10">
          <Link
            href={slide.href}
            className="inline-block border border-gold/70 px-8 py-3 text-[11px] tracking-[0.28em] text-ink uppercase"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      <a
        href="#story"
        className="scroll-nudge absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-[10px] tracking-[0.32em] uppercase"
      >
        <span className="mb-2 text-gold">↓</span>
        Scroll now
      </a>

      <div className="absolute right-5 bottom-10 z-10 flex gap-2 lg:right-12">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 w-8 ${i === index ? "bg-gold" : "bg-ink/35"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 text-ink/70 hover:text-gold md:block"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        ←
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 text-ink/70 hover:text-gold md:block"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        →
      </button>
    </section>
  );
}

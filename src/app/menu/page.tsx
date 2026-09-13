import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TermsBlock } from "@/components/MenuPackages";
import { menuHub } from "@/content/menus";

export const metadata: Metadata = {
  title: "Menu",
  description: "Wedding, hi-tea, mehendi, breakfast and corporate menus from Chiniot Fresh Food Catering, Karachi.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero title="Menu" image="/images/food/platter.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.16em] uppercase">
          {menuHub.map((m) => (
            <Link key={m.href} href={m.href} className="text-gold hover:text-ink">
              {m.title}
            </Link>
          ))}
        </div>
        <TermsBlock />
      </section>
      <section className="bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl">Explore the collection</h2>
          <p className="mt-4 max-w-2xl text-muted">
            A printed per-head rate, a 100-person minimum, and a kitchen in DHA. Pick a set menu or send a custom
            list.
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {menuHub.map((m) => (
              <Link key={m.href} href={m.href} className="group block">
                <Image src={m.image} alt="" width={800} height={500} className="h-56 w-full object-cover" />
                <h3 className="font-display mt-5 text-3xl group-hover:text-gold">{m.title}</h3>
                <p className="mt-3 text-sm text-muted">{m.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

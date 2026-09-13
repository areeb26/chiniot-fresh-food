import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { clients, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clients",
  description: `Houses, halls, and offices cooked by ${site.name} across Karachi.`,
};

export default function ClientsPage() {
  return (
    <>
      <PageHero title="Our Clients" image="/images/food/banquet.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="max-w-2xl text-muted">
          We do not paste other companies&apos; marks here. These are the rooms we actually cook for — family plots,
          halls, and offices that book through Amir and Fahad.
        </p>
        <ul className="mt-12 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li key={c} className="bg-bg px-5 py-8 font-display text-2xl">
              {c}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

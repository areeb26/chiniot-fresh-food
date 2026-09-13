import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book ${site.name}. ${site.phones[0].name} ${site.phones[0].tel}, ${site.email}, ${site.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="We cook for your date." image="/images/food/service.jpg" />
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-[11px] tracking-[0.22em] text-gold uppercase">Contact details</h2>
          <p className="mt-6">{site.address}</p>
          <a href={`mailto:${site.email}`} className="mt-4 block hover:text-gold">
            {site.email}
          </a>
          {site.phones.map((p) => (
            <a key={p.tel} href={`tel:+${p.e164}`} className="mt-2 block hover:text-gold">
              {p.name} · {p.tel}
            </a>
          ))}
        </div>
        <ContactForm />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Catering",
  description: "Send a catering brief to Chiniot Fresh Food — event type, headcount, location, and budget per head.",
};

export default function CateringPage() {
  return (
    <>
      <PageHero title="Catering" image="/images/food/buffet.jpg" />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <p className="text-muted">
          Use this sheet for a full catering brief. For a custom dish list, the same form lives on Customize Menu.
        </p>
        <div className="mt-12">
          <ContactForm extra />
        </div>
      </section>
    </>
  );
}

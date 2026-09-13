import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { TermsBlock } from "@/components/MenuPackages";

export const metadata: Metadata = {
  title: "Customize Menu",
  description: "Build a custom catering menu with Chiniot Fresh Food — drinks, gravy, rice, dessert, live stations.",
};

export default function CustomizePage() {
  return (
    <>
      <PageHero title="Customize" image="/images/food/karahi.jpg" />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <p className="text-muted">
          Name the event, the headcount, and the dishes. We will answer with what the DHA kitchen can fire on that
          date — not a yes on forty gravies.
        </p>
        <div className="mt-12">
          <ContactForm extra />
        </div>
        <TermsBlock />
      </section>
    </>
  );
}

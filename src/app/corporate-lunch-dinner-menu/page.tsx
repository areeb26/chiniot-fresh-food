import type { Metadata } from "next";
import { MenuPackages, TermsBlock } from "@/components/MenuPackages";
import { PageHero } from "@/components/PageHero";
import { corporateMenus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Corporate Lunch/ Dinner",
  description: "Corporate catering Karachi — continental lunch and dinner packages from Rs 1,600 per head.",
};

export default function CorporatePage() {
  return (
    <>
      <PageHero title="Corporate Lunch/ Dinner" image="/images/food/service.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="mb-12 max-w-2xl text-muted">
          Timed service for AGMs, dealer dinners, and training rooms. Tell us when speeches start; we clear before
          them.
        </p>
        <MenuPackages packages={corporateMenus} />
        <TermsBlock />
      </section>
    </>
  );
}

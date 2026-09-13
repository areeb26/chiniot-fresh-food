import type { Metadata } from "next";
import { MenuPackages, TermsBlock } from "@/components/MenuPackages";
import { PageHero } from "@/components/PageHero";
import { mehendiMenus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Mehendi Menu",
  description: "Mehendi catering in Karachi with chaat, BBQ and live tandoor. From Rs 950 per head.",
};

export default function MehendiPage() {
  return (
    <>
      <PageHero title="Mehendi Menu" image="/images/food/grill.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <MenuPackages packages={mehendiMenus} />
        <TermsBlock />
      </section>
    </>
  );
}

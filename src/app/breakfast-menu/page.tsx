import type { Metadata } from "next";
import { MenuPackages, TermsBlock } from "@/components/MenuPackages";
import { PageHero } from "@/components/PageHero";
import { breakfastMenus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Breakfast Menu",
  description: "Breakfast catering Karachi — halwa puri, nehari, omelette stations. From Rs 600 per head.",
};

export default function BreakfastPage() {
  return (
    <>
      <PageHero title="Breakfast Menu" image="/images/food/breakfast.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <MenuPackages packages={breakfastMenus} />
        <TermsBlock />
      </section>
    </>
  );
}

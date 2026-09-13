import type { Metadata } from "next";
import { MenuPackages, TermsBlock } from "@/components/MenuPackages";
import { PageHero } from "@/components/PageHero";
import { weddingMenus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Wedding/Reception Menu",
  description: "Wedding catering packages in Karachi from Rs 1,300 per head — biryani, karahi, live tandoor.",
};

export default function WeddingMenuPage() {
  return (
    <>
      <PageHero title="Wedding/Reception Menu" image="/images/food/wedding.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <MenuPackages packages={weddingMenus} />
        <TermsBlock />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { MenuPackages, TermsBlock } from "@/components/MenuPackages";
import { PageHero } from "@/components/PageHero";
import { hiTeaMenus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Hi-Tea Menu",
  description: "Hi-tea catering in Karachi — continental and fusion packages from Rs 1,400 per head.",
};

export default function HiTeaPage() {
  return (
    <>
      <PageHero title="Hi-Tea Menu" image="/images/food/tea.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="mb-12 max-w-2xl text-muted">
          Bridal showers, office afternoons, drawing-room birthdays. Trays, tea, and a crew that leaves before your
          next guests arrive.
        </p>
        <MenuPackages packages={hiTeaMenus} />
        <TermsBlock />
      </section>
    </>
  );
}

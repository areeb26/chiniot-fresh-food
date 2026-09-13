import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `The kitchen of ${site.name} at ${site.address}. ${site.principal} (${site.principalNote}).`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" image="/images/food/kitchen.jpg" />
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl">Our story: a Chiniot kitchen in DHA</h2>
          <p className="mt-6 text-muted">
            {site.principal} built this work under the name {site.principalNote}. The shop is at {site.address} —
            not a virtual brand with a rented kitchen in Korangi. Amir Fayyaz and Fahad Fayyaz take the phones and
            stand the event.
          </p>
          <p className="mt-4 text-muted">
            We cook Pakistani gravy, live tandoor, BBQ, and the continental trays Karachi offices ask for. If a dish
            is not on the printed menu, say so on the customize form. We will tell you if the date cannot carry it.
          </p>
        </div>
        <Image src="/images/food/karahi.jpg" alt="Karahi on the flame" width={800} height={900} className="h-[420px] w-full object-cover" />
      </section>
      <section className="bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl">Our drive: the line does not break</h2>
          <p className="mt-6 max-w-3xl text-muted">
            Excellence here means naan still puffed at 10:40pm and ice cream that has not sat in a crate. We combine
            décor partners only when you hire them; food and waiters are ours.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-4xl">Our promise: more than a deg</h2>
        <p className="mt-6 max-w-3xl text-muted">
          Pakistani tables want qorma that tastes like home and a captain who remembers the diabetic uncle. We also
          run Alfredo, shawarma stations, and hi-tea sandwiches when the brief is an office on Shahrah-e-Faisal.
          With Chiniot you get a named crew, a per-head rate, and a kitchen address you can visit.
        </p>
      </section>
    </>
  );
}

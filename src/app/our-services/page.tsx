import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { eventServices, foodServices } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Event catering and food programs from Chiniot Fresh Food — AGMs, mehendi, daily lunch, live stations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" image="/images/food/banquet.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-4xl">Event</h2>
        <p className="mt-4 max-w-2xl text-muted">
          From a 40-person drawing room to a hall that needs two buffet lines. We plan seating only as far as the
          food needs it.
        </p>
        <ul className="mt-12 grid gap-10 md:grid-cols-2">
          {eventServices.map((s) => (
            <li key={s.title} className="border-t border-gold/25 pt-5">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl">Food</h2>
          <p className="mt-4 max-w-2xl text-muted">
            In-house kitchen, own inventory. Menus match the clock: breakfast at 9, iftar at maghrib, baraat at 9pm.
          </p>
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {foodServices.map((s) => (
              <li key={s.title} className="border-t border-gold/25 pt-5">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-4xl">Crafting the night through food and floor</h2>
        <p className="mt-6 text-muted">
          Wedding catering that follows your nikahnama timing. Corporate hi-teas that end before the next meeting.
          Live BBQ only where the lawn allows smoke. One team: kitchen, waiters, tandoor.
        </p>
      </section>
    </>
  );
}

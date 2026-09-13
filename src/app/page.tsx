import Image from "next/image";
import Link from "next/link";
import { EventVideo } from "@/components/EventVideo";
import { HeroSlider } from "@/components/HeroSlider";
import { menuHub } from "@/content/menus";
import { posts } from "@/content/posts";
import { clients, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section id="story" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">From the shop on Sunset Lane to your hall</h2>
          <p className="mt-6 max-w-xl text-muted">
            {site.principal} ({site.principalNote}) runs the kitchen at {site.address}. Amir and Fahad take the
            bookings. Food leaves that shop — not a rented deg from Saddar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image src="/images/food/karahi.jpg" alt="Karahi" width={640} height={800} className="h-72 w-full object-cover md:h-96" />
          <Image src="/images/food/grill.jpg" alt="Grill" width={640} height={800} className="mt-10 h-72 w-full object-cover md:h-96" />
        </div>
      </section>

      <EventVideo />

      <section className="bg-bg-2">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <Image src="/images/food/buffet.jpg" alt="Buffet line" width={900} height={700} className="h-80 w-full object-cover" />
          <div>
            <h2 className="font-display text-4xl">Catering that holds a conversation</h2>
            <p className="mt-6 text-muted">
              Board lunches get plated pasta and a quiet room. Mehendi nights get chaat, BBQ, and doodh patti that
              does not run out at 11. We write the menu to the hour, not to a slogan.
            </p>
            <Link href="/catering" className="mt-8 inline-block text-[11px] tracking-[0.2em] text-gold uppercase">
              More info
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Events done differently</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl md:text-5xl">
          Floor plan, flame, and the uncle who wants less chilli
        </h2>
        <p className="mt-6 max-w-2xl text-muted">
          Venue scouting is yours if you already have a lawn. We handle guest flow at the buffet, live tandoor
          placement, and the 6pm load-in so the hall manager is not guessing.
        </p>
      </section>

      <section className="bg-bg-3">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">What we do</p>
          <h2 className="font-display mt-3 text-4xl">Services</h2>
          <p className="mt-4 max-w-xl text-muted">Corporate rooms, cultural nights, and the family plot on a Sunday.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Link href="/our-services" className="group relative block min-h-72 overflow-hidden">
              <Image src="/images/food/banquet.jpg" alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-bg/55" />
              <div className="relative flex h-72 flex-col justify-end p-8">
                <h3 className="font-display text-4xl">Events</h3>
                <p className="text-sm text-gold">Catering service</p>
              </div>
            </Link>
            <Link href="/catering" className="group relative block min-h-72 overflow-hidden">
              <Image src="/images/food/biryani.jpg" alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-bg/55" />
              <div className="relative flex h-72 flex-col justify-end p-8">
                <h3 className="font-display text-4xl">Foods</h3>
                <p className="text-sm text-gold">Catering service</p>
              </div>
            </Link>
          </div>
          <Link href="/our-services" className="mt-8 inline-block text-[11px] tracking-[0.2em] uppercase">
            View more
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-3xl">Clients</h2>
        <p className="mt-3 max-w-xl text-muted">Houses, halls, and offices we cook for — named by neighbourhood, not a fake logo wall.</p>
        <ul className="mt-8 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {clients.slice(0, 8).map((c) => (
            <li key={c} className="bg-bg px-4 py-5 text-sm">
              {c}
            </li>
          ))}
        </ul>
        <Link href="/our-clients" className="mt-6 inline-block text-[11px] tracking-[0.2em] text-gold uppercase">
          Contact us for a date
        </Link>
      </section>

      <section className="bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <h2 className="font-display text-4xl">Book the night, then pick the tray</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {menuHub.slice(0, 5).map((m) => (
              <Link key={m.href} href={m.href} className="block">
                <Image src={m.image} alt="" width={400} height={280} className="h-40 w-full object-cover" />
                <h3 className="font-display mt-4 text-2xl">{m.title.replace(" Menu", "")}</h3>
                <p className="mt-1 text-[11px] tracking-[0.16em] text-muted uppercase">Outdoor / hall</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <Image src="/images/food/kitchen.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">We&apos;ll make the party hold</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl">Your special occasion</h2>
          <p className="mt-6 text-muted">
            Deg, crockery, and crew from one kitchen. We have plated more than 2,000 guests on a single night when the
            hall and the date allowed it.
          </p>
          <ol className="mt-10 space-y-2 text-sm">
            <li>01. Meals cooked the day of service</li>
            <li>02. Menus with a printed per-head rate</li>
          </ol>
          <Link href="/about" className="mt-8 inline-block text-[11px] tracking-[0.2em] text-gold uppercase">
            More info
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Latest notes</p>
        <h2 className="font-display mt-2 text-4xl">From the kitchen ledger</h2>
        <article className="mt-10 max-w-3xl">
          <h3 className="font-display text-3xl">
            <Link href={`/blogs/${posts[0].slug}`}>{posts[0].title}</Link>
          </h3>
          <p className="mt-4 text-muted">{posts[0].excerpt}</p>
          <Link href={`/blogs/${posts[0].slug}`} className="mt-4 inline-block text-[11px] tracking-[0.2em] uppercase">
            Read more
          </Link>
        </article>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.slice(1, 5).map((p) => (
            <li key={p.slug}>
              <Link href={`/blogs/${p.slug}`} className="font-display text-2xl hover:text-gold">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

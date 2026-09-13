import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="font-display text-5xl">Page not on the menu</h1>
      <Link href="/" className="mt-8 inline-block text-[11px] tracking-[0.2em] text-gold uppercase">
        Back home
      </Link>
    </section>
  );
}

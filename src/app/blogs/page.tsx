import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Notes on Karachi catering — baraat scale, contracts, breakfast, and corporate timing.",
};

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-32 pb-24 lg:px-8">
      <h1 className="font-display text-6xl">Blogs</h1>
      <ul className="mt-16 grid gap-16 md:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blogs/${p.slug}`} className="group block">
              <Image src={p.image} alt="" width={800} height={500} className="h-56 w-full object-cover" />
              <p className="mt-4 text-[11px] tracking-[0.16em] text-muted uppercase">{p.date}</p>
              <h2 className="font-display mt-2 text-3xl group-hover:text-gold">{p.title}</h2>
              <p className="mt-3 text-sm text-muted">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

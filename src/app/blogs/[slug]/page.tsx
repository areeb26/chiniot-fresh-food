import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pt-32 pb-24 lg:px-8">
      <Link href="/blogs" className="text-[11px] tracking-[0.2em] text-gold uppercase">
        All notes
      </Link>
      <p className="mt-6 text-[11px] tracking-[0.16em] text-muted uppercase">{post.date}</p>
      <h1 className="font-display mt-3 text-4xl md:text-5xl">{post.title}</h1>
      <Image src={post.image} alt="" width={1200} height={700} className="mt-10 h-72 w-full object-cover" />
      <div className="mt-10 space-y-5 text-muted">
        {post.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </article>
  );
}

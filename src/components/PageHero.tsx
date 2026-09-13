import Image from "next/image";

export function PageHero({
  title,
  image = "/images/food/hero.jpg",
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden md:min-h-[62vh]">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
        <h1 className="font-display max-w-3xl text-5xl leading-none text-ink md:text-7xl">{title}</h1>
      </div>
    </section>
  );
}

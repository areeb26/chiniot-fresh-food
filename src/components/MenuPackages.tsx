import { terms } from "@/content/site";
import type { Package } from "@/content/menus";

export function MenuPackages({ packages }: { packages: Package[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pkg) => (
        <article key={pkg.name} className="border-t border-gold/35 pt-6">
          <h2 className="font-display text-3xl">{pkg.name}</h2>
          <p className="mt-2 text-sm tracking-wide text-gold">{pkg.price}</p>
          <div className="mt-6 space-y-5">
            {pkg.groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-[11px] tracking-[0.18em] text-muted uppercase">{g.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink/90">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function TermsBlock() {
  return (
    <aside className="mt-16 border-t border-gold/20 pt-10">
      <h2 className="font-display text-3xl">Terms & Conditions</h2>
      <ul className="mt-6 max-w-2xl space-y-2 text-sm text-muted">
        {terms.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </aside>
  );
}

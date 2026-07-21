"use client";

import { INGREDIENTS } from "@/lib/constants";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-ivory px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <MicroLabel className="mb-6 block">COMPOSITION</MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-forest">
            What lives
            <br />
            in the sachet.
          </h2>
        </FadeIn>

        <div className="mt-20 divide-y divide-forest/10 border-y border-forest/10">
          {INGREDIENTS.map((item, i) => (
            <FadeIn key={item.name} delay={0.05 * i}>
              <article className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="font-serif text-2xl text-forest md:col-span-4 md:text-3xl">
                  {item.name}
                </p>
                <div className="md:col-span-5">
                  <p className="text-sm text-charcoal/70">{item.detail}</p>
                  <p className="mt-2 text-sm text-charcoal/50">{item.note}</p>
                </div>
                <p className="micro text-forest md:col-span-3 md:text-right">
                  {item.dose}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

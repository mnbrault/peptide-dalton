"use client";

import { FadeIn, MicroLabel } from "@/components/ui/Motion";

const SCIENCE_BLOCKS = [
  {
    label: "MOLECULAR WEIGHT",
    value: "~2,000 Da",
    copy: "Low molecular weight peptides — designed for assimilation and daily continuity.",
  },
  {
    label: "TYPE I / III",
    value: "Naticol®",
    copy: "Marine collagen hydrolysate. The structural language of skin, connective tissue, and presence.",
  },
  {
    label: "TYPE II + GAG",
    value: "Cartidyss®",
    copy: "A complementary pathway — skate cartilage hydrolysate with natural glycosaminoglycans.",
  },
  {
    label: "DAILY DOSE",
    value: "10 g",
    copy: "One sachet. One morning. The dose where clinical literature most often converges.",
  },
];

export function Science() {
  return (
    <section id="science" className="bg-stone px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <MicroLabel className="mb-6 block">SCIENCE · PROTOCOL</MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-forest">
            Quiet science.
            <br />
            Clear form.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal/65">
            No medical theatre. No diagrams of miracles. Only the precision of
            matter — and the restraint of what can be said.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-px bg-forest/10 md:grid-cols-2">
          {SCIENCE_BLOCKS.map((block, i) => (
            <FadeIn key={block.label} delay={0.1 * i}>
              <article className="bg-stone p-8 md:p-12">
                <p className="micro text-sand">{block.label}</p>
                <p className="mt-4 font-serif text-3xl text-forest md:text-4xl">
                  {block.value}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/60">
                  {block.copy}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="micro mt-12 text-sand">
            EFSA claims apply to vitamins &amp; minerals present — not to
            peptides themselves.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

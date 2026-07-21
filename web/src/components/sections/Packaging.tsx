"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

const SHOTS = [
  { src: IMAGES.packaging, label: "BOX" },
  { src: IMAGES.unboxing, label: "TISSUE" },
  { src: IMAGES.sachet, label: "SACHET" },
  { src: IMAGES.lifestyle, label: "GLASS" },
] as const;

export function Packaging() {
  return (
    <section className="bg-ivory px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <MicroLabel className="mb-6 block">PACKAGING</MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-forest">
            An object
            <br />
            you keep.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal/65">
            Kraft. Tissue. Matte sachet. Water and light. Nothing loud —
            everything tactile.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {SHOTS.map((shot, i) => (
            <FadeIn key={shot.label} delay={0.1 * i}>
              <figure className="group relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  fill
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="absolute bottom-4 left-4 micro text-ivory/80 drop-shadow">
                  {shot.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

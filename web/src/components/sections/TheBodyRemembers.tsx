"use client";

import Image from "next/image";
import { BODY_SYSTEMS, IMAGES } from "@/lib/constants";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

export function TheBodyRemembers() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <Image
        src={IMAGES.presence}
        alt="Presence by the sea"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      <div className="relative z-10 flex min-h-[90vh] items-center px-6 py-24 md:px-12">
        <div className="max-w-xl">
          <FadeIn>
            <MicroLabel className="mb-6 block text-ivory/55">
              BODY SYSTEMS
            </MicroLabel>
            <h2 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05] text-ivory">
              THE BODY
              <br />
              REMEMBERS.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/75">
              Marine peptides naturally support the body&apos;s living
              architecture.
            </p>
          </FadeIn>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {BODY_SYSTEMS.map((system, i) => (
              <FadeIn key={system} delay={0.08 * i}>
                <span className="micro text-ivory/50">{system}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

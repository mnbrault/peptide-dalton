"use client";

import Image from "next/image";
import { IMAGES, RITUAL_STEPS } from "@/lib/constants";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

export function TheRitual() {
  return (
    <section id="ritual" className="bg-black">
      <div className="px-6 py-20 text-center md:px-12 md:py-28">
        <FadeIn>
          <MicroLabel className="mb-4 block text-sand/60">THE RITUAL</MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-ivory">
            Four moments.
          </h2>
        </FadeIn>
      </div>

      {RITUAL_STEPS.map((step) => (
        <div
          key={step.n}
          className="relative flex min-h-screen items-end overflow-hidden"
        >
          <Image
            src={IMAGES[step.image]}
            alt={step.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 w-full px-6 pb-20 md:px-12 md:pb-28">
            <FadeIn>
              <p className="micro text-ivory/50">{step.n}</p>
              <h3 className="mt-4 font-serif text-5xl text-ivory md:text-7xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-sm text-base text-ivory/70">{step.copy}</p>
            </FadeIn>
          </div>
        </div>
      ))}
    </section>
  );
}

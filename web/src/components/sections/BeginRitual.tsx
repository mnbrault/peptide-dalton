"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES, PRODUCT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

export function BeginRitual() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-forest px-6 py-28 text-ivory md:px-12 md:py-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <FadeIn>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
            <Image
              src={IMAGES.packshot}
              alt={PRODUCT.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <MicroLabel className="mb-6 block text-sand/70">
            BEGIN YOUR RITUAL
          </MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            THE RITUAL
            <br />
            STARTS HERE
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-ivory/70">
            One sachet.
            <br />
            Every morning.
            <br />
            Thirty days.
          </p>
          <p className="mt-4 max-w-sm text-sm text-ivory/55">
            Designed for your body&apos;s living architecture.
          </p>

          <div className="mt-12 border border-ivory/15 bg-forest/40 p-8 backdrop-blur-sm">
            <p className="micro text-sand/60">{PRODUCT.batch}</p>
            <h3 className="mt-3 font-serif text-3xl">{PRODUCT.name}</h3>
            <p className="mt-1 text-sm text-ivory/60">
              {PRODUCT.subtitle} · {PRODUCT.ritual}
            </p>
            <p className="mt-4 text-sm tracking-widest text-sand/80">
              ★★★★★
            </p>
            <p className="mt-4 font-serif text-3xl">
              {PRODUCT.price}
              {PRODUCT.currency}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/product">
                <Button variant="outline" className="w-full sm:w-auto">
                  Begin Your Ritual
                </Button>
              </Link>
              <Link href="/product?mode=subscribe">
                <Button
                  variant="ghost"
                  className="w-full border-ivory/30 text-ivory hover:border-ivory sm:w-auto"
                >
                  Subscribe &amp; Save
                </Button>
              </Link>
            </div>
            <p className="micro mt-4 text-sand/40">One-Time Purchase available</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FAQ, IMAGES, PRODUCT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const GALLERY = [
  IMAGES.packshot,
  IMAGES.sachet,
  IMAGES.unboxing,
  IMAGES.lifestyle,
  IMAGES.packaging,
] as const;

type Mode = "onetime" | "subscribe";

export function ProductPurchase({
  initialMode = "onetime",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const price = useMemo(
    () => (mode === "subscribe" ? PRODUCT.subscribePrice : PRODUCT.price),
    [mode]
  );

  return (
    <div className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 pt-28 md:grid-cols-2 md:gap-16 md:px-10 md:pt-36">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
              src={GALLERY[active]}
              alt={PRODUCT.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {GALLERY.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative aspect-square overflow-hidden border transition-colors",
                  active === i ? "border-forest" : "border-transparent"
                )}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:sticky md:top-28 md:self-start">
          <MicroLabel className="mb-4 block">{PRODUCT.batch}</MicroLabel>
          <h1 className="font-serif text-4xl text-forest md:text-5xl">
            {PRODUCT.name}
          </h1>
          <p className="mt-2 text-charcoal/60">
            {PRODUCT.subtitle} · {PRODUCT.ritual}
          </p>
          <p className="mt-4 text-sm tracking-widest text-sand">★★★★★</p>
          <p className="mt-2 text-xs text-charcoal/40">
            {PRODUCT.reviews} reviews
          </p>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal/70">
            {PRODUCT.description}
          </p>

          <div className="mt-10 flex gap-2">
            <button
              type="button"
              onClick={() => setMode("onetime")}
              className={cn(
                "flex-1 border px-4 py-4 text-left transition-colors",
                mode === "onetime"
                  ? "border-forest bg-forest text-ivory"
                  : "border-forest/15 text-forest"
              )}
            >
              <span className="micro block opacity-70">One-Time</span>
              <span className="mt-1 font-serif text-xl">
                {PRODUCT.price}
                {PRODUCT.currency}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMode("subscribe")}
              className={cn(
                "flex-1 border px-4 py-4 text-left transition-colors",
                mode === "subscribe"
                  ? "border-forest bg-forest text-ivory"
                  : "border-forest/15 text-forest"
              )}
            >
              <span className="micro block opacity-70">Subscribe &amp; Save</span>
              <span className="mt-1 font-serif text-xl">
                {PRODUCT.subscribePrice}
                {PRODUCT.currency}
                <span className="ml-1 text-sm opacity-70">/mo</span>
              </span>
            </button>
          </div>

          <div className="mt-6">
            <Button className="w-full" type="button">
              Add to Ritual — {price}
              {PRODUCT.currency}
            </Button>
            <p className="micro mt-4 text-center text-sand">
              MARINE ORIGIN · PRESENCE REQUIRED
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border-t border-forest/10 bg-stone px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <FadeIn>
            <MicroLabel className="mb-4 block">BENEFITS</MicroLabel>
            <h2 className="font-serif text-3xl text-forest">Living architecture</h2>
            <ul className="mt-8 space-y-4 text-sm text-charcoal/65">
              <li>Daily continuity — one sachet, one morning</li>
              <li>Naticol® 10 g marine peptides (~2,000 Da)</li>
              <li>Cartidyss® 500 mg Type II + GAG</li>
              <li>Vitamin &amp; mineral complex at NRV where authorised</li>
              <li>Clean-label flavour — lemon-ginger, no artificial sweeteners</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <MicroLabel className="mb-4 block">THE RITUAL</MicroLabel>
            <h2 className="font-serif text-3xl text-forest">Pour. Drink. Pause. Live.</h2>
            <p className="mt-8 text-sm leading-relaxed text-charcoal/65">
              Open the sachet. Dissolve in clear water. Thirty seconds of
              presence. Then the day begins — less performance, more continuity.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <MicroLabel className="mb-6 block">FAQ</MicroLabel>
        <h2 className="font-serif text-3xl text-forest">Questions</h2>
        <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
          {FAQ.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="pr-6 text-sm text-forest">{item.q}</span>
                <span className="micro text-sand">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-sm leading-relaxed text-charcoal/60">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-10">
          <div className="min-w-0">
            <p className="truncate font-serif text-lg text-forest">
              {PRODUCT.name}
            </p>
            <p className="micro text-sand">
              {mode === "subscribe" ? "Subscribe" : "One-Time"} · {price}
              {PRODUCT.currency}
            </p>
          </div>
          <Button type="button" className="shrink-0">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

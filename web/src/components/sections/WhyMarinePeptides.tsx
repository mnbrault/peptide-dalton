"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/constants";
import { FadeIn, MicroLabel, useGsapContext } from "@/components/ui/Motion";

gsap.registerPlugin(ScrollTrigger);

export function WhyMarinePeptides() {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-ivory px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <MicroLabel className="mb-6 block">SIGNAL · ORIGIN</MicroLabel>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-forest">
            Why Marine Peptides
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/70">
            From the ocean&apos;s quiet chemistry to a single morning gesture —
            a lineage of matter, presence, and continuity.
          </p>
        </FadeIn>

        <div ref={ref} className="mt-20 space-y-0">
          {TIMELINE.map((step, i) => (
            <div key={step.id} className="timeline-item opacity-0">
              <div className="flex flex-col gap-2 border-t border-forest/10 py-10 md:flex-row md:items-baseline md:justify-between">
                <p className="font-serif text-4xl text-forest md:text-5xl">
                  {step.label}
                </p>
                <p className="max-w-xs text-sm text-charcoal/60">{step.copy}</p>
              </div>
              {i < TIMELINE.length - 1 && (
                <p className="micro py-2 text-center text-sand">↓</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

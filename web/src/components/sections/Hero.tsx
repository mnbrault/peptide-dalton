"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MicroLabel } from "@/components/ui/Motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="DALTON — morning presence"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <MicroLabel className="mb-6 block text-ivory/60">
            RITUAL PROTOCOL · MARINE ORIGIN
          </MicroLabel>
          <h1 className="font-serif text-[clamp(4rem,14vw,9rem)] leading-[0.9] tracking-[-0.02em] text-ivory">
            DALTON
          </h1>
          <p className="mt-8 max-w-md font-serif text-xl text-ivory/85 md:text-2xl">
            Marine Peptides.
            <br />
            One daily ritual.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            Designed for your body&apos;s living architecture.
          </p>
          <div className="mt-10">
            <Link href="#ritual">
              <Button variant="outline">Discover the Ritual</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <p className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 micro text-ivory/50">
        Scroll
      </p>
    </section>
  );
}

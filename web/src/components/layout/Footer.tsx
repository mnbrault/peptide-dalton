import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-ivory px-6 py-20 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.2em] text-forest">
            {SITE.name}
          </p>
          <p className="mt-3 font-serif text-lg text-forest/70 italic">
            {SITE.tagline}
          </p>
          <p className="micro mt-6 text-sand">{SITE.madeIn}</p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="space-y-3">
            <p className="micro text-sand">Navigate</p>
            <Link href="/#science" className="block text-sm text-charcoal/70 hover:text-forest">
              Science
            </Link>
            <Link href="/#ritual" className="block text-sm text-charcoal/70 hover:text-forest">
              Ritual
            </Link>
            <Link href="/journal" className="block text-sm text-charcoal/70 hover:text-forest">
              Journal
            </Link>
            <Link href="/product" className="block text-sm text-charcoal/70 hover:text-forest">
              Shop
            </Link>
          </div>
          <div className="space-y-3">
            <p className="micro text-sand">Connect</p>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-sm text-charcoal/70 hover:text-forest"
            >
              Contact
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-charcoal/70 hover:text-forest"
            >
              Instagram
            </a>
          </div>
          <div className="space-y-3">
            <p className="micro text-sand">Legal</p>
            <Link href="/privacy" className="block text-sm text-charcoal/70 hover:text-forest">
              Privacy
            </Link>
            <Link href="/terms" className="block text-sm text-charcoal/70 hover:text-forest">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-2 border-t border-forest/5 pt-8 md:flex-row md:justify-between">
        <p className="micro text-sand">DALTON ©2026</p>
        <p className="micro text-sand">BATCH 001 · MARINE ORIGIN · PRESENCE REQUIRED</p>
      </div>
    </footer>
  );
}

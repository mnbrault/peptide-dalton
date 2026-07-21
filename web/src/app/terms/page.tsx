import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-28 pt-32">
      <h1 className="font-serif text-4xl text-forest">Terms</h1>
      <p className="mt-8 text-sm leading-relaxed text-charcoal/65">
        DALTON N°1 is a food supplement. It does not replace a varied diet or a
        healthy lifestyle. Marine origin — allergen: fish. Not suitable for a
        vegan diet. Always read the label. Purchase implies acceptance of these
        terms and applicable French and EU consumer law.
      </p>
      <Link href="/" className="micro mt-12 inline-block text-forest/60">
        ← Home
      </Link>
    </div>
  );
}

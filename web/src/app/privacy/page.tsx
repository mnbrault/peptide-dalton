import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-28 pt-32">
      <h1 className="font-serif text-4xl text-forest">Privacy</h1>
      <p className="mt-8 text-sm leading-relaxed text-charcoal/65">
        DALTON respects your privacy. We collect only what is necessary to
        fulfil orders, communicate about the ritual, and improve the experience.
        We do not sell personal data. For requests, contact us at the address
        listed on the site.
      </p>
      <Link href="/" className="micro mt-12 inline-block text-forest/60">
        ← Home
      </Link>
    </div>
  );
}

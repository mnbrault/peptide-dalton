import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, JOURNAL_POSTS } from "@/lib/constants";
import { MicroLabel } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Journal",
  description: "DALTON Journal — Architecture, Ocean, Longevity, Design.",
};

export default function JournalPage() {
  return (
    <div className="bg-ivory px-6 pb-28 pt-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <MicroLabel className="mb-6 block">JOURNAL</MicroLabel>
        <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-forest">
          Editorial.
        </h1>
        <p className="mt-6 max-w-md text-sm text-charcoal/60">
          Architecture · Ocean · Longevity · Design · Mediterranean · Living
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {JOURNAL_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-stone">
                <Image
                  src={IMAGES[post.image as keyof typeof IMAGES]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="micro mt-5 text-sand">{post.topic}</p>
              <h2 className="mt-2 font-serif text-3xl text-forest">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-charcoal/55">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

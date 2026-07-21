"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES, JOURNAL_POSTS } from "@/lib/constants";
import { FadeIn, MicroLabel } from "@/components/ui/Motion";

export function JournalPreview() {
  return (
    <section id="journal" className="bg-ivory px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-end justify-between gap-6">
            <div>
              <MicroLabel className="mb-6 block">JOURNAL</MicroLabel>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-forest">
                Editorial.
              </h2>
            </div>
            <Link
              href="/journal"
              className="micro shrink-0 text-forest/60 transition-colors hover:text-forest"
            >
              View all →
            </Link>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {JOURNAL_POSTS.slice(0, 3).map((post, i) => (
            <FadeIn key={post.slug} delay={0.1 * i}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <Image
                    src={IMAGES[post.image as keyof typeof IMAGES]}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="micro mt-5 text-sand">{post.topic}</p>
                <h3 className="mt-2 font-serif text-2xl text-forest">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/55">{post.excerpt}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

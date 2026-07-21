import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IMAGES, JOURNAL_POSTS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Journal" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const image = IMAGES[post.image as keyof typeof IMAGES];

  return (
    <article className="bg-ivory">
      <div className="relative h-[70vh] min-h-[420px]">
        <Image
          src={image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-28 pt-12 md:px-0">
        <p className="micro text-sand">{post.topic}</p>
        <h1 className="mt-4 font-serif text-4xl text-forest md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/70">
          {post.excerpt}
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/65">
          <p>
            DALTON exists in the space between wellness and design — where a
            morning gesture becomes architecture. Not optimisation. Continuity.
          </p>
          <p>
            Light enters the room. Water in glass. A matte sachet on stone. The
            ritual is the message: presence before performance, silence before
            noise.
          </p>
          <p>
            This journal entry belongs to the territory of {post.topic.toLowerCase()}{" "}
            — a quiet note in the larger book of living.
          </p>
        </div>
        <Link
          href="/journal"
          className="micro mt-16 inline-block text-forest/60 hover:text-forest"
        >
          ← Journal
        </Link>
      </div>
    </article>
  );
}

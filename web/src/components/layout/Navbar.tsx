"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "bg-ivory/90 backdrop-blur-md border-b border-forest/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.22em] text-forest"
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="micro text-forest/70 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/product"
            className="micro text-forest/70 transition-colors hover:text-forest"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.25} />
          </Link>
        </nav>

        <Link href="/product" className="micro text-forest md:hidden">
          Shop
        </Link>
      </div>
    </header>
  );
}

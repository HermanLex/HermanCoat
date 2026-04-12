import Link from "next/link";
import { IconBag } from "@/components/icons";
import { MobileMenu } from "@/components/MobileMenu";
import { site } from "@/lib/site";

const nav = [
  { href: "/product", label: "Product" },
  { href: "/product#details", label: "Details" },
  { href: "/product#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[200] border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      {/* Mobile — desktop-style: logo left, bag + nav menu right */}
      <div className="relative z-[200] mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-[0.14em] text-black"
        >
          {site.brand}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/product"
            className="p-2 text-black transition-opacity hover:opacity-70"
            aria-label="View product"
          >
            <IconBag />
          </Link>
          <MobileMenu items={nav} />
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-6xl grid-cols-3 items-center gap-4 px-6 py-4 md:grid">
        <Link
          href="/"
          className="justify-self-start font-[family-name:var(--font-serif)] text-xl font-semibold tracking-[0.14em] text-black"
        >
          {site.brand}
        </Link>
        <nav className="flex justify-center gap-8 text-sm font-medium text-neutral-700 lg:gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/product"
          className="justify-self-end text-black transition-opacity hover:opacity-70"
          aria-label="View product"
        >
          <IconBag />
        </Link>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBag } from "@/components/icons";
import { MobileMenu } from "@/components/MobileMenu";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-[200] border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      {/* Mobile — desktop-style: logo left, bag + nav menu right */}
      <div className="relative z-[200] mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-black transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/herman.svg"
            alt=""
            width={95}
            height={84}
            className="h-5 w-auto shrink-0"
            unoptimized
          />
          <span className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-[0.14em]">
            {site.brand}
          </span>
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
      <div className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 md:grid">
        <Link
          href="/"
          className="justify-self-start flex items-center gap-2.5 text-black transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/herman.svg"
            alt=""
            width={95}
            height={84}
            className="h-6 w-auto shrink-0"
            unoptimized
          />
          <span className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-[0.14em]">
            {site.brand}
          </span>
        </Link>
        <div className="justify-self-end flex items-center gap-8 lg:gap-10">
          <nav className="flex items-center gap-8 text-sm font-medium text-neutral-700 lg:gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors hover:text-black",
                  isActive(item.href)
                    ? "text-black underline underline-offset-8 decoration-[1.5px]"
                    : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/product"
            className="text-black transition-opacity hover:opacity-70"
            aria-label="View product"
          >
            <IconBag />
          </Link>
        </div>
      </div>
    </header>
  );
}

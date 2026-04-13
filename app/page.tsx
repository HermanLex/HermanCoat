import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoryLead } from "@/components/StoryLead";
import { product, site } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main className="flex-1">
        <section className="relative w-full">
          {/* Hero photography: desktop (<=475px tall) and a dedicated mobile crop (<651px wide). */}
          <div className="w-full bg-white">
            {/* Mobile / narrow screens: 500px tall crop, model centered */}
            <div className="relative h-[500px] w-full min-[651px]:hidden">
              <Image
                src="/images/hero-loft-mobile.png"
                alt="Model wearing the Hérman coat in a loft studio"
                fill
                unoptimized
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>

            {/* Desktop: max width 1500px centered, 475px tall; white margins on ultra-wide */}
            <div className="mx-auto hidden w-full max-w-[1500px] min-[651px]:block">
              <div className="relative h-[475px] w-full">
                <Image
                  src="/images/hero-loft.png"
                  alt="Model wearing the Hérman coat in a bright loft studio"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              {site.brand} · {product.tagline}
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
              Hérman car coat
            </h1>
            <div className="mt-6 space-y-8">
              <StoryLead />
              <Link
                href="/product"
                className="inline-flex h-12 items-center justify-center border border-black bg-black px-10 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-900"
              >
                Shop now
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-neutral-50/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200">
              <Image
                src="/images/model-editorial.png"
                alt="Hérman coat — editorial"
                fill
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-black md:text-3xl">
                Versatile by design
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                One silhouette. Endless contexts. The Hérman car coat is cut for
                movement and layered looks — sharp over tailoring, relaxed over
                denim. Built to be the first thing you reach for when the day
                could go anywhere.
              </p>
              <Link
                href="/product"
                className="mt-8 inline-block text-sm font-medium uppercase tracking-[0.12em] text-black underline underline-offset-4"
              >
                View product
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

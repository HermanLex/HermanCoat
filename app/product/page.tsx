import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { IconArrow } from "@/components/icons";
import { ProductGallery } from "@/components/ProductGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { product, site } from "@/lib/site";

export const metadata = {
  title: product.name,
  description: product.summary,
};

export default function ProductPage() {
  const mail = `mailto:${site.inquiryEmail}?subject=${encodeURIComponent(
    `Inquiry — ${product.name}`,
  )}`;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <ProductGallery />

            <div id="details" className="scroll-mt-28">
              <p className="text-sm">
                <span className="border-b border-black font-medium text-black">
                  {site.brand}
                </span>
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-serif)] text-3xl font-medium tracking-tight text-black md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
                {product.summary}
              </p>
              <p className="mt-8 text-3xl font-semibold tracking-tight text-black">
                {product.priceDisplay}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{product.availability}</p>

              <div className="mt-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-black">
                  Key features
                </h2>
                <ul className="mt-4 space-y-3 text-[15px] text-neutral-700">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <IconArrow className="mt-1 shrink-0 text-black" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="contact" className="mt-10 scroll-mt-28">
                <a
                  href={mail}
                  className="flex w-full items-center justify-center rounded-lg bg-black py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-900"
                >
                  Inquire about purchase
                </a>
                <p className="mt-4 text-center text-xs text-neutral-500">
                  {product.leadTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="border-t border-neutral-100 bg-neutral-50/60">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="text-center font-[family-name:var(--font-serif)] text-2xl text-black md:text-3xl">
              Why a single offering?
            </h2>
            <p className="mt-6 text-center text-[15px] leading-relaxed text-neutral-600">
              A focused product minimizes compromise — design and material choices
              are optimized for one expression only. This allows precise tailoring,
              small-batch quality control, and a product that becomes instantly
              recognizable. Hérman is not a catalog; it&apos;s one coat, refined
              until it&apos;s right.
            </p>
            <p className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm font-medium uppercase tracking-[0.12em] text-black underline underline-offset-4"
              >
                Back to home
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductSizingAndPurchase } from "@/components/ProductSizingAndPurchase";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { product, site } from "@/lib/site";

export const metadata = {
  title: product.name,
  description: product.summary,
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="grid gap-12 min-[824px]:grid-cols-2 min-[824px]:gap-16 min-[824px]:items-start">
            <ProductGallery />

            <div id="details" className="scroll-mt-28">
              <p className="text-sm">
                <span className="border-b border-black font-medium text-black">
                  {site.brand}
                </span>
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
                {product.summary}
              </p>
              {product.summaryExtended.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[15px] leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}

              <ProductSizingAndPurchase
                productName={product.name}
                priceDisplay={product.priceDisplay}
                availability={product.availability}
                inquiryEmail={site.inquiryEmail}
                leadTime={product.leadTime}
              />
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

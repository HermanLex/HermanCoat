import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: `About — ${site.brand}`,
  description: "The spirit and mission behind Hérman.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            About
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Our point of view
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-neutral-500">
            Our mission is to evolve with intention and uncompromising
            commitment to human performance. Inspired by nature&apos;s
            perfection, we look to the effortless flow and harmony found only in
            skies and oceans.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/about-ocean-clo.png"
              alt="Ocean sunset beside CLO 3D pattern development for the coat"
              width={1024}
              height={336}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 768px"
              unoptimized
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-neutral-500">
            We design from a spirit of minimalism, shaped through an oversized
            silhouette that feels effortless and natural in any setting.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Handcrafted in Honolulu, HI.
          </p>
          <div className="mt-6 flex w-max flex-col-reverse items-stretch gap-2">
            <span className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-[0.14em] text-black md:text-2xl">
              {site.brand}
            </span>
            <Image
              src="/images/herman.svg"
              alt=""
              width={95}
              height={84}
              className="h-auto w-full object-contain object-left"
              unoptimized
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}


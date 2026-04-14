import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Thank you",
  description: "Your Hérman order is confirmed.",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const sp = await searchParams;
  const sessionId = sp.session_id;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main className="mx-auto max-w-xl px-6 py-16 md:py-24">
        <p className="text-sm">
          <span className="border-b border-black font-medium text-black">
            {site.brand}
          </span>
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">
          Thank you
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
          Your payment was submitted successfully. You&apos;ll receive a
          confirmation from Stripe by email. We&apos;ll follow up with shipping
          and fulfillment details for your made-to-order coat.
        </p>
        {sessionId ? (
          <p className="mt-6 font-mono text-xs text-neutral-400">
            Reference: {sessionId}
          </p>
        ) : null}
        <p className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.12em] text-black underline underline-offset-4"
          >
            Back to home
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

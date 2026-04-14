import { redirect } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartSummary } from "@/components/CartSummary";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const SIZES = new Set(["S", "M", "L"]);

type Size = "S" | "M" | "L";

export const metadata = {
  title: "Cart",
  description: "Review your Hérman order and continue to secure checkout.",
};

export default async function CartPage({
  searchParams,
}: {
  searchParams: Promise<{ size?: string }>;
}) {
  const sp = await searchParams;
  const raw = sp.size?.trim().toUpperCase() ?? "";
  if (!SIZES.has(raw)) {
    redirect("/product#details");
  }
  const size = raw as Size;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AnnouncementBar />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <CartSummary size={size} />
      </main>

      <SiteFooter />
    </div>
  );
}

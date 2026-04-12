import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-black px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white sm:text-xs">
      <span>Free shipping on all orders.</span>{" "}
      <Link
        href="/product"
        className="underline underline-offset-2 transition-opacity hover:opacity-80"
      >
        Shop now
      </Link>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.brand} · {site.domain}
        </p>
        <div className="flex gap-6">
          <Link href="/product" className="hover:text-black">
            Product
          </Link>
          <a
            href={`mailto:${site.inquiryEmail}`}
            className="hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

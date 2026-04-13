import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} {site.brand}
        </p>
      </div>
    </footer>
  );
}

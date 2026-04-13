"use client";

import { useMemo, useState } from "react";

type Size = "S" | "M" | "L";

const sizes: Size[] = ["S", "M", "L"];

function buildMailto(opts: {
  email: string;
  subject: string;
  bodyLines: string[];
}) {
  const subject = encodeURIComponent(opts.subject);
  const body = encodeURIComponent(opts.bodyLines.join("\n"));
  return `mailto:${opts.email}?subject=${subject}&body=${body}`;
}

export function ProductSizingAndPurchase(props: {
  productName: string;
  priceDisplay: string;
  availability: string;
  inquiryEmail: string;
  leadTime: string;
}) {
  const [size, setSize] = useState<Size | "">("");

  const buyNowHref = useMemo(() => {
    if (!size) return "";
    return buildMailto({
      email: props.inquiryEmail,
      subject: `Buy now — ${props.productName} (Size ${size})`,
      bodyLines: [
        `Product: ${props.productName}`,
        `Size: ${size}`,
        "",
        "Hi, I'd like to buy this item. Please send next steps for payment and delivery.",
      ],
    });
  }, [props.inquiryEmail, props.productName, size]);

  return (
    <div className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-black">
        Silhouette
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-neutral-500">
        Minimal, quietly premium, and timeless in silhouette — refined lines and
        an easy drape.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-500">
        Durable yet lightweight, finished with high-end construction and
        premium materials for versatile wear.
      </p>

      <p className="mt-8 font-[family-name:var(--font-serif)] text-3xl font-medium tracking-tight text-black md:text-4xl">
        {props.priceDisplay}
      </p>
      <p className="mt-2 text-sm text-neutral-500">{props.availability}</p>

      <div className="mt-6 grid gap-3">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700">
            Select size
          </span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as Size | "")}
            className="h-12 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[15px] text-black shadow-sm outline-none transition-colors focus:border-black"
          >
            <option value="" disabled>
              Choose S / M / L
            </option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <a
          href={buyNowHref || undefined}
          aria-disabled={!size}
          className={[
            "flex w-full items-center justify-center rounded-lg py-4 text-center text-sm font-medium uppercase tracking-[0.15em] transition-colors",
            size
              ? "bg-black text-white hover:bg-neutral-900"
              : "cursor-not-allowed bg-neutral-200 text-neutral-500",
          ].join(" ")}
        >
          Buy now
        </a>

        <p className="text-center text-xs text-neutral-500">{props.leadTime}</p>
      </div>
    </div>
  );
}


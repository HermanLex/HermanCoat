"use client";

import Link from "next/link";
import { useState } from "react";

type Size = "S" | "M" | "L";

const sizes: Size[] = ["S", "M", "L"];

export function ProductSizingAndPurchase(props: {
  priceDisplay: string;
  availability: string;
  leadTime: string;
}) {
  const [size, setSize] = useState<Size | "">("");

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

        {size ? (
          <Link
            href={`/cart?size=${size}`}
            className="flex w-full items-center justify-center rounded-lg bg-black py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-900"
          >
            Buy now
          </Link>
        ) : (
          <span
            aria-disabled
            className="flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-neutral-200 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-neutral-500"
          >
            Buy now
          </span>
        )}

        <p className="text-center text-xs text-neutral-500">{props.leadTime}</p>
      </div>
    </div>
  );
}

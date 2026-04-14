"use client";

import { useState } from "react";
import Link from "next/link";
import { product, site } from "@/lib/site";

type Size = "S" | "M" | "L";

export function CartSummary(props: { size: Size }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function pay() {
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size: props.size }),
      });
      const data: unknown = await res.json().catch(() => ({}));
      const url =
        typeof data === "object" &&
        data !== null &&
        "url" in data &&
        typeof (data as { url: unknown }).url === "string"
          ? (data as { url: string }).url
          : null;
      const errMsg =
        typeof data === "object" &&
        data !== null &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
          ? (data as { error: string }).error
          : null;

      if (!res.ok || !url) {
        setError(errMsg ?? "Checkout could not start.");
        return;
      }
      window.location.href = url;
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg">
      <p className="text-sm">
        <span className="border-b border-black font-medium text-black">
          {site.brand}
        </span>
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">
        Cart
      </h1>
      <p className="mt-2 text-[15px] text-neutral-600">
        Review your selection, then pay with card on Stripe Checkout (Link, Apple
        Pay, and Google Pay when your device supports them).
      </p>

      <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-black">{product.name}</p>
            <p className="mt-1 text-sm text-neutral-600">Size {props.size}</p>
          </div>
          <p className="shrink-0 font-[family-name:var(--font-serif)] text-xl text-black">
            {product.priceDisplay}
          </p>
        </div>
        <p className="mt-4 text-xs text-neutral-500">{product.leadTime}</p>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-8 grid gap-3">
        <button
          type="button"
          onClick={pay}
          disabled={pending}
          className={[
            "flex h-12 w-full items-center justify-center rounded-lg text-sm font-medium uppercase tracking-[0.15em] transition-colors",
            pending
              ? "cursor-wait bg-neutral-300 text-neutral-600"
              : "bg-black text-white hover:bg-neutral-900",
          ].join(" ")}
        >
          {pending ? "Redirecting…" : "Continue to payment"}
        </button>
        <Link
          href="/product#details"
          className="text-center text-sm text-neutral-600 underline underline-offset-4 hover:text-black"
        >
          Change size
        </Link>
      </div>
    </div>
  );
}

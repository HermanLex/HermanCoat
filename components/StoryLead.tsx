"use client";

import Link from "next/link";
import { useState } from "react";

const full =
  "Explore the essence of summer escapism, style, and sophistication in our collection — one coat designed to move with you from morning meetings to evening plans. Hērman is built around a single silhouette so every detail earns its place: fabric, drape, and finish are tuned for real life, not a one-season trend.";

const teaser =
  "Explore the essence of summer escapism, style, and sophistication in our new collection…";

export function StoryLead() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-xl">
      <p className="text-[15px] leading-relaxed text-neutral-600">
        {open ? full : teaser}{" "}
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="font-medium text-black underline underline-offset-2"
          >
            Read more
          </button>
        )}
        {open && (
          <>
            {" "}
            <Link
              href="/product"
              className="font-medium text-black underline underline-offset-2"
            >
              Shop the coat
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

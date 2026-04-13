"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/collar.png", alt: "Hérman car coat — collar detail" },
  { src: "/images/product-flat.png", alt: "Hérman car coat — flat lay" },
  { src: "/images/model-full.png", alt: "Hérman car coat — full length on model" },
] as const;

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          unoptimized
          className="object-cover object-top"
          sizes="(max-width: 823px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-colors sm:h-16 sm:w-16 ${
              active === i ? "border-black" : "border-transparent ring-1 ring-neutral-200"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              unoptimized
              className="object-cover object-top"
              sizes="(max-width: 640px) 56px, 64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

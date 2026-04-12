/** Decorative shape inspired by the reference hero (light garment silhouette). */
export function HeroOverlay() {
  return (
    <div
      className="pointer-events-none absolute left-3 top-3 z-10 opacity-90 sm:left-6 sm:top-6"
      aria-hidden
    >
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#c4b8a5]"
      >
        <path
          d="M8 12 L52 4 L88 18 L112 44 L108 96 L76 132 L28 124 L4 72 Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
        <path
          d="M24 36 L56 28 L78 40 L90 68 L82 108 L44 118 L18 78 Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
      </svg>
    </div>
  );
}

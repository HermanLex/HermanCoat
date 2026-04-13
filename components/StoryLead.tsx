import Link from "next/link";

export function StoryLead() {
  return (
    <div className="max-w-xl">
      <p className="text-[15px] leading-relaxed text-neutral-600">
        A timeless and versatile car coat in modern materials. Designed to move
        with you from morning meetings to evening plans. Hérman is built around
        a single silhouette so every detail earns its place: fabric, drape, and
        finish are tuned for real life, not a one-season trend.
      </p>
      <p className="mt-4">
        <Link
          href="/product"
          className="text-[15px] font-medium text-black underline underline-offset-2"
        >
          Shop the coat
        </Link>
      </p>
    </div>
  );
}

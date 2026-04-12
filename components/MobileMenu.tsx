"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconMenu } from "@/components/icons";

export type NavItem = { href: string; label: string };

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const overlay =
    open && isClient ? (
      <div className="md:hidden">
        {/* Portal avoids header backdrop-blur; sits above page content */}
        <button
          type="button"
          className="fixed inset-x-0 bottom-0 top-14 z-[100] bg-black/45 backdrop-blur-[2px]"
          aria-label="Close menu"
          onClick={close}
        />
        <nav
          id={panelId}
          className="fixed bottom-0 right-0 top-14 z-[110] flex w-[min(100%,20rem)] flex-col border-l border-neutral-200 bg-white pt-6 shadow-2xl"
          style={{ backgroundColor: "#ffffff" }}
        >
          <ul className="flex flex-1 flex-col gap-1 bg-white px-6 pb-10 pt-2">
            {items.map((item) => (
              <li key={item.href} className="bg-white">
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-neutral-900 transition-colors hover:text-black"
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        className="relative z-[120] p-2 -m-2 text-black"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>

      {isClient && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}

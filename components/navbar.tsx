"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE, NAV_LINKS } from "@/app/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [first, second] = SITE.name.split(" ");

  // Tutup menu saat path berubah. Pola resmi React: sesuaikan state saat render,
  // bukan lewat effect, agar tidak memicu render berantai.
  const [activePath, setActivePath] = useState(pathname);
  if (pathname !== activePath) {
    setActivePath(pathname);
    setOpen(false);
  }

  // Kunci scroll + tutup dengan Escape saat menu terbuka.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/*
        Navbar fixed: tetap di tempat saat halaman di-scroll, termasuk di browser HP.
        Karena keluar dari alur layout, `main` di app/layout.tsx memberi offset
        `pt-16 sm:pt-20` setinggi navbar.
      */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
            <Link href="/" className="flex shrink-0 items-baseline gap-0.5">
              <span className="font-display text-lg tracking-tight text-foreground sm:text-2xl">
                {first}
              </span>
              <span className="font-display text-lg tracking-tight text-primary sm:text-2xl">
                .
              </span>
              {second && (
                <span className="ml-1 font-display text-lg italic tracking-tight text-foreground/70 sm:text-2xl">
                  {second}
                </span>
              )}
            </Link>

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-meta font-semibold uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/login"
                className="hidden text-meta font-semibold uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                Masuk
              </Link>
              <Button asChild size="sm">
                <Link href="/register">Daftar</Link>
              </Button>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground md:hidden"
              >
                <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
                {open ? (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M3 3l10 10M13 3L3 13" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M2 4h12M2 8h12M2 12h12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>

        {open && (
          /*
            Dropdown absolut: menimpa konten, bukan mendorongnya.
            `top-full` menempel tepat di bawah navbar; tinggi dibatasi viewport
            dan bisa di-scroll sendiri.
          */
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background sm:max-h-[calc(100dvh-5rem)] md:hidden"
          >
            <Container>
              <div className="flex flex-col py-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 text-label font-semibold uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="py-3 text-label font-semibold uppercase tracking-label text-foreground transition-colors hover:text-primary"
                >
                  Masuk
                </Link>
              </div>
            </Container>
          </div>
        )}
      </nav>

      {/*
        Backdrop diletakkan di luar <nav> sebagai sibling. Dengan begitu ia
        menempel ke viewport, tidak terpengaruh stacking/containing block
        navbar, dan tidak ikut menggeser konten.
      */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-x-0 bottom-0 top-16 z-40 bg-foreground/30 sm:top-20 md:hidden"
        />
      )}
    </>
  );
}

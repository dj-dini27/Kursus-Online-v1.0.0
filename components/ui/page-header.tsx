import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Label kecil bernomor di atas judul, mis. "02 — Katalog". */
  eyebrow?: string;
  /** Aksi di sisi kanan (mis. tombol). */
  action?: ReactNode;
  className?: string;
}

/**
 * Header halaman (eyebrow + judul + deskripsi + aksi) dengan garis bawah
 * tipis ala majalah. Dipakai di Katalog Kursus, Dashboard, dan halaman lain.
 */
export function PageHeader({
  title,
  description,
  eyebrow,
  action,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-5 border-b border-border pb-6 sm:mb-10 sm:gap-6 sm:pb-8 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <h1 className="text-balance font-display text-3xl leading-display tracking-display text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

import type { ReactNode } from "react";

type EyebrowTone = "primary" | "muted";

interface EyebrowProps {
  children: ReactNode;
  /** Warna label. Default aksen vermilion. */
  tone?: EyebrowTone;
  /** Tampilkan garis pendek di kiri label. */
  rule?: boolean;
  className?: string;
}

const tones: Record<EyebrowTone, string> = {
  primary: "text-primary",
  muted: "text-muted-foreground",
};

/**
 * Label kecil berhuruf kapital di atas judul — elemen signature gaya editorial.
 * Dipakai di header halaman, section, kartu auth, dan hero.
 */
export function Eyebrow({
  children,
  tone = "primary",
  rule = false,
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-eyebrow font-semibold uppercase tracking-eyebrow ${tones[tone]} ${className}`}
    >
      {rule && <span aria-hidden="true" className="h-px w-10 bg-primary" />}
      {children}
    </p>
  );
}

import { Eyebrow } from "@/components/ui/eyebrow";

interface SectionHeadingProps {
  title: string;
  description?: string;
  /** Label kecil bernomor di atas judul, mis. "01 — Katalog". */
  eyebrow?: string;
  className?: string;
}

/** Judul section editorial dengan eyebrow bernomor dan garis tipis. */
export function SectionHeading({
  title,
  description,
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-5 border-b border-border pb-6 sm:mb-12 sm:gap-6 sm:pb-8 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div>
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <h2 className="text-balance font-display text-3xl leading-display tracking-display text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
          {description}
        </p>
      )}
    </div>
  );
}

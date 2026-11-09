import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

interface SuccessStateProps {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}

/** Kartu tampilan sukses bergaya editorial (tanda centang + judul serif + tombol). */
export function SuccessState({
  title,
  description,
  actionHref,
  actionLabel,
}: SuccessStateProps) {
  return (
    <div className="w-full max-w-md border border-border bg-background p-6 sm:p-8 lg:p-10">
      <div className="mb-5 flex h-11 w-11 items-center justify-center border border-primary bg-primary text-base font-bold text-primary-foreground sm:mb-6 sm:h-12 sm:w-12 sm:text-lg">
        ✓
      </div>
      <Eyebrow className="mb-3">Berhasil</Eyebrow>
      <h2 className="text-balance font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 mb-7 text-sm leading-relaxed text-muted-foreground sm:mb-8">
        {description}
      </p>
      <Link href={actionHref} className={buttonVariants({ fullWidth: true })}>
        {actionLabel}
      </Link>
    </div>
  );
}

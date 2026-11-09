import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Wrapper full-height untuk memusatkan form auth (login/register/forgot). */
export function AuthPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {children}
    </div>
  );
}

interface AuthCardProps {
  title: string;
  description?: string;
  /** Label kecil di atas judul, mis. "Akun". */
  eyebrow?: string;
  children: ReactNode;
}

/** Kartu form auth bergaya editorial: sudut tajam, garis tipis, judul serif. */
export function AuthCard({
  title,
  description,
  eyebrow = "Akun",
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md border border-border bg-background p-6 sm:p-8 lg:p-10">
      <div className="mb-6 sm:mb-8">
        <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
        <h1 className="text-balance font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

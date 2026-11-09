import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Halaman legal (Privasi / Ketentuan) dengan tata letak editorial:
 * header halaman + daftar bagian.
 */
export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
            Terakhir diperbarui
          </p>
          <p className="mt-2 text-sm text-foreground">{updated}</p>
        </div>

        <div className="space-y-10 lg:col-span-9">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
                {String(index + 1).padStart(2, "0")}. {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-primary">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}

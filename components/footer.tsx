import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE } from "@/app/data/site";

const FOOTER_COLUMNS = [
  {
    title: "Produk",
    links: [
      { label: "Semua Kursus", href: "/kursus" },
      { label: "Tentang", href: "/tentang" },
    ],
  },
  {
    title: "Perusahaan",
    links: [{ label: "Kontak", href: "/kontak" }],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              {SITE.name}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60 sm:mt-5">
              {SITE.description} Platform pembelajaran online terbaik untuk
              semua usia dan latar belakang.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h4 className="mb-3 text-meta font-semibold uppercase tracking-label text-background/50 sm:mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="mb-3 text-meta font-semibold uppercase tracking-label text-background/50 sm:mb-4">
              Dukungan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-background/80 transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                  className="text-background/80 transition-colors hover:text-primary"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/privasi"
                  className="text-background/80 transition-colors hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/ketentuan"
                  className="text-background/80 transition-colors hover:text-primary"
                >
                  Ketentuan Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-background/15 pt-6 text-micro uppercase tracking-label text-background/50 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE.name}. Hak Cipta Dilindungi.
          </p>
          <p>Dibuat dengan teliti di Indonesia.</p>
        </div>
      </Container>
    </footer>
  );
}

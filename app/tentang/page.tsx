import Link from "next/link";
import { SITE, SITE_STATS } from "@/app/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";

export const metadata = {
  title: `Tentang - ${SITE.name}`,
  description: `Kenali misi, prinsip, dan cara belajar di ${SITE.name}.`,
};

const PRINCIPLES = [
  {
    title: "Praktik dulu, teori menyusul",
    body: "Setiap modul ditutup dengan latihan atau studi kasus nyata. Kamu keluar dengan karya, bukan sekadar catatan.",
  },
  {
    title: "Kurikulum ringkas & terarah",
    body: "Materi disusun bertahap tanpa basa-basi, fokus pada keterampilan yang benar-benar dipakai industri.",
  },
  {
    title: "Belajar dengan ritme sendiri",
    body: "Akses seumur hidup dan bisa diulang kapan saja—cocok untuk mahasiswa, pekerja, maupun yang sedang beralih karier.",
  },
];

const LEVELS = [
  {
    name: "Pemula",
    body: "Mulai dari fondasi, tanpa asumsi latar belakang teknis.",
  },
  {
    name: "Menengah",
    body: "Perdalam praktik, pola kerja, dan studi kasus yang lebih kompleks.",
  },
  {
    name: "Mahir",
    body: "Tuntaskan proyek nyata dan siapkan portofolio untuk industri.",
  },
];

export default function TentangPage() {
  return (
    <>
      <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
        <PageHeader
          eyebrow="05 — Tentang"
          title="Belajar dengan arah, bukan sekadar konten."
          description="Kami merancang pengalaman belajar yang tenang, terarah, dan relevan dengan dunia kerja."
        />

        {/* Pernyataan besar + penjelasan */}
        <section className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-balance font-display text-3xl leading-display tracking-display text-foreground sm:text-4xl lg:text-5xl">
              Kami percaya pendidikan terbaik terasa{" "}
              <span className="italic text-primary">manusiawi.</span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
            <p>
              {SITE.name} adalah ruang belajar untuk siapa pun yang ingin
              tumbuh dengan arah—bukan sekadar menumpuk konten.
            </p>
            <p>
              Kami bekerja bersama instruktur praktisi untuk merangkum
              pengalaman lapangan menjadi kurikulum yang ringkas, jujur, dan
              bisa langsung dipakai.
            </p>
            <Link
              href="/kursus"
              className="group inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              Lihat kurikulum kami
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Statistik */}
        <section className="mt-12 border-y border-border py-8 sm:mt-16 sm:py-10">
          <div className="grid grid-cols-2 gap-y-8 divide-border sm:gap-y-10 md:grid-cols-4 md:divide-x">
            {SITE_STATS.map((item) => (
              <Stat
                key={item.label}
                value={item.value}
                label={item.label}
                className="md:px-8 md:first:pl-0 md:last:pr-0"
              />
            ))}
          </div>
        </section>

        {/* Prinsip */}
        <section className="py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="01 — Prinsip"
            title="Cara kami mengajar"
            description="Tiga prinsip sederhana yang membentuk setiap kursus."
          />

          <div className="divide-y divide-border border-y border-border">
            {PRINCIPLES.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6 sm:py-8"
              >
                <span className="font-display text-lg text-primary sm:col-span-1 sm:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-balance font-display text-xl leading-snug tracking-tight text-foreground sm:col-span-4 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Jenjang */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <SectionHeading
            eyebrow="02 — Jenjang"
            title="Dari nol sampai mahir"
            description="Pilih titik mulai yang paling sesuai dengan tujuanmu."
          />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {LEVELS.map((level, index) => (
              <div key={level.name} className="bg-background p-6 sm:p-8">
                <p className="text-micro font-semibold uppercase tracking-label text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-foreground">
                  {level.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {level.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* CTA — blok tinta gelap */}
      <section className="bg-foreground text-background">
        <Container className="py-14 sm:py-20 lg:py-28">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="mb-4">03 — Mulai</Eyebrow>
              <h2 className="text-balance font-display text-4xl leading-display-tight tracking-display sm:text-5xl lg:text-7xl">
                Siap belajar
                <br />
                <span className="italic text-primary">dengan arah?</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-background/60">
                Jelajahi katalog kami, temukan kelas yang paling relevan, dan
                mulai dari titik yang paling nyaman untukmu.
              </p>
              <Button
                asChild
                size="lg"
                variant="inverse"
                className="mt-6 sm:mt-8"
              >
                <Link href="/kursus">Jelajahi katalog</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

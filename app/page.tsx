import Link from "next/link";
import Image from "next/image";
import { COURSES } from "@/app/data/courses";
import { SITE, SITE_STATS } from "@/app/data/site";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";

export const metadata = {
  title: `Beranda - ${SITE.name}`,
  description: SITE.description,
};

const TICKER = [
  "Kelas Baru Setiap Pekan",
  "Instruktur Praktisi",
  "Sertifikat Resmi",
  "Akses Seumur Hidup",
];

export default function Home() {
  return (
    <>
      {/* Hero — grid asimetris ala majalah */}
      <section className="relative overflow-hidden">
        <Container className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow tone="muted" rule>
                Edisi 2026 — Vol. 01
              </Eyebrow>

              <h1 className="mt-5 text-balance font-display text-display-1 tracking-display text-foreground sm:mt-6 sm:text-display-2 lg:text-display-3">
                Belajar tanpa batas, tumbuh dengan{" "}
                <span className="italic text-primary">arah.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                Pelajari keterampilan yang benar-benar dipakai industri, kapan
                saja dan di mana saja. Dipandu instruktur praktisi dari seluruh
                Indonesia.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/register">Mulai belajar</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/kursus">Jelajahi katalog</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-2 translate-y-2 border border-primary sm:translate-x-3 sm:translate-y-3"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden bg-accent sm:aspect-[4/5]">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
                      alt="Suasana belajar di kelas online"
                      width={900}
                      height={1125}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute bottom-4 left-4 bg-primary px-4 py-3 text-primary-foreground sm:bottom-5 sm:left-5 sm:px-5 sm:py-4">
                      <p className="font-display text-2xl leading-none sm:text-3xl">
                        {SITE_STATS[0].value}
                      </p>
                      <p className="mt-1 text-micro font-semibold uppercase tracking-label">
                        Pelajar aktif
                      </p>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-micro font-semibold uppercase tracking-label text-muted-foreground">
                  <span>Foto — Studio Kelas</span>
                  <span className="text-primary">★ 4.9</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee ticker */}
      <div className="overflow-hidden border-y border-border bg-foreground py-3 text-background sm:py-4">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {TICKER.map((item) => (
                <span
                  key={`${item}-${copy}`}
                  className="flex items-center gap-4 px-4 font-display text-base italic tracking-tight sm:gap-6 sm:px-6 sm:text-lg"
                >
                  {item}
                  <span className="text-primary not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Statistik */}
      <section>
        <Container>
          <div className="grid grid-cols-2 gap-y-8 divide-border py-10 md:grid-cols-4 md:divide-x sm:gap-y-10 sm:py-14">
            {SITE_STATS.map((item) => (
              <Stat
                key={item.label}
                value={item.value}
                label={item.label}
                className="md:px-8 md:first:pl-0 md:last:pr-0"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Katalog pilihan */}
      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="01 — Katalog"
            title="Kursus pilihan"
            description="Kurikulum ringkas, studi kasus nyata, dan portofolio yang siap dipakai."
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:gap-y-14 md:grid-cols-2">
            {COURSES.map((course, index) => (
              <div
                key={course.id}
                className={index % 2 === 1 ? "md:mt-16" : undefined}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-6 sm:mt-16 sm:pt-8">
            <Link
              href="/kursus"
              className="group inline-flex items-center gap-3 font-display text-xl tracking-tight text-foreground transition-colors hover:text-primary sm:text-2xl"
            >
              Lihat semua kursus
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA — blok tinta gelap */}
      <section className="bg-foreground text-background">
        <Container className="py-14 sm:py-20 lg:py-28">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="mb-4">03 — Mulai</Eyebrow>
              <h2 className="text-balance font-display text-4xl leading-display-tight tracking-display sm:text-5xl lg:text-7xl">
                Siap memulai
                <br />
                <span className="italic text-primary">perjalananmu?</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-background/60">
                Bergabunglah dengan ribuan mahasiswa yang telah meningkatkan
                keterampilan mereka. Tanpa komitmen jangka panjang — belajar
                dengan ritme sendiri.
              </p>
              <Button asChild size="lg" variant="inverse" className="mt-6 sm:mt-8">
                <Link href="/register">Daftar sekarang</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

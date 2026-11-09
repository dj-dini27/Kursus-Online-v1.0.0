import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/app/data/courses";
import { SITE } from "@/app/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Hanya id yang ada di COURSES yang dirender; id lain otomatis 404. */
export const dynamicParams = false;

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return COURSES.map((course) => ({ id: course.id }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = COURSES.find((item) => item.id === id);

  if (!course) {
    return { title: `Kursus tidak ditemukan - ${SITE.name}` };
  }

  return {
    title: `${course.title} - ${SITE.name}`,
    description: course.desc,
    openGraph: {
      title: course.title,
      description: course.desc,
      type: "article",
      images: [{ url: course.image, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.desc,
      images: [course.image],
    },
  };
}

const BENEFITS = [
  "Akses seumur hidup",
  "Sertifikat penyelesaian",
  "Studi kasus & proyek nyata",
  "Diskusi bersama instruktur",
];

export default async function KursusDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = COURSES.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  const specs = [
    { term: "Tingkat", value: course.level },
    { term: "Durasi", value: course.duration },
    { term: "Kategori", value: course.category },
    { term: "Rating", value: `${course.rating} / 5` },
  ];

  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
      <Link
        href="/kursus"
        className="mb-8 inline-flex items-center text-meta font-semibold uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground sm:mb-10"
      >
        ← Kembali ke katalog
      </Link>

      {/* Header kursus — full width agar judul tidak terkurung kolom */}
      <div className="max-w-4xl">
        <Eyebrow>
          {course.category} — {course.level}
        </Eyebrow>
        <h1 className="mt-4 text-balance font-display text-3xl leading-display tracking-display text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
          {course.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-3 text-micro font-semibold uppercase tracking-button text-muted-foreground sm:gap-x-6 sm:py-4 sm:text-meta">
          <span className="text-primary">
            {"★".repeat(Math.floor(course.rating))}
            <span className="text-muted-foreground/40">
              {"★".repeat(5 - Math.floor(course.rating))}
            </span>
          </span>
          <span>{course.rating} rating</span>
          <span>{course.students} mahasiswa</span>
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-12 lg:gap-16">
        {/* Panel pembelian tampil lebih dulu di mobile (order-1) */}
        <aside className="order-1 lg:order-2 lg:col-span-5">
          <div className="border border-border bg-background p-6 sm:p-8 lg:sticky lg:top-28">
            <Eyebrow>Investasi</Eyebrow>
            <p className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              {course.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Sekali bayar, akses selamanya.
            </p>

            <Button asChild fullWidth size="lg" className="mt-6 sm:mt-8">
              <Link href="/register">Beli sekarang</Link>
            </Button>

            <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-8">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden bg-accent">
            <Image
              src={course.image}
              alt={course.title}
              width={1000}
              height={667}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="mt-8 border-t border-border pt-6 sm:mt-10 sm:pt-8">
            <h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
              Tentang kursus ini
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              {course.desc} Materi disusun bertahap dengan latihan terarah,
              sehingga kamu bisa langsung mempraktikkan apa yang dipelajari.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:mt-10 sm:grid-cols-4">
            {specs.map((item) => (
              <div key={item.term} className="bg-background p-4 sm:p-5">
                <dt className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
                  {item.term}
                </dt>
                <dd className="mt-2 font-display text-base text-foreground sm:text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  );
}

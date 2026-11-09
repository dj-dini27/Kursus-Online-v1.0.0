import Link from "next/link";
import { SITE } from "@/app/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: `Dashboard - ${SITE.name}`,
};

const STATS = [
  { label: "Kursus Diikuti", value: "3" },
  { label: "Sertifikat", value: "2" },
  { label: "Jam Belajar", value: "45" },
  { label: "Progres", value: "72%" },
];

const RECENT_COURSES = [
  { title: "Web Development Modern", progress: 60 },
  { title: "UI/UX Design", progress: 90 },
  { title: "Digital Marketing", progress: 30 },
];

export default function DashboardPage() {
  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
      <PageHeader
        eyebrow="04 — Ruang Belajar"
        title="Dashboard"
        description="Selamat datang kembali! Ini adalah ringkasan aktivitas belajarmu."
        action={
          <Button asChild>
            <Link href="/kursus">Jelajahi kursus</Link>
          </Button>
        }
      />

      {/* Statistik — angka serif dengan garis atas */}
      <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mb-16 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-t border-border pt-5">
            <p className="text-meta font-semibold uppercase tracking-label text-muted-foreground">
              {stat.label}
            </p>
            <p className="mt-2 font-display text-4xl leading-none tracking-tight text-foreground sm:mt-3 sm:text-5xl lg:text-6xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Kursus terkini — daftar bernomor */}
      <div>
        <div className="mb-6 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
            Kursus terkini
          </h2>
          <p className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
            Lanjutkan
          </p>
        </div>

        <div className="divide-y divide-border">
          {RECENT_COURSES.map((course, index) => (
            <div
              key={course.title}
              className="grid grid-cols-1 items-center gap-4 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6"
            >
              <div className="flex items-center gap-4 sm:col-span-6 sm:gap-5">
                <span className="font-display text-lg text-primary sm:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-balance font-display text-lg leading-snug tracking-tight text-foreground sm:text-xl">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-micro font-semibold uppercase tracking-button text-muted-foreground">
                    Kursus online · {index + 1} modul selesai
                  </p>
                </div>
              </div>

              <div className="sm:col-span-5">
                <div className="mb-2 flex items-center justify-between text-micro font-semibold uppercase tracking-button text-muted-foreground">
                  <span>Progres</span>
                  <span className="text-primary">{course.progress}%</span>
                </div>
                <div className="h-px w-full bg-border">
                  <div
                    className="h-px bg-primary"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1 sm:text-right">
                <Link
                  href="/kursus"
                  className="text-micro font-semibold uppercase tracking-button text-foreground transition-colors hover:text-primary"
                >
                  Buka →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

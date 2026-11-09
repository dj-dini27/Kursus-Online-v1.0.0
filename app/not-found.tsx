import Link from "next/link";
import { SITE } from "@/app/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata = {
  title: `Halaman Tidak Ditemukan - ${SITE.name}`,
  description: `Halaman yang kamu cari tidak ada di ${SITE.name}.`,
};

export default function NotFound() {
  return (
    <Container className="pt-8 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
      <Eyebrow className="justify-center">404 — Tidak ditemukan</Eyebrow>
      <h1 className="text-balance font-display text-4xl leading-display tracking-display text-foreground mt-4 sm:text-5xl lg:text-6xl">
        Halaman yang kamu cari tidak ada.
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
        Mungkin tautannya salah, atau halaman sudah dipindahkan. Kembali ke
        beranda atau jelajahi katalog kursus kami.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Kembali ke beranda</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/kursus">Jelajahi kursus</Link>
        </Button>
      </div>
    </Container>
  );
}

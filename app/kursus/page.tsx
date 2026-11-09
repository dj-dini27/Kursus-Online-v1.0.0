import { SITE } from "@/app/data/site";
import KursusPageClient from "./_client";

export const metadata = {
  title: `Semua Kursus - ${SITE.name}`,
  description: "Jelajahi semua kursus online di platform Kursus Online",
};

export default function KursusPage() {
  return <KursusPageClient />;
}

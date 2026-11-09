import { LEGAL_UPDATED, SITE } from "@/app/data/site";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata = {
  title: `Privasi - ${SITE.name}`,
  description: `Kebijakan privasi dan cara kami mengelola data pengguna di ${SITE.name}.`,
};

export default function PrivasiPage() {
  return (
    <LegalPage
      eyebrow="Privasi"
      title="Kebijakan Privasi"
      description="Bagaimana kami mengumpulkan, menggunakan, dan melindungi data yang Anda berikan kepada kami."
      updated={LEGAL_UPDATED}
      sections={[
        {
          title: "Informasi yang kami kumpulkan",
          paragraphs: [
            `Saat kamu mendaftar dan belajar di ${SITE.name}, kami mengumpulkan informasi dasar seperti nama, alamat email, dan aktivitas belajar.`,
            "Kami juga menerima pesan yang kamu kirim melalui halaman kontak, tetapi data tersebut tidak digunakan untuk pembelajaran.",
          ],
        },
        {
          title: "Cara kami menggunakan informasi",
          paragraphs: [
            "Informasi digunakan untuk menyediakan layanan belajar, mengirim pemberitahuan penting, dan menjawab pertanyaanmu.",
            "Kami tidak menjual data pribadi pengguna kepada pihak ketiga.",
          ],
        },
        {
          title: "Cookies",
          paragraphs: [
            "Kami menggunakan cookie sederhana untuk menjaga sesi dan preferensi tampilan. Cookie dapat dikelola melalui pengaturan browser.",
          ],
        },
        {
          title: "Berbagi informasi",
          paragraphs: [
            "Kami hanya membagikan data kepada penyedia layanan teknis (misalnya penyimpanan dan pengiriman email) yang mematuhi peraturan perlindungan data.",
          ],
        },
        {
          title: "Keamanan data",
          paragraphs: [
            "Data disimpan dengan akses terbatas dan dilindungi melalui teknologi transport dan penyimpanan yang wajar digunakan pada situs web.",
          ],
        },
        {
          title: "Hak kamu",
          paragraphs: [
            "Kamu dapat meminta akses, koreksi, atau penghapusan data yang terkait dengan akunmu dengan menghubungi kami.",
          ],
        },
        {
          title: "Menghubungi kami",
          paragraphs: [
            `Jika kamu memiliki pertanyaan tentang kebijakan ini, kirim pesan ke ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}

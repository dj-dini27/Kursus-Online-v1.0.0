import { LEGAL_UPDATED, SITE } from "@/app/data/site";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata = {
  title: `Ketentuan Layanan - ${SITE.name}`,
  description: `Syarat dan ketentuan penggunaan platform belajar di ${SITE.name}.`,
};

export default function KetentuanPage() {
  return (
    <LegalPage
      eyebrow="Hukum"
      title="Ketentuan Layanan"
      description="Syarat yang mengatur penggunaan platform belajar di kursus online kami."
      updated={LEGAL_UPDATED}
      sections={[
        {
          title: "Penerimaan ketentuan",
          paragraphs: [
            `Dengan menggunakan ${SITE.name}, kamu menyatakan bahwa kamu telah membaca dan memahami Ketentuan Layanan kami.`,
          ],
        },
        {
          title: "Akun pengguna",
          paragraphs: [
            "Kamu bertanggung jawab atas keamanan akun dan semua aktivitas yang terjadi di akun kamu.",
          ],
        },
        {
          title: "Pembelian & akses",
          paragraphs: [
            "Selesaikan pembayaran untuk mendapatkan akses ke kursus yang dipilih. Akses belajar diberikan setelah pembayaran diterima.",
          ],
        },
        {
          title: "Hak kekayaan intelektual",
          paragraphs: [
            `Kurikulum, materi, dan konten di ${SITE.name} dimiliki oleh kami atau mitra pemilik hak, dan tidak boleh dikopi tanpa izin.`,
          ],
        },
        {
          title: "Penggunaan yang dilarang",
          items: [
            "Mencoba mengakses materi kursus orang lain secara tidak resmi.",
            "Memanipulasi progres, rating, atau data kegiatan belajar.",
            "Menggunakan platform untuk aktivitas yang melanggar hukum.",
          ],
        },
        {
          title: "Penafian & batasan tanggung jawab",
          paragraphs: [
            "Kami menyediakan konten edukasi mengikuti standar industri, namun tidak menjamin kesuksesan pembelajaran di luar kebijakan kami.",
          ],
        },
        {
          title: "Perubahan ketentuan",
          paragraphs: [
            "Kami dapat memperbarui ketentuan ini kapan saja. Perubahan akan dibagikan melalui halaman ini atau saluran resmi.",
          ],
        },
        {
          title: "Menghubungi kami",
          paragraphs: [
            `Untuk pertanyaan atau persetujuan, hubungi kami melalui ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}

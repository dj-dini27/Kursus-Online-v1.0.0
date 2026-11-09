export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Kursus Online",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Platform pembelajaran online terbaik untuk semua usia dan latar belakang.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kursusonline.id",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+62 812-3456-7890",
} as const;

/** Detail kontak & alamat yang dipakai di halaman Kontak dan footer. */
export const CONTACT = {
  address: "Jl. Cendana Raya No. 12",
  city: "Jakarta Selatan 12120",
  hours: "Senin–Jumat, 09.00–17.00 WIB",
  responseTime: "1×24 jam kerja",
} as const;

/** Tanggal pembaruan dokumen legal. Perbarui saat isi diubah. */
export const LEGAL_UPDATED = "9 November 2026";

/** Angka pemasaran utama — satu sumber untuk landing & halaman Tentang. */
export const SITE_STATS = [
  { value: "10K+", label: "Mahasiswa Aktif" },
  { value: "200+", label: "Kursus Tersedia" },
  { value: "50+", label: "Instruktur Ahli" },
  { value: "4.9/5", label: "Rating Pengguna" },
] as const;

export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Kursus", href: "/kursus" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
] as const;

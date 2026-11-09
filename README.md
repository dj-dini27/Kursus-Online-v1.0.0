# Kursus Online — Editorial Premium Template

Template platform kursus online dengan identitas visual **Editorial Premium**: palet kertas krem, tinta gelap, aksen vermilion, tipografi serif Fraunces, layout asimetris ala majalah, dan garis tipis sebagai pemisah.

Dibangun dengan **Next.js 16**, **React 19**, **Tailwind CSS 4**, dan **TypeScript**. Cocok dijual sebagai template website pembelajaran online yang punya karakter kuat.

## Fitur

- ✅ Landing page editorial (hero asimetris, marquee ticker, statistik, katalog, CTA)
- ✅ Halaman Login dengan opsi masuk lewat Google (ikon resmi)
- ✅ Halaman Register dengan validasi form & success state
- ✅ Halaman Lupa Kata Sandi (Forgot Password)
- ✅ Katalog kursus dengan filter kategori
- ✅ Halaman detail kursus dengan panel pembelian
- ✅ Dashboard pengguna (preview progres belajar)
- ✅ Halaman Tentang (misi, prinsip, jenjang belajar)
- ✅ Halaman Kontak (detail kontak + formulir dengan success state)
- ✅ API endpoint untuk kontak (`app/api/kontak/route.ts`)
- ✅ Halaman Privasi & Ketentuan Layanan
- ✅ Halaman 404 kustom
- ✅ SEO: metadata + Open Graph/Twitter image + sitemap + robots
- ✅ SEO metadata + `generateStaticParams` + `generateMetadata` di detail kursus
- ✅ Design system terpusat (token warna, radius, font display)
- ✅ Komponen reusable (`Container`, `PageHeader`, `SectionHeading`, `AuthCard`, `SuccessState`, `Stat`, `Button`, `Input`, `Textarea`, `CourseCard`)
- ✅ Data & konfigurasi terpisah (tidak hardcode)
- ✅ Environment variables (`.env.example`)
- ✅ SEO metadata di setiap halaman
- ✅ Responsive (mobile-friendly)
- ✅ TypeScript type safety

## Halaman & Route

| Route | Halaman |
| ----- | ------- |
| `/` | Landing |
| `/kursus`, `/kursus/[id]` | Katalog & detail kursus |
| `/tentang` | Tentang |
| `/kontak` | Kontak |
| `/privasi` | Kebijakan Privasi |
| `/ketentuan` | Ketentuan Layanan |
| `/dashboard` | Dashboard |
| `/login`, `/register`, `/forgot-password` | Auth |
| `/api/kontak` | API form kontak |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/twitter-image` | SEO |
| `*` | 404 kustom |

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Geist](https://fonts.google.com/specimen/Geist) via `next/font/google`

## Struktur Project

```
project/
├── app/
│   ├── data/
│   │   ├── courses.ts      # Data kursus (sumber kebenaran tunggal)
│   │   └── site.ts         # Konfigurasi situs & nav links
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard pengguna
│   ├── tentang/
│   │   └── page.tsx        # Tentang: misi, prinsip, jenjang
│   ├── kontak/
│   │   ├── page.tsx        # Metadata + detail kontak
│   │   └── _form.tsx       # Form kontak (client component)
│   ├── forgot-password/
│   │   ├── page.tsx        # Metadata halaman
│   │   └── _form.tsx       # Form (client component)
│   ├── kursus/
│   │   ├── page.tsx        # Katalog kursus
│   │   ├── _client.tsx     # Filter kategori (client component)
│   │   └── [id]/
│   │       └── page.tsx    # Detail kursus
│   ├── login/
│   │   ├── page.tsx
│   │   └── _form.tsx
│   ├── register/
│   │   ├── page.tsx
│   │   └── _form.tsx
│   ├── layout.tsx          # Root layout + Navbar & Footer global
│   ├── page.tsx            # Landing page utama
│   ├── not-found.tsx       # 404 kustom
│   ├── api/
│   │   └── kontak/
│   │       └── route.ts    # POST — endpoint demo form kontak
│   ├── opengraph-image.tsx # OG image (generate via next/og)
│   ├── twitter-image.tsx  # Twitter card image (generate via next/og)
│   ├── sitemap.ts          # Sitemap XML
│   ├── robots.ts           # robots.txt
│   ├── privasi/
│   │   └── page.tsx        # Kebijakan Privasi
│   ├── ketentuan/
│   │   └── page.tsx        # Ketentuan Layanan
│   └── globals.css         # Token desain, grain, animasi marquee
├── components/
│   ├── ui/
│   │   ├── button.tsx          # Button + buttonVariants (mendukung asChild)
│   │   ├── input.tsx           # Input garis bawah dengan label & error
│   │   ├── textarea.tsx        # Textarea dengan gaya yang sama seperti Input
│   │   ├── container.tsx       # Batas lebar & padding konsisten
│   │   ├── eyebrow.tsx         # Label kapital khas editorial
│   │   ├── page-header.tsx     # Header halaman (eyebrow + judul serif)
│   │   ├── section-heading.tsx # Judul section editorial
│   │   ├── auth-card.tsx       # AuthPage + AuthCard
│   │   ├── success-state.tsx   # Tampilan sukses
│   │   ├── legal-page.tsx      # Layout halaman legal
│   │   └── stat.tsx            # Item statistik
│   ├── navbar.tsx          # Navigasi atas
│   ├── footer.tsx          # Footer situs
│   └── course-card.tsx     # Kartu kursus reusable
├── .env.example            # Contoh variabel environment
├── DESIGN.md               # Aturan ukuran, jarak, warna & komponen
├── LICENSE                 # Lisensi Commercial — untuk dijual sebagai produk template
├── next.config.ts          # Konfigurasi Next.js (image + Turbopack CSS loader)
├── RELEASE_NOTES.md        # Catatan rilis & daftar file akhir
├── package.json
├── scripts/
│   └── check-design.mjs    # Pemeriksa otomatis aturan desain
├── tsconfig.json
└── README.md               # Dokumentasi ini
```

## Instalasi

```bash
# Clone atau ekstrak template
cd project

# Install dependencies
npm install

# Salin file environment
cp .env.example .env.local

# Edit .env.local sesuai kebutuhan
nano .env.local

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

## Build untuk Produksi

```bash
npm run build
npm start
```

## Kustomisasi

> Aturan ukuran, jarak, warna, dan pemakaian komponen ada di **[DESIGN.md](DESIGN.md)**. Baca dokumen itu sebelum menambah halaman/komponen baru.

### Mengubah nama situs & kontak

Edit `.env.local`:

```
NEXT_PUBLIC_SITE_NAME="Nama Situs Anda"
NEXT_PUBLIC_SITE_URL=https://domainanda.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@domainanda.com
NEXT_PUBLIC_CONTACT_PHONE="+62 812-3456-7890"
```

Alamat kantor, jam kerja, dan waktu respons diatur di `app/data/site.ts` pada objek `CONTACT`.

### Menambah atau mengubah kursus

Edit `app/data/courses.ts` — data ini dipakai di landing, katalog, dan detail, jadi cukup ubah satu tempat.

### Mengubah tema warna

Semua warna dan ukuran teks diatur sebagai token di `app/globals.css`:

```css
:root {
  --background: #f4efe4; /* paper */
  --foreground: #141210; /* ink */
  --primary: #d94f2b;    /* vermilion */
  --border: #d3c8b4;
  --radius: 0.25rem;
}
```

Skala tipografi, tracking, dan line-height juga tersedia sebagai token (`text-display-1`, `text-eyebrow`, `text-meta`, `tracking-label`, dst.) — lihat `DESIGN.md`.

### Menghubungkan formulir kontak

Formulir di `app/kontak/_form.tsx` mengirim POST ke `app/api/kontak/route.ts`. Validasi dulu dilakukan di server; setelah itu, jika `RESEND_API_KEY` diisi, email dikirim via Resend ke `NEXT_PUBLIC_CONTACT_EMAIL`.

### Mengubah font

Font display (judul) menggunakan Fraunces dan body menggunakan Geist, dimuat di `app/layout.tsx` melalui `next/font/google`. Ganti import font lalu sesuaikan variabel `--font-display` / `--font-sans` di `app/globals.css`.

### Catatan penting

`next.config.ts` memuat rule Turbopack untuk memproses CSS Tailwind:

```ts
turbopack: {
  rules: {
    "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
  },
},
```

Jangan hapus rule ini — tanpa loader tersebut, `@theme` dan utility token kustom bisa gagal dikompilasi.

## Lisensi

Commercial License — untuk dijual sebagai produk template. Lihat isi file `LICENSE`.

## Dukungan

Jika ada pertanyaan tentang template ini, silakan hubungi melalui email yang tercantum di `.env.local`.
